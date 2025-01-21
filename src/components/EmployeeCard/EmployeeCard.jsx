import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { calcYearsWorked } from "../../yearcalculation/year";
import Button from "../Buttons/Button";
import styles from "./EmployeeCard.module.css";
import axios from "axios";

const Card = ({ startDate, department, role, name, location, id }) => {

    const yearsWorked = calcYearsWorked(startDate);
    // const [toggleFormEdit, setToggleFormEdit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const updateEmployeeDetails = () => {
        axios
            .patch(`${import.meta.env.VITE_BACKEND_URL}/persons/${id}`, person)
            .then((response) => {

            })
            .catch((error) => {
                console.error("Error updating data:", error);

            });
    }

    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    const [person, setPerson] = useState({ department, location, role });
    const navigate = useNavigate();
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
        <div className={styles.cards}>
            <div className={styles.cardHeader}>
                <h2 > {name} {isTeamLead && '⭐'}</h2>
                {isAnniversary && <p className={styles.celebration}> 🎉</p>}
            </div>

            <div className={styles.cardBody}>
                <div className={styles.cardContent}>


                    <div className={styles.cardData}>
                        {renderEditableField(person.role, "role")}
                        {renderEditableField(person.department, "department")}
                        {renderEditableField(person.location, "location")}
                    </div>



                    <div className={styles.cardImage}>
                        <img src={`https://api.multiavatar.com/${name}.svg`} alt={name} />
                    </div>


                </div>
                <div className={styles.cardButtons}>

                    <div className={styles.cardButton}>
                        <Button
                            onClick={clickHandler}
                            text={isTeamLead ? "Demote from Team Lead" : "Promote to Team Lead"}
                            roleColor={isTeamLead ? "primary" : "secondary"}
                        />
                    </div>
                    <div className={styles.cardButton}>
                        <Button
                            onClick={() => navigate(`/employee/${id}`)}
                            text={"See details"}
                            role="secondary"
                        />
                    </div>
                    <div className={styles.cardButton}>
                        <Button
                            className={styles.cardButtons}
                            onClick={() => {
                                setIsEditing((prev) => !prev);
                                updateEmployeeDetails();
                            }}

                            text={isEditing ? "Save" : "Edit"}
                            role="secondary"
                        />
                    </div>


                </div>

            </div>
        </div >
    );
}

export default Card;