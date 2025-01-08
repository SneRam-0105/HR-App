import React from "react";

import useEmployeeInfo from "../../Hooks/useEmployeeInfo";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "../../components/Buttons/button";
import { useEffect } from "react";
import styles from './SinglePage.module.css';
import { calcYearsWorked } from '../../yearcalculation/year';

const EmployeeDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, loading, error, read } = useEmployeeInfo(`http://localhost:3002/persons/${id}`);

    useEffect(() => {
        read();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <h2 className={styles.heading}> No employee data available</h2>;
    }

    const yearsWorked = calcYearsWorked(data?.startDate);
    const isProbation = yearsWorked < 0.5;
    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Employee Details</h1>
            {data && (

                <div className={styles.cardContainer} >
                    <div className={styles.cardHeader}>
                        <h2 className={styles.employeeName} >{data.name}</h2>

                        <div className={styles.employeeRole}>
                            <p>{data.role}</p>
                            <p>{calcYearsWorked(data.startDate)} year(s) of experience</p>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <div className={styles.cardColumn}>
                            <p>Department: {data.department}</p>
                            <p>Date of joining: {data.startDate}</p>
                            <p>Location: {data.location}</p>
                        </div>
                        <div className={styles.cardColumn}>

                            <p>Salary: {data.salary}</p>
                            <p>Email: {data.email}</p>
                            <p>Phone: {data.phone}</p>
                        </div>
                    </div>
                    {isAnniversary &&
                        (
                            <p className={styles.cardIconMessage}>
                                Schedule recognition meeting for {yearsWorked} years of service!
                            </p>
                        )
                    }

                    {isProbation
                        && (

                            <p className={styles.cardIconMessage}>
                                Schedule probation review. This employee has worked for less
                                than 6 months.
                            </p>

                        )
                    }
                </div>
            )}
            <div className={styles.backButton} >
                <Button text="Back" onClick={() => navigate(-1)} />
            </div>
        </div>
    );
};

export default EmployeeDetailsPage;
