import Image from "next/image";

export default function Company() {
  return (
    <section id="company" className="section-company flex flex-col center">
      <h2>Let’s follow us</h2>
      <p>
        t is a long established fact that a reader will be distracted
        by the readable content of a page when looking at its layout.
      </p>
      <div className="flex gap">
        <div className="flex center icon">
          <Image
            src="/twitter.png"
            alt="twitter logo"
            width={47}
            height={47}
            priority
          />
        </div>
        <div className="flex center icon">
          <Image
            src="/instagram.png"
            alt="instagram Logo"
            width={47}
            height={47}
            priority
          />
        </div>
        <div className="flex center icon">
          <Image
            src="/discord.png"
            alt="discord Logo"
            width={65}
            height={65}
            priority
          />
        </div>
      </div>
    </section>
  )
}
