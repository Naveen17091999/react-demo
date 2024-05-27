import "./banner.scss"
import banner2 from "../../asserts/banner2.jpg"
import banner1 from "../../asserts/banner1.jpg"
import banner3 from "../../asserts/banner3.jpg"

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner2} alt="" />
            <div className="sec">
                <div className="b1 ban">
                    <img src={banner3} alt="" />
                    <div className="details">
                        <h2>Start Learing.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aliquam beatae dolor possimus assumenda facilis recusandae numquam repellendus vitae sint quidem repellat nobis ad cum neque dolorem, deleniti officiis eveniet accusantium voluptates? Nulla, dolorem quis? Possimus hic reprehenderit reiciendis ex corporis commodi sit? Quam harum consectetur veritatis ipsa, voluptatum dicta.</p>
                    </div>
                </div>
                <hr />
                <div className="b2 ban">
                    <div className="details">
                        <h2>Start Working</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error esse accusamus officiis unde rerum laboriosam porro culpa beatae blanditiis facilis, nesciunt neque quis natus minima reprehenderit dolorum quibusdam voluptate.</p>
                    </div>
                    <img src={banner1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner;