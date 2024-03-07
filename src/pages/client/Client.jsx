import React from 'react'
import Footer from '../../components/Footer'
import RouterRoot from './route/RouterRoot'

export const Client = () => {
  return (
    <div>
      <div className='client'>
        <RouterRoot />
      </div>
      <Footer />
    </div>
  )
}
