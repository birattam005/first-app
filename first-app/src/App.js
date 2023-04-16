
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React, { useEffect, useState } from 'react';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';




function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    console.log("I am add todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState([initTodo])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;