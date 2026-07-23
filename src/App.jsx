import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Card from "./components/Card";

import { useState } from "react";

function App() {
  // in react make everytag as closing

  // define state
  const [count , setCount] = useState(0)
  // count : variable that we want change
  //  setCount : setter method for count by which we change count
  // useState(0) : initial value of count or state

  // return component or ui only

  // event showmessage
  // const showMessage = (data) =>{
  //   alert("Event Triggered!!! : "+data)
  // }

  const [name, setName] = useState("")
  const [dept, setDept] = useState("")

  // create a count using event handler and state by which 
  // count live length of name dept
  return (
    <>
      <Navbar />
      <Hero />

      <h1>{name}</h1>
      <h3>{name.length}</h3>
      <h1>{dept}</h1>
      <h2>{dept.length}</h2>


      <p>Name : </p>
      <textarea type="text" name="name" onChange={(e) => setName(e.target.value)}/>
      <p>Dept : </p>
      <textarea type="text" name="name" onChange={(e) => setDept(e.target.value)}/>

      {/* <button onClick={() => showMessage("First Event")}>Show Message</button> */}

      {/* <h1>{count}</h1>

      <button onClick={ () => setCount(count + 1) }>Increment</button>
      <br/>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br/>
      <button onClick={() => setCount(0)}>Reset</button> */}

      {/* create a state for name 
         inital state will be abc

         and by button change name to charlie
      */}

      {/* decrement by 1 and reset to 0 */}


      {/* Event handling in react
       by event we change data or ui or any movement

       onClick 
       onMouseClick
       onKeyDown

      */}


      {/* <Card
        name="Raj"
        rollno={21}
        dept="CSE"
        cgpa={6.7}
        email="raj@gmail.com"
        skills={["DBMS", "OS"]}
      />

      <Card
        name="Aman"
        rollno={22}
        dept="CSE"
        cgpa={7.7}
        email="aman@gmail.com"
      />

      <Card
        name="rajiv"
        rollno={23}
        dept="CSE"
        cgpa={8.7}
        email="rajiv@gmail.com"
      /> */}

      {/* State in react

        when we want to store data in react we use state
        or any data chances will be done by state in react

        state is a variable which is used to store data

        hooks : 

        useState()

        #define state
        const [name , setName] = useState("abc")

        useState("abc") is initial state

        const [count, setCount] = useState(0)
      */}
      <Footer />
    </>
  );
}

// Footer.jsx

export default App;
