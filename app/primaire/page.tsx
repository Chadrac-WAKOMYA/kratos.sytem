import Wrapper from '@/component/Wrapper'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <Wrapper>
      <div>
        <div className='flex justify-between'>
          <div>Gauche</div>
          <div>Droite</div>
        </div>
      </div>
    </Wrapper>
  )
}