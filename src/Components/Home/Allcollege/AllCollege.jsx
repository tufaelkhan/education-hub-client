import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllCollege = () => {
    const [allcolleges, setAllColleges] = useState([])

    useEffect(()=>{
        fetch('https://education-hub-server-phi.vercel.app/colleges')
        .then(res => res.json())
        .then(data => {
          setAllColleges(data)
          // console.log(data);
        })
    },[])
    return (
        <div className='mt-5 mb-10'>
        <div className='text-center text-4xl'>
        
                    <h3 className='text-blue-600 font-bold'>Explore colleges</h3>
                    <h3><span className='text-blue-950 font-extrabold text-5xl'>Explore top</span><span className='text-blue-500 font-bold'> colleges</span></h3>
        </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        allcolleges.map((item) =>  <div key={item._id} className="card w-96 bg-base-100 shadow-xl mt-10">
                        <figure><img className='relative' src={item.image} alt="Shoes" /></figure>
                        <div className='flex justify-between absolute top-48 bg-blue-600 text-white w-full pr-5 pl-5 rounded-2xl '>

                          <p className=' font-bold'>Rating {item.rating}</p>
                          <p className='font-bold'>Research {item.number}</p>
                          </div>
                        <div className="card-body">
                          <h2 className="card-title">
                            {item.collegeName}
                          </h2>
                          <div className='absolute top-2 bg-blue-950 text-2xl rounded-full pr-2 pl-2 text-white'>Admission on {item.admissionDate}</div>
                          <div className='flex justify-between'>
                            <div>
                                <p className='text-blue-600 font-bold '>College Events</p>
                                <ul className='ml-3'>
                                    <li>{item.events[0]}</li>
                                    <li>{item.events[1]}</li>
                                    <li>{item.events[2]}</li>
                                </ul>
                            </div>
                            <div>
                            <p className='text-blue-600 font-bold '>College Events</p>
                                <ul className='ml-3'>
                                    <li>{item.researchHistory[0]}</li>
                                    <li>{item.researchHistory[1]}</li>
                                    <li>{item.researchHistory[2]}</li>
                                </ul>
                            </div>
                          </div>
                          
                          <p className='text-blue-500 font-bold'>Sports {item.sportsCategory}</p>
                          <div>
                        <Link to={`/allcollege/${item._id}`}>
                          <button className="btn btn-primary">Details</button>
                        </Link>
                          </div>
                        </div>
                      </div>)
                    }
                   
                </div>
                </div>
    );
};

export default AllCollege;