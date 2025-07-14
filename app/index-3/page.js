import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Cta from "@/components/sections/home3/Cta"
import About from "@/components/sections/home3/About"
import Trading from "@/components/sections/home3/Trading"
import Platform from "@/components/sections/home3/Platform"
import Account from "@/components/sections/home3/Account"
import Apps from "@/components/sections/home3/Apps"
import Testimonial from "@/components/sections/home3/Testimonial"
import Experience from "@/components/sections/home3/Experience"
import News from "@/components/sections/home1/News"
import Subscribe from "@/components/sections/home1/Subscribe"
export default function Home_3() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Cta />
                <About />
                <Trading />
                <Platform />
                <Account />
                <Apps />
                <Testimonial />
                <Experience />
                <News />
                <Subscribe />
            </Layout>
        </div>
    )
}