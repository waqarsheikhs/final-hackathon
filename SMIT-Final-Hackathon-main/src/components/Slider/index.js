import { Carousel } from "react-bootstrap"
import Img1 from "../../assets/images/cover.jpg"

export default function MySlider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Img1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>)
}
