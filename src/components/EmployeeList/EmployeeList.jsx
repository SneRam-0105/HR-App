import EmployeeCard from "../EmployeeCard/EmployeeCard.jsx";
import './EmployeeList.css'
import employeeData from "../Array/employeeData.js"

const EmployeeList = ({ props }) => {

    if (props) {


        return employeeData.map((employee) => (

            <EmployeeCard key={employee.id}
                {...employee} //... takes all the elements from employeedata array
            // name={employee.name}
            // role={employee.role}
            // department={employee.department}
            // startdate={employee.startdate}
            // location={employee.location}
            // salary={employee.salary}
            // status={employee.status}

            />

        ))

    }
    return;
};
export default EmployeeList;
