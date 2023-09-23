import React from 'react'

function Harmonogram() {

  const events = [
    {
      time: 'Piątek 18:00 - 19:00',
      text: 'Warsztaty',
    },
    {
      time: 'Sobota 10:00 - 10:20',
      text: 'Rozpoczęcie',
    },
    {
      time: 'Sobota 10:20 - 11:00',
      text: 'Teambuilding',
    },
    {
      time: 'Sobota 11:00 - 18:00',
      text: 'Działamy: praca w zespołach',
    },
    {
      time: 'Sobota 18:00 - 19:30',
      text: 'Finał i prezentacja projektów',
    },
    {
      time: 'Sobota 19:30 - 20:00',
      text: 'Wręczenie nagród i zakończenie',
    },
    {
      time: 'Sobota 21:00',
      text: 'After Party - Koncert',
    },
  ]


  return (
    <div id="Harmonogram" className='py-6 md:py-10 lg:py-16'>
    <h2 className='text-2xl md:text-3xl lg:text-4xl'>Harmonogram</h2>
    <div>
      {events.map((item, i) => (
        <div key={i} className='bg-gray-50 my-4 py-2 rounded-xl shadow-md'>
          <h3 className='pl-2 text-xl md:text-2xl lg:text-3xl'>{item.time}</h3>
          <p className='pl-2 text-lg md:text-xl lg:text-2xl font-light'>{item.text}</p>
        </div>
      ))}
    </div>
    <div className='sm:flex text-xl md:text-2xl lg:text-3xl pt-6 justify-center items-center'>
      <p className='mt-2 sm:pr-2'>Nie ma na co czekać!</p>
      <a href="https://app.evenea.pl/event/musicjam2023/" target='_blank' >
        <button className='sm:mt-0 font-semibold bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-3xl'>Weź udział</button>
      </a>
    </div>
    </div>
  )
}

export default Harmonogram
