import * as React from 'react';
import "../../assets/css/utils.css";
import "../../assets/css/responsive.css";

import { FormField } from './fields';
import { sendMessage } from '../api/contact';
import { GC, useCustomState } from '../utils';
import ResponsiveContact from '../responsive/contact';

import { Textarea } from '@mui/joy';
import { Typography } from '@mui/material';

/*** Constants ***/
const NAME = {MESSAGE: "contact-message"}
const ID = {EMAIL: "contact-email", SUBJECT: "contact-subject"}

const contact = (event, setNotification) => {
    const email = document.getElementById(ID.EMAIL).value;
    const subject = document.getElementById(ID.SUBJECT).value;
    const message = document.getElementsByName(NAME.MESSAGE)[0].value; 

    if (email === "") setNotification({value: "Email required to send message", notify: true});
    else if (subject === "") setNotification({value: "Subject required to send message", notify: true});
    else if (message === "") setNotification({value: "Message required to send message", notify: true});
    else sendMessage(email, subject, message, setNotification);
    return;
}

function Contact(props) {
    const {setNotification, ...other} = props;
    const [headers, setHeaders] = useCustomState({email: null, subject: null});

    return (
        <>
        <ResponsiveContact 
            title={
                <Typography style={{fontSize: GC.FONT.TITLE, color: GC.WHITE}} className={`${GC.FONT.FAMILY.DEFAULT}`}>
                    Contact Us
                </Typography>
            }
            className="text-center"
            style={{...GC.CONTACT.STYLE.CONTAINER}}

            headerStyle={{margin: "10px 0 20px 0"}}
            headerFields={
                <>
                <FormField 
                    label="Email"
                    id={ID.EMAIL}
                    value={headers.email}
                    style={{margin: "0 0 10px 0"}}
                    inputStyle={{color: GC.WHITE}}
                    labelStyle={{color: GC.WHITE}}
                    inputProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}
                    InputLabelProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}
                />
                <FormField 
                    label="Subject"
                    id={ID.SUBJECT}
                    value={headers.email}
                    inputStyle={{color: GC.WHITE}}
                    labelStyle={{color: GC.WHITE}}
                    inputProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}
                    InputLabelProps={{className: `${GC.FONT.FAMILY.DEFAULT}`}}
                />
                </>
            }

            bodyStyle={{margin: "0 0 20px 0"}}
            bodyFields={
                <Textarea
                    minRows={5}
                    name={NAME.MESSAGE}
                    variant="outlined"
                    placeholder="Type message here…"
                    className={`${GC.FONT.FAMILY.DEFAULT} width-80-respond`}
                    style={{
                        color: GC.WHITE,
                        padding: "15px", 
                        fontSize: "18px",
                        border: "1px solid", 
                        backgroundColor: GC.TRANSPARENT
                    }}
                />
            }
            
            sendBtnStyle={{width: "200px"}}
            sendStyle={{margin: "0 0 5px 0"}}
            sendOnClick={(event) => contact(event, setNotification)}
            sendClassName="flex align-center justify-center width-100"
        />
        </> 
    )
}

export default Contact;