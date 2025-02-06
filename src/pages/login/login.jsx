import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userlogin } from '../../apis/auth.js';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await userlogin(formData);
    if (data.code === 1) {
      Navigate('/shorten-url')
    }

  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center" >
      <div className='card p-4 shadow-lg' style={{width:'50vw', height:"60vh"}}>
        <h2 className=''>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <Link to='/register'>Register</Link>

      </div>
    </div>
  );
};

export default LoginForm;
