import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/style.css"
import Opc from "../../assets/images/luckyo.jpg"
import Src from "../../assets/images/luckys.jpg"

import { MyCard } from "..";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function MyFeature({title}) {
  return (
    <div className="products">
      <h2 className="heading">
        {title}
      </h2>
      <Carousel
        swipeable={true}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true} 
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="proCard">
          <MyCard IMG={Opc} btn_title="Add to Cart 1" title="Lucky Opc" text="special rates" />
        </div>
        <div className="proCard">
          <MyCard IMG={Src} btn_title="Add to Cart 2" title="Lucky Src" text="special rates" />
        </div>
        <div className="proCard">
          <MyCard IMG={Opc} btn_title="Add to Cart 3" title="Lucky Opc" text="special rates" />
        </div>
        <div className="proCard">
          <MyCard IMG={Src} btn_title="Add to Cart 4" title="Lucky Src" text="special rates" />
        </div>
      </Carousel>
    </div >
  )
}