import React from 'react'
import Card from './Card'

const CardHolder = () => {
  return (
    <div className='CardHolder grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>

        <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>
    </div>
  )
}

export default CardHolder