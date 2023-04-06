/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom'

const TeacherLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deptid, setDeptId] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };
  const handleDeptIdChange = (event) => {
    setDeptId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your login logic, such as sending the data to a backend API or storing it in the browser's local storage.
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Contact Number:', contactNumber);
    console.log('Dept ID:', deptid);
  };

  return (
    <div style={{marginTop:"50px"}}>
    <form 
    style={{
        margin:"auto",
        padding:"1rem",
        maxWidth:"450px",
        alignContent:"center",
      }}  onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Contact Number:
        <input type="tel" value={contactNumber} onChange={handleContactNumberChange} />
      </label>
      <br />
      <label>
        Department ID:
        <input type="text" value={deptid} onChange={handleDeptIdChange} />
      </label>
      <br />
      <Link to='/'>
      <button type="submit">Log In</button>
      </Link>
    </form>
    </div>
  );
};

export default TeacherLogin;
