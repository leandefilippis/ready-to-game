import React from "react";
import { Link } from "react-router-dom";
import "../components/css/LandingPage.js"
import image from "../components/css/resources/wallpaper.jpg"
import { LandingFather, LandingImage, LandingButton, LandingHeader } from "./css/LandingPage";

export default function LandingPage(){
    return(
        <LandingFather>
            <LandingImage src={image} alt="Not found" />
            <LandingHeader>READY TO GAME</LandingHeader>
            <Link to ='/home'>
                <LandingButton>From gamers, for gamers</LandingButton>
            </Link>
        </LandingFather>
    )
}