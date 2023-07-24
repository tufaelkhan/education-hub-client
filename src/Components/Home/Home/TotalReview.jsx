import React from 'react';
import { FaGraduationCap, FaSnowman, FaUniversity } from 'react-icons/fa';

const TotalReview = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl border-l-[3px]">
  <div className="card-body">
    <div className='flex justify-between text-blue-950 font-bold'>
    <h2 className="card-title">01</h2>
    <h2 className="card-title"><FaGraduationCap/> </h2>
    </div>
    <p className='text-blue-950 font-bold'>Global Certificate</p>
    <p>Global certificates include ISO certifications, TOEFL/IELTS language proficiency, internationally recognized educational program certificates, and health certificates for travel during the COVID-19 pandemic.</p>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl border-l-[3px]">
  <div className="card-body">
    <div className='flex justify-between text-blue-600 font-bold'>
    <h2 className="card-title">02</h2>
    <h2 className="card-title"><FaUniversity/> </h2>
    </div>
    <p className='text-blue-600 font-bold'>University Life</p>
    <p>University life encompasses a transformative period of higher education. It involves academic pursuits, personal growth, social interactions, and extracurricular activities, shaping students' future and fostering lasting memories and friendships.</p>
  </div>
</div>
            <div className="card w-96 bg-base-100 shadow-xl border-l-[3px]">
  <div className="card-body">
    <div className='flex justify-between text-orange-600 font-bold'>
    <h2 className="card-title">03</h2>
    <h2 className="card-title"><FaSnowman/> </h2>
    </div>
    <p className='text-orange-600 font-bold'>Profetional Mentor</p>
    <p>A professional mentor is an experienced and knowledgeable individual who provides guidance, support, and advice to someone seeking career development, personal growth, and professional success.</p>
  </div>
</div>
        </div>
    );
};

export default TotalReview;