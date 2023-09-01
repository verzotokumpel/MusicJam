import React from 'react'

function DlaczegoWarto() {
  const items = [
    {
      id: 1,
      arg: 'Świetni goście',
      text: '',
    },
    {
      id: 2,
      arg: 'Warsztaty',
      text: '',
    },
    {
      id: 3,
      arg: 'Teambulding',
      text: 'dla osób, które chcą działać z innymi (nawet jeśli się nie znają)',
    },
    {
      id: 4,
      arg: 'Dobra zabawa',
      text: 'Bo na MusicJam zawsze wszystko gra.',
    },
    {
      id: 2,
      arg: 'Nagrody',
      text: '',
    },
    {
      id: 6,
      arg: 'Afterparty',
      text: '',
    }
  ]


  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl pb-2'>Dlaczego warto wziąć udział?</h2> 
      {items.map((item) => (
        <div key={item.id} className='py-2 md:py-4 lg:py-6'>
            <h3 className='text-xl md:text-2xl lg:text-3xl'>{item.arg}</h3>
            <p className='text-lg md:text-xl lg:text-2xl font-light'>{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export default DlaczegoWarto
