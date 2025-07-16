import Link from "next/link"

export default function Apps() {
  return (
    <>
      <section className="apps-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
                    <figure className="image-layer"><img src="assets/images/resource/mockup-3.png" alt=""/></figure>
                    <div className="content_block_two">
                        <div className="content-box">
                            <div className="sec-title light pb_40">
                                <span className="sub-title mb_14">Download App</span>
                                <h2>Download Trading App</h2>
                                <p>We use cookines to understand how you use our website and to give you the best possible experience.</p>
                            </div>
                            <ul className="download-list clearfix">
                                <li><Link href="/"><i className="fab fa-apple"></i></Link></li>
                                <li><Link href="/"><img src="assets/images/icons/icon-2.png" alt=""/></Link></li>
                                <li><Link href="/"><i className="fab fa-android"></i></Link></li>
                                <li><Link href="/"><img src="assets/images/icons/icon-6.png" alt=""/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
