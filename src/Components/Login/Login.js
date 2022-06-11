import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import image from '../../pic.png'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(email, password)
        const user = { email, password }
        const url = "https://reqres.in/api/login";

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                toast.error('Missing Password')
               
                } else {
                    toast.success('Successfully login')
                    }
              }
        )
       e.target.reset()
    }
    return (
            <div className='d-flex container justify-content-around login align-items-center'>
            <div className=' custom-width'>

                <h1 className='text-head'>Welcome back</h1>
                <h2 className='text-head-1'>Sub-title text goes here</h2>
                <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input"onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address*" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="input"onChange={(e) => setPassword(e.target.value)}type="password" placeholder="Password*" />
                    </Form.Group>
                    <button className='custom-bg-3  d-block mx-auto' type='submit'>Login</button>
                    <div className='d-flex justify-content-between'>
                    <Form.Group className="mb-3 span" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember password" />
                        </Form.Group>
                        <span className='span'>Forgot Password?</span>
                    </div>
    </Form>
              
                
            </div>

            <div className='w-50 d-none d-lg-block'>

                <img className="h-100"src='https://img.freepik.com/free-vector/flat-business-group-people-with-light-bulb-work-together-employee-teamwork-have-brainstorm-share-creative-ideas-company-staff-working-office-search-success-business-solution-problem_88138-932.jpg?size=626&ext=jpg&ga=GA1.2.1155820316.1654940162' alt="" />
            </div>
        </div>
    );
};

export default Login;