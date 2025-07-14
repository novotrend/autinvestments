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


            <section className="banner-section banner-style-two p_relative">
                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}></div>
                <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                            <figure className="image image-3"><img src="assets/images/banner/banner-img-3.png" alt="" /></figure>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Ultimate Forex Trading Mastery</h2>
                                <p>Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                                <div className="btn-box">
                                    <Link href="/index-2" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/banner/banner-img-4.png" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/banner/banner-img-5.png" alt="" /></figure>
                            <figure className="image image-3"><img src="assets/images/banner/banner-img-6.png" alt="" /></figure>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Ultimate Forex Trading Mastery</h2>
                                <p>Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                                <div className="btn-box">
                                    <Link href="/index-2" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/banner/banner-img-1.png" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/banner/banner-img-2.png" alt="" /></figure>
                            <figure className="image image-3"><img src="assets/images/banner/banner-img-3.png" alt="" /></figure>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Ultimate Forex Trading Mastery</h2>
                                <p>Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                                <div className="btn-box">
                                    <Link href="/index-2" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                        <div className="image-box">
                            <figure className="image image-1"><img src="assets/images/banner/banner-img-4.png" alt="" /></figure>
                            <figure className="image image-2"><img src="assets/images/banner/banner-img-5.png" alt="" /></figure>
                            <figure className="image image-3"><img src="assets/images/banner/banner-img-6.png" alt="" /></figure>
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>Ultimate Forex Trading Mastery</h2>
                                <p>Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                                <div className="btn-box">
                                    <Link href="/index-2" className="theme-btn btn-one">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

        </>
    )
}
