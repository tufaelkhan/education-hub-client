import React from 'react';

const Admission = () => {

    const handleAdmission = (event) =>{
        event.preventDefault()

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
                    <select className='select select-bordered'>

                    <option disabled selected>Select One</option>
                    <option value="option1">United States institute of Peace</option>
                    <option>Bangladesh skill development institute</option>
                    <option>Daffodil International college</option>
                    <option>Chandpur Technical college</option>
                    <option>Baburhat College</option>
                    <option>Puran Bazar Digree College</option>
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
                        <span className="label-text">Date</span>
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