'use client'
import Link from "next/link"
import { useState } from "react"

export default function Trading_two() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="trading-style-six pb_100">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">Trade Now</span>
                    <h2>Market Spreads and Swaps</h2>
                </div>
                <div className="tabs-box">
                    <ul className="tab-btns tab-buttons mb_20 clearfix">
                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Forex</li>
                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Cryto CFDs</li>
                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Share CFDs</li>
                        <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Commondities</li>
                        <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>Spot Metals</li>
                        <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "tab-btn active-btn" : "tab-btn"}>Energies</li>
                        <li onClick={() => handleOnClick(7)} className={activeIndex === 7 ? "tab-btn active-btn" : "tab-btn"}>Indices</li>
                    </ul>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="cryto">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="share">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="commondities">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="spot">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 6 ? "tab active-tab" : "tab"} id="energies">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={activeIndex === 7 ? "tab active-tab" : "tab"} id="indices">
                            <div className="table-outer">
                                <ul className="table-content">
                                    <li className="table-title">
                                        <p>instrument</p>
                                        <p><span className="mr_80">sellers</span><span>Buyers</span></p>
                                        <p></p>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></div>
                                            <h6>Euro</h6>
                                            <span>Adyen: xams . EUR</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '32%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">32%</span>
                                                <span className="buyers">68%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></div>
                                            <h6>Pound</h6>
                                            <span>Adyen: xams . GBP</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '55%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">55%</span>
                                                <span className="buyers">45%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-7.png" alt=""/></div>
                                            <h6>CAD</h6>
                                            <span>Adyen: xams . CAD</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">50%</span>
                                                <span className="buyers">50%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-9.png" alt=""/></div>
                                            <h6>Riyal</h6>
                                            <span>Adyen: xams . RYL</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '30%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">30%</span>
                                                <span className="buyers">70%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
                                        </div>
                                    </li>
                                    <li className="table-data">
                                        <div className="single-item">
                                            <div className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></div>
                                            <h6>Aud</h6>
                                            <span>Adyen: xams . Aud</span>
                                        </div>
                                        <div className="progress-box">
                                            <div className="bar">
                                                <div className="bar-inner count-bar" style={{ width: '60%' }}></div>
                                            </div>
                                            <div className="text-box">
                                                <span className="sellers">60%</span>
                                                <span className="buyers">40%</span>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details">Trade</Link>
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
