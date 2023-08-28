"use client"
import { ToggleTheme } from '@/components/toggle-theme'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex justify-center m-8 gap-7'>
        <h1 className='font-extrabold text-3xl'>
          Olá, PET!
        </h1>
        <ToggleTheme />
      </div>
    </>
  )
}
