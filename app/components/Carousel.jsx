import "../styles/carousel.css"
import { Zen_Dots } from 'next/font/google'

const DURATION = 30000;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const zen = Zen_Dots({ subsets: ['latin'], weight: ["400"] })

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal"
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

export default function Carousel() {
  return (
    <div className="relative tag-list">
      <InfiniteLoopSlider duration={random(DURATION - 5000, DURATION + 5000)}>
        {[...new Array(9)].map((_, k) => <span className={zen.className} key={k}>/&nbsp;&nbsp;&nbsp;FOR USERS</span>)}
      </InfiniteLoopSlider>
      {/* <div className="fade" /> */}
    </div>
  )
};