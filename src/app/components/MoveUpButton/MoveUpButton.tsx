import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const MoveUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const shouldShowButton = scrollTop > 100;

        setIsVisible(shouldShowButton);
    };

    const handleMoveUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full fixed bottom-0 py-8  flex justify-center ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="">
                <button
                    className="bg-[#2fac71] w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
                    onClick={handleMoveUp}
                >
                    <FaArrowUp size="25" />
                </button>
            </div>

        </div>
    );
};

export default MoveUpButton;
