import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SmallSlider.css";

function SmallSlider(props) {
  const { images } = props
    return (
    <div className="smallbox">
    <Carousel 
    infiniteLoop = {props.infiniteLoop}
    autoPlay  = {props.autoPlay}
    useKeyboardArrows = {props.useKeyboardArrows} 
    showStatus = {props.showStatus} 
    showThumbs = {props.showThumbs}
    showIndicators = {props.showIndicators}
    >
        {images.map((index) => (
          <div className="slide">
            <img alt="sample_file" src={index.uri} key={index.key}/>
            <p className="legend">{index.key}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default SmallSlider;
