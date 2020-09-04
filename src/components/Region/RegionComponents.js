import React from 'react';
import { Link } from 'react-router-dom';

// import cta1 from '../../assets/images/cta1.jpg';
// import cta2 from '../../assets/images/cta2.jpg';
import cta3 from '../../assets/images/cta3.jpg';
import vid from '../../assets/images/sampleVideo.mp4';

export const RegionBody = ({ region }) => {
  const cta1 = localStorage.getItem('image1');
  const regionStorage = localStorage.getItem('region');
  const title = localStorage.getItem('title');
  const description = localStorage.getItem('description');
  return (
    <div className="body-ip">
      <div className="body-wrapper">
      <div className="row">
        <div className="col-md-8">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to='/home'>Home</Link></li>
              <li className="breadcrumb-item">Regions</li>
              <li className="breadcrumb-item active" aria-current="page">Region {region}</li>
            </ol>
          </nav>
          <div className="cta-wrapper">
            {regionStorage === 'true' && <div className="row mb-2">
              <div className="col-lg-4 col-md-4 post-thumbnail transition">
                <div className="cta-img-holder transition">
                  <img src={cta1} style={{ width: '310', height: 'auto' }} alt="ct1" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <p className="cta-title title transition">{title}</p>
                <p className="publish-date-lbl body-text">Published on <span>August 01,2020</span></p>
                <p className="body-text">{description}</p>
                <Link to="/read-more" className="btn btn-outline-warning btn-ip-more">Read More</Link>
              </div>
            </div>}
            <div className="row mb-2">
              <div className="col-lg-4 col-md-4 post-thumbnail transition">
                <div className="cta-img-holder transition">
                  {/* <img src={cta2} style={{ width: '310', height: 'auto' }} alt="ct2" /> */}
                  <video src={vid} width="310" height="251" autoPlay="true" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <p className="cta-title title transition">Sample Video</p>
                <p className="publish-date-lbl body-text">Published on <span>August 01,2020</span></p>
                <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/read-more/video" className="btn btn-outline-warning btn-ip-more">Read More</Link>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-lg-4 col-md-4 post-thumbnail transition">
                <div className="cta-img-holder transition">
                  <img src={cta3} style={{ width: '310', height: 'auto' }} alt="ct3" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
                <p className="cta-title title transition">Title 1 </p>
                <p className="publish-date-lbl body-text">Published on <span>August 01,2020</span></p>
                <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="/#" style={{ pointerEvents: 'none' }} className="btn btn-outline-warning btn-ip-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="ip-sidebar">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Announcements <i className="fa fa-bullhorn icon-announcement"></i></h5>
                <br />
                <h6 className="card-subtitle text-muted">Announcement #1</h6>
                <small className="body-text">Posted 6 hours ago</small>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br />
                <h6 className="card-subtitle text-muted">Announcement #1</h6>
                <small className="body-text">Posted 6 hours ago</small>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}