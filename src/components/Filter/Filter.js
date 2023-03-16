import classes from './Filter.module.css';
import toDoContext from '../../store/toDoContext';
import { useContext } from 'react';


const Filter = () => {
  const taskCtx =  useContext(toDoContext);

  const showAllHandler = () => {
    taskCtx.showAllTask();
  }


  const activeHandler = () => {
    taskCtx.showActive();
  }

  const completedHandler = () => {
    taskCtx.showCompleted();
  }


  return <div className={`${classes.filter} ${taskCtx.darkMode ? classes['filter-dark'] : ''}`}>
    <span onClick={showAllHandler}>All</span>
    <span onClick={activeHandler}>Active</span>
    <span onClick={completedHandler}>Completed</span>
  </div>
}

export default Filter;