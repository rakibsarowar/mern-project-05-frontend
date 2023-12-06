import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../../../assets/home/01.jpg'
import Image2 from '../../../assets/home/02.jpg'
import Image3 from '../../../assets/home/03.png'
import Image4 from '../../../assets/home/04.jpg'
import Image5 from '../../../assets/home/05.png'
import Image6 from '../../../assets/home/06.png'

const Hero = () => {
    return (
        <Carousel>
            <div>
                <img src={Image1} />
            </div>
            <div>
                <img src={Image2} />
            </div>
            <div>
                <img src={Image3} />
            </div>
            <div>
                <img src={Image4} />
            </div>
            <div>
                <img src={Image5} />
            </div>
            <div>
                <img src={Image6} />
            </div>
        </Carousel>
    );
};

export default Hero;