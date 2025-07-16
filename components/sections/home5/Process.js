'use client'
import { useState } from "react"
import Link from "next/link"

export default function Process() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <section className="process-style-two pt_80 pb_100">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_one">
                                <div className="image-box pr_130 mr_40 pl_150">
                                    <figure className="image image-1"><img src="/assets/images/resource/mockup-4.png" alt="" /></figure>
                                    <figure className="image image-2 p_absolute r_0 b_50"><img src="/assets/images/resource/dashboard-4.png" alt="" /></figure>
                                    <div className="content-one">
                                        <div className="shape" style={{ backgroundImage: "url(/assets/images/shape/shape-30.png)" }}></div>
                                        <span>Sales</span>
                                        <h3>1.25 kk</h3>
                                        <p>Washington, D.C.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_seven">
                                <div className="content-box">
                                    <div className="sec-title pb_50">
                                        <span className="sub-title mb_14">About US</span>
                                        <h2>Our reputation is built on <span>Experience</span></h2>
                                    </div>
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3>Who we are</h3>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                    <Link href="/faq">Learn More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3>What we do</h3>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                    <Link href="/faq">Learn More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"><i className="icon-29"></i></div>
                                                <h3>How it works</h3>
                                            </div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <p>Facilitating international payments and foreign exchange transactions, issuing credit cards, and more.</p>
                                                    <Link href="/faq">Learn More</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
