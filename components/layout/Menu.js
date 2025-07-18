import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const pathname = usePathname();

    const isActive = (href) => pathname === href;
    const isGroupActive = (hrefs) => hrefs.some(href => pathname.startsWith(href));

    return (
        <>
            <ul className="navigation clearfix">
                <li className={`dropdown${isActive("/") ? " current" : ""}`}><Link href="/">Home</Link></li>
                <li className={`dropdown${isGroupActive(["/trading/"]) ? " current" : ""}`}>
                    <Link href='/trading/open-trading-account'>Trading</Link>
                    <ul>
                        <li className={isActive("/trading/open-trading-account") ? "current" : ""}><Link href="/trading/open-trading-account">Open Trading Account</Link></li>
                        <li className={isActive("/trading/deposit-withdraw") ? "current" : ""}><Link href="/trading/deposit-withdraw">Deposit &amp; Withdraw</Link></li>
                        <li className={isActive("/trading/open-demo-account") ? "current" : ""}><Link href="/trading/open-demo-account">Open Demo Account</Link></li>
                    </ul>
                </li>
                <li className={`dropdown${isGroupActive(["/markets/"]) ? " current" : ""}`}>
                    <Link href='/markets/forex-trading'>Market</Link>
                    <ul>
                        <li className={isActive("/markets/forex-trading") ? "current" : ""}><Link href="/markets/forex-trading">Forex Trading</Link></li>
                        <li className={isActive("/markets/stock-trading") ? "current" : ""}><Link href="/markets/stock-trading">Stock Trading</Link></li>
                        <li className={isActive("/markets/metals-trading") ? "current" : ""}><Link href="/markets/metals-trading">Metals Trading</Link></li>
                        <li className={isActive("/markets/indices-trading") ? "current" : ""}><Link href="/markets/indices-trading">Indices Trading</Link></li>
                        <li className={isActive("/markets/commodities-trading") ? "current" : ""}><Link href="/markets/commodities-trading">Commodities Trading</Link></li>
                        <li className={isActive("/markets/crypto-trading") ? "current" : ""}><Link href="/markets/crypto-trading">Crypto Trading</Link></li>
                    </ul>
                </li>
                <li className={`dropdown${isGroupActive(["/platform/"]) ? " current" : ""}`}>
                    <Link href='/platform/metatrader4'>Platform</Link>
                    <ul>
                        <li className={isActive("/platform/metatrader4") ? "current" : ""}><Link href="/platform/metatrader4">MetaTrader 4 (MT4)</Link></li>
                        <li className={isActive("/platform/metatrader5") ? "current" : ""}><Link href="/platform/metatrader5">MetaTrader 5 (MT5) </Link></li>
                    </ul>
                </li>
                <li className={`dropdown${isGroupActive(["/products/"]) ? " current" : ""}`}>
                    <Link href='/products/copy-trading'>Products</Link>
                    <ul>
                        <li className={isActive("/products/copy-trading") ? "current" : ""}><Link href="/products/copy-trading">Copy Trading</Link></li>
                        <li className={isActive("/products/social-trading") ? "current" : ""}><Link href="/products/social-trading">Social Trading</Link></li>
                        <li className={isActive("/products/algo-trading") ? "current" : ""}><Link href="/products/algo-trading">Algo Trading</Link></li>
                    </ul>
                </li>
                <li className={isActive("/contact") ? "current" : ""}><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}