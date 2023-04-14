
import './App.css';
import Footer from './MyComponents/Footer';
//import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';


function App() {

  const onDelete =(todo) =>{
    console.log("I am on Delete of todo",todo)
  }

  let todos = [
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
  ]

  return (
    <>
    
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
    </>
  );
} 

export default App;
