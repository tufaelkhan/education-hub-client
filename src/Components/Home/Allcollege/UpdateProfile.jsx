import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const profileData = useLoaderData([])
    console.log(profileData);

    const handleUpdate = (event) =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const address = form.address.value;
        const photo = form.photo.value;
        const college = form.college.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const updateData = {name, address, photo, college, subject, phone}
        console.log(updateData);

        //send data server
        fetch(`https://education-hub-server-phi.vercel.app/profile/${profileData._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'update profile',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="bg-base-200 p-24">
        <h2 className="text-3xl font-extrabold text-center">profile update</h2>
        <form onSubmit={handleUpdate}>
            {/* form name and college row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Select College</span>
                    </label>
                    <select name='college' defaultValue={profileData.college} className='select select-bordered'>

                    <option disabled selected>Select One</option>
                    <option value="United States institute of Peace">United States institute of Peace</option>
                    <option value="Bangladesh skill development institute">Bangladesh skill development institute</option>
                    <option value="Daffodil International college">Daffodil International college</option>
                    <option value="Chandpur Technical college">Chandpur Technical college</option>
                    <option value="Baburhat College">Baburhat College</option>
                    <option value="Puran Bazar Digree College">Puran Bazar Digree College</option>
                    </select>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Student Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={profileData.name} placeholder="Student name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form subject and photo row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="subject" defaultValue={profileData.subject} placeholder="subject Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={profileData.photo} placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form address and phone row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Address</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="address" placeholder="Address" defaultValue={profileData.address} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="phone" defaultValue={profileData.phone} placeholder="Phone Number" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <input type="submit" value="update submit" className="btn btn-info w-full text-2xl" />

        </form>
    </div>
    );
};

export default UpdateProfile;