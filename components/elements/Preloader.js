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
                                <span data-text-preloader="A" className="letters-loading">
                                    A
                                </span>
                                <span data-text-preloader="U" className="letters-loading">
                                    U
                                </span>
                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                                <span data-text-preloader="i" className="letters-loading">
                                    i
                                </span>
                                <span data-text-preloader="n" className="letters-loading">
                                    n
                                </span>
                                <span data-text-preloader="v" className="letters-loading">
                                    v
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                                <span data-text-preloader="s" className="letters-loading">
                                    s
                                </span>
                                <span data-text-preloader="t" className="letters-loading">
                                    t
                                </span>
                                <span data-text-preloader="m" className="letters-loading">
                                    m
                                </span>
                                <span data-text-preloader="e" className="letters-loading">
                                    e
                                </span>
                                <span data-text-preloader="n" className="letters-loading">
                                    n
                                </span>
                                <span data-text-preloader="t" className="letters-loading">
                                    t
                                </span>
                                <span data-text-preloader="s" className="letters-loading">
                                    s
                                </span>
                                <span data-text-preloader="L" className="letters-loading">
                                    L
                                </span>
                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                                <span data-text-preloader="D" className="letters-loading">
                                    D
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}