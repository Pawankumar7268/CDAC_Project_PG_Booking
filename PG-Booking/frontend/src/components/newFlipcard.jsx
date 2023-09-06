import React from 'react';
import './newFlipcard.css';

function newFlipcard() {
  return (
    <div class="container d-flex align-items-center justify-content-center flex-wrap">
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Aug/11/Photo_h400_w540/GR2-389233-1847815_400_540.jpg" alt=""/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-white fs-5">FullyFurnished</h3>
                        <p class="fs-6 text-white">Welcome to our furnished PG accommodations where comfort meets convenience.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src="https://play-zelo-production.s3.ap-south-1.amazonaws.com/uploads/center_caption_photo/photo/5e41258f09ba9955e4a4c247/2.jpg" alt=""/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-white fs-5">SemiFurnished</h3>
                        <p class="fs-6 text-white">Welcome to our semi-furnished PG accommodationsOur semi-furnished rooms are designed to provide you with the flexibility to add your personal touch.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="box">
            <div class="body">
                <div class="imgContainer">
                    <img src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/10/Photo_h400_w540/GR2-361091-1744231_400_540.jpg" alt=""/>
                </div>
                <div class="content d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <h3 class="text-white fs-5">UnFurnished</h3>
                        <p class="fs-6 text-white">Welcome to our unfurnished PG accommodations, where we provide you with a blank canvas to create a living space that's uniquely yours.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default newFlipcard;