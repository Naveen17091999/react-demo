import "./card.scss"
import arrow from "../../asserts/right-arrow.png"

function Card({ data }) {
    return (
        <div className="card">
            <img src={data.img} alt="" />
            <div className="details">
                <div className="top">
                    <h3>{data.courseName}</h3>
                    <h2>{data.price}</h2>
                </div>
                <p className="dur">{data.duration}</p>
                <p>{data.decription}</p>
                <button>Enroll now <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Card;