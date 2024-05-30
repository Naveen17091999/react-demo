import { useEffect, useState } from "react";
import axios from "axios";
import "./notification.scss"

const Notification = () => {
    const [detail, setDetails] = useState([])
    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        const res = await axios.get("http://localhost:8081/user/getAllUser")
        console.log(res);
        setDetails(res.data)
    }
    return (
        <div className="notification">

            <div className="details">
                <table>
                    <thead>
                        <tr>
                            <td>
                                id
                            </td>
                            <td>
                                username
                            </td>
                            <td>
                                email
                            </td>
                            <td>
                                password
                            </td>
                            <td>actions</td>
                        </tr>
                    </thead>
                    <tbody>

                    {detail.map((data, index) => (
                        <tr className="user" key={index}>
                            <td>{data.id}</td>
                            <td>{data.userName}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>
                                <button>update</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notification;