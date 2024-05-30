import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.scss"

const Profile = () => {
    const [detail, setDetails] = useState({
        userName: "",
        email: ""
    })
    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const res = await axios.get("http://localhost:8081/user/getById/3")
        console.log(res);
        setDetails(res.data)
    }
    return (
        <div className="profile">
            <div id="card">
                <div className="img"><p>Image</p></div>
                <div className="details">
                    <h3>{detail.userName}</h3>
                    <h4>{detail.email}</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile;