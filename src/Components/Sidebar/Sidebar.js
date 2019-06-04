import React from 'react';
import SectionMarker from './SectionMarker/SectionMarker';
import './Sidebar.css';

const Sidebar = (props) => {
    return(
        <div className="SidebarContainer">
            <SectionMarker text="Section 1" IDkey="1" currentPage = {props.page}/>
            <SectionMarker text="Section 2" IDkey="2" currentPage = {props.page}/>
            <SectionMarker text="Section 3" IDkey="3" currentPage = {props.page}/>
            <SectionMarker text="Section 4" IDkey="4" currentPage = {props.page}/>
            <SectionMarker text="Section 5" IDkey="5" currentPage = {props.page}/>
            <SectionMarker text="Section 6" IDkey="6" currentPage = {props.page}/>
        </div>
    );
}

export default Sidebar;
