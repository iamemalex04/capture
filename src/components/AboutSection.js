import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";

export default function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photograpgy or videography ideas that you
                    have. We are professional with amazing skills
                </p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="" />
            </Image>
        </About>
    );
}
