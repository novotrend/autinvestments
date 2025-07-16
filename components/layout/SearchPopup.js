import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>

            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box">
                        <div className="close-search" onClick={handlePopup}><i className="far fa-times"></i></div>
                    </div>
                    <div className="overlay-layer"></div>
                    <div className="auto-container">
                        <div className="search-form">
                            <form method="get" action="/">
                                <div className="form-group">
                                    <fieldset>
                                        <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                        <button type="submit"><i className="icon-10"></i></button>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
