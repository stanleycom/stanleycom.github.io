import * as React from 'react';
import "../assets/css/utils.css";

import { Snackbar } from '@mui/material';

/*** GLobal Constants ***/
export const GC = {
    NONE: "none",
    BLACK: "#000000",
    WHITE: "#ffffff",
    TRANSPARENT: "transparent",

    PRIMARY: "#ffffff",
    SECONDARY: "#161616",

    RESPOND: {
        MIN_WIDTH: 1000
    },

    NAV: {
        WIDTH: 200,
        HEIGHT: 125,
        STYLE: {
            LINK: {textDecoration: "none"}
        }
    },

    CONTACT: {
        WIDTH: 400,
        STYLE: {
            SEND_BTN: {
                padding: "10px", 
                paddingLeft: "40px", 
                paddingRight: "40px",   
            },
            CONTAINER: {
                margin: "10px",
                padding: "30px",
            }
        },
        EMAIL: "akatary23@gmail.com"
    },

    DATE_FORMAT: "mm/dd/yyyy",

    DOMAIN: {
        CONTACT: "https://www.mit-msa.com:8443"
    },

    FONT: {
        FAMILY: {
            DEFAULT: "chelsea-market"
        },
        TITLE: "48px",
        SUB_TITLE: "30px",
        TEXT: "20px"
    }
}

export function Notification(props) {
    const {notification, setNotification, duration, ...other} = props;
   
    const {value, notify} = notification;
    const handleClose = () => {setNotification({value: "", notify: false});}

    return (
        <Snackbar 
            {...props}
            open={notify}
            message={value}
            onClose={handleClose}
            autoHideDuration={duration}
            anchorOrigin={{
                vertical: other.vertical? other.vertical : "top", 
                horizontal: other.horizontal? other.horizontal : "right"
            }}
        />
    )
}

export function useCustomState(initialState) {
    const [state, setState] = React.useState(initialState);
    const setCustomSate = (newState) => {
        setState((prevState) => ({...prevState, ...newState}))
    };
    
    return [state, setCustomSate];
}

export function formatDate(date, format) {
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const year = date.getFullYear();

    return format.toLowerCase().replace("mm", month).replace("dd", day).replace("yyyy", year);
}

export function post(url, body, handleRes) {
    fetch(url, {
      method: GC.POST,
      headers: {
        'Content-Type': GC.APPLICATION_JSON,
        'X-CSRFToken': GC.CSRF_TOKEN()
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(handleRes)
}

export function get(url, args, handleRes) {
    url += "?";
    for (const [arg, value] of Object.entries(args)) {
        url += `${arg}=${value}&`
    }

    fetch(url, {
      method: GC.GET,
      headers: {
        'Content-Type': GC.APPLICATION_JSON
      },
    }).then(handleRes)
}