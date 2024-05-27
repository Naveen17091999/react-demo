import "./card.scss"
import arrow from "../../asserts/right-arrow.png"

function Card({data}){
    return(
        <div className="card">
            <img src={data.img} alt="" />
            <div className="details">
                <h3>{data.courseName}</h3>
                <h2>{data.price}</h2>
                <p>{data.duration}</p>
                <p>{data.decription}</p>
                <button>Enroll now <img src={arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Card;

{/* <div class="course-card">
  <img src="course-image.jpg" alt="Course Image" class="course-image">
  <h2 class="course-title">Course Title</h2>
  <p class="instructor-name">Instructor: John Doe</p>
  <p class="course-description">This is a brief summary of the course...</p>
  <p class="course-duration">Duration: 10 hours</p>
  <p class="difficulty-level">Level: Beginner</p>
  <div class="course-rating">
    <span class="rating">4.5</span>
    <span class="reviews">(200 reviews)</span>
  </div>
  <p class="course-price">$49.99</p>
  <button class="enroll-button">Enroll Now</button>
  <p class="course-category">Category: Web Development</p>
  <p class="enrolled-students">Enrolled Students: 1500</p>
  <p class="course-language">Language: English</p>
  <p class="certificate-availability">Certificate: Yes</p>
  <p class="additional-resources">Additional Resources: Downloadable content, Access to forums</p>
</div> */}
