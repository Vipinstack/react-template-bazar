import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      {/* <!--Our Products--> */}
<div className="our_products">
<div className="container">
<div className="row res_padd2">
    
    <h1>Our Products</h1>
    <h3>Shoping made easy or some caption text show here</h3>
    <img src="images/icon05.jpg" alt="" />
    
    <div className="linee"></div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon15.jpg" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon22.jpg" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon21.jpg" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon20.png" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon18.png" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon17.jpg" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon16.JPG" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
    <div className="product_box">
    	<div className="pro_image">
        	<Link to="#"><img src="images/icon19.png" alt="" /></Link>
            <span className="enq01"><Link to="#">Call For Enquiry</Link></span>
        </div>
        <div className="pro_desc">
        	<Link to="#">Product name show here</Link>
            <p>Rs.40.00 </p>
            <span className="pro_line"><strong></strong></span>
        </div>
    </div>
    
</div>
</div>
</div>
{/* <!--Our Products END--> */}

    </div>
  );
}

export default Products;
