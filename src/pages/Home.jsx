
import React, { useState } from 'react' 
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import firebaseDB from '../firebase'
import './home.css'
const Home = () => {
    const [data, setdata] = useState({})

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

const onDelete = (id) =>{
  if(window.confirm("Are you sure you want to delete student data")){
    firebaseDB.child(`students/${id}`).remove((err) =>{
      if(err){
        toast.error(err)
      }
      else{
        toast.success("Student record deleted succesfully!")
      }
    });
  }
};


  return (
    <div style={{marginTop:"50px"}}>
      <h1>Student Records</h1>
          <table className='table-styled'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Roll no.</th>
                    <th style={{textAlign:"center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((id, index) =>{
                  return(
                    <tr key={id}>
                      <th>{index + 1}</th>
                      <td>{data[id].name}</td>
                      <td>{data[id].email}</td>
                      <td>{data[id].contact}</td>
                      <td>{data[id].rollno}</td>
                      <td>
                        <Link to={`/update/${id}`}>
                          <button className='btn btn-edit'>Edit</button>
                        </Link>

                          <button className='btn btn-delete' onClick={() => onDelete(id)}>delete</button>

                        <Link to={`/view/${id}`}>
                          <button className='btn btn-view'>view</button>
                        </Link>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
    </div>
  )
}

export default Home