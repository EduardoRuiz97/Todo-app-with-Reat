import React from "react";
import classes from './Container.module.css';

const Container = props => {
  return <div className={`${props.classes} ${classes.container}`}>
    {props.children}
  </div>
}

export default Container;