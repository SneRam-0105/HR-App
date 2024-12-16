import React, { useState } from "react";
import axios from "axios";
import Button from "../components/Buttons/button";


const Form = ({ addEmployeeToList }) => {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        department: "",
        startDate: "",
        location: "",
    });

    // Updates form state when an input changes
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submits form data
    const submitHandler = (e) => {
        e.preventDefault();

        // Send POST request to backend to add a new employee
        axios
            .post("http://localhost:3002/persons", formData)
            .then((response) => {
                // Once the data is added, update the parent list with the new employee
                addEmployeeToList(response.data);
                // Reset form fields
                setFormData({
                    name: "",
                    role: "",
                    department: "",
                    startDate: "",
                    location: "",
                });
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
            });
    };

    return (
        <form onSubmit={submitHandler} className="formBase">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={changeHandler} required
            />

            <label htmlFor="role">Role</label>
            <input type="text" name="role" value={formData.role} onChange={changeHandler} required
            />

            <label htmlFor="department">Department</label>
            <input
                type="text"
                name="department"
                value={formData.department}
                onChange={changeHandler}

            />

            <label htmlFor="startDate">Start Date</label>
            <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={changeHandler}

            />

            <label htmlFor="location">Location</label>
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={changeHandler}

            />

            <Button text="Add new" type="submit" />
        </form>
    );
};

export default Form;
