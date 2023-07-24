import React from 'react';
import Header from './Header';
import College from './College';
import ImageGallary from './ImageGallary';
import HappyStudents from './HappyStudents';
import TotalReview from './TotalReview';

const Home = () => {
    return (
        <div>
         <Header></Header>
         <TotalReview/>
         <ImageGallary></ImageGallary>
         <College></College>
         <HappyStudents></HappyStudents>
        </div>
    );
};

export default Home;