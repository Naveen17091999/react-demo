import { useState } from "react"
import "../login/login.scss"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        userName: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        // fetch("http:localhost:8080/postApi",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:details.json()
        // })

        const res = await axios.post("http://localhost:8081/user/register", details)
        console.log(res.data);
        if (res.status === 200 && res.data === "User added.") {
            navigate('/login')

        }
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        setDetails({ ...details, [name]: value })
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h2>Resigter Form</h2>
                <input type="text" placeholder="Username" name="userName" onChange={handleChange} />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} />
                <input type="text" placeholder="password" name="password" onChange={handleChange} />
                <input type="submit" className="submit" value="Submit" />
                <Link to="/login">
                    Login
                </Link>
            </form>

        </div>
    )
}

export default Register;