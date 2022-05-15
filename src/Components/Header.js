import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div>
<header>
	<div className="two_in_one">
	<div className="top_head">
    	<div className="container">
        	<div className="row ">
            	<div className="head_contact">
                	<ul>
                        <li><img src="images/icon04.png" alt="" /> Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri, Dist : Jalpaiguri, Pin : 753224.</li>
                    </ul>
                </div>
                <div className="head_log_area ml-auto">
                	<ul>
                        <li><Link to="#"><img src="images/icon03.png" alt="" />dhrubadjs.mng@gmail.com</Link></li>
                        <li><Link to="tel:7797813261"><img src="images/icon02.jpg" alt="" /> +91 7797813261</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="middle_head">
    	<div className="container">
        	<div className="row res_padd">
            	<span className="logo"><Link to="/"><img src="images/logo.png" alt="" /></Link></span>
                <div className="right_search ml-auto">
                	<div className="left_search">
                    <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="for_all_cat_sub_cat">
    
    <div className="menu_area">
	<div className="container">
	<div className="row res_padd relet">
    
    {/* <!--CATEGORY MENU-->                 */}
	<div className="adjust_rm01">
                          
		<div className="off_canvas_animate slide off_canvas_container left_menu_1">
			<div className="off_canvas_animate slide off_canvas_top_menu">
				<div className="off_canvas_toggles">
					<span className="nav_prev_btn"><i className="icon-left"></i>Back</span>
					<span className="nav_close_btn"><i className="icon-cancel"></i></span>
				</div>
			</div>
		</div>

		<div className="content_animate slide content">
            <div className="content_animate slide">
            <span className="nav_toggle"><i className="icon-menu"></i></span>
            	<nav className="dropdown">
                <ul>
                    <li><Link to="#" className="adjust_rm02">All Categories <i className="fa fa-caret-down" aria-hidden="true"></i></Link>
                        <ul>                            
                            <li>
                                <Link to="#">Vegetable <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                <ul>
                                    <li><Link to="/search">Potato</Link></li>
                                    <li><Link to="#">Tomato</Link></li>
                                    <li><Link to="#">Brinjal</Link></li>
                                    <li><Link to="#">Cabbage</Link></li>
                                    <li><Link to="#">Radish</Link></li>
                                    <li><Link to="#">Onion</Link></li>
                                    <li><Link to="#">Bitter Gourd</Link></li>
                                    <li><Link to="#">Lady’s finger</Link></li>
                                    <li><Link to="#">Cauliflower</Link></li>
                                    <li><Link to="#">Pumpkin</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="#">Fruits<i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                <ul>
                                    <li><Link to="#">Apple</Link></li>
                                    <li><Link to="#">Banana</Link></li>
                                    <li><Link to="#">Orange</Link></li>
                                    <li><Link to="#">Mango</Link></li>
                                    <li><Link to="#">Grapes</Link></li>
                                    <li><Link to="#">Pineapple</Link></li>
                                    <li><Link to="#">Pomegranate</Link></li>
                                    <li><Link to="#">Avocado</Link></li>
                                    <li><Link to="#">Coconut</Link></li>
                                    <li><Link to="#">Papaya</Link></li>
                                    <li><Link to="#">Watermelon</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="#">Dairy products <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                <ul>
                                    <li><Link to="#">Milk</Link></li>
                                    <li><Link to="#">Yogurt</Link></li>
                                    <li><Link to="#">Cheese</Link></li>
                                    <li><Link to="#">Butter</Link></li>
                                    <li><Link to="#">Cream</Link></li>
                                    <li><Link to="#">Whey</Link></li>
                                    <li><Link to="#">Milk Powder</Link></li>
                                    <li><Link to="#">Ice Cream</Link></li>
                                    <li><Link to="#">Brown Butter</Link></li>
                                    <li><Link to="#">Concentrated Milk</Link></li>
                                    <li><Link to="#">Sub Category three</Link></li>
                                    <li><Link to="#">Dummy Sub Category name</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="#">Organic Products <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                <ul>
                                    <li><Link to="#">24 Mantra</Link></li>
                                    <li><Link to="#">Praakritik</Link></li>
                                    <li><Link to="#">Organic Garden</Link></li>
                                    <li><Link to="#">Vision Fresh</Link></li>
                                    <li><Link to="#">Walgreens farm</Link></li>
                                    <li><Link to="#">Conscious Food</Link></li>
                                    <li><Link to="#">Down to Earth</Link></li>
                                    <li><Link to="#">Organic India</Link></li>
                                    <li><Link to="#">Pristine Organics</Link></li>
                                    <li><Link to="#">SRG Organic Foods</Link></li>
                                </ul>
                            </li>
                            
                            <li>
                                <Link to="#">Grocery Items <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                                <ul>
                                    <li><Link to="#">Turmeric</Link></li>
                                    <li><Link to="#">Ghee</Link></li>
                                    <li><Link to="#">Coriander</Link></li>
                                    <li><Link to="#">Cumin</Link></li>
                                    <li><Link to="#">Cinnamon</Link></li>
                                    <li><Link to="#">Cardamom</Link></li>
                                    <li><Link to="#">Nutmeg</Link></li>
                                    <li><Link to="#">Clove</Link></li>
                                    <li><Link to="#">Bakery and Bread</Link></li>
                                    <li><Link to="#">Dairy, Cheese, and Eggs</Link></li>
                                    <li><Link to="#">Frozen Foods</Link></li>
                                </ul>
                            </li>
                            
                        </ul>
                    </li>
                    
                </ul>
            </nav>
            </div>
		</div>
	</div>

    {/* <!--CATEGORY MENU END-->  */}
    
    
        	<nav className="navbar navbar-expand-md navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  
                  {/* <li className="nav-item dropdown ">
                    <Link className="nav-link dropdown-toggleLink to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Fruits
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link className="dropdown-itemLink to="fruits.html">Foodgrains</Link>
                      <Link className="dropdown-itemLink to="vagetables.html"> Oil</Link>
                      <Link className="dropdown-itemLink to="leaves.html">Masala</Link>
                    </ul>
                  </li> */}
                  
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="#">About Bazar Maynaguri</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="#">B2B Information</Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="#">FAQ</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="/about">About Us</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="#">Enquiry Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-linkLink" to="/signup">SignUp</Link>
                  </li>
                  
                
                </ul>
                
              </div>
            </nav>	
           
    </div>
    </div> 
    </div>
	</div>
    
    </div>
</header> 
    </div>
  );
}

export default Header;
