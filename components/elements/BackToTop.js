
export default function BackToTop({ scroll }) {

    return (
        <>
            {scroll && (
                <a className="scroll-top scroll-to-target d-block" href="#top">
                    <i className="icon-29"></i>
                </a>
                
            )}
        </>
    )
}