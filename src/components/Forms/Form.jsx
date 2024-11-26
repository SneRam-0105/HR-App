import { useState } from "react";
const Form = ({ role, department, location }) => {
    const [formData, setFormData] = useState({
        role,
        department,
        location,

    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prevstate) => ({ ...prevstate, [name]: value }));//creating a new object where changes in name and value are changing
    };

    return (
        <div>
            <form>
                <input name="role" value={formData.role} onChange={handlechange} type="text" />
                <input name="department" value={formData.department} onChange={handlechange} type="text" />
                <input name="location" value={formData.location} onChange={handlechange} type="text" />

            </form>
        </div>
    )
};


export default Form;