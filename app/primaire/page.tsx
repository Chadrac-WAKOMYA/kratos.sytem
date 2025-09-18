import Wrapper from '@/component/Wrapper'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <Wrapper>
      <div>
        <div className='flex justify-end '>
          {/* <div ><span className='text-gray-700 md:text-2xl'>Pimaire</span></div> */}
          <div className='flex items-center'>
            <label htmlFor="options" className="text-gray-700 mr-2">
              Année Scolaire :
            </label>
            <select
              id="options"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="">Sélectionnez...</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}