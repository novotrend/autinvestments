import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul class="navigation clearfix">
                <li class="dropdown"><a href="/">Home</a></li>
                <li class="dropdown"><a href="#">Trading</a>
                    <ul>
                        <li><a href="/trading/open-trading-account">Open Trading Account</a></li>
                        <li><a href="/trading/deposit-withdraw">Deposit &amp; Withdraw</a></li>
                        <li><a href="/trading/open-demo-account">Open Demo Account</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Market</a>
                    <ul>
                        <li><a href="/markets/forex-trading">Forex Trading</a></li>
                        <li><a href="/markets/stock-trading">Stock Trading</a></li>
                        <li><a href="/markets/metals-trading">Metals Trading</a></li>
                        <li><a href="/markets/indices-trading">Indices Trading</a></li>
                        <li><a href="/markets/commodities-trading">Commodities Trading</a></li>
                        <li><a href="/markets/crypto-trading">Crypto Trading</a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Platform</a>
                    <ul>
                        <li><a href="/platform/metatrader4">MetaTrader 4 (MT4)</a></li>
                        <li><a href="/platform/metatrader5">MetaTrader 5 (MT5) </a></li>
                    </ul>
                </li>
                <li class="dropdown"><a href="#">Products</a>
                    <ul>
                        <li><a href="/products/copy-trading">Copy Trading</a></li>
                        <li><a href="/products/social-trading">Social Trading</a></li>
                        <li><a href="/products/algo-trading">Algo Trading</a></li>
                    </ul>
                </li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </>
    )
}
