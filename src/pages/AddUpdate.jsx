
import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect } from 'react'
import firebaseDB from '../firebase';
import './Addupdate.css'

const initialState ={
    name: '',
    email: '',
    contact: '',
    rollno: '',
    prno: '',
    semno: '',
    acaid: '',
}
const AddUpdate = () => {
   const [state, setState] = useState(initialState)
   const [data, setdata] =useState(initialState)
   const navigate = useNavigate()
   const {id} = useParams()

   const {name, email, contact, rollno, prno, semno, acaid} = state

   useEffect(() =>{
    firebaseDB.child('students').on("value", (snapshop) =>{
       if(snapshop.val() != null){
           setdata({...snapshop.val()})
       }else{
           setdata({})
       }
    })
    return () =>{
       setdata({})
    }
},[]);

useEffect(() =>{
  if(id){
     setState({...data[id]})
  }
  else{
    setState({...initialState})
  }
},[id, data])

   
   const handleInputChange = (e) =>{
     const {name, value} = e.target;
     setState({...state, [name]: value})
   }
  
   const handleSubmit = (e) =>{
    e.preventDefault();
    if(!id){
      if(!name || !email || !contact || !rollno  || !prno  || !semno  || !acaid ){
         toast.error("All fields are required");
      }else{
        firebaseDB.child('students').push(state, (err) => {
           if(err) {
              toast.error(err);
           }else{
             toast.success("Student added succesfully")
           } 
        });
      }
    }
      else{
        firebaseDB.child(`students/${id}`).set(state, (err) =>{
           if(err){
            toast.error(err)
           }
           else{
            toast.success("student record updated sucessfully!")
           }
        })
      }
        setTimeout(() => navigate('/'), 500)
   };

   return (
    <div style={{marginTop:"50px"}}>
      <form  style={{
        margin:"auto",
        padding:"1rem",
        maxWidth:"450px",
        alignContent:"center",

      }} onSubmit={handleSubmit}>
        
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='Name..' id='name' value={name  || ""} name='name'  onChange={handleInputChange} />

        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Email..' id='email' value={email  || ""} name='email' onChange={handleInputChange} />

        <label htmlFor='contact'>contact</label>
        <input type='number' placeholder='Contact..' id='contact' value={contact  || ""} name='contact'  onChange={handleInputChange} />

        <label htmlFor='Roll no.'>Roll no.</label>
        <input type='text' placeholder='Roll no...' id='rollno' value={rollno  || ""} name='rollno'  onChange={handleInputChange} />

        <label htmlFor='PR no.'>PR no.</label>
        <input type='number' placeholder='PR no...' id='prno' value={prno  || ""} name='prno'  onChange={handleInputChange} />

        <label htmlFor='SEM no.'>SEM no.</label>
        <input type='number' placeholder='SEM no...' id='semno' value={semno  || ""} name='semno'  onChange={handleInputChange} />

        <label htmlFor='academic id.'>Academic ID</label>
        <input type='number' placeholder='Academic ID...' id='acaid' value={acaid  || ""} name='acaid'  onChange={handleInputChange} />

        <input type="submit" value={id ? "Update" : "Save"} className='sub' />   
      </form>
    </div>
  )
}

export default AddUpdate