import './App.css';
import './index.css'
import Employee from './component/employee.js';
import { useState } from 'react';
import Header from './component/header.js';
import AddEmployee from './component/addemployee.js';
import {v4 as uuidv4} from 'uuid';
import EditEmployee from './component/editemployee.js';

function App() {
  const [role, setrole] = useState('')
  const [employees, setemployees] = useState([
    {
      id: 1,
      name: "hamazin",
      Role: "IT specialist",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGaKOpBI_mOGQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1719643131450?e=1735776000&v=beta&t=ZSGQJON7g-T01yYVzBcwrVdW2TJks0bCZ7Mm3Lv7o58"
    },
    {
      id:2,
      name: "Caleb",
      Role: "Dev",
      img: "https://images.pexels.com/photos/1327141/pexels-photo-1327141.jpeg"
    },
    {
      id:3,
      name: "quin",
      Role: "Data Analyst",
      img: "https://images.pexels.com/photos/2379886/pexels-photo-2379886.jpeg"
    },
    {
      id:4,
      name: "Jim",
      Role: "Dev",
      img: "https://images.pexels.com/photos/3664444/pexels-photo-3664444.jpeg"
    },
  ])
  function updateemployee(id, newName, newRole){
    const updateemployee = employees.map((employee)=>{
      if (id === employee.id){
        return{...employee, name: newName, role: newRole};
      }
      return employee;
    }
  )
  }
  const handleevent = (e) => {setrole(e.target.value)};
  const showemployee = true;
  return (
    <div className="App">
      <Header/>
      {showemployee ?
      <>
      <input type="text" onChange = {handleevent} />
      <div className="flex flex-wrap justify-center">
       {employees.map((employee)=>{
        return(
          <Employee
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            img={employee.img}
            updateemployee={updateemployee}
          />
        )
       })}
      
      
      <AddEmployee/>
      </div>
      </>
      : 
      <p>Theres no employee here</p>
        }
    </div>
    
  );
}

export default App;
