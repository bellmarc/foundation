import React from 'react';
import '../style/PortfolioList.css';
import sample from '../assets/got-macbook-view.png';
import sampleTwo from '../assets/lgc-social.png';


const PortfolioList = () => {
    return (
        <div>
            <ul className="grid-list">
                <li className="item repo">
					<a href="/portfolio/whygowild" className="screen">
							<div className="bar">
								<h2>WWF Why Go Wild </h2>
								<i></i>
							</div>
						<section className="main">
								<div className="back">
								<img src={ sample } className="img-one" alt="sample of my website work"/>
								</div>
						</section>
							<div className="tags">
								<div>
									<ul>
											<li>MONGOOSE</li>
											<li>JEST</li>

											<li>REACTJS</li>
											<li>NODEJS</li>
											<li>EXPRESS</li>
											<li>MONGODB</li>

										<li className="hidden">WEBSITE</li>
										<li className="hidden">FRONT-END</li>
										<li className="hidden">HTML5</li>
										<li className="hidden">CSS3</li>
										<li className="hidden">REQUIREJS</li>
										<li className="hidden">SPA</li>
									</ul>
								</div>
						</div>
								<div className="imgs">
									<img src={ sample } className="img-one" alt="sample of my website work"/>
								</div>
					</a>
				</li>
            </ul>
        </div>
    )
}


export default PortfolioList