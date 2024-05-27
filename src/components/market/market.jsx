import "./market.scss"
import java from "../../asserts/java.jpg"
import javascript from "../../asserts/javascript.jpg"
import python from "../../asserts/python.jpg"
import react from "../../asserts/react.jpg"
import angular from "../../asserts/angular.jpg"
import springBoot from "../../asserts/springBoot.jpg"
import Card from "../card/Card"


function Courses() {
    const data = [
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
        {
            courseName: "Python Programming",
            duration: "1 months",
            img: python,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$120"
        },
        {
            courseName: "JavaScript Programming",
            duration: "2 months",
            img: javascript,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$100"
        },
        {
            courseName: "React Framework",
            duration: "3 months",
            img: react,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$500"
        },
        {
            courseName: "Angular Framework",
            duration: "3 months",
            img: angular,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$700"
        },
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
        {
            courseName: "Java Programming",
            duration: "3 months",
            img: java,
            decription: "nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.",
            price: "$1020"
        },
    ]
    return (
        <div className="courses">
            <h3>Available Courses.</h3>
            <div className="course">

                {
                    data.map((data, index) => (
                        <Card data={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Courses;