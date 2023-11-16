import React from "react";
import classNames from "classnames";
import CheckBox from "./CheckBox";
import TruncateText from "./TruncateText";
import Input from "./input";
import ImageView from "./ImageView";
import "./CheckboxDropdown.css";

class CheckboxDropDown extends React.Component {
  constructor(props) {
    super(props);
    // if defaultSelectAll prop is true then all the options will be selected by default
    if (props.defaultSelectAll) {
      this.defaultValue = this.defaultSelectAllOptions(props.options);
    }
    // if defaultSelectValues array of object containing label and values are provided then options will be selected by default
    if (props.defaultSelectedValues) {
      this.defaultValue1 = this.defaultSelectedOptions(props.options);
    }
    this.state = {
      open: false,
      options: props.defaultSelectAll
        ? this.defaultValue.options
        : props.defaultSelectedValues
        ? this.defaultValue1.options
        : this.createOptions(props.options),
      isSelectedAll: props.defaultSelectAll
        ? this.defaultValue.isSelectedAll
        : props.defaultSelectedValues
        ? this.defaultValue1.isSelectedAll
        : false,
      optionsLength: props.defaultSelectAll
        ? this.defaultValue.optionsLength
        : props.defaultSelectedValues
        ? this.defaultValue1.optionsLength
        : 0,
      title: props.defaultSelectAll
        ? this.defaultValue.title
        : props.defaultSelectedValues
        ? this.defaultValue1.title
        : [],
      searchableOptions: props.defaultSelectAll
        ? this.defaultValue.options
        : props.defaultSelectedValues
        ? this.defaultValue1.options
        : this.createOptions(props.options),
      searchQuery: "",
    };
    this.optionsList = props.defaultSelectAll
      ? this.defaultValue.optionsList
      : props.defaultSelectedValues
      ? this.defaultValue1.optionsList
      : [];
    document.addEventListener("click", this.handleClickOutside);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.options !== this.props.options){
      this.setState({
        open: false,
        options: nextProps.defaultSelectAll
          ? this.defaultValue.options
          : nextProps.defaultSelectedValues
          ? this.defaultValue1.options
          : this.createOptions(nextProps.options),
        isSelectedAll: nextProps.defaultSelectAll
          ? this.defaultValue.isSelectedAll
          : nextProps.defaultSelectedValues
          ? this.defaultValue1.isSelectedAll
          : false,
        optionsLength: nextProps.defaultSelectAll
          ? this.defaultValue.optionsLength
          : nextProps.defaultSelectedValues
          ? this.defaultValue1.optionsLength
          : 0,
        title: nextProps.defaultSelectAll
          ? this.defaultValue.title
          : nextProps.defaultSelectedValues
          ? this.defaultValue1.title
          : [],
        searchableOptions: nextProps.defaultSelectAll
          ? this.defaultValue.options
          : nextProps.defaultSelectedValues
          ? this.defaultValue1.options
          : this.createOptions(nextProps.options),
        searchQuery: "",
      });
      this.optionsList = nextProps.defaultSelectAll
        ? this.defaultValue.optionsList
        : nextProps.defaultSelectedValues
        ? this.defaultValue1.optionsList
        : [];
      document.addEventListener("click", this.handleClickOutside);
    }
  }
  createOptions = optionsData => {
    return optionsData.map(option => {
      return { ...option, isChecked: false };
    });
  };
  toggleDropdown = () => {
    this.setState({ open: !this.state.open });
  };
  closeDropdown = () => {
    this.setState({ open: false });
  };
  handleClickOutside = e => {
    if (
      (this.node && this.node.contains(e.target)) ||
      this.node1.contains(e.target)
    ) {
      return;
    } else {
      this.closeDropdown();
    }
  };
  // method to select all options if defaultSelectAll is true
  defaultSelectAllOptions = options => {
    let tempOptions = [...options];
    const optionsList = [];
    tempOptions = tempOptions.map(record => {
      const modifiedRecord = { ...record };
      modifiedRecord.isChecked = true;
      optionsList.push(record.value);
      return modifiedRecord;
    });
    if (this.props.getDefaultSelectAllList) {
      this.props.onSelection(optionsList);
    }
    return {
      options: tempOptions,
      title: optionsList.length > 0 ? ["All"] : [],
      optionsList,
      isSelectedAll: true,
      optionsLength: optionsList.length,
      searchableOptions: tempOptions,
    };
  };
  // method to select all options if defaultSelectAll is true need values in label and value format
  defaultSelectedOptions = options => {
    let tempOptions = [...options];
    const optionsList = [];
    tempOptions = tempOptions.map(record => {
      let data = record;
      this.props.defaultSelectedValues.every(element => {
        if (record.value === element.value) {
          data = { ...record, isChecked: true };
          optionsList.push(record.value);
          return false;
        }
        return (data = { ...record, isChecked: false });
      });
      return data;
    });
    return {
      options: tempOptions,
      title:
        optionsList.length === tempOptions.length
          ? ["All"]
          : optionsList.length > 0
          ? optionsList
          : [],
      optionsList,
      isSelectedAll: optionsList.length === tempOptions.length,
      optionsLength: optionsList.length,
      searchableOptions: tempOptions,
    };
  };
  toggleSelectAllOptions = () => {
    this.optionsList = [];
    let tempOptions = [...this.state.options];
    if (!this.state.isSelectedAll) {
      tempOptions = tempOptions.map(record => {
        const modifiedRecord = { ...record };
        modifiedRecord.isChecked = true;
        this.optionsList.push(record.value);
        return modifiedRecord;
      });
    } else {
      tempOptions = tempOptions.map(record => {
        const modifiedRecord = { ...record };
        modifiedRecord.isChecked = false;
        return modifiedRecord;
      });
    }
    // this props, selectCompleteObj will let us know, whether we want to get current selected/unselected object with all
    // attributes, that we passed. Or we just want the array all current selected values.
    if (this.props.selectCompleteObj) {
      this.props.onSelection(tempOptions);
    } else {
      this.props.onSelection(this.optionsList);
    }
    this.setState({
      options: tempOptions,
      title: ["All"],
      isSelectedAll: !this.state.isSelectedAll,
      optionsLength: this.optionsList.length,
      searchableOptions: tempOptions,
    });
  };
  createOptionsList = selectedOption => {
    if (selectedOption.isChecked) {
      const index = this.optionsList.indexOf(selectedOption.value);
      this.optionsList.splice(index, 1);
    } else {
      this.optionsList.push(selectedOption.value);
    }
    let newRecords = this.state.searchableOptions;
    newRecords = newRecords.map(record => {
      const updatedRecord = { ...record };
      if (updatedRecord.value === selectedOption.value) {
        updatedRecord.isChecked = !selectedOption.isChecked;
      }
      return updatedRecord;
    });
    const tempRecords = this.getNewOptions(newRecords);
    if (this.props.selectCompleteObj) {
      this.props.onSelection(selectedOption);
    } else {
      this.props.onSelection(this.optionsList);
    }
    this.setState({
      options: tempRecords,
      title:
        this.optionsList.length === this.props.options.length
          ? ["All"]
          : this.optionsList,
      isSelectedAll: this.optionsList.length === this.props.options.length,
      optionsLength: this.optionsList.length,
      searchableOptions: newRecords,
    });
  };
  resetAllOptions = () => {
    this.optionsList = [];
    let tempOptions = [...this.state.searchableOptions];
    tempOptions = tempOptions.map(record => {
      const modifiedRecord = { ...record };
      modifiedRecord.isChecked = false;
      return modifiedRecord;
    });
    const tempRecords = this.getNewOptions(tempOptions);
    this.setState({
      options: tempRecords,
      title: [this.props.placeholder ? this.props.placeholder : "Select"],
      isSelectedAll: false,
      optionsLength: 0,
      searchableOptions: tempOptions,
      searchQuery: "",
    });
  };

  resetSearch = () => {
    let tempRecords = [...this.state.searchableOptions];
    tempRecords = this.getNewOptions(tempRecords);
    this.setState({
      options: tempRecords,
      title:
        this.optionsList.length === this.props.options.length
          ? ["All"]
          : this.optionsList,
      isSelectedAll: this.optionsList.length === this.props.options.length,
      searchableOptions: tempRecords,
      searchQuery: "",
    });
  };
  searchFilterQueryChange = searchQuery => {
    if (searchQuery.length === 0) {
      this.resetSearch();
    } else {
      let tempOptions = [...this.state.options];
      tempOptions = tempOptions.filter(
        option =>
          option.label &&
          option.label
            .toLowerCase()
            .includes(searchQuery && searchQuery.toLowerCase())
      );
      this.setState({
        searchQuery,
        searchableOptions: tempOptions,
      });
    }
  };

  getNewOptions = tempOptions => {
    let tempRecords = [...this.state.options];
    const searchableOptions = [...tempOptions];
    tempRecords = tempRecords.map(record => {
      let modifiedRecord = record;
      searchableOptions.map(searchableRecord => {
        if (searchableRecord.value === modifiedRecord.value) {
          modifiedRecord = searchableRecord;
        }
        return null;
      });
      return modifiedRecord;
    });
    return tempRecords;
  };

  selectAllOptions = () => {
    this.optionsList = [];
    let tempOptions = [...this.state.options];
    tempOptions = tempOptions.map(record => {
      const modifiedRecord = { ...record };
      modifiedRecord.isChecked = true;
      this.optionsList.push(record.value);
      return modifiedRecord;
    });
    this.props.onSelection(this.optionsList);
    this.setState({
      options: tempOptions,
      title: ["All"],
      isSelectedAll: true,
      optionsLength: this.optionsList.length,
      searchableOptions: tempOptions,
    });
  };
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
  render() {
    const optionElements = this.state.searchableOptions.map(
      (optionData, index) => {
        return (
          <div
            key={index}
            className="options"
            onClick={() => this.createOptionsList(optionData)}
          >
            <div className={"iconsContainer"}>
              <div>
                {this.props.showIcons ? (
                  <ImageView
                   // eslint-disable-next-line
                    style={"iconsMargin"}
                    width={"20px"}
                    height={"20px"}
                    src={null}
                  />
                ) : null}
              </div>
              <div>
                {this.props.displayLabel ? optionData.label : optionData.value}
              </div>
            </div>
            <div>
              <CheckBox
                key={index}
                isChecked={optionData.isChecked}
                onChecked={event => event.stopPropagation()}
              />
            </div>
          </div>
        );
      }
    );
    return (
      <div className={"parent"}>
        <div
          ref={node => {
            this.node1 = node;
          }}
          className={classNames(
            this.state.optionsLength === 0 ? "placeHolder" : "",
            "label",
            this.props.labelStyles
          )}
          onClick={() => (this.props.isDisabled ? null : this.toggleDropdown())}
        >
          <TruncateText
            text={
              this.state.optionsLength === 0
                ? this.props.placeholder
                  ? this.props.placeholder
                  : "Select"
                : this.state.title.join(", ")
            }
            maxLine="1"
          />
        </div>
        {this.state.open ? (
          <div
            ref={node => {
              this.node = node;
            }}
            style={{ width: `${this.props.width}%` }}
            className={"bodyContainer"}
          >
            {this.props.searchable && this.props.options.length > 1 ? (
              <Input
                id="content"
                type="text"
                inputGroupStyle={"checkboxGroupStyle"}
                inputStyle={"inputCheckBox"}
                value={this.state.searchQuery}
                autofocus={false}
                callback={e => this.searchFilterQueryChange(e)}
                placeholder={"Search here..."}
              />
            ) : null}
            {this.state.searchableOptions.length !== 0 ? (
              <div className={"optionsContainer"}>
                {this.state.options.length ===
                  this.state.searchableOptions.length && (
                  <div
                    className={"options"}
                    onClick={this.toggleSelectAllOptions}
                  >
                    All
                    <div>
                      <CheckBox
                        isChecked={this.state.isSelectedAll}
                        onChecked={event => event.stopPropagation()}
                      />
                    </div>
                  </div>
                )}
                {optionElements}
              </div>
            ) : (
              <div className={"noOption"}>No Options</div>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
export default CheckboxDropDown;
