import React, { Component } from "react";
import Button from "./Button";
import classNames from "classnames";
import styles from "./DynamicTabs.module.css";

class DynamicTabs extends Component {
  render() {
    const {
      changeTab,
      currentTab,
      tabs,
      disabled,
    } = this.props;

    return (
      <div className={styles.container}>
        <div
          className={classNames(
            styles.tabGroup,
            disabled && styles.exportDisabled
          )}
        >
            {tabs.map(tab =>{
                return <Button
                id={tab.id}
                content={tab.name}
                style={classNames(currentTab === tab.index
                    ? styles.activeTab
                    : styles.inActiveTab,
                    disabled && styles.exportDisabled
                )}
                isripplerequired={true}
                handleClick={disabled ? null : () => changeTab(tab.index)}
                />
            })}
        </div>
      </div>
    );
  }
}
export default DynamicTabs;
