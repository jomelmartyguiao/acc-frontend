import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-acc.png';
import header from '../../assets/images/header1.jpg';

export const Navigation = ({ from, region }) => {
  return (
  <div className="header-wrapper transition">
		<div className="header-nav transition">
			<nav className="navbar navbar-expand-lg navbar-light nav-bg">
			  <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav ml-auto">
			      <li className="nav-item active">
			        <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
			      </li>
			      <li className="nav-item">
			        <Link className="nav-link" to="/central">Central</Link>
			      </li>
			      <li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown"
								aria-haspopup="true" aria-expanded="false">
			          Region
			        </a>
			        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
			          <Link className="dropdown-item" to="/region/I">Region I</Link>
			          <Link className="dropdown-item" to="/region/II">Region II</Link>
			          <Link className="dropdown-item" to="/region/III">Region III</Link>
			          <div className="dropdown-divider"></div>
			          <Link className="dropdown-item" to="/">Something else here</Link>
			        </div>
			      </li>
						<li className="nav-item">
			        <Link className="nav-link" to="/">Readings</Link>
			      </li>
			       <li className="nav-item">
			        <Link className="nav-link" to="/">Contact Us</Link>
			      </li>
			     
			    </ul>
			  </div>
			</nav>
		</div>
		{from === 'home' ? 
			<div className="header-image">
				<p className="header-title">Apostolic Catholic Church</p>
				<a href="#welcome" className="btn btn-outline-warning header-btn">See More</a>
				<img src={header} alt="header" />
			</div>
		: <div className="header-ip">
				<p className="header-title">{from} {region}</p>
				<img src={header} alt="header" />
			</div>}	
	</div>
  );
}