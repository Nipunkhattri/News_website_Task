import React from 'react'
import loading from '../assests/loading.gif'

export const Spinner = () => {
  return (
    <div className='text-center my-3'>
    <img src={loading} alt="loading"/>
  </div>  )
}
