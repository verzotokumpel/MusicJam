import React from 'react'

function Gdzie() {
  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl'>Gdzie?</h2>
        <div className='pt-6'>
          <div className='sm:flex items-center justify-center'>
          <h3 className='text-xl md:text-2xl lg:text-3xl sm:pr-10'>Instytut Kultury Miejskiej</h3>
          <a href='https://maps.app.goo.gl/nh3oQ9chZNzaTCcj9' target='_blank'>
            <button className='mt-2 sm:mt-0 font-semibold bg-red-600 rounded-md px-4 py-1 md:py-2 hover:scale-105 duration-500 text-xl md:text-2xl lg:text-3xl'>Zobacz na mapie</button>
          </a>
          </div>
          <div className='text-lg md:text-xl lg:text-2xl font-light'>
            <p className='pt-5'>Inspirujemy. Wspieramy. Tworzymy.</p>
            <p className='pt-5'>Działamy dla i z mieszkańcami dzielnic Gdańska. Interesuje nas kultura otwarta, związana z Gdańskiem i jego dzielnicami, dostępna dla mieszkańców i współtworzona razem z nimi</p>
            <p className='pt-5'>Podczas MusicJamu przygotujemy dla Was specjalne strefy do rozstawienia instrumentów i hałasowania! Nie mamy żadnych sąsiadów... którym hałas w sobotę mógłby przeszkadzać. </p>
            <p className='pt-5'>Zapewnimy wam miejsce do pracy, prąd, wi-fi... + jedzenie i picie.</p>
          </div>
        </div>
    </div>
  )
}

export default Gdzie
