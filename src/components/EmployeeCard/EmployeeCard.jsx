import { useState } from "react";
import { calcYearsWorked } from "../../yearcalculation/year";
import Button from "../Buttons/button";
import { getDepartmentClass } from "../../yearcalculation/styleyears";
import Form from "../Forms/Form";



const Card = ({ startDate, department, role, salary, status, name, location }) => {

    const yearsWorked = calcYearsWorked(startDate);
    const [toggleFormEdit, setToggleFormEdit] = useState(false);

    const isProbation = yearsWorked < 0.5;
    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    const [person, setPerson] = useState({ department, location, role });
    const [isTeamLead, setIsTeamLead] = useState(false);
    const clickHandler = () => {

        setIsTeamLead((prevStatus) => !prevStatus); // learnt something new from stackoverflow. 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({ ...prevState, [name]: value }));
    };

    const renderEditableField = (value, name) =>
        isEditing ? (
            <input value={value} name={name} onChange={handleInputChange} />
        ) : (
            <p className={name}>{value}</p>
        );


    return (
        <div className={`card ${getDepartmentClass(department)}`}>
            <div className="card-header">

                <div className="card-icons">
                    {isTeamLead && (
                        <div>
                            {/* <span className="material-symbols-outlined promote">star</span> */}

                        </div>
                    )}



                    {isAnniversary &&
                        (
                            <div>
                                <span className="material-symbols-outlined celebrate">
                                    celebration
                                </span>
                                <p className="card-icon-message">
                                    Schedule recognition meeting for {yearsWorked} years of service!
                                </p>
                            </div>
                        )
                    }

                    {
                        isProbation && (
                            <div>
                                <span className="material-symbols-outlined notify">
                                    notifications
                                </span>
                                <p className="card-icon-message">
                                    Schedule probation review. This employee has worked for less
                                    than 6 months.
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="cards" >


                <p> {name} </p>
                {/* <p>{role} {isTeamLead && '⭐'}</p>
                <p> Department: {department}</p> */}
                <p> DOJ: {startDate} </p>
                {/* <p> Experience : {yearsWorked} </p> */}
                <p> Salary : {salary}</p>
                {/* <p>{location}</p> */}
                <p> {status}</p>

                <div className="card-data">
                    {renderEditableField(person.role, "role")}
                    {renderEditableField(person.department, "department")}
                    {renderEditableField(person.location, "location")}
                </div>

                <Button onClick={clickHandler} text=
                    {isTeamLead ? "Demote from Team Lead" : "Promote to Team Lead"}
                    roleColor={isTeamLead ? "primary" : "secondary"}
                />

                {/* <p className="years">
                    {yearsWorked} <span className="text">years in school </span>
                    <span className="date">({startDate})</span>
                </p> */}
                <Button onClick={() => setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "Save" : "Edit"} />

                {toggleFormEdit && (<Form role={role}
                    department={department}
                    location={location} />
                )}

            </div>
        </div >
    );
}

export default Card;