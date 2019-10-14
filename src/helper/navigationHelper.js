import React from "react";
import { TaskListPage, Home } from "./../container";

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
  { to: "/tasklist", component: TaskListPage }
];