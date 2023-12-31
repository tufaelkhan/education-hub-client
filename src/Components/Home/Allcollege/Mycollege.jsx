import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { data } from 'autoprefixer';
import { FaCalendarPlus } from 'react-icons/fa';

const Mycollege = () => {
    const {user } = useContext(AuthContext)
    const [admissions, setAdmissions] = useState([])

    const url = `https://education-hub-server-phi.vercel.app/student?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setAdmissions(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <h3 className='text-3xl text-blue-950 font-bold text-center m-3'>Admission Complete College: {data.name}</h3>
            <div className='items-center mx-auto ml-3 mx-auto'>

        {
            admissions.map((item) => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl mb-3">
            <figure><img src={item.photo} className='rounded-2xl ' alt="Shoes" /></figure>
            <div>
            <p className='text-1xl font-bold bg-blue-500 mr-5 ml-5 mt-2 rounded-2xl text-center justify-inline items-center flex mx-auto'><span className='mr-3 ml-24'><FaCalendarPlus/> </span><span>{item.date}</span></p>
            </div>
            <div className="card-body">
              <h2 className="card-title text-blue-950 text-2xl">Student Name: {item.name}</h2>
              <p className='text-2xl font-bold'>{item.college}</p>
              <p className='text-2xl font-bold'>Subject: {item.subject}</p>
              <p className='text-2xl font-bold'>Email: {item.email}</p>
              <p className='text-2xl font-bold'>Address: {item.address}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">review</button>
              </div>
            </div>
          </div>)
        }
            </div>
            
        </div>
    );
};

export default Mycollege;