import React from 'react';
import '../style/Carousel.css';
import Carousel from 'react-responsive-carousel';

const ProjectCarousel = () => {
    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="../assets/vidly.png" alt="vidly platform to connect globetrotters with videographers"/>
                    <h2>Vidly</h2>
                    <p className="preview-one">C2C Platform for Travellers & Videographers</p>
                </div>
                <div>
                    <img src="../assets/got-macbook-view.png"/>
                    <p className="preview-two">Game Of Thrones Fanpage</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="preview-three">TeOra Teas</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="preview-four">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="preview-five">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="preview-six">Legend 6</p>
                </div>
            </Carousel>
    )
}


export default ProjectCarousel