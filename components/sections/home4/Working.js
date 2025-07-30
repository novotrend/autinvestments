'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"

export default function Working() {
    return (
        <>
            <section className="working-section pt_100 pb_100">
                <div className="pattern-layer" style={{ backgroundImage: "url(/assets/images/shape/shape-28.png)" }}></div>
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="video_block_one">
                                <div className="video-box z_1 p_relative pl_50 pb_50 centred">
                                    <div className="video-inner">
                                        <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/resource/video-2.jpg)" }}></div>
                                        <div className="video-content">
                                            <VideoPopup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_nine">
                                <div className="content-box ml_70">
                                    <div className="sec-title light pb_35">
                                        <span className="sub-title mb_10">Easy Steps</span>
                                        <h2>How it Works</h2>
                                    </div>
                                    <div className="inner-box">
                                        <div className="single-item">
                                            <span className="count-text">1</span>
                                            <h3><Link href="/index-2">Sign up, It's Free!</Link></h3>
                                            <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                        </div>
                                        <div className="single-item">
                                            <span className="count-text">2</span>
                                            <h3><Link href="/index-2">Find best Deals and Invest</Link></h3>
                                            <p>Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.</p>
                                        </div>
                                        <div className="single-item">
                                            <span className="count-text">3</span>
                                            <h3><Link href="/index-2">Get you profit back</Link></h3>
                                            <p>View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
