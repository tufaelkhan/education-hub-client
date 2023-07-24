import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn, googleSingIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = ()=>{
      googleSingIn()
    }
    const handleLogin = event =>{
        event.preventDefault()

    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    console.log(email, password);
    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'user login successfully',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, {replace: true})
    })
    .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col ">
      <h1 className="text-3xl font-bold">Login now!</h1>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <button onClick={handleGoogleLogin} className="btn btn-active btn-primary">Google Login</button>
        <form onSubmit={handleLogin}>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='mb-5'>New to Admission hub
          <Link to='/signup'>
          <span className='text-primary mb-5 font-bold'> Create account?</span>
          </Link>
</p>
        <div className="form-control">
<input className="btn btn-primary" type="submit" value="login" />
        </div>
      </div>
        </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;