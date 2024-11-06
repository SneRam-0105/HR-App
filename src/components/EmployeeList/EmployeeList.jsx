import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import './EmployeeList.css'
const EmployeeList = () => {
    return (

        <div id="employee" >

            <EmployeeCard name="Sneha" initRole="HR" department="Sales" salary="2000" location="California" />
            <EmployeeCard name="Ruth" initRole="developer" department="ICT" salary="3000" location="Austria" />
            <EmployeeCard name="Steffi" initRole="tester" department="ICT" salary="4000" location="Finland" />
            <EmployeeCard name="Shital" initRole="Data Analyst" department="IT" salary="5000" location="Norway" />



        </div >
    );
};

export default EmployeeList;
