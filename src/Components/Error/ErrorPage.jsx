import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='mx-auto'>
        <h1>404 - Page Not Found</h1>
        <img className='w-full'
          src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" 
          alt="Error"
        //   style={{ width: '500px', height: 'auto' }}
        />
        <Link to='/'><button className="btn btn-primary justify-center mx-auto">Go Back Home</button></Link>
        <p>Oops! The page you`re <span>{status || 404}</span> looking for does not exist.</p>
        <h3>{error?.message}</h3>
      </div>
    );
};

export default ErrorPage;