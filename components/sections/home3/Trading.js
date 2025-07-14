'use client'
import Link from "next/link"
import { useState } from "react"

export default function Trading() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>
        <section className="trading-style-five pb_100">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">Trade Now</span>
                    <h2>Market Spreads and Swaps</h2>
                </div>
                <div className="inner-container">
                    <div className="tabs-box">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}>Share</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}>Forex</li>
                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}>Indices</li>
                            <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}>Metals</li>
                            <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}>Commodities</li>
                        </ul>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="table-outer">
                                    <table className="trading-table">
                                        <thead>
                                            <tr>
                                                <td>Markets</td>
                                                <td>Bid</td>
                                                <td>Ask</td>
                                                <td>Action</td>
                                                <td>Spread</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-9.png" alt=""/><span>BTCUSDT</span>
                                                    </div>
                                                </td>
                                                <td>63,996.20</td>
                                                <td>64,996.20</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+1.54%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-10.png" alt=""/><span>ETHUSDT</span>
                                                    </div>
                                                </td>
                                                <td>3,320.27</td>
                                                <td>3,520.27</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+6.25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-11.png" alt=""/><span>SOLUSDT</span>
                                                    </div>
                                                </td>
                                                <td>143.930</td>
                                                <td>153.930</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-5.62%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-12.png" alt=""/><span>GLMUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.47080</td>
                                                <td>0.57080</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+3.42%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-13.png" alt=""/><span>1000PEREUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.1076125</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+8.21%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-14.png" alt=""/><span>NEARUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.2076125</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-1.42%</td>
                                            </tr>
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="forex">
                                <div className="table-outer">
                                    <table className="trading-table">
                                        <thead>
                                            <tr>
                                                <td>Markets</td>
                                                <td>Bid</td>
                                                <td>Ask</td>
                                                <td>Action</td>
                                                <td>Spread</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-9.png" alt=""/><span>BTCUSDT</span>
                                                    </div>
                                                </td>
                                                <td>63,996.20</td>
                                                <td>64,996.20</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+1.54%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-13.png" alt=""/><span>1000PEREUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.1076125</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+8.21%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-14.png" alt=""/><span>NEARUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.2076125</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-1.42%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-10.png" alt=""/><span>ETHUSDT</span>
                                                    </div>
                                                </td>
                                                <td>3,320.27</td>
                                                <td>3,520.27</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+6.25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-11.png" alt=""/><span>SOLUSDT</span>
                                                    </div>
                                                </td>
                                                <td>143.930</td>
                                                <td>153.930</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-5.62%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-12.png" alt=""/><span>GLMUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.47080</td>
                                                <td>0.57080</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+3.42%</td>
                                            </tr>
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="indices">
                                <div className="table-outer">
                                    <table className="trading-table">
                                        <thead>
                                            <tr>
                                                <td>Markets</td>
                                                <td>Bid</td>
                                                <td>Ask</td>
                                                <td>Action</td>
                                                <td>Spread</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-12.png" alt=""/><span>GLMUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.47080</td>
                                                <td>0.57080</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+3.42%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-13.png" alt=""/><span>1000PEREUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.1076125</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+8.21%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-9.png" alt=""/><span>BTCUSDT</span>
                                                    </div>
                                                </td>
                                                <td>63,996.20</td>
                                                <td>64,996.20</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+1.54%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-10.png" alt=""/><span>ETHUSDT</span>
                                                    </div>
                                                </td>
                                                <td>3,320.27</td>
                                                <td>3,520.27</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+6.25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-11.png" alt=""/><span>SOLUSDT</span>
                                                    </div>
                                                </td>
                                                <td>143.930</td>
                                                <td>153.930</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-5.62%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-14.png" alt=""/><span>NEARUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.2076125</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-1.42%</td>
                                            </tr>
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="metals">
                                <div className="table-outer">
                                    <table className="trading-table">
                                        <thead>
                                            <tr>
                                                <td>Markets</td>
                                                <td>Bid</td>
                                                <td>Ask</td>
                                                <td>Action</td>
                                                <td>Spread</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-9.png" alt=""/><span>BTCUSDT</span>
                                                    </div>
                                                </td>
                                                <td>63,996.20</td>
                                                <td>64,996.20</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+1.54%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-11.png" alt=""/><span>SOLUSDT</span>
                                                    </div>
                                                </td>
                                                <td>143.930</td>
                                                <td>153.930</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-5.62%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-12.png" alt=""/><span>GLMUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.47080</td>
                                                <td>0.57080</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+3.42%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-13.png" alt=""/><span>1000PEREUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.1076125</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+8.21%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-10.png" alt=""/><span>ETHUSDT</span>
                                                    </div>
                                                </td>
                                                <td>3,320.27</td>
                                                <td>3,520.27</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+6.25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-14.png" alt=""/><span>NEARUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.2076125</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-1.42%</td>
                                            </tr>
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="commodities">
                                <div className="table-outer">
                                    <table className="trading-table">
                                        <thead>
                                            <tr>
                                                <td>Markets</td>
                                                <td>Bid</td>
                                                <td>Ask</td>
                                                <td>Action</td>
                                                <td>Spread</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-11.png" alt=""/><span>SOLUSDT</span>
                                                    </div>
                                                </td>
                                                <td>143.930</td>
                                                <td>153.930</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-5.62%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-12.png" alt=""/><span>GLMUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.47080</td>
                                                <td>0.57080</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+3.42%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-9.png" alt=""/><span>BTCUSDT</span>
                                                    </div>
                                                </td>
                                                <td>63,996.20</td>
                                                <td>64,996.20</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+1.54%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-10.png" alt=""/><span>ETHUSDT</span>
                                                    </div>
                                                </td>
                                                <td>3,320.27</td>
                                                <td>3,520.27</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+6.25%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-13.png" alt=""/><span>1000PEREUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.1076125</td>
                                                <td className="upper">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-1.png" alt=""/>
                                                        <i className="icon-08"></i>
                                                    </div>
                                                </td>
                                                <td className="upper">+8.21%</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/icon-14.png" alt=""/><span>NEARUSDT</span>
                                                    </div>
                                                </td>
                                                <td>0.0076125</td>
                                                <td>0.2076125</td>
                                                <td className="lower">
                                                    <div className="single-item">
                                                        <img src="assets/images/icons/chart-2.png" alt=""/>
                                                        <i className="icon-09"></i>
                                                    </div>
                                                </td>
                                                <td className="lower">-1.42%</td>
                                            </tr>
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="btn-box mr_20"><Link href="/index-3" className="theme-btn btn-one">Get Started</Link></div>
                        <p><Link href="/index-3">Sing up now</Link> to create your own portfolio for free!</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
