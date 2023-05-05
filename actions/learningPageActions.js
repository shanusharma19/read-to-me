export const PROFILE = (value) => {
  return {
    type: "CHANGE_PROFILE",
    value,
  };
};
export const TOGGLE = (value) => {
  return {
    type: "CHANGE_TOGGLE",
    value,
  };
};
export const FILTER = (value) => {
  return {
    type: "CHANGE_FILTER",
    value,
  };
};
export const NOTIFY = (value) => {
  return {
    type: "CHANGE_NOTIFY",
    value,
  };
};
export const BRIGHTNESS = (value) => {
  return {
    type: "CHANGE_BRIGHTNESS",
    value,
  };
};
export const DETAILS = (value) => {
  return {
    type: "GET_DETAILS",
    value,
  };
};

