import React from 'react';
import './Header.css';

const Header = (props) => {
    let BtnClass = ["NextBtn"]
    if (props.verified === false) {
        BtnClass.push("red");
    }else{
        BtnClass.push("blue");
    }
    return(
        <div className="HeaderBody">
            <p className="HeaderTitle">
                {props.title}
            </p>
            <button className={BtnClass.join(' ')} onClick={props.nextclick}>Next</button>
            <button className="PrevBtn" onClick={props.prevclick}>Previous</button>
        </div>
    )
}

export default Header;