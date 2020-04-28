import React, { useState } from 'react'
import api, { addAuth } from '../utils/api'
//import { setStorageUser } from '../utils/local-storage'

const Register = (props) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage(null);
        setIsLoading(true);

        const body = {
            email,
            firstName,
            lastName,
            password,
        }

        api
            .post('/farmer/register', body)
            .then(response => {
                console.log(response)
                setMessage(response.data.message)
            })
            .catch(error => {
                return setMessage(error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="">
            {
                isLoading
                    ? <span>is loading</span>
                    : <form onSubmit={handleSubmit}>
                        <div className="">
                            <label>Email</label>
                            <input onChange={(event) => setEmail(event.target.value)} type="text" required />
                        </div>
                        <div className="">
                            <label>First Name</label>
                            <input onChange={(event) => setFirstName(event.target.value)} type="text" required />
                        </div>
                        <div className="">
                            <label>Last Name</label>
                            <input onChange={(event) => setLastName(event.target.value)} type="text" required />
                        </div>
                        <div className="">
                            <label>Password</label>
                            <input onChange={(event) => setPassword(event.target.value)} type="password" required />
                        </div>
                        <br />
                        <button type="submit">S'inscrire</button>
                        <br />
                        {message && <span>{message}</span>}
                    </form>
            }
        </div>
    )
}

export default Register;