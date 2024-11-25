import React, { Component, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'
import BaseUrl from '../../utils/BaseUrl'

const CardHolder = () => {

// 1. whenever this Component mounts the async function fetchData() is called which triggers axios.
    useEffect(()=>{
        fetchData();
    },[]); 

    const fetchData = async ()=>{
        try{
            const response = await axios.post(`${BaseUrl}/api/test`,
                {
                    name:"Vatsal"
                }
            )
            console.log(response);
        }catch(error){
            console.log("Some error "+" "+error);
        }
    }

  return (
    <div className='CardHolder grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>

        <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>
    </div>
  )
}

export default CardHolder