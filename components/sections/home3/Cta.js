import Link from "next/link"

export default function Cta() {
  return (
    <>
      <section className="cta-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
            <div className="icon-box"><img src="assets/images/icons/coin-1.png" alt="" /></div>
            <h2><span>Trade for</span> less, <span>with</span> low prices <br /><span>and</span> transparent fees</h2>
            <div className="btn-box"><Link href="/index-3" className="theme-btn btn-one">Try Demo Trading</Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
