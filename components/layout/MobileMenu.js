'use client'
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })
    const pathname = usePathname();

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    const isActiveLink = (href) => pathname === href;
    const isGroupActive = (hrefs) => hrefs.some(href => pathname.startsWith(href));

    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo.svg" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActiveLink("/") ? "dropdown current" : "dropdown"}><Link href="/">Home</Link></li>
                                <li className={isGroupActive(["/trading/"]) ? "dropdown current" : "dropdown"}>
                                    <div className="dropdown-btn" onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                    <Link href="/trading/open-trading-account">Trading</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li className={isActiveLink("/trading/open-trading-account") ? "current" : ""}><Link href="/trading/open-trading-account">Open Trading Account</Link></li>
                                        <li className={isActiveLink("/trading/deposit-withdraw") ? "current" : ""}><Link href="/trading/deposit-withdraw">Deposit &amp; Withdraw</Link></li>
                                        <li className={isActiveLink("/trading/open-demo-account") ? "current" : ""}><Link href="/trading/open-demo-account">Open Demo Account</Link></li>
                                    </ul>
                                </li>
                                <li className={isGroupActive(["/markets/"]) ? "dropdown current" : "dropdown"}>
                                    <div className="dropdown-btn" onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                    <Link href="/markets/forex-trading">Market</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li className={isActiveLink("/markets/forex-trading") ? "current" : ""}><Link href="/markets/forex-trading">Forex Trading</Link></li>
                                        <li className={isActiveLink("/markets/stock-trading") ? "current" : ""}><Link href="/markets/stock-trading">Stock Trading</Link></li>
                                        <li className={isActiveLink("/markets/metals-trading") ? "current" : ""}><Link href="/markets/metals-trading">Metals Trading</Link></li>
                                        <li className={isActiveLink("/markets/indices-trading") ? "current" : ""}><Link href="/markets/indices-trading">Indices Trading</Link></li>
                                        <li className={isActiveLink("/markets/commodities-trading") ? "current" : ""}><Link href="/markets/commodities-trading">Commodities Trading</Link></li>
                                        <li className={isActiveLink("/markets/crypto-trading") ? "current" : ""}><Link href="/markets/crypto-trading">Crypto Trading</Link></li>
                                    </ul>
                                </li>
                                <li className={isGroupActive(["/platform/"]) ? "dropdown current" : "dropdown"}>
                                    <div className="dropdown-btn" onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                    <Link href="/platform/metatrader4">Platform</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li className={isActiveLink("/platform/metatrader4") ? "current" : ""}><Link href="/platform/metatrader4">MetaTrader 4 (MT4)</Link></li>
                                        <li className={isActiveLink("/platform/metatrader5") ? "current" : ""}><Link href="/platform/metatrader5">MetaTrader 5 (MT5)</Link></li>
                                    </ul>
                                </li>
                                <li className={isGroupActive(["/products/"]) ? "dropdown current" : "dropdown"}>
                                    <div className="dropdown-btn" onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                    <Link href="/products/copy-trading">Products</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li className={isActiveLink("/products/copy-trading") ? "current" : ""}><Link href="/products/copy-trading">Copy Trading</Link></li>
                                        <li className={isActiveLink("/products/social-trading") ? "current" : ""}><Link href="/products/social-trading">Social Trading</Link></li>
                                        <li className={isActiveLink("/products/algo-trading") ? "current" : ""}><Link href="/products/algo-trading">Algo Trading</Link></li>
                                    </ul>
                                </li>
                                <li className={isActiveLink("/contact") ? "current" : ""}><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
        </>
    )
}
