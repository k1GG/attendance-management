import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebaseDB from '../firebase'
import './view.css'
const View = () => {
    const [student, setStudent] = useState({})

    const {id} = useParams()

    useEffect(() => {
        firebaseDB.child(`students/${id}`).get().then((snapshot) =>{
            if(snapshot.exists()){
                setStudent({...snapshot.val()})
            }
            else{
                setStudent({})
            }
        }) 
    },[id])

    console.log(student);
    
  return (
    <div style={{marginTop:"50px"}}>
        <div className='card'>
            <div  className="card-header">
                <p>Student Details</p>
            </div>
            <div className='container'>
                <strong>ID: </strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name: </strong>
                <span>{student.name}</span>
                <br />
                <br />
                <strong>Email: </strong>
                <span>{student.email}</span>
                <br />
                <br />
                <strong>Contact: </strong>
                <span>{student.contact}</span>
                <br />
                <br />
                <strong>Roll no.: </strong>
                <span>{student.rollno}</span>
                <br />
                <br />
                <strong>PR no.: </strong>
                <span>{student.prno}</span>
                <br />
                <br />
                <strong>SEM no.: </strong>
                <span>{student.semno}</span>
                <br />
                <br />
                <strong>Academic ID: </strong>
                <span>{student.acaid}</span>
                <br />
                <br />
                <Link to='/'>
                <button className='btn btn-edit'>Back</button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default View