export const getDevice = () => {
    // const width = window.innerWidth;
    const width = document.documentElement.clientWidth;
    let device = "";
    switch (true) {
      case width === 0:
        device = "test-case-senario";
        break;
      case width < 769:
        device = "mobile";
        break;
      case width > 768 && width > 1024:
        device = "web-low-res";
        break;
      case width > 1023 && width > 1366:
        device = "web-mid-res";
        break;
      default:
        device = "web-high-res";
    }
    return device;
  };

  export const generateUniqueId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  export const isValueEmpty = value => {
    return (
      // null or undefined
      value == null ||
      // has length and it's zero
      (value.hasOwnProperty("length") && value.length === 0) ||
      // is an Object and has no keys
      (value.constructor === Object && Object.keys(value).length === 0)
    );
  };
  
export const ageGroupList = [
    {label: "Under 10", value: {minAge: 0, maxAge: 10}},
    {label: "11-18", value: {minAge: 11, maxAge: 18}},
    {label: "19-65", value: {minAge: 19, maxAge: 65}},
    {label: "Above 65", value: {minAge: 66, maxAge: 100}}
];

export const genderList = [
    {label: "Male", value: "M"},
    {label: "Female", value: "F"},
    {label: "Both", value: "MF"},
]

export const convertMasterToDropDownOptions = (array, label, value) => {
  if (array) {
    return array.map(object => {
      return {
        ...object,
        label: object[label],
        value: object[value],
      };
    });
  } else return [];
};