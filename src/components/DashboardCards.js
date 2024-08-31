import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const DashboardCards = () => {
    const [dataLengths, setDataLengths] = useState({
        divLength: 0,
        desLength: 0,
        unitLength: 0,
        employeeLength: 0,
        userLength: 0,
    });
    const [errors, setErrors] = useState({
        divisionError: null,
        designationError: null,
        unitError: null,
        employeeError: null,
        userError: null
    })


    const fetchData = async () => {
        try {
            const responses = await Promise.allSettled([
                axios.get(`${process.env.REACT_APP_BACKEND_URL}department/list`),
                axios.get(`${process.env.REACT_APP_BACKEND_URL}designation/list`),
                axios.get(`${process.env.REACT_APP_BACKEND_URL}unit/list`),
                axios.get(`${process.env.REACT_APP_BACKEND_URL}employee/list`),
                axios.get(`${process.env.REACT_APP_BACKEND_URL}auth/user/list`),
            ]);
            
            const [divisionRes, designationRes, unitRes, employeeRes, userRes] = responses;

            setDataLengths({
                divLength: divisionRes.status === 'fulfilled' ? divisionRes.value.data.data.length : 0,
                desLength: designationRes.status === 'fulfilled' ? designationRes.value.data.data.length : 0,
                unitLength: unitRes.status === 'fulfilled' ? unitRes.value.data.data.length : 0,
                employeeLength: employeeRes.status === 'fulfilled' ? employeeRes.value.data.data.length : 0,
                userLength: userRes.status === 'fulfilled' ? userRes.value.data.list.length : 0,
            });

            setErrors({
                divisionError: divisionRes.status === 'rejected' ? 'Failed to fetch Division data' : null,
                designationError: designationRes.status === 'rejected' ? 'Failed to fetch Designation data' : null,
                unitError: unitRes.status === 'rejected' ? 'Failed to fetch Unit Data' : null,
                employeeError: employeeRes.status === 'rejected' ? 'Failed to fetch Employee Data' : null,
                userError: userRes.status === 'rejected' ? 'Failed to fetch User Data' : null
            })
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>
                {Object.values(errors).some(error => error) && (
                    <div>
                        {errors.divisionError && <p>{errors.divisionError}</p>}
                        {errors.designationError && <p>{errors.designationError}</p>}
                        {errors.unitError && <p>{errors.unitError}</p>}
                        {errors.employeeError && <p>{errors.employeeError}</p>}
                        {errors.userError && <p>{errors.userError}</p>}
                    </div>
                )}
            </div>
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8'>
                <Card len={dataLengths.divLength} title={"Division"} url={"/departments"} />
                <Card len={dataLengths.desLength} title={"Designation"} url={"/designations"} />
                <Card len={dataLengths.unitLength} title={"Unit"} url={"/units"} />
                <Card len={dataLengths.employeeLength} title={"Employee"} url={"/employee"} />
                <Card len={dataLengths.userLength} title={"User"} url={"/users"} />
            </div>
        </div>
    );
};

export default DashboardCards;
