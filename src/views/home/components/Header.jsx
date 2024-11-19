import "./comp.scss"
export default function Header() {
  const headerImg = "https://www.rainbowkit.com/rainbow.svg"
  return (
    <>
      <div className="home-header">
        <img src={headerImg} alt="icon" />
        <div className="header-left">
          <span>LogicClock</span>
          <span className="w-radius">1.0.0</span>
        </div>
        <button className="w-btn btn">link按钮</button>
      </div>
    </>
  )
}