import React, { useState, useEffect } from "react";
import "../Styles/style-switcher.css";

export default function StyleSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeColor, setActiveColor] = useState('color-1');

    useEffect(() => {
        const dayNight = document.querySelector(".day-night");
        if (dayNight) {
            const handleDayNightClick = () => {
                dayNight.querySelector("i").classList.toggle("fa-sun");
                dayNight.querySelector("i").classList.toggle("fa-moon");
                document.body.classList.toggle("dark");
            };

            const handleWindowLoad = () => {
                if (document.body.classList.contains("dark")) {
                    dayNight.querySelector("i").classList.add("fa-sun");
                } else {
                    dayNight.querySelector("i").classList.add("fa-moon");
                }
            };

            dayNight.addEventListener("click", handleDayNightClick);
            window.addEventListener("load", handleWindowLoad);

            // Cleanup event listeners on unmount
            return () => {
                dayNight.removeEventListener("click", handleDayNightClick);
                window.removeEventListener("load", handleWindowLoad);
            };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);

    useEffect(() => {
        const colors = {
            'color-1': '#ec1839',
            'color-2': '#fa5b0f',
            'color-3': '#37b182',
            'color-4': '#1854b4',
            'color-5': '#f021b2'
        };

        document.documentElement.style.setProperty('--skin-color', colors[activeColor]);
    }, [activeColor]);

    const handleColorChange = (color) => {
        setActiveColor(color);
    };

    const toggleSwitcher = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
            <div className="style-switcher-toggler s-icon" onClick={toggleSwitcher}>
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon">
                <i className="fas"></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                <span className={`color-1 ${activeColor === 'color-1' ? 'active' : ''}`} onClick={() => handleColorChange('color-1')}></span>
                <span className={`color-2 ${activeColor === 'color-2' ? 'active' : ''}`} onClick={() => handleColorChange('color-2')}></span>
                <span className={`color-3 ${activeColor === 'color-3' ? 'active' : ''}`} onClick={() => handleColorChange('color-3')}></span>
                <span className={`color-4 ${activeColor === 'color-4' ? 'active' : ''}`} onClick={() => handleColorChange('color-4')}></span>
                <span className={`color-5 ${activeColor === 'color-5' ? 'active' : ''}`} onClick={() => handleColorChange('color-5')}></span>
            </div>
        </div>
    );
}
