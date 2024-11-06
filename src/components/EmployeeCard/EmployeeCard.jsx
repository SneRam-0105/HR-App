import { useState } from "react";


const Card = (props) => {

    const yearsWorked = new Date().getFullYear() - new Date(props.startdate).getFullYear();

    const [isTeamLead, setIsTeamLead] = useState(false);
    const clickHandler = () => {

        setIsTeamLead((prevStatus) => !prevStatus); // learnt something new from stackoverflow. 
    }


    return (
        <div className="cards" >


            <p> {props.name} </p>
            <p>{isTeamLead && <span>⭐</span>} {props.role}  </p>
            <p> {props.department}</p>
            <p> {props.startdate} </p>
            <p> {yearsWorked} </p>
            <p> {props.salary}</p>
            <p>{props.location}</p>
            <p> {props.status}</p>


            <button onClick={clickHandler}>
                {isTeamLead ? "Demote from Team Lead" : "Promote to Team Lead"}
            </button>




        </div>
    );
}

export default Card;