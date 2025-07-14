import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page One</Link></li>
                        <li><Link href="/index-2">Home Page Two</Link></li>
                        <li><Link href="/index-3">Home Page Three</Link></li>
                        <li><Link href="/index-4">Home Page Four</Link></li>
                        <li><Link href="/index-5">Home Page Five</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Trading</Link>
                    <ul>
                        <li><Link href="/trading/open-trading-account">Open Trading Account</Link></li>
                        <li><Link href="/trading/deposit-withdraw">Deposit & Withdraw</Link></li>
                        <li><Link href="/platform">Platform</Link></li>
                        <li><Link href="/account">Account</Link></li>
                        <li><Link href="/account-details">Account Deatils</Link></li>
                        <li><Link href="/Open-Demo-Account">Open Demo Account</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Market</Link>
                    <ul>
                        <li><Link href="/markets">Markets Place</Link></li>
                        <li><Link href="/forex-trading">Forex Trading</Link></li>
                        <li><Link href="/markets/stock-trading">Stock Trading</Link></li>
                        <li><Link href="/markets/metals-trading">Metals Trading</Link></li>
                        <li><Link href="/markets/indices-trading">Indices Trading</Link></li>
                        <li><Link href="/markets/commodities-trading">Commodities Trading</Link></li>
                        <li><Link href="/markets/crypto-trading">Crypto Trading</Link></li>
                        <li><Link href="/markets-details">Markets Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/affiliate-program">Affiliate Program</Link></li>
                <li><Link href="/promotions">Promotions</Link></li>
                <li className="dropdown"><Link href="#">Products</Link>
                    <ul>
                        <li><Link href="/products/copy-trading">Copy Trading</Link></li>
                        <li><Link href="/products/social-trading">Social Trading</Link></li>
                        <li><Link href="/products/algo-trading">Algo Trading</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
