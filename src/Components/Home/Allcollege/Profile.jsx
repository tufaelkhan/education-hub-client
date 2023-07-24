import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/profile')
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
                    <p className='text-2xl font-bold'>{item.name}</p>
                    <p className='text-2xl font-bold'>{item.college}</p>
              <p className='text-2xl font-bold'>Subject: {item.subject}</p>
              <p className='text-2xl font-bold'>Address: {item.address}</p>
              <p className='text-2xl font-bold'>Phone: {item.phone}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/profile/${item._id}`}><button className="btn btn-primary">Edit profile</button></Link>
                    </div>
                </div>
            </div>)
            }
           
        </div>
    );
};

export default Profile;