import React from "react";
import home1 from "../img/home1.png";

export default function AboutSection() {
    return (
        <div>
            <div className="disctiption">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photograpgy or videography ideas that you
                    have. We are professional with amazing skills
                </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="" />
            </div>
        </div>
    );
}
