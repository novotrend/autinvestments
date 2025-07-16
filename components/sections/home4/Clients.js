import Link from "next/link"

export default function Clients() {
  return (
    <>
      <section className="clients-style-two">
            <div className="auto-container">
                <div className="inner-container">
                    <ul className="clients-list">
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-8.png" alt=""/></Link></li>
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-9.png" alt=""/></Link></li>
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-10.png" alt=""/></Link></li>
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-11.png" alt=""/></Link></li>
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-12.png" alt=""/></Link></li>
                        <li><Link href="/index-4"><img src="assets/images/clients/clients-13.png" alt=""/></Link></li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
