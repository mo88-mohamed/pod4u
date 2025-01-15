import './Slide.css';
// import img from '../assets/show-01.jpg';
import { FaYoutube } from "react-icons/fa";
import { SwiperSlide } from 'swiper/react';
import { Box,Card,Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img from '../assets/gray.jpg';
const Slide = ({image = 'https://placehold.co/150x150' ,title,author,feedID, authorUrl}) => {
    const navigate = useNavigate();
    return (
        <Box >
            {/* <div className="image">
                <img src={img} alt="desktop-image-hero-1" />
            </div>
            <div className="info">
                <h2 className='slide-title'>Discover innovative ways to decorate</h2>
                <p>jun flex</p>


            </div> */}
        <Card.Root cursor={'pointer'} padding={'10px'} margin={0} paddingTop={0} rounded={'xl'} justifyContent={'center'} alignItems={'center'} backgroundColor={'transparent'} border={'none'} onClick={()=>{navigate(`/podcast/${feedID}`)}}>
            <Card.Header></Card.Header>
            <LazyLoadImage width={'200px'} height={'200px'} rounded={'xl'} src={image} alt={title} placeholderSrc={img}/>
            <Card.Body textAlign={'center'}>
                <Card.Title>
                    {title?title:'Title'}
                </Card.Title>
                <Card.Description>
                    {author?author:'Author'}
                </Card.Description>

            </Card.Body>
            {/* {children} */}

        </Card.Root>
        </Box>

    );
}


const Badge = ({ name, icon }) => {
    return (
        <div className="badge">
            {icon && <FaYoutube size={'30px'} />}
            <p>{name ? name : 'youtube'}</p>
        </div>
    );
}

export default Slide;