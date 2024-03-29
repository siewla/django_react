import React from "react"
import axios from "axios"

function App() {
  // const [title, setTitle] = React.useState("")
  // const [description, setDescription] = React.useState("")
  const [img, setImg] = React.useState("")
  const [todo, setTodo] = React.useState({
    title: "",
    description:""
  })

  const [todos, setTodos] = React.useState([{id:1, 
    title: "learn react", 
    description:"learning react"}])

  // console.log("title", title)
  // console.log("description", description)


  React.useEffect(()=>{
    //componentDidMount & componentDidUpdate
    async function getCat(){
      try{
        let {data} = await axios.get("https://aws.random.cat/meow")
        setImg(data.file)
      }catch(error){

      }
    }

    getCat()
  
    return ()=>{
      //unmount
    }
  //empty square bracket meant only run only
  }, [])


  function submitHandler(){
    // let todo = {title, description, id: todos[todos.length -1].id+1}
    // console.log(todo)
    // todos.push(todo)
    // setTodos(todos)
    setTodos(prevState =>[...prevState, todo])
  }

  function changeHandler(e){
    setTodo(prevState=>({...prevState, ...{[e.target.name]:e.target.value},
      id: todos[todos.length -1].id+1}))
  }

  return (
    <div>
      <img src={img}/>
      <h1>Todo List</h1>
      <div>
        {/* <input name="title" onChange={e=>setTitle(e.target.value)}/> */}
        <input name="title" onChange={changeHandler}/>      
      </div>
      <div>
        {/* <textarea name="description" onChange={e=>setDescription(e.target.value)}/> */}
        <textarea name="description" onChange={changeHandler}/>
      </div>
      <div>
        <button onClick={submitHandler}>Add Todo</button>
      </div>

      {todos.map(todo=>(
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;

