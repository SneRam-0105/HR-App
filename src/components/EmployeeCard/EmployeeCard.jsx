import { useState } from 'react'

const EmployeeCard = (props) => {
    const [role, setRole] = useState(props.initRole);
    const clickHandler = () => {

        if (role === "Team Lead") {
            setRole(props.initRole);
        }
        else {
            setRole("Team Lead");
        }
    }
    return (
        <div className="cards" >

            <p>Name: {props.name}</p>
            <p>Role: {role}</p>
            <p>Department: {props.department}</p>
            <p>Salary: {props.salary}</p>
            <p>Location: {props.location}</p>
            <button onClick={clickHandler} >Promote</button>



        </div>
    );
}

export default EmployeeCard;