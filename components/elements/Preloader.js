export default function Preloader() {
    return (
        <>
            <div className="loader-wrap">
                <div className="preloader">
                    <div className="preloader-close"><i className="fal fa-times"></i></div>
                    <div id="handle-preloader" className="handle-preloader">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="f" className="letters-loading">
                                    f
                                </span>
                                <span data-text-preloader="o" className="letters-loading">
                                    o
                                </span>
                                <span data-text-preloader="r" className="letters-loading">
                                    r
                                </span>
                                <span data-text-preloader="t" className="letters-loading">
                                    t
                                </span>
                                <span data-text-preloader="r" className="letters-loading">
                                    r
                                </span>
                                <span data-text-preloader="a" className="letters-loading">
                                    a
                                </span>
                                <span data-text-preloader="d" className="letters-loading">
                                    d
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                                <span data-text-preloader="x" className="letters-loading">
                                    x
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
