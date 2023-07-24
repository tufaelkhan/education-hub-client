import React from 'react';
import { Slide } from "react-awesome-reveal";
const ImageGallary = () => {

    return (
        <div className='mt-10 mb-10'>
<div className='text-center mb-4'>

<h3 className='text-blue-600 font-bold'>Graguate Program</h3>
<h3><span className='text-blue-950 font-extrabold text-2xl'>College Image</span><span className='text-blue-500 font-bold'> Gallary</span></h3>
</div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://png.pngtree.com/background/20230425/original/pngtree-group-of-university-students-on-graduation-day-picture-image_2469813.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>United States institute of Peace</p>
  </div>
</div>
            </Slide>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>Bangladesh skill development institute</p>
  </div>
</div>
            </Slide>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src="https://media.istockphoto.com/id/482362583/photo/multi-ethnic-friends-excitedly-hold-diplomas-after-college-graduation.jpg?s=612x612&w=0&k=20&c=0u-Jm_50Rtdwl5n8vMZ-ROfxEg-BCSmg3ZKJJ_w5CWY=" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>Daffodil International college</p>
  </div>
</div>
            </Slide>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src="https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg?w=2000" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>Chandpur Technical college</p>
  </div>
</div>
            </Slide>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src="https://www.publichealth.columbia.edu/sites/default/files/styles/cola_media_1280_16_9/public/media/images/2016-03/currentstudents_commencement1.jpg?itok=Dxlw8Jwo" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>Puran Bazar Digree College</p>
  </div>
</div>
            </Slide>
            <Slide>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-52' src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?cs=srgb&dl=pexels-pixabay-267885.jpg&fm=jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className='text-2xl font-bold font-sans'>Baburhat College</p>
  </div>
</div>
            </Slide>

        </div>
        </div>
    );
};

export default ImageGallary;