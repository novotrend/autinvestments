import CounterUp from "@/components/elements/CounterUp"

export default function Funfact() {
  return (
    <>
      <section className="funfact-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={150} />+<span className="text">Countries</span>
                                    </div>
                                    <p>Trade policies and agreements shape the trading landscape of countries</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={40} />+<span className="text">Million Invest</span>
                                    </div>
                                    <p>Investing a million dollars in trading represents a significant opportunity and</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 funfact-block">
                            <div className="funfact-block-one">
                                <div className="inner-box">
                                    <div className="count-outer">
                                        <CounterUp end={90} />+<span className="text">Awards</span>
                                    </div>
                                    <p>Trading awards recognize excellence and achievement within the financial</p>
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
