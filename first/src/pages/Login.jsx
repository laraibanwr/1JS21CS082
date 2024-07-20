import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {


    const [formData, setformData] = useState({
        companyName: '',
        ownerName: '',
        rollNo: '',
        ownerEmail: '',
        accessCode: ''
    });

    const [resData, setResData] = useState(null);

    const handleOnChange = (e) => {
        setformData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        axios.post('http://20.244.56.144/test/register', formData)
            .then(response => {
                setResData(response.data);
                console.log('Response data:', response.data);
            })
            .catch(error => {
                console.error('Error submitting data:', error);
            })
    }

    return (
        <div className=' h-[calc(100vh-24px)]'>
            <form onSubmit={handleSubmit} className='h-full flex flex-col gap-4 justify-center items-center'>
                <input type="text" placeholder='Enter Company Name' name='companyName' onChange={handleOnChange} />
                <input type="text" placeholder='Enter Owner Name' name='ownerName' onChange={handleOnChange} />
                <input type="text" placeholder='Enter Roll no.' name='rollNo' onChange={handleOnChange} />
                <input type="email" placeholder='Enter Email' name='ownerEmail' onChange={handleOnChange} />
                <input type="text" placeholder='Enter Code' name='accessCode' onChange={handleOnChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}