import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createUser, googleSingIn, updateUserProfile} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = () =>{
    googleSingIn()
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value

    console.log(name, email, password, photo);
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      updateUserProfile(name, photo)
      .then(()=>{
        console.log('user data update');
      })
      .catch((error) => console.log(error))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'user create successfully',
        showConfirmButton: false,
        timer: 1500
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
    }
    return (
      <div className="hero bg-base-200">
      <div className="card-body w-1/3">
          <h2 className="text-3xl text-center font-bold">Please SignUp!</h2>
          <button onClick={handleGoogleLogin} className="btn btn-active btn-primary">Google Login</button>
          <form onSubmit={handleSignUp}>
              <div className="form-control w-full">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control w-full">
                  <label className="label">
                      <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" />
              </div>
              <div className="form-control w-full">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered"/>
              </div>
              <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="signup" />
              </div>
              <p className='mb-5'>Already have an Account
          <Link to='/signup'>
          <span className='text-primary mb-5 font-bold'> login?</span>
          </Link>
</p>
          </form>
        
      </div>
  </div>
    );
};

export default SignUp;