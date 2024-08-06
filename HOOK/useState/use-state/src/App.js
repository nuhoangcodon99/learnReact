import React from "react";
import { useState } from "react" ;

function App() {

  // const [count,setCounter] = useState(0);

  // const incrementIndex = () => {

  //   setCounter(count +1)

  // }
  
  // return (
  //  <div style={{margin: 5 + '%'}}>
  //   <h2>Count : {count}</h2>
  //   <button type="button" onClick={(incrementIndex)}>Incremente</button>
  //  </div>  

  //Exercice 2: Controlled Input Field
  // 1. Every time the user types somthing in the input field, the text should update in the texte element
  // 2. You should use the useState hook to keep track of the text state
  
  // const [inputText, setInputText] = useState("")

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value)
  // }
  
  // return (
  //     <form style={{margin: 5 + "%"}}>

  //       <input type="text" value= {inputText} onChange={handleInputChange}></input>
        
  //       <label>
  //       <h2>Input text: {inputText}</h2>
  //       </label>

  //     </form>

  // Exercice 3: In this exercice, you're taked with creating a component that toggles the visibility of a piece of text when a button is clicked. E
  // 1. Initialy, the texte should be hidden
  // 2. When the button is clicked, the text should becom visible if it was hidden, and hidden if it was visible 
  // 3. Use the useState hook to manage the visibility state

  // const [isVisible, setIsVisible] = useState(false)

  // const handleToggleVisibility = () => {
  //   setIsVisible(!isVisible)
  //   console.log(isVisible)
  // }

  // return (
  //   <div style={{margin: 5 + "%"}}>
  //     <button onClick = {handleToggleVisibility}>
  //       Show/ Hide Text
  //     </button>
  //     {isVisible && <p>Toglle me</p>}
  //   </div>

  // // Exercice 4

  // const [inputText, setInputText] = useState("")

  // const handleCountCharactere = (event) => {
  //   setInputText(event.target.value)
  // }

  // return  (
  //   <div style={{margin: 5 + "%"}}>
  //     <textarea name="message" value = {inputText} onChange={handleCountCharactere}/>
  //     <p>Charactere count : {inputText.length} </p>  
  //   </div>
  // );

  // Exercice 5: TodoList

  // retrieve value of input texte and set value inputTexte

  const [inputValue,setInputValue] = useState("")

  // todos is a list 
  const [todos,setTodos] = useState([])

  // update new value of InputVAlue 
  const handleChangeValue = (event) => {
    setInputValue(event.target.value)
  }
  
  // add new value in list 
  const handleSubmit = () => {
    if(inputValue.trim()) {
      setTodos([...todos, inputValue.trim()])
    }
    setInputValue('')
  }

  const handleDeleteTodo = () => {
    
  }

  return (
    <div style={{margin: 5 + "%"}}>
      <input type="text" value={inputValue} onChange={handleChangeValue}/>
      <button type="submit" onClick = {handleSubmit} >Add Todo</button>
      <ul>
        {todos.map((todo,index) =>(
          <li key={index}>
            {todo}
            <button >x</button>  
          </li>

        ))}
      </ul>
    </div>
  )
}

export default App;
