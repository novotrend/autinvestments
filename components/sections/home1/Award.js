import Link from "next/link"

export default function Award() {
    return (
        <>
            <section className="award-section mt5 pt_60 pb_100">
                <div className="auto-container">
                    <div className="sec-title pb_60">
                        <span className="sub-title mb_14">Accounts</span>
                        <h2>Account Types</h2>
                        <p>Choose an account that matches your trading style</p>
                        <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-3 mt-3">
                            <Link href="/open-account" className="theme-btn btn-one">Open Live Account</Link>
                            <Link href="/open-demo-account" className="theme-btn btn-one">Try Demo Account</Link>
                        </div>
                    </div>
                    <div className="table-outer">
                        <table className="award-table">
                            <thead>
                                <tr>
                                    <th>Account Type</th>
                                    <th>Minimum Deposit</th>
                                    <th>Leverage</th>
                                    <th>Spread Type</th>
                                    <th>Suitable For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard</td>
                                    <td>$1000</td>
                                    <td><span>Up to 1:500</span></td>
                                    <td>Variable Spreads</td>
                                    <td>New and active traders</td>
                                </tr>
                                <tr>
                                    <td>Pro</td>
                                    <td>$5000</td>
                                    <td><span>Up to 1:300</span></td>
                                    <td>Raw Spreads</td>
                                    <td>Frequent traders</td>
                                </tr>
                                <tr>
                                    <td>ECN</td>
                                    <td>$10,000</td>
                                    <td><span>Up to 1:200</span></td>
                                    <td>Market Execution</td>
                                    <td>Professionals</td>
                                </tr>
                                <tr>
                                    <td>Demo</td>
                                    <td>$0</td>
                                    <td><span>Simulated</span></td>
                                    <td>Real Conditions</td>
                                    <td>Practice only</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
