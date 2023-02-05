import React from 'react';

import Searchred from './images/search_red.png';
import Chatgrey from './images/chat_grey.png';
import Chatred from './images/chat_red.png';
import './styles.css';
// import useStyles from './styles.css';

const Nav = () => (

    <div>
<div className="navbar">
    
<a href="oll" className="nav_link">
            <span className="nav_name">
              <div className="search_but">
                <img src={Searchred} width={25} className="pre_img" />
                <img src={Searchred} width={25} className="hover_img" />
              </div>
            </span>
          </a>
          <a href="ff" className="nav_link">
            <span className="nav_name">
              <div className="search_but2">
                <img src={Chatgrey} width={25} className="pre_img2" />
                <img src={Chatred} width={25} className="hover_img2" />
              </div>
            </span>
          </a>

</div>
    




  <div className="l-navbar" id="nav-bar">
    <nav className="nav">
      <div>
        <div className="nav_list">
          <a href="oll" className="nav_link active">
            <span className="nav_name">
              <div className="search_but">
                <img src={Searchred} width={25} className="pre_img" />
                <img src={Searchred} width={25} className="hover_img" />
              </div>
            </span>
          </a>
          <a href="ff" className="nav_link">
            <span className="nav_name">
              <div className="search_but2">
                <img src={Chatgrey} width={25} className="pre_img2" />
                <img src={Chatred} width={25} className="hover_img2" />
              </div>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
  </div>
);

export default Nav;
