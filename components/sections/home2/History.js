import Link from "next/link"

export default function History() {
    return (
        <>
            <section className="history-section pt_100">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                            <div className="history-block-one">
                                <div className="inner-box clearfix">
                                    <figure className="image-box"><img src="/assets/images/resource/history-1.png" alt="" /></figure>
                                    <div className="text-box">
                                        <h3>25 Years Experience</h3>
                                        <p>Traders with 25 years of experience often develop refined trading</p>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn btn-two">Learn More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 history-block">
                            <div className="history-block-one">
                                <div className="inner-box clearfix">
                                    <figure className="image-box"><img src="/assets/images/resource/history-2.png" alt="" /></figure>
                                    <div className="text-box">
                                        <h3>Fast & Reliable</h3>
                                        <p>Reliability is another crucial aspect of trading. Modern trading platforms</p>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn btn-two">Learn More</Link></div>
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
