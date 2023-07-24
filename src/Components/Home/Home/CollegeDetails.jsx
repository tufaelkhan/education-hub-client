import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const item = useLoaderData()
    console.log(item);
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div>

      <h1 className="text-5xl font-bold">{item.collegeName}</h1>
      <p className=""><span className='text-2xl font-bold text-blue-700'>Admission Process:</span> {item?.admissionProcess}</p>
      <p className=""><span className='text-2xl font-bold text-blue-800'>Sports Category: </span>{item?.sportsCategory}</p>
      <p className=""><span className='text-2xl font-bold text-blue-900'>Sports Facility: </span>{item?.sportsFacility}</p>
      <p className=""><span className='text-2xl font-bold text-blue-950'>Events Facility:</span> {item?.eventsFacility}</p>
      
      <div className='flex justify-evenly mt-4 mb-3'>
                    <div className=''>
                        <p className='text-blue-600 font-bold '>College Events</p>
                        <ul className='ml-3'>
                            <li>{item.events[0]}</li>
                            <li>{item.events[1]}</li>
                            <li>{item.events[2]}</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-blue-600 font-bold '>College Events Date</p>
                        <ul className='ml-3'>
                            <li>{item?.eventDetails?.annualFest}</li>
                            <li>{item?.eventDetails?.orientationDay}</li>
                            <li>{item?.eventDetails?.scienceFair}</li>
                        </ul>
                    </div>
                    <div className=''>
                    <p className='text-blue-600 font-bold '>Research works</p>
                        <ul className='ml-3'>
                            <li>{item.researchHistory[0]}</li>
                            <li>{item.researchHistory[1]}</li>
                            <li>{item.researchHistory[2]}</li>
                        </ul>
                    </div>
                  </div>
      <button className="btn btn-primary">Get Admission</button>
    </div>
  </div>
</div>
    );
};

export default CollegeDetails;