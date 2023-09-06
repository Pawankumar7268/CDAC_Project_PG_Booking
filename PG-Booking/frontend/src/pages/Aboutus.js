
import about from '../components/whatwedo';
import slide4 from './images/aboutus.jpg';
import slide5 from './images/imgs/img1.jpg';
import slide6 from './images/imgs/img3.jpg';

import './Aboutus.css';
export default function Aboutus() {
  return (
    <>
      <div className='containerbody'>
        <div className='row'>
          <div className='img-fluid img123'>
            <img className='rounded float-center' src={slide4} alt='not showing image' />

          </div>
        </div>
        <div className='row row1'>

        <h1 className='heading1'>Why Choose Us?</h1>
          <div className='para1 col-4 text-text-nowrap fw-20px'>
            <p>
              We curate a diverse selection of PG accommodations, catering to different needs and preferences. Whether you're looking for a cozy single room or a shared space with like-minded individuals, we have options for you.
              Our user-friendly platform allows you to browse, compare, and book PG accommodations with just a few clicks. Say goodbye to long hours of searching and complicated booking processes.
            </p>
          </div>
          <div className='col-6'>
            <img className='img2 fluid-end' src={slide5} alt='not showing image' />
          </div>
        </div>


        <div className='row row1'>

          <div className='col-6'>
            <img className='img3 fluid-end' src={slide6} alt='not showing image' />
          </div>
          <div className='para2 col-4   fw-20px'>
            <p>
              Your comfort matters to us. That's why we offer filters and search options that help you find a PG that aligns with your specific preferences, be it location, amenities, or pricing.
              We take pride in partnering with trusted PG providers who maintain high standards of cleanliness, safety, and comfort. Your peace of mind is our priority.
            </p>
          </div>
        </div>
      </div>

      <about />
    </>

  );

}
