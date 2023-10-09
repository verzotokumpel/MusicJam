import React from 'react'
import {useState} from 'react'
import {BiSolidDownArrow, BiSolidUpArrow} from 'react-icons/bi'

function Faq() {

  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if(selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }


  const data = [
    {
      id: 1,
      question: 'Jaka jest cena za bilety?',
      ans: 'Opłata rejestracyjna wynosi symbolicznie 40 zł. Dzięki tej kwocie mamy pewność, że zajmujemy miejsca tylko dla osob zainteresowanych i przeznaczymy ją na nagrody dla uczestników',
    },{
      id: 2,
      question: 'Czy muszę mieć zespół?',
      ans: 'Rywalizacja odbywa się w max 5 osobowych zespołach. Nie jest jednak wymagane posiadanie drużyny przed rozpoczęciem wydarzenia. Wiele zespołów dobiera się na miejscu, w trakcie prezentacji pomysłów.',
    },{
      id: 3,
      question: 'Co będzie mi potrzebne?',
      ans: 'Przede wszystkim wygodne miejsce do pracy i potrzebne Ci instrumenty (chociaż możesz działać także wyłączenie przy wykorzystaniu komputera)',
    },{
      id: 4,
      question: 'Jaki jest temat przewodni hackathonu?',
      ans: 'Tematem przewodnim jest "Bit na Bajcie". Eksplorujemy dźwięki związane z technologią i komputerami.  Nie jest to warunek konieczny, jednak gorąco zachęcamy do wykorzystania tematu.',
    },{
      id: 5,
      question: 'Jak będzie wyglądała przestrzeń hackathonu?',
      ans: 'Hackathon odbędzie się w formie stacjonarnej w przestrzeni Instytutu Kultury Miejskiej w Gdańsku w Kunszcie Wodnym, przy ul. Targ Rakowy 11',
    },{
      id: 6,
      question: 'Czy muszę mieć doświadczenie w tworzeniu muzyki?',
      ans: 'Nie. I to jest piękne :) wystarczy chcieć. Możesz być grafikiem, muzykiem, albo elektronikiem. Wystarczy, że będziesz w stanie powiązać muzykę i technologie.',
    },{
      id: 7,
      question: 'Mam pytanie, na które nie ma tutaj odpowiedzi. Gdzie mogę je zadać?',
      ans: 'Zapraszamy do kontaktu na kontakt@codeme.pl',
    },

  ] 

  return (
    <div className='py-6 md:py-10 lg:py-16' id='FAQ'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>FAQ</h2>
        <div>
        {data.map((item, i) => (
          <div key={item.id} className='bg-gray-50 shadow-md py-4 my-4 rounded-xl cursor-pointer hover:scale-105 duration-500 hover:bg-red-400' onClick={() => toggle(i)}> 
            <div className='px-4 flex justify-between text-left'> 
              <h3 className='text-xl md:text-xl lg:text-2xl'>{item.question}</h3>
              <button>{selected === i ? <BiSolidUpArrow size={25}/> : <BiSolidDownArrow size={25}/>}</button>
            </div>
            <div className={selected === i ? 'px-4 font-light text-lg md:text-xl lg:text-2xl pt-5' : 'hidden'}> 
              <p>{item.ans}</p>
            </div>
          </div>
         ))}  
        </div>
    </div>
  )
}

export default Faq
