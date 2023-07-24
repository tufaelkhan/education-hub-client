import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation_lkdh4j7p.json'

const Header = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Lottie options={lottieOptions}></Lottie>
    <div>
      <h1 className="text-5xl font-bold">"Empowering Minds, Building Futures"</h1>
      <p className="py-6">A transformative college experience that nurtures potential, fosters creativity, and instills leadership. Join us to shape tomorrow's leaders and create a brighter future together.</p>
      <button className="btn btn-primary mr-6">Get Admission</button>
      <button className="btn btn-secondary">see institute</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;