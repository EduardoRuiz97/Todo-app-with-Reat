

import { useContext, useRef } from 'react';
import classes from './Form.module.css';
import toDoContext from '../../store/toDoContext';

const Form = () => {

  const taskCtx = useContext(toDoContext)

  const inputTask = useRef('')

  const submitHandler = event => {
    event.preventDefault();

    if (inputTask.current.value.length > 0) {
      
      taskCtx.addTask({
        id: Math.random(),
        enteredTask: inputTask.current.value,
        isCompleted: false,
      })
  
  
      inputTask.current.value = '';
    }
  }


  return (
    <form className={`${classes.form} ${taskCtx.darkMode ? classes['form-dark'] : ''}`} onSubmit={submitHandler}>

      <div className={classes['form__radio']}></div>
      <input 
      type='text' 
      className={classes['form__text']} 
      placeholder='Create a new todo...'
      ref={inputTask}
      ></input>
    </form>
  )
}

export default Form;