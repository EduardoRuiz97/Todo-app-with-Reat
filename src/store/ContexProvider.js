import {useReducer, useState } from "react";
import toDoContext from "./toDoContext";


const defaultState = {
  mainTaskArray: [],
  allTaskArray: [],
  taskLeft: 0,
};

const addTaskReducer = (state, action) => {

  let taskArray;
  let leftTask;

  if (action.type === 'ADD__TASK') {
    taskArray = state.mainTaskArray.concat(action.task);

    return {
      mainTaskArray: taskArray,
      allTaskArray: taskArray,
      taskLeft: taskArray.length
    };
  }

  if (action.type === 'DELETE__TASK') {
    taskArray = state.mainTaskArray.filter(task => task.id !== action.id);

    if (state.taskLeft === 0) {
      leftTask = 0;
    } else {
      leftTask = taskArray.length;
    }

    return {
      mainTaskArray: taskArray,
      allTaskArray: taskArray,
      taskLeft: leftTask,
    };
  }

  if (action.type === 'COMPLETED__TASK') {

    const modifiedArray = state.mainTaskArray.map(item => {
      if(item.id === action.id) {
        item.isCompleted = true;
      }
      return item;
    });

    return {
      mainTaskArray: modifiedArray,
      allTaskArray: modifiedArray,
      taskLeft: state.taskLeft -1,
    }
  }

  if (action.type === 'SHOW__ALL') {

    return {
      mainTaskArray: state.allTaskArray,
      allTaskArray: state.allTaskArray,
      taskLeft: state.taskLeft,
    }
  }

  if (action.type === 'ACTIVE__SHOW') {
    const activeTaskArray = state.allTaskArray.filter(task => !task.isCompleted);

    return {
      mainTaskArray: activeTaskArray,
      allTaskArray: state.allTaskArray,
      taskLeft: state.taskLeft,
    }
  }

  if (action.type === 'COMPLETED__SHOW') {
    const activeTaskArray = state.allTaskArray.filter(task => task.isCompleted);

    return {
      mainTaskArray: activeTaskArray,
      allTaskArray: state.allTaskArray,
      taskLeft: state.taskLeft,
    }
  }

  
  return defaultState;
}

const ContextProvider = props => {

  const [taskReducer, dispatchTaskReducer] = useReducer(addTaskReducer, defaultState);

  const [isDarkModeOn, setDarkModeOn] = useState(false);


  const AddTaskHandler = (taskObject) => {

    dispatchTaskReducer({type: 'ADD__TASK', task: taskObject})
  }

  const deleteTaskHandler = (id) => {
    dispatchTaskReducer({type: 'DELETE__TASK', id: id})
  }

  const completedTask = (id) => {
    dispatchTaskReducer({type: 'COMPLETED__TASK', id: id})
  }

  const showAllTask = () => {
    dispatchTaskReducer({type: 'SHOW__ALL'})
  }

  const showActiveTasks = () => {
    dispatchTaskReducer({type: 'ACTIVE__SHOW'})
  }

  const showCompletedTasks = () => {
    dispatchTaskReducer({type: 'COMPLETED__SHOW'})
  }

  const darkModeHandler = () => {
    setDarkModeOn(!isDarkModeOn);
  }



  const toDoContextArray =  ({
    task: taskReducer.mainTaskArray,
    numberTaskLeft: taskReducer.taskLeft,
    darkMode: isDarkModeOn,
    addTask: AddTaskHandler,
    deleteTask: deleteTaskHandler,
    completedTask: completedTask,
    showAllTask: showAllTask,
    showActive: showActiveTasks,
    showCompleted: showCompletedTasks,
    enableDarkMode: darkModeHandler,
  })


  return <toDoContext.Provider value={toDoContextArray}>
    {props.children}
  </toDoContext.Provider>
}

export default ContextProvider;