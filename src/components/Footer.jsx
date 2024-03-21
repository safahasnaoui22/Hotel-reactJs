import React from 'react'
import LogoWhite from '../assets/img/logo-white.svg'
function Footer() {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex 
      justify-between
      '>
        <a href='/'><img src={LogoWhite} /></a>
      
      copyright &copy; 2024. created by safa 
      </div>
    </footer>
  )
}

export default Footer