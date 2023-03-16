import ListItem from "./ListItem/ListItem";
import toDoContext from "../../store/toDoContext";

import classes from './List.module.css';
import { useContext} from "react";

const List = () => {
  const taskCtx = useContext(toDoContext);

  
  return <section className={`${classes['list-container']} ${taskCtx.darkMode ? classes['container-dark']: ''}`}>
    <ul>
      {taskCtx.task.map(item => 
      <ListItem 
      task={item.enteredTask}
      key={item.id}
      id={item.id}
      ></ListItem>)}
    </ul>
    <div className={classes['list-container__actions']}>
      <span>{`${taskCtx.numberTaskLeft > 0 ? taskCtx.numberTaskLeft : 0 }`} items left</span>
      <span> Clear Completed</span>
    </div>
  </section>
}

export default List;