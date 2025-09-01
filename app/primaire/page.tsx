import Wrapper from '@/component/Wrapper'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <Wrapper>
      <div>
        <div className='flex flex-row justify-between'></div>
          {/* <div>Gauche</div>
          <div>Droite</div> */}
        <div></div>
      </div>
    </Wrapper>
  )
}