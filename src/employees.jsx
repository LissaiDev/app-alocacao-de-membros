import React from "react";
import Male from "./img/male.png"
import Female from "./img/female.png"

const Employees = ({employees,selectedTeam,handleClick,handleTeam})=>{
    

    return(
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-11">
                    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                    </select>
                </div>
                <div className="col-11 col-md-8 row">
                {
                    
                    employees.map((emp)=>(
                        <div key={emp.id} className="col-md-4">
                            <div id={emp.id} className={emp.teamName === selectedTeam  ? "card my-3 selected" : "card my-3 "} style={{cursor : "pointer"}} onClick={handleClick}>
                            <img src={emp.gender === "female" ? Female : Male} className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Full Name: {emp.fullname}
                                </h5>
                                <p className="card-text">
                                    <b>
                                        Designation:
                                    </b>
                                    {emp.designation}
                                </p>
                            </div>
                        </div>
                        </div>
                        
                    ))
                }
                </div>
            </div>
        </main>
    )
}
export default Employees;