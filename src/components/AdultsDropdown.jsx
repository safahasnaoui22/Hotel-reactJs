import React , {useContext} from 'react'


import { Menu } from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'
import { RoomContext } from '../context/RoomContext'

const lis = [

  { name: '1 Adult' },
  { name: '2 Adults' },
  { name: '3 Adults' },
  { name: '3 Adults' },

]
function AdultsDropdown() {
 const {adults , setAdults} = useContext(RoomContext)
  return (
    <Menu as='div' className="w-full h-full bg-white 
    relative
    " >
      {/** btn */}
<Menu.Button className='w-full h-full flex items-center
justify-between px-8
'>
 { adults}
  <BsChevronDown className='text-base text-accent-hover'/>
  </Menu.Button>

{/** items */}

<Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40' >

{
  lis.map((li , index) => {
    return <Menu.Item
    onClick={() => setAdults(li.name)}
    as='li' className='border-b last:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer' key={index}>
    {li.name}
  </Menu.Item>
  
  })
}

</Menu.Items>
    </Menu>
  )
}

export default AdultsDropdown