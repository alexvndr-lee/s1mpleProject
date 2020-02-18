import React from "react";

//styles

import "../Styles/_main.scss"

export default class Main extends React.Component {
    render(){
        return(
            <div className="main-wrapper">
                <div className="main-intro" id="intro">
                </div>
                <div className="main-portfolio" id="portfolio">
                    <h5 className="main-portfolio_text_h5">Oleksandr "s1mple" Kostyliev (born October 2, 1997) is a Ukrainian professional Counter-Strike: Global Offensive player who is currently playing for Natus Vincere. s1mple is often cited as being the best Counter-Strike player in the world, this being in contention with French player ZywOo.</h5>
                </div>
            </div>
        );
    }
}