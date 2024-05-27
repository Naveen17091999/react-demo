import "./footer.scss";
import faceBook from "../../asserts/facebook.png";
import instagram from "../../asserts/instagram.png";
import twitter from "../../asserts/twitter.png";
import whatsapp from "../../asserts/whatsapp.png";

const Footer = () => {
    const topics = ["SPACES", "UPGRADE", "AD-FREE", "NEWS LETTER", "GET CERTIFIED", "CONTACT US"]

    const course = [
        {
            topics: "Top Tutorials",
            sub_topics: ["HTML Tutorial",
                "CSS Tutorial",
                "JavaScript Tutorial",
                "How To Tutorial",
                "SQL Tutorial",
                "Python Tutorial",
                "W3.CSS Tutorial"
            ]
        }
    ]
    return (
        <div className="footer">
            <div className="topics">
                {topics.map(
                    (data, index) => (
                        <h3 key={index}>{data}</h3>
                    )
                )}
            </div>
            <div className="courses">
                {
                    course.map((data, index) => (
                        <div key={index}>
                            <h4>{data.topics}</h4>
                            {data.sub_topics.map(
                                (sub_data, sub_index) => (
                                    <p key={sub_index}>{sub_data}</p>
                                )
                            )}
                        </div>
                    ))
                }

                <div className="box2">
                    <h4>Top References</h4>
                    <p>HTML Reference</p>
                    <p>CSS Reference</p>
                    <p>JavaScript Reference</p>
                    <p>SQL Reference</p>
                    <p>Python Reference</p>
                    <p>W3.CSS Reference</p>
                    <p>Bootstrap Reference</p>
                </div>

                <div className="box3">
                    <h4>Top Examples</h4>
                    <p>HTML Examples</p>
                    <p>CSS Examples</p>
                    <p>JavaScript Examples</p>
                    <p>How To Examples</p>
                    <p>SQL Examples</p>
                    <p>Python Examples</p>
                    <p>W3.CSS Examples</p>
                </div>
                <div className="box4">
                    <h4>Get Certified</h4>
                    <p>HTML Certificate</p>
                    <p>CSS Certificate</p>
                    <p>Front End Certificate</p>
                    <p>SQL Certificate</p>
                    <p>JavaScript Certificate</p>
                    <p>jQuery Certificate</p>
                    <p>C++ Certificate</p>
                </div>
            </div>
            <div className="social_links">
                <img src={faceBook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={whatsapp} alt="" />
                <h4>FORUM</h4>
                <h4>ABOUT</h4>
                <h4>CLASSROOM</h4>
            </div>
        </div>
    )
}


export {  Footer };