import React from 'react';
import { json } from 'react-router-dom';
import Swal from 'sweetalert2';

const Admission = () => {

    const handleAdmission = (event) =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const address = form.address.value;
        const photo = form.photo.value;
        const college = form.college.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const phone = form.phone.value;
        const newStudent = {name, date, address, photo, college, email, subject, phone}
        console.log(newStudent);

        //send data server
        fetch('https://education-hub-server-phi.vercel.app/student',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStudent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'admission complete',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className="bg-base-200 p-24">
        <h2 className="text-3xl font-extrabold text-center">Admission Form</h2>
        <form onSubmit={handleAdmission}>
            {/* form name and college row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Select College</span>
                    </label>
                    <select name='college' className='select select-bordered'>

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
                        <input type="text" name="name" placeholder="Student name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form subject and email row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="subject" placeholder="subject Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
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
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <label className="input-group">
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url date row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <label className="input-group">
                        <input type="date" name="date" placeholder="date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="form submit" className="btn btn-info w-full text-2xl" />

        </form>
    </div>
    );
};

export default Admission;