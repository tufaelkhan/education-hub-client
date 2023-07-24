import React from 'react';
import Header from './Header';
import College from './College';
import ImageGallary from './ImageGallary';
import HappyStudents from './HappyStudents';

const Home = () => {
    return (
        <div>
         <Header></Header>
         <ImageGallary></ImageGallary>
         <College></College>
         <HappyStudents></HappyStudents>
        </div>
    );
};

export default Home;