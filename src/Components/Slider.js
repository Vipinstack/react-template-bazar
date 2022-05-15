import React from 'react';
import {Link} from 'react-router-dom';

const Slider = () => {
  return (
    <div>
      {/* <!--slider--> */}
<div className="slider_one_area">
<div className="container">
  	<div className="row res_padd">
    
    <div id="offer" className="owl-carousel testimonial-carousel-main">
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon06.JPG" alt="" />
            <div className="containtt_one">
            	<h1>Simply dummy Offer text here</h1>
                <h2>100% Organic Vegetable</h2>
                <span>
                	<img src="images/cruve.png" alt="" />
                    <Link to="#">CALL FOR Enquiry <img src="images/icon07.png" alt="" /></Link>
                </span>
            </div>
        </div>
        </div>
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon08.jpg" alt="" />
            <div className="containtt_two">
                <span>
                	<h1>Simply dummy Offer text here</h1>
                	<h2>100% Organic Vegetable</h2>
                    <Link to="#">Call For Enquiry</Link>
                </span>
            </div>
        </div>
        </div>
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon33.jpg" alt="" />
            <div className="containtt_one">
            	<h1>Simply dummy Offer text here</h1>
                <h2>100% Organic Vegetable</h2>
                <span>
                	<img src="images/cruve.png" alt="" />
                    <Link to="#">CALL FOR Enquiry <img src="images/icon07.png" alt="" /></Link>
                </span>
            </div>
        </div>
        </div>
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon34.jpg" alt="" />
            <div className="containtt_two">
                <span>
                	<h1>Simply dummy Offer text here</h1>
                	<h2>100% Organic Vegetable</h2>
                    <Link to="#">Call For Enquiry</Link>
                </span>
            </div>
        </div>
        </div>
        
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon35.jpg" alt="" />
            <div className="containtt_one">
            	<h1>Simply dummy Offer text here</h1>
                <h2>100% Organic Vegetable</h2>
                <span>
                	<img src="images/cruve.png" alt="" />
                    <Link to="#">CALL FOR Enquiry <img src="images/icon07.png" alt="" /></Link>
                </span>
            </div>
        </div>
        </div>
        
        <div className="item">
        <div className="boxx_sg">
			<img src="images/icon36.jpg" alt="" />
            <div className="containtt_two">
                <span>
                	<h1>Simply dummy Offer text here</h1>
                	<h2>100% Organic Vegetable</h2>
                    <Link to="#">Call For Enquiry</Link>
                </span>
            </div>
        </div>
        </div>
        
	</div>
    
    </div>
</div>
</div>
{/* <!--slider END--> */}
    </div>
  );
}

export default Slider;
