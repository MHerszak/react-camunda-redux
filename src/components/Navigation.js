import React from "react";
import { Link } from "react-router-dom";
import { navigationDefails, APP_TITLE, styleNavigation } from "./../helper";

const styleList = {
  display: "flex",
  listStyle: "none",
  textDecoration: "none"
};

const styleItem = {
  textDecoration: "none",
  marginRight: 6
};

// export a navigation component (use react-router-dom)
const Navigation = props => (
  <nav style={styleNavigation}>
    <h3>{APP_TITLE}</h3>
    <ul style={styleList}>
      {navigationDefails.map(route => (
        <Link key={route.to} to={route.to} style={styleItem}>
          <li>{route.label.toLocaleUpperCase()}</li>
        </Link>
      ))}
    </ul>
  </nav>
);

export default Navigation;