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


        <section className="banner-style-five p_relative">
            <div className="large-container">
                <Swiper {...swiperOptions} className="theme_carousel owl-theme banner-carousel">
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                        <div className="inner-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>The A-Z of Forex Trading Proficiency</h2>
                                        <p>Our management team brings a wealth of experience to the day-to-day operations at Fortradex</p>
                                        <div className="btn-box">
                                            <Link href="/account-details" className="theme-btn btn-one mr_15">Start Trading Now</Link>
                                            <Link href="/index-5" className="theme-btn btn-two">Try Demo Trading</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_150">
                                        <figure className="image"><img src="assets/images/banner/banner-img-8.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                        <div className="inner-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>The A-Z of Forex Trading Proficiency</h2>
                                        <p>Our management team brings a wealth of experience to the day-to-day operations at Fortradex</p>
                                        <div className="btn-box">
                                            <Link href="/account-details" className="theme-btn btn-one mr_15">Start Trading Now</Link>
                                            <Link href="/index-5" className="theme-btn btn-two">Try Demo Trading</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_150">
                                        <figure className="image"><img src="assets/images/banner/banner-img-8.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                        <div className="inner-container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>The A-Z of Forex Trading Proficiency</h2>
                                        <p>Our management team brings a wealth of experience to the day-to-day operations at Fortradex</p>
                                        <div className="btn-box">
                                            <Link href="/account-details" className="theme-btn btn-one mr_15">Start Trading Now</Link>
                                            <Link href="/index-5" className="theme-btn btn-two">Try Demo Trading</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_150">
                                        <figure className="image"><img src="assets/images/banner/banner-img-8.png" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        </>
    )
}
