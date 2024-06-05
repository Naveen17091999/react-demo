import { useState } from "react"
import "./login.scss"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()

    let details = {}
    // const [details, setDetails] = useState({
    //     email: "",
    //     password: ""
    // })

    const [error, setError] = useState("")

    const handleSubmit = async(event) => {
        event.preventDefault();

        // fetch("http:localhost:8080/postApi",{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:details.json()
        // })

        const res = await axios.post("http://localhost:8081/user/login", details)
        console.log(res.data);
        if (res.status === 200 && res.data === "User logged.") {
            navigate('/')
        }else if(res.data === "User does not exist."){
            navigate('/register')
        }
        else{
            setError(res.data)
        }
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name
        // setDetails({ ...details, [name]: value })
        details={ ...details, [name]: value }
        console.log(details);
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <span>{error}</span>
                <h2>Login Form</h2>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} />
                <input type="text" placeholder="password" name="password" onChange={handleChange} />
                <input type="submit" className="submit" value="Submit" />
                <Link to="/register">
                    Register
                </Link>
            </form>
        </div>
    )
}

export default Login;