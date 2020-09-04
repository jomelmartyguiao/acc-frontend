import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import vid from '../../assets/images/sampleVideo.mp4';

export const ReadMore = ({ from }) => {
  console.log("FROM: ", from)
  const cta1 = localStorage.getItem('image1');
  const cta2 = localStorage.getItem('image2');
  const title = localStorage.getItem('title');
  const description = localStorage.getItem('description');
  const items = [
    {
      src: cta1,
      // altText: 'Slide 1',
      // caption: 'Slide 1'
    },
    {
      src: cta2,
      // altText: 'Slide 2',
      // caption: 'Slide 2'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: '80vh', height: '50vh' }} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="body-ip">
      <div className="body-wrapper">
        <div className="row mt-4 mb-3">
          <div className="col-md-12" style={{ textAlign: 'center' }}>
            <h1>{from === 'video' ? 'Sample Video' : title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center">
            {from === 'video' ?
              <div style={{ width: '45vh', height: 'auto', margin: '0 auto' }}>
                <video src={vid} width="310" height="251" autoPlay="true" />
              </div>
            : <div style={{ width: '80vh', height: 'auto', margin: '0 auto' }}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
            </div>}
          </div>
        </div>
        <div className="row mt-4 mb-2">
          <div className="col-md-6 offset-md-3" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5em' }}>{from === 'video' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' : description}</p>
          </div>
        </div>
      </div>
    </div>  
  );
}