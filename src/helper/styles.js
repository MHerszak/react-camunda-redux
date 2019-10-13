const viewWrapper = {
  paddingLeft: 12,
  paddingRight: 12,
  fontFamily: "'Open Sans', sans-serif"
};

export const styleNavigation = {
  display: "flex",
  justifyContent: "space-between",
  minHeight: "60px",
  background: "#ccc",

  ...viewWrapper,
};

export const styleViews = {
  ...viewWrapper,
};

/// Search input
export const styleSearchInputField = {
  margin: "20px 0",
  padding: "5px",
  fontSize: 23,
  width: "550px"
};

/// Search results item
export const styleListItemDescription = {
  color: "#6a6a6a",
  marginBottom: 0,
  marginTop: 0
};

export const styleListItemDescriptionHeader = {
  color: "#596825"
};
