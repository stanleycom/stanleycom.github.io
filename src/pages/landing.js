import * as React from 'react';
import "../assets/css/utils.css";

import Nav from '../components/nav';
import Prodcuts from '../components/product';
import Contact from '../components/forms/contact';
import { NAV_GC } from '../components/content/nav';

import { GC, Notification, useCustomState } from '../components/utils';
import { Container, Typography } from '@mui/material';
import { Col, Row } from 'reactstrap';

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Landing() {
    const {NAV_LEFT, NAV_RIGHT, ...NAV_GC_REST} = NAV_GC({});
    const images = require.context('../assets/media/images', true);
    const [notification, setNotification] = useCustomState({value: null, notify: false});

    return (
        <>
        <Nav 
            vertical={false}
            collapsed={false}
            style={{zIndex: "12"}}
            
            itemsLeft={NAV_LEFT} 
            leftStyle={{padding: "0 0 0 30px", justifyContent: "center", width: "100%"}}
            
            itemsRight={NAV_RIGHT}
            rightStyle={{padding: "0 30px 0 0"}}
            
            openedStyle={{height: `${GC.NAV.HEIGHT}px`, padding: "0 0 10px 0"}}
            
            closedStyle={{height: `50px`, width: "75px", left: "calc(100% - 76px)", top: "10px", backgroundColor: GC.PRIMARY}}
        />

        <section style={{backgroundColor: GC.WHITE, minHeight: "calc(100% - 250px)", height: "max-content", padding: "30px"}}>
            <Container style={{height: "100%"}} className="flex">
                <Row style={{height: "100%"}} className="flex align-center justify-center width-100">
                    <img src={images("./shop.jpg")} style={{height: "90%", width: "400px"}}/>
                    
                    <div className="width-fit height-fit" style={{margin: "20px 0 0 0"}}>
                        <Typography style={{fontSize: GC.FONT.SUB_TITLE, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                            Stanley COM
                        </Typography>
                        <Row className="flex align-center">
                            <Typography style={{fontSize: GC.FONT.TEXT, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                                <EmailIcon style={{color: GC.BLACK, margin: "0 10px 0 0"}}/> 
                                stanleycom@myyahoo.com
                            </Typography>
                        </Row>
                        <Row className="flex align-center width-fit">
                            <Typography style={{fontSize: GC.FONT.TEXT, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                                <LocalPhoneIcon style={{color: GC.BLACK, margin: "0 10px 0 0"}} /> 
                                +1 (240) 854-3461
                            </Typography>
                        </Row>
                        <Row className="flex align-center width-fit">
                            <Typography style={{fontSize: GC.FONT.TEXT, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                                {/* <LocalPhoneIcon style={{color: GC.BLACK, margin: "0 10px 0 0"}} />  */}
                                Mon - Fri, 10am to 7pm
                            </Typography>
                        </Row>
                        <Row className="flex align-center width-fit">
                            <Typography style={{fontSize: GC.FONT.TEXT, color: GC.BLACK, margin: "0 0 20px 0"}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                                {/* <LocalPhoneIcon style={{color: GC.BLACK, margin: "0 10px 0 0"}} />  */}
                                3341 75th Ave, Hyattsville, MD 20785
                            </Typography>
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>

        <section id="products" style={{marginTop: "40px", marginBottom: "80px"}}>
            <Prodcuts images={images}/>
        </section>
        
        <section id="contact" className="flex width-100 justify-center" style={{backgroundColor: GC.SECONDARY}}>
            <Contact setNotification={setNotification}/>
        </section>

        <Notification notification={notification} setNotification={setNotification} duration={6000} ContentProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}/>
        </>
    )
}

export default Landing;