import React from "react";

const toDoContext =  React.createContext({
  task: [],
  numberTaskLeft: 0,
  darkMode: false,
  addTask: () => {},
  deleteTask: () => {},
  completedTask: () => {},
  showAllTask: () => {},
  showActive: () => {},
  showCompleted: () => {},
  enableDarkMode: () => {},
})

export default toDoContext;