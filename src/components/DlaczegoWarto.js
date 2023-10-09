import React from 'react'

function DlaczegoWarto() {
  const items = [
    {
      id: 1,
      arg: 'Świetni goście',
      text: 'Poznasz nie tylko doborowe towarzystwo osób, dla których muzyka to coś więcej. Podczas MusicJam pojawią się także specjalni goście, którzy tą tematyką zajmują się na co dzień. To doskonała okazja by złapać inspiracje i nowe kontakty.',
    },
    {
      id: 2,
      arg: 'Warsztaty',
      text: 'Dołącz do warsztatów, które przygotowaliśmy dla Ciebie jeszcze przed wydarzeniem. Dzięki nim będziesz miał(a) okazję przygotować się wcześniej i dowiedzieć się jak korzystać z ciekawych narzędzi do tworzenia muzyki.',
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
      text: 'Nie są one najważniejsze, ale zawsze się pojawiają 😉 dlatego oprócz dobrej zabawy warto też zadbać o efekt końcowy swoich projektów',
    },
    {
      id: 6,
      arg: 'Afterparty',
      text: 'Tuż po zakończeniu hackathonu rozpoczynamy afterparty, na którym nie zabraknie profesjonalnej muzyki oraz celebrowania zwycięzców.',
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
