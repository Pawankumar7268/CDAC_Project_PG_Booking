import slide1 from './images/imgs/home1.jpg';
import slide2 from './images/home2.jpg';

import  './Carousel.css'
import slide3 from './images/home4.jpg';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Carouselslide() {
  const navigate=useNavigate()
  const state=useSelector((state)=>state);
  return (
    <div className='mt-5' style={{paddingTop:"14px"}}>
      <Carousel>
        <Carousel.Item>
          <img
          
            className="d-block w-100"
             src={slide1} 
            // src="https://your-space-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/04/22100349/tips-to-keep-your-pg-room-clean.jpg" 
            height={500} width={1000}
            alt="First slide"
          />
          
          <Carousel.Caption>
          <h2 className='Centered'>A Home Away From</h2>
          <h2 className='Centered'> Home</h2>
          

          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              <Button onClick={e=>navigate('/login')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/cregister')}}>Signup</Button>
            </ButtonGroup>
            )}
          
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-98"
            src={slide2} height={500} width={1500}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold  bg-warning  p-1 ">Your Comfort Your Choice</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-99 "
            src={slide3} height={500} width={1600}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold  bg-success p-1 ">Empowering Your Journey to PG Comfort</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
