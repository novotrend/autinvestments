'use client'
import { useEffect, useRef } from "react";

/**
 * Configurable TradingView Economic Calendar Widget
 * Usage: <EconomicCalendarWidget height={700} colorTheme="dark" currencyFilter="USD,EUR" />
 */
export default function EconomicCalendarWidget({
    width = "100%",
    height = 600,
    locale = "en",
    importanceFilter = "-1,0,1",
    currencyFilter = "ar, au, br, ca, cn, fr, de, in, id, it, jp, kr, mx, ru, sa, za, tr, gb, us, eu",
    colorTheme = "light"
}) {

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = JSON.stringify({
                width,
                height,
                locale,
                importanceFilter,
                currencyFilter,
                colorTheme
            });
            containerRef.current.appendChild(script);
        }
    }, [width, height, locale, importanceFilter, currencyFilter, colorTheme]);

    return (
        <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}