'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { useState } from "react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function Trading_two() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }


  return (
    <>
      <section className="trading-style-two centred pt_100 pb_90">
            <div className="shape">
                <div className="shape-1 float-bob-x" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                <div className="shape-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title light pb_60">
                    <span className="sub-title mb_14">Trade Now</span>
                    <h2>Market Spreads and Swaps</h2>
                </div>
                <div className="project-tab">
                    <div className="tab-btn-box mb_40">
                        <ul className="tab-btns product-tab-btns clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}>Forex</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}>Cryto CFDs</li>
                            <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn" : "tab-btn"}>Share CFDs</li>
                            <li onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn" : "tab-btn"}>Commondities</li>
                            <li onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn" : "tab-btn"}>Spot Metals</li>
                            <li onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn" : "tab-btn"}>Energies</li>
                            <li onClick={() => handleOnClick(7)} className={activeIndex === 7 ? "p-tab-btn active-btn" : "tab-btn"}>Indices</li>
                        </ul>
                    </div>
                    <div className="p-tabs-content">
                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"}>
                            <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="cryto">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="share">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="commondities">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="metals">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 6 ? "tab p-tab active-tab" : "tab"} id="energies">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                        <div className={activeIndex === 7 ? "tab p-tab active-tab" : "tab"} id="indices">
                        <Swiper {...swiperOptions} className="trading-carousel">
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>AUD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-1.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-2.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64191</span></li>
                                                <li><h6>Bid</h6><span>0.64171</span></li>
                                                <li><h6>Spread</h6><span>12</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>EUR-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-3.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-4.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64156</span></li>
                                                <li><h6>Bid</h6><span>0.64276</span></li>
                                                <li><h6>Spread</h6><span>09</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>GBP-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-5.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-6.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.64578</span></li>
                                                <li><h6>Bid</h6><span>0.64228</span></li>
                                                <li><h6>Spread</h6><span>17</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>CAD-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-7.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-8.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84535</span></li>
                                                <li><h6>Bid</h6><span>0.64589</span></li>
                                                <li><h6>Spread</h6><span>15</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="slide-item">
                                    <div className="trading-block-two">
                                        <div className="inner-box">
                                            <h5>RYL-USD</h5>
                                            <ul className="flag"> 
                                                <li><img src="assets/images/icons/flag-9.png" alt=""/></li>
                                                <li><img src="assets/images/icons/flag-10.png" alt=""/></li>
                                            </ul>
                                            <ul className="text-list clearfix">
                                                <li><h6>Ask</h6><span>0.84346</span></li>
                                                <li><h6>Bid</h6><span>0.64514</span></li>
                                                <li><h6>Spread</h6><span>13</span></li>
                                            </ul>
                                            <div className="btn-box"><Link href="/account-details">Trade</Link></div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div className="dots-style-one">
                                    <div className="swiper-pagination"></div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
