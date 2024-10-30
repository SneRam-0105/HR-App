import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";

const EmployeeList = () => {
    return (

        <div >

            <EmployeeCard name="Sneha" initRole="HR" department="ICT" salary="2000" location="California" />
            <EmployeeCard name="Ruth" initRole="developer" department="ICT" salary="3000" location="Austria" />
            <EmployeeCard name="Steffi" initRole="tester" department="ICT" salary="4000" location="Finland" />
            <EmployeeCard name="Shital" initRole="Admin" department="ICT" salary="5000" location="Norway" />

        </div >
    );
};

export default EmployeeList;
