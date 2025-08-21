import { GraduationCap } from 'lucide-react'
import React from 'react'

type Props = {}

export default function LogoSystemV({}: Props) {
  return (
    <div className='flex items-center flex-col'>
        <div className='bg-accent-content text-accent rounded-full p-2'>
            <GraduationCap className='w-6 h-6'/>
        </div>
        <span className='ml-2 font-bold text-2xl'>Kratos.<span className='text-accent'>System</span></span>
    </div>
  )
}