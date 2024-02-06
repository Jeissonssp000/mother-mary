import Image from 'next/image'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <section id='home' className="section-home flex flex-col">
      <div className="container flex">
        <div className="info flex flex-col gap">
          <h1>Collect Mother Mary art nft</h1>
          <p>
            Find the best upcoming and live NFT drops. Moonly provides analytics to help you make good NFT investments.
          </p>
          <button className='primary relative'>
            VER EN OPENSEA
            <Image
              src="/button_dec.svg"
              alt="decoration"
              className='decoration'
              width={44}
              height={50}
              priority
            />
          </button>
        </div>
        <Image
          src="/mother.png"
          alt="Mother mary image"
          className='logo'
          width={512}
          height={647}
          priority
        />
      </div>
      <Carousel />
    </section>
  )
}
