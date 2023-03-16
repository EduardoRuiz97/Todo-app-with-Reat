
import deleteIcon from '../../../images/icon-cross.svg';
import classes from './ListItem.module.css';
import toDoContext from '../../../store/toDoContext';
import { useContext } from 'react';

const ListItem = (props) => {

  const taskCtx = useContext(toDoContext);

  const deleteHandler = () => {
    taskCtx.deleteTask(props.id)
  }

  const checkHandler = (event) => {
    taskCtx.completedTask(props.id)
  }

  return (
    <li className={`${classes.item} ${taskCtx.darkMode ? classes['item-dark']: ''}`}>
      <label htmlfor='myradioId' className={classes.radio}>
        <input 
        type='radio' 
        id='myRadioId' 
        className={classes['radio__input']}
        value= 'checked'
        onChange={checkHandler}
        ></input>
        <div className={classes['custom-radio']}></div>
        {props.task}
      </label>

      <img src={deleteIcon} alt='delete icon' onClick={deleteHandler}></img>
    </li>
  )
}

export default ListItem;