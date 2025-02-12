import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import styles from "./EmployeeList.module.css"
import { useEffect, useState } from "react";
import axios from "axios";
// import Form from "../../pages/Form.jsx";

const EmployeeList = () => {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/persons`)
            .then((response) => {
                setPersons(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, []);



    return (

        <div className={styles.list}>



            {/* Display employee cards */}

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                persons.map((employee) => (
                    <EmployeeCard key={employee.id} {...employee} />
                ))
            )}

        </div>
    );
};

export default EmployeeList;
