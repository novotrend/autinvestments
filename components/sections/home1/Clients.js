import Link from "next/link"

export default function Clients() {
  return (
    <>
      <section className="clients-section pt_40 pb_40">
        <div className="large-container">
          <ul className="clients-list">
            <li><Link href="/"><img src="/assets/images/clients/clients-1.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-2.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-3.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-4.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-5.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-6.png" alt="" /></Link></li>
            <li><Link href="/"><img src="/assets/images/clients/clients-7.png" alt="" /></Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}
