import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bootstrap.css"
import "public/assets/css/style.css"
import "public/assets/css/react-icons.css"
import "app/favicon.ico"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { barlow, firaSans } from '@/lib/font'
export const metadata = {
    title: 'AUT Investment Limited',
    description: 'Trade with AUT Investments Limited',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${firaSans.variable} ${barlow.variable}`}>
            <body>{children}</body>
        </html>
    )
}
