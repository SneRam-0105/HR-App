import { useState } from "react";
import axios from "axios";
import Button from "../../components/Buttons/button";
import styles from "./Form.module.css"
import { useNavigate } from "react-router-dom";


const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        department: "",
        startDate: "",
        location: "",
        salary: "",
        status: "",
        email: "",
        phone: ""
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

                // Reset form fields
                setFormData({
                    name: "",
                    role: "",
                    department: "",
                    startDate: "",
                    location: "",
                    salary: "",
                    status: "",
                    email: "",
                    phone: ""
                });
            })
            .catch((error) => {
                console.error("Error adding employee:", error);
            });
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitHandler} onChange={changeHandler} className={styles.formBase}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={formData.name} required
                />

                <label htmlFor="role">Role</label>
                <input type="text" name="role" value={formData.role} required
                />

                <label htmlFor="department">Department</label>
                <input
                    type="text"
                    name="department"
                    value={formData.department}


                />

                <label htmlFor="startDate">Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}


                />
                <label htmlFor="salary">Salary</label>
                <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                />
                <label htmlFor="status">Status</label>
                <select name="status" required value={formData.status}>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contractor">Contractor</option>
                </select>

                <label htmlFor="email" >Email</label>
                <input type="email" name="email" required value={formData.email} />

                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" required value={formData.phone} />
                <div className={styles.formButtons} >
                    <Button text="Add new" type="submit" />
                </div>
                <div className={styles.formButtons} >
                    <Button text="Back" onClick={() => navigate(-1)} />
                </div>
            </form>
        </div>
    );
};

export default Form;
