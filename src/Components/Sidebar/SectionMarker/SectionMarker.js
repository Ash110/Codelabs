import React from 'react';
import './SectionMarker.css';

const SectionMarker = (props) => {
    let SectionClass = ["Section"]
    if(Number(props.IDkey) === Number(props.currentPage)){
        SectionClass.push("active_section");
    }
    return(
        <div className={SectionClass.join(' ')}>
            <p className="SectionName">
                {props.text}
            </p>
        </div>
    );
};

export default SectionMarker;