import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAddressCard, FaBook, FaBuilding, FaEdit, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';

const Profile = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(()=>{
        fetch('https://education-hub-server-phi.vercel.app/profile')
        .then(res => res.json())
        .then(data => {
          setProfiles(data)
        //   console.log(data);
        })
    },[])
    return (
        <div className='m'>

            {
                profiles.map((item) =>  <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-2xl font-bold flex'><span><FaUserAlt/> </span> {item.name}</p>
                    <p className='text-1xl font-bold flex items-center'><span className='mr-2'><FaBuilding/></span> {item.college}</p>
              <p className='text-2xl font-bold flex items-center'><span className='mr-2'><FaBook/></span> {item.subject}</p>
              <p className='text-2xl font-bold flex items-center'><span className='mr-2'><FaAddressCard/></span> {item.address}</p>
              <p className='text-2xl font-bold flex items-center'><span className='mr-2'><FaPhoneAlt/></span> {item.phone}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/profile/${item._id}`}><button className="btn btn-primary">Profile<FaEdit/> </button></Link>
                    </div>
                </div>
            </div>)
            }
           
        </div>
    );
};

export default Profile;