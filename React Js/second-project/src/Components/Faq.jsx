import React from 'react'

export default function Faq({questions, number, currentFaq,setCurrentFaq}) {

    const setFaqValue = (id) => {
        setCurrentFaq(id);
    };

  return (
    <div className='questionanswer'>
        <div className='question' onClick={() => setFaqValue(questions.id)}>
            <h2> { number+1 }. {questions.title } <span>{ (currentFaq == questions.id) ? '-' : '+' }</span></h2>
        </div>
        <div className={ (currentFaq == questions.id) ? 'answer' : 'answer none' }>
            <p>{ questions.body }</p>
        </div>
    </div>
  )
}
