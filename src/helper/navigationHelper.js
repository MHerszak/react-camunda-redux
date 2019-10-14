import { TaskListPage, Home, StartProcessListPage, StartProcessPage } from "./../container";

export const APP_TITLE = "React Camunda Redux";

export const navigationDefails = [
  {
    to: "/", label: "Home"
  },
  {
    to: "/startprocess/list", label: "Process Lists"
  },
  {
    to: "/startprocess/key/:process", label: "Process Lists"
  },
  {
    to: "/tasklist", label: "Tasklist"
  }
];

export const routerComponents = [
  { to: "/", exact: true, component: Home },
  { to: "/tasklist", component: TaskListPage },
  { to: "/startprocess/list", exact: true, component: StartProcessListPage },
  { to: "/startprocess/key/:process", exact: true, component: StartProcessPage },
];