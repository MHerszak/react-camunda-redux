import React from "react";
import { Link } from "react-router-dom";
import { navigationDefails, APP_TITLE, styleNavigation } from "./../helper";
import { Header } from 'semantic-ui-react';

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
  <Header style={styleNavigation}>
    <h3>{APP_TITLE}</h3>
    <ul style={styleList}>
      {navigationDefails.map(route => (
        <Link key={route.to} to={route.to} style={styleItem}>
          <li>{route.label.toLocaleUpperCase()}</li>
        </Link>
      ))}
    </ul>
  </Header>
);

export default Navigation;