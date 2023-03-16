import React, { useContext } from "react";
import toDoContext from "../../store/toDoContext";
import classes from './Main.module.css';
import DarkMode from '../DarkMode/DarkMode';
import Form from '../Form/Form';
import Container from '../UI/Container';
import List from '../List/List';
import Filter from '../Filter/Filter';


const Main = () => {

  const darkModeCtx = useContext(toDoContext);


  return <main className={`${classes.main} ${darkModeCtx.darkMode ? classes['main-dark'] : ''}`}>
      <Container>
        <DarkMode></DarkMode>
        <Form></Form>
        <List></List>
        <Filter></Filter>
      </Container>
  </main>
}

export default Main;