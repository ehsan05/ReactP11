import React , { useState } from 'react';


function App() {
  const [fullName,setfullName] = useState({
    fName : "",
    lName : ""
  });

  function updatChange(event){
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const {value , name } = event.target;
    setfullName(preValue=>{
      if(name === "fName"){
        return{
          fName : value,
          lName : preValue.lName
        };
      }
      else if(name === "lName"){
        return{
          lName : value,
          fName : preValue.fName
        };
      }
    });
  }
  
  return (
    <div className="container">

      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={updatChange} 
        value={fullName.fName} 

        />
        <input name="lName" placeholder="Last Name" onChange={updatChange} 
        value={fullName.lName}

        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
