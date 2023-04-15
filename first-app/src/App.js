
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React ,{useState} from 'react';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';




function App() {

  const onDelete =(todo) =>{
    console.log("I am on Delete of todo",todo)

    setTodos(todos.filter((e) =>{
      return e !== todo;  
    }))
  }

  const addTodo = (title,desc) =>{
    console.log("I am add todo",title,desc);
    let sno ;
      if(todos.length=== 0){
          sno = 0;
      }
      else{
         sno = todos[todos.length-1].sno +1;
      }
      

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

    const [todos, setTodos] =  useState([
    {
      sno :1,
      title : "Go to the marker",
      desc:"You need to go the market to get this job done"
    },
    {
      sno :2,
      title : "Go to the mall",
      desc:"You need to go the market to get this job done"
    },
    {
      sno :3,
      title : "Go to the ghat",
      desc:"You need to go the market to get this job done"
    }
  ])

  return (
    <>
    <Header />
    <AddTodo addTodo ={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
}

export default App;