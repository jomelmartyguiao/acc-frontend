import React from 'react';

import welcome from '../../assets/images/welcome.jpg';
import cta1 from '../../assets/images/cta1.jpg';
import cta2 from '../../assets/images/cta2.jpg';
import cta3 from '../../assets/images/cta3.jpg';
import first from '../../assets/images/first-reading.jpg';
import second from '../../assets/images/second-reading.jpg';

export const Welcome = () => {
  return (
    <div className="welcome-section" id="welcome">
      <div className="row">
        <div className="col-lg-6 col-md-6 p-0">
          <img className="welcome-img" alt="welcome" src={welcome} />
        </div>
        <div className="col-lg-6 col-md-6 welcome-text">
          <p className="welcome-title title">Welcome to Apostolic Catholic Church</p>
          <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
	</div>
  );
}

export const Misson = () => {
  return(
    <div className="mv-wrapper">
      <div className="row">
        <div className="col-md-6 mv-col">
          <p className="mv-title title">Our Mission</p>
          <p className="mv-body body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-md-6 mv-col">
          <p className="mv-title title">Our Vision</p>
          <p className="mv-body body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
}

export const Card = () => {
  return(
    <div className="container">
			<div className="cta-wrapper">
				<div className="row">
					<div className="col-lg-4 col-md-4 cta-col transition">
						<p className="cta-title title transition">Title 1 </p>
						<div className="cta-img-holder transition">
							<img src={cta1} alt="cta1" />
						</div>
					</div>
					<div className="col-lg-4 col-md-4 cta-col transition">
						<p className="cta-title title transition">Title 1 </p>
						<div className="cta-img-holder transition">
							<img src={cta2} alt="cta2" />
						</div>
					</div>
					<div className="col-lg-4 col-md-4 cta-col transition">
						<p className="cta-title title transition">Title 1 </p>
						<div className="cta-img-holder transition">
							<img src={cta3} alt="cta3" />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export const Readings = () => {
  return(
    <div className="readings-wrapper">
			<div className="container">
				<div className="readings-inner">
					<div className="row">
						<div className="col-md-6 readings-col">
							<div className="card" >
							  <img className="card-img-top" src={first} alt="Cardimage" />
							  <div className="card-body">
							    	<p className="title reading-lbl">First Reading</p>
									<p className="reading-verse">JER 26:1-9</p>
									<p className="body-text">
										In the beginning of the reign of Jehoiakim,
										son of Josiah, king of Judah,
										this message came from the LORD:  
										Thus says the LORD:
										Stand in the court of the house of the LORD
										and speak to the people of all the cities of Judah
										who come to worship in the house of the LORD;
										whatever I command you, tell them, and omit nothing.
										Perhaps they will listen and turn back,
										each from his evil way,
										so that I may repent of the evil I have planned to inflict upon them
										for their evil deeds.
										Say to them:  Thus says the LORD:
										If you disobey me,
										not living according to the law I placed before you
										and not listening to the words of my servants the prophets,
										whom I send you constantly though you do not obey them,
										I will treat this house like Shiloh,
										and make this the city to which all the nations of the earth
										shall refer when cursing another.

										Now the priests, the prophets, and all the people
										heard Jeremiah speak these words in the house of the LORD.
										When Jeremiah finished speaking
										all that the LORD bade him speak to all the people,
										the priests and prophets laid hold of him, crying,
										“You must be put to death!
										Why do you prophesy in the name of the LORD:
										‘This house shall be like Shiloh,’ and
										‘This city shall be desolate and deserted’?”
										And all the people gathered about Jeremiah in the house of the LORD.
									</p>
							    	<a href="/#" style={{ pointerEvents: "none" }} className="btn btn-outline-warning">Read More</a>
							  </div>
							</div>
						</div>
						<div className="col-md-6 readings-col">
							<div className="card" >
							  <img className="card-img-top" src={second} alt="Cardsimage" />
							  <div className="card-body">
							    	<p className="title reading-lbl">Second Reading</p>
									<p className="reading-verse">JER 26:1-9</p>
									<p className="body-text">
										In the beginning of the reign of Jehoiakim,
										son of Josiah, king of Judah,
										this message came from the LORD:  
										Thus says the LORD:
										Stand in the court of the house of the LORD
										and speak to the people of all the cities of Judah
										who come to worship in the house of the LORD;
										whatever I command you, tell them, and omit nothing.
										Perhaps they will listen and turn back,
										each from his evil way,
										so that I may repent of the evil I have planned to inflict upon them
										for their evil deeds.
										Say to them:  Thus says the LORD:
										If you disobey me,
										not living according to the law I placed before you
										and not listening to the words of my servants the prophets,
										whom I send you constantly though you do not obey them,
										I will treat this house like Shiloh,
										and make this the city to which all the nations of the earth
										shall refer when cursing another.

										Now the priests, the prophets, and all the people
										heard Jeremiah speak these words in the house of the LORD.
										When Jeremiah finished speaking
										all that the LORD bade him speak to all the people,
										the priests and prophets laid hold of him, crying,
										“You must be put to death!
										Why do you prophesy in the name of the LORD:
										‘This house shall be like Shiloh,’ and
										‘This city shall be desolate and deserted’?”
										And all the people gathered about Jeremiah in the house of the LORD.
									</p>
							    	<a href="/#" style={{ pointerEvents: "none" }} className="btn btn-outline-warning">Read More</a>
							  </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}