import Image from 'next/image'

export default function Activity() {
  return (
    <section id='activity' className='section-activity flex flex-col'>
      <div className="info flex flex-col gap">
        <h2>Juliana Bravo is a beautiful artist</h2>
        <div className="links flex flex-col" style={{ gap: 10 }}>
          <a href="">Email: Infor@gmail.com</a>
          <a href="">Phone: 0111 8989 898</a>
        </div>
        <button className='third flex center gap'>
          SEE ARTIST BIO
          <Image
            src="/brush.png"
            alt="brush"
            width={36}
            height={36}
            priority
          />
        </button>
      </div>
      <p className='flex'>
        Juliana Bravo is a beautiful artist who explores the meanings,
        symbology and iconography of women in today's world. Her
        technique is the result of contemporary art alternating between
        different supports, surfaces and textures.
        <br /><br />
        Juliana Bravo is a beautiful artist who explores the meanings,
        symbology and iconography of women in today's world.
      </p>
    </section>
  )
}
