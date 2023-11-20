import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { GC } from '../utils';

import { Col, Container, Row } from 'reactstrap';
import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function ResponsiveNav(props) {
    const [open, setOpen] = React.useState(false);
    const {vertical, itemsLeft, itemsRight, collapsed, ...other} = props;

    return (
    <>
    {!collapsed? <></> : 
    <IconButton 
        className={`respond-min fixed ${vertical? "height" : "width"}-${collapsed? "fit" : "100"} ${open? "hidden" : ""}`}
        style={{
            color: GC.SECONDARY,
            borderRadius: "0%", 
            backgroundColor: GC.PRIMARY, 
            ...other.style, ...other.closedStyle,

            display: open? "" : "inline-flex",
        }} 
        onClick={() => setOpen(true)}
    >
        {other.openIcon? <other.openIcon /> : <MenuOpenIcon />}
    </IconButton>}
        
    <div 
        style={{
            color: GC.SECONDARY,
            backgroundColor: GC.PRIMARY, 
            ...other.style, ...other.openedStyle,

            top: open? "0" : "",
            left: open? "0" : "",
            display: open? "flex" : "",
        }} 
        className={`${collapsed? "respond-max" : ""} respond flex justify-between align-center fixed ${vertical? "column height-100" : "width-100"}`}
    >
        {!collapsed? <></> : 
        <IconButton 
            className="align-self-end respond-min" 
            style={{
                position: "fixed",
                borderRadius: "0%",
                color: GC.SECONDARY,
                backgroundColor: GC.PRIMARY,
                ...other.style,
                // left: vertical? "" : "calc(100% - 65px)", 
                top: vertical? "" : `${GC.NAV.HEIGHT - 25}px`, 
                ...other.closedStyle
            }}
            onClick={() => setOpen(false)}
        >
            {other.closeIcon? <other.closeIcon /> : <CloseIcon />}
        </IconButton>}
        {other.children}
    </div>
    </>
    )

}

export default ResponsiveNav;