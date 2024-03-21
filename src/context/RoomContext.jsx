import React, { createContext, useEffect, useState } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState(roomData);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 kids');
  const [loading , setLoading] = useState(false)
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]); 
  
  // Add adults and kids to the dependency array
const  handleClick = (e) => {
  e.preventDefault()
  setLoading(true)
 
  //filter rooms base sur total
  const newRooms = roomData.filter((room) => {
    return total <= room.maxPerson
  })
  setTimeout(() => {
    setRooms(newRooms)
    setLoading(false)
  } , 3000)

}

  return (
    <RoomContext.Provider value={{ rooms, adults, 
    setAdults, kids, setKids , loading , handleClick }}>
      {children}
    </RoomContext.Provider>
  );
}

export default RoomProvider;
