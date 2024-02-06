import Image from 'next/image'
import React from 'react'

export default function Marketplace() {
  return (
    <section id='marketplace' className='section-marketplace flex'>
      <div className="card flex center">
        <Image
          src="/mother_card.png"
          alt="mother card"
          className='image'
          width={442}
          height={573}
          priority
        />
      </div>
      <div className="info flex flex-col center">
        <h2>Mary is the representation of our Mother</h2>
        <p>
          The one who contains us embracing her feminine nature
          and healing wounds that we carry with us. Mother Mary
          comes to us from the heart through an inner journey
          which takes place within every human being. Like any trip,
          we find symbols and features that identify us.
        </p>
      </div>
    </section>
  )
}
