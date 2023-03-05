import * as React from 'react'
import './App.css';
import Header from './header'
import Employees from './employees'
import Footer from './footer'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Team from './team'
import Nav from './Nav';
import NotFound from './NotFound';

function App() {

  const [selectedTeam , setTeam] = useState("TeamB")

    const [employees, setEmployees] = useState([
        {
            id : 1,
            fullname : "René Armindo Lissai",
            designation : "Software Developer",
            gender : "male",
            teamName : "TeamA"
        },
        {
            id : 2,
            fullname : "Marcus Aurelio",
            designation : "Philosphy",
            gender : "male",
            teamName : "TeamA"
        },
        {
            id : 3,
            fullname : "Thor",
            designation : "Hero",
            gender : "male",
            teamName : "TeamB"
        },
        {
            id : 4,
            fullname : "Simone de Beauvoir",
            designation : "Philosophy",
            gender : "female",
            teamName : "TeamB"
        },
        {
            id : 5,
            fullname : "Carolina Armindo",
            designation : "Software Developer",
            gender : "female",
            teamName : "TeamB"
        },

    ])

    let handleTeam = (event)=>{
        setTeam(event.target.value);
    }

    function handleClick(event){
        const transformedArray = employees.map((employee)=> employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam ) ? {...employee, teamName : ''} : {...employee, teamName : selectedTeam} : employee)
        setEmployees(transformedArray)
    }

  return (
      <Router>
        <Nav />
        <Header 
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((emp)=> emp.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path='/' element={<Employees employees={employees} selectedTeam={selectedTeam} handleClick={handleClick} handleTeam={handleTeam} /> }></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
