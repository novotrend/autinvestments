import Link from "next/link";

export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <Link className="scroll-top scroll-to-target d-block" href="#top">
                    <i className="icon-29"></i>
                </Link>

            )}
        </>
    )
}