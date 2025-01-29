import React, { useState } from 'react'
import Header from './Header'
import Faq from './Faq';


export default function Home({ faqs }) {

    console.log(faqs);

    const [currentFaq, setCurrentFaq] = useState(faqs[0].id);

    const [heading, setHeading] = useState('Welcome to WsCube Tech');
    const [tagline, setTagline] = useState('Top Mentorship Programs in Tech, Marketing, & Data- Designed and Delivered by industry maestros.');

  return (
    <div>

        {/* Child Compent for Header */}
        {/* <Header head={heading} tag={tagline} description ="Welcome to WsCube Tech"/> */}

        <Header head={heading} description ="Welcome to WsCube Tech">{tagline}</Header>

        <div className="container">
          <div className="row">
            <h1>Frequently Asked Questions</h1>
          </div>
          {
            faqs.map((value, index) => {
              return (
                <Faq questions={value} number={index} key={index} currentFaq={currentFaq} setCurrentFaq={setCurrentFaq}></Faq>
              )
            })
          }
          
        </div>
    </div>
  )
}
