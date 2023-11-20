import * as React from 'react';
import "../assets/css/utils.css";

import ResponsiveNav from './responsive/nav';
import { GC, useCustomState } from './utils';

import { Col, Container, Row } from 'reactstrap';
import { Divider, IconButton, Link } from '@mui/material';

function Nav(props) {
    const {primary, secondary, vertical, itemsLeft, itemsRight, collapsed, ...other} = props;

    return (
        <>
        <ResponsiveNav 
            {...other}
            vertical={vertical}
            collapsed={collapsed}
            itemsLeft={itemsLeft} 
            rightItems={itemsRight}
        >
            <div 
                style={{top: 0}}
                className="flex width-100 justify-center height-fit absolute" 
            >
                <Divider className="container" style={{borderWidth: "3px", borderColor: GC.SECONDARY, opacity: 1}}/>
            </div>

            {other.children? 
            other.children 
            : 
            <>
            <section 
                id="nav-left" 
                className={`flex ${vertical? "column" : "align-center"}`}
                style={{...other.leftStyle}}
            >
                {other.fillNav? other.fillNav(itemsLeft) : fillNav(itemsLeft)}
            </section>
            <section 
                id="nav-right" 
                className={`flex ${vertical? "column" : "align-center"}`}
                style={{...other.rightStyle}}
            >
                {other.fillNav? other.fillNav(itemsRight) : fillNav(itemsRight)}
            </section>
            </>
            }
        </ResponsiveNav>
        <div className={`${collapsed? "respond-max" : ""}`} style={{width: vertical? GC.NAV.WIDTH : "100%", height: vertical? "100%" : GC.NAV.HEIGHT}}></div>
        </>
    )
}

export default Nav;

function fillNav(items) {
    if (!items) return;
    return items.map((item, i) => {
        const {meta, content, ...rest} = item;
        if (meta.isRow) {
            return (
                <div className={`width-100 flex align-center ${meta.className}`} style={{...meta.style}}>
                    {fillNav(content.items)}
                </div>
            )
        }
        return (
            <Link href={meta.href} style={{color: GC.SECONDARY, ...meta.style}}>
                {meta.isIcon? <content.icon /> : content.title}
            </Link>
        ); 
    })
}