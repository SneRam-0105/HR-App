import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import './EmployeeList.css';
import { useEffect, useState } from "react";
import axios from "axios";
// import Form from "../../pages/Form.jsx";

const EmployeeList = () => {
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3002/persons")
            .then((response) => {
                setPersons(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, []);

    // Function to add a new employee to the list
    // const addEmployeeToList = (newEmployee) => {
    //     setPersons((prev) => [...prev, newEmployee]); // Adding the new employee to the list from thr form
    // };

    return (
        <div>
            <main>
                <h2>Employee List</h2>
                {/* Form for adding new employees */}
                {/* <Form addEmployeeToList={addEmployeeToList} /> */}

                {/* Display employee cards */}

                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    persons.map((employee) => (
                        <EmployeeCard key={employee.id} {...employee} />
                    ))
                )}
            </main>
        </div>
    );
};

export default EmployeeList;
