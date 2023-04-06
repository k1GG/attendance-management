import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './search.css'
import firebaseDB from '../firebase'

const Search = () => {
    const [data, setData] = useState({})

    const useQuery = () =>{
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get('name');

    console.log(search);

    const searchData = (search) =>{
        firebaseDB.child("students").orderByChild("name").equalTo(search).on("value", (snapshot) =>{
            if(snapshot.val()){
                setData(snapshot.val());
            }
        })
    }

    useEffect(() =>{
        searchData(search)
    },[search])

  return (
    <div style={{marginTop:"50px"}}>
      <h1>Student Search Records</h1>
          <table className='table-styled'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Name</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Contact</th>
                    <th style={{textAlign:"center"}}>Roll no.</th>
                
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
                      
                    </tr>
                  )
                })}
            </tbody>
          </table>
    </div>
  )
}

export default Search