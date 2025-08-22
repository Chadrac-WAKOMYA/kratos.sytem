import Wrapper from '@/component/Wrapper'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <Wrapper>
      {/* <div className='flex items-center justify-center min-h-screen'>page</div> */}
      <div className='flex justify-between'>
        <h1>Primaire</h1>
        <input type="text" />
      </div>
      <div></div>
    </Wrapper>
  )
}