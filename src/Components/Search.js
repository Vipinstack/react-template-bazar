import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div>
      <div className="search_main_section">
<div className="container">
<div className="row res_padd">

<div className="bread_crumb">
	<Link to="#">Home</Link>
    <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
    <Link to="#">Vegetables</Link>
</div>

		    <div className="mobile_filter"> <i className="fa fa-filter" aria-hidden="true"></i><p>Show Filter</p></div>
			
            <div className="laft_search_panel">
		     <h3>Filter Options</h3>
             
			 <div className="form_group" style={{position:"relative"}}>
			    <input type="text" placeholder="Keyword" className="search-input" />
				<img src="images/icon36.png" className="search_icon" alt=''/>
			 </div>
             
			 <div className="form_group">
			    <label className="search_label">Category</label>
				<select className="slectt">
                	<option>Vegetable</option>
                    <option>Fruits</option>
                    <option>Dairy products</option>
                    <option>Organic Products</option>
                    <option>Grocery Items</option>
                </select>
			 </div>
             
             <div className="form_group">
			    <label className="search_label">Sub Category</label>
				<ul className="c_ul">
                  <li>
                     <label className="contect_container_checkBox">Sub Category one
                     <input type="checkbox" checked="checked" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Sub Category two
                     <input type="checkbox" checked="checked" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Sub Category
                     <input type="checkbox" checked="checked" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Sub Categoru name here
                     <input type="checkbox" checked="checked" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
                  <li>
                     <label className="contect_container_checkBox">Sub Category
                     <input type="checkbox" checked="checked" name="text" />
                     <span className="contect_checkmark"></span>
                     </label>
                  </li>
               </ul>
			 </div>
             
             
              <div className="form_group">
			    <label className="search_label">Price Range</label>
				<div className="slider_rnge">
               <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                  <div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: "0%", width: "100%"}}></div>
                  <span tabindex="0" className="ui-slider-handle ui-state-default ui-corner-all" style={{left: "0%"}}></span>
                  <span tabindex="0" className="ui-slider-handle ui-state-default ui-corner-all" style={{left: "100%"}}></span>
               </div>
               <span className="range-text">
               <input type="text" className="price_numb" readonly id="amount" />
               </span>
            </div>
			 </div>
             
             <button type="submit" className="search-submit1">Filter</button>
             
            </div>
         	{/* <!----> */}
         
           {/* <!--right--> */}
		   <div className="right_search_panel">
			  
			  <div className="evnt_shot_by_main">
			     <label className="event-sort">Showing 1-20 out of 100 product for Vegetable</label>
				<div className="sort-filter">
                    	<p>Sort by :</p>
                        <select className="sort-select">
                        	<option>Select</option>
                            <option>Price - Low to High</option>
                            <option>Price - High to Low </option>
                        </select>
                    </div>
			  </div>
              
              
              	<div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search01.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.40.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search02.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.20.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search03.JPG" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.40.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search04.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.30.00</p>
                    </div>
                </div>
                
                
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search05.png" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search06.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search07.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search08.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search09.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search10.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search11.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search12.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search01.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.40.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search02.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.20.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search03.JPG" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.40.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search04.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.30.00</p>
                    </div>
                </div>
                
                
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search05.png" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search06.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search07.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>
                
                <div className="search_proo">
                	<div className="srch_pic_box">
                    	<img src="images/search08.jpg" alt="" />
                    	<span><Link to="#">Call For Enquiry</Link></span>
                    </div>
                    <div className="srch_dtls_box">
                    	<Link to="#">Fresh Onion</Link>
                        <p>Rs.80.00</p>
                    </div>
                </div>


                <div className="w-100"></div>
                
                <div className="pagination_area">
                    <ul>
                       <li><Link to="#"><i className="fa fa-angle-left" aria-hidden="true"></i> </Link></li>
                       <li><Link to="#">1</Link></li>
                       <li><Link to="#">2</Link></li>
                       <li className="active"><Link to="#">3</Link></li>
                       <li><Link to="#">4</Link></li>
                       <li><Link to="#">...</Link></li>
                       <li><Link to="#">25</Link></li>
                       <li><Link to="#"> <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                    </ul>
                 </div>
              </div>
           

</div>
</div>
</div>

    </div>
  );
}

export default Search;
