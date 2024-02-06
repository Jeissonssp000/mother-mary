const fundamentals = ["Management", "Vitality", "Be", "Authencity", "Beauty", "order", "intention", "balance", "beauty", "collective"]
const number = (n) => `${n <= 9 ? "0" : ""}${n}.`

export default function Fundamentals() {
  return (
    <div className="grid_container">
      {fundamentals.map((item, k) =>
        <div className="container flex center flex-col relative">
          <span>{number(k + 1)}</span>
          <h5>{item}</h5>
          <div class="star"></div>
        </div>
      )}
    </div>
  )
}
