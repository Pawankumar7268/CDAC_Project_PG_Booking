import './flip_card.css';
function flip_card() {
  return (
    <body >

      
      <div className='main_class' >
        <div class="flip-card" >
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>FullyFurnished</h2>
              <img className='image' src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Aug/11/Photo_h400_w540/GR2-389233-1847815_400_540.jpg" alt="Avatar" />
              <p className='front_details'>
              Experience Comfort and Convenience in Our Furnished PG Rooms
              </p>
            </div>
            <div class="flip-card-back">
            <h2 className='headback'>Utterly Furnished</h2>
              <p className= 'paraback'>Welcome to our furnished PG accommodations where comfort meets convenience. Our thoughtfully designed furnished rooms provide you with a hassle-free living experience, ensuring you feel right at home from the moment you step in.</p>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>SemiFurnished</h2>
              <img className='image' src="https://play-zelo-production.s3.ap-south-1.amazonaws.com/uploads/center_caption_photo/photo/5e41258f09ba9955e4a4c247/2.jpg" alt="Avatar" />
              <p></p>
            </div>
            <div class="flip-card-back">
              <h2 className='headback'>Customizable</h2>
              <p className= 'paraback' >Welcome to our semi-furnished PG accommodationsOur semi-furnished rooms are designed to provide you with the flexibility to add your personal touch. while still offering essential amenities for comfortable living.</p>
            </div>
          </div>
        </div>


        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>UnFurnished</h2>
              <img className='image' src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/10/Photo_h400_w540/GR2-361091-1744231_400_540.jpg" alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <h2 className='headback'>Blank Canvas</h2>
              <p className= 'paraback'>Welcome to our unfurnished PG accommodations, where we provide you with a blank canvas to create a living space that's uniquely yours. Unfurnished rooms are a canvas of possibilities, offering you the freedom to design. </p>
            </div>
          </div>
        </div>

      </div>
    </body>


  );
}
export default flip_card;
