import React from 'react'
import { bodyText1 as Text1 } from './bodyText1'
import { bodyDesignation as Designation } from './bodyDesignation'

export const bodyContext = () => {
  return (
    <div className='title body'>
      <div className='content'>HI, i am
      <Text1/>
      <Designation/>
      </div>
    </div>
  )
}
