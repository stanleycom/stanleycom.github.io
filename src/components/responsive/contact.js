import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { GC } from '../utils';
import { Button } from '@mui/material';
import { Container, Row } from 'reactstrap';

function ResponsiveContact(props) {
    const {title, headerFields, bodyFields, sendOnClick, headerVertical, bodyVertical, ...other} = props;

    return (
        <>
        <Container className={`respond-contact ${other.className}`} style={{...other.style}}>
            <Row style={{...other.titleStyle}}>{title}</Row>
            <Row style={{...other.headerStyle}}>{headerFields}</Row>
            <Row style={{...other.bodyStyle}}>{bodyFields}</Row>
            <Row style={{...other.sendStyle}} className={`${other.sendClassName}`}>
                <Button 
                    onClick={sendOnClick}
                    style={{
                        color: GC.SECONDARY,
                        backgroundColor: GC.PRIMARY,
                        ...GC.CONTACT.STYLE.SEND_BTN,
                        ...other.sendBtnStyle
                    }}
                    className={`${GC.FONT.FAMILY.DEFAULT} ${other.sendBtnClassName}`}
                    variant={other.sendVariant? other.sendVariant : "contained"} 
                >
                    {other.sendText? other.sendText : "Send"}
                </Button>
            </Row>
        </Container>
        </>
    )
}

export default ResponsiveContact;