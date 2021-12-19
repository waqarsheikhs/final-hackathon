import "./css/style.css"
import { Link } from 'react-router-dom'


export default function MyBanner({ title, Img }) {
    return (
        <div className="products">
            <h2 className="heading">
                {title}
            </h2>
            <div className="bannerDiv" >
                <Link >
                    <img
                        className="d-block w-100 bannerLink"
                        src={Img}
                        alt="Banner"
                    />
                </Link>
            </div>
        </div >
    )
}