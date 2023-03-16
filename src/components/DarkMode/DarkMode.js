import Button from "../UI/Button"; 
import darkmodeIcon from '../../images/icon-moon.svg';
import toDoContext from "../../store/toDoContext";
import classes from './DarkMode.module.css';
import { useContext, useEffect, useState } from "react";


const DarkMode = () => {
  const[animationOn, setAnimationOn] = useState();

  const taskCtx = useContext(toDoContext);

  const darkModeHandler = () => {
    taskCtx.enableDarkMode();
  }


  useEffect(()=> {
    if (taskCtx.darkMode) {
      setAnimationOn(true);
    } else {
      setAnimationOn(true);
    }

    setTimeout(()=>{setAnimationOn(null)}, 300)
  },[taskCtx.darkMode] );

  return <div className={`${classes.title} ${taskCtx.darkMode ? classes.dark : ''}`}>
    <h1>Todo</h1>
    <Button onClick={darkModeHandler}>
      <img src={darkmodeIcon} alt='moon icon or sun icon' className={animationOn && classes['img-animation'] }></img>
    </Button>
  </div>
}

export default DarkMode;