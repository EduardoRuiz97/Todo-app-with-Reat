import React, { useContext } from "react";
import classes from './Header.module.css';
import toDoContext from "../../store/toDoContext";

const Header = () => {

  const darkCtx = useContext(toDoContext)


  return (
    <header className={`${classes.header} ${darkCtx.darkMode ? classes['header-dark'] : ''}`}>
    </header>
  )
}

export default Header