import React from "react";

const Home = props => <div>Home</div>;
const TaskList = props => <div>TaskList</div>;

export const APP_TITLE = "React Camunda Redux";

export const navigationDefails = [
  {
    to: "/", label: "Home"
  },
  {
    to: "/tasklist", label: "Tasklist"
  }
];

export const routerComponents = [
  { to: "/", exact: true, component: Home },
  { to: "/tasklist", component: TaskList }
];