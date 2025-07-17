'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 10000,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


export default function Banner() {
    return (
        <>
            <section className="banner-section p_relative mb_50">
                <div className="large-container">
                    <Swiper {...swiperOptions} className="theme_carousel owl-theme banner-carousel">
                        <SwiperSlide className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-1.png)" }}></div>
                            <div className="content-box">
                                <h2>Empowering Every Trader, Everywhere.</h2>
                                <p>Whether beginner or pro – trade Forex, Stocks, Indices, and more on
                                    your terms.  1000+ Instruments. One Seamless Experience.</p>
                                <div className="btn-box">
                                    <Link href="/open-account" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-2.png)" }}></div>
                            <div className="content-box">
                                <h2>Smarter Trading. Simpler Access.</h2>
                                <p>Trade over 1000 Instruments. Forex, CFDs on Stock Indices, Commodities, Stocks, Metals and Energies.</p>
                                <div className="btn-box">
                                    <Link href="/open-account" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-3.png)" }}></div>
                            <div className="content-box">
                                <h2>Global Markets. Local Expertise.</h2>
                                <p>Trade across Forex, CFDs, Metals, Stocks & Energies – 24/7.
                                    Wherever you are, AUT Investments keeps you connected.
                                </p>
                                <div className="btn-box">
                                    <Link href="/open-account" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-4.png)" }}></div>
                            <div className="content-box">
                                <h2>All Markets. <br /> One Platform.</h2>
                                <p>From Forex to Energies – trade over 1000 global instruments with
                                    confidence.
                                    Accessible. Secure. Instant.
                                </p>
                                <div className="btn-box">
                                    <Link href="/open-account" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide-item p_relative">
                            <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/banner/banner-5.png)" }}></div>
                            <div className="content-box">
                                <h2>Trade the World with Confidence</h2>
                                <p>Access 1000+ instruments — Forex, Stocks, Indices, Commodities &
                                    more.
                                    Any device. Any time. Your journey starts here.
                                </p>
                                <div className="btn-box">
                                    <Link href="/open-account" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="owl-dots">
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
