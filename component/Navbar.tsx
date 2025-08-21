'use client';
import Link from 'next/link';
import {usePathname } from 'next/navigation'
import React, { use } from 'react'
import LogoSystemH from './LogoSystemH';
import { SquarePower } from 'lucide-react';

type Props = {}

export default function Navbar({}: Props) {

    const pathName = usePathname();

    // Define the navigation links
    const navLinks = [
        {href:"/maternelle", label: "Maternelle"},
        {href:"/primaire", label: "Primaire"},
        {href:"/secondaire", label: "Secondaire"},
    ]

    const isActiveLink = (href: string) => pathName.replace(/\/$/, '') === href.replace(/\/$/, '');

    const renderLinks = (classNames:string) => 
        navLinks.map(({href, label})=>{
            return <Link href={href} key={href} className={`btn-sm ${classNames} ${isActiveLink(href)?'btn-accent':''}`}>{label}</Link>
        })

  return (
    <div className='border-b border-base-300 px-5 md:px-[5%] py-4'>
            <div className='flex items-center justify-between'>
                <LogoSystemH />
                <div className='flex items-center space-x-2'>
                    {renderLinks('btn')}
                    <Link 
                      href={'/'}
                      className='btn btn-sm'
                      style={{ color: 'red' }}
                    >
                      <SquarePower className='w-full' style={{ color: 'red' }}/>
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
  )
}