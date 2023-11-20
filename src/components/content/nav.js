import { Button } from "@mui/material";
import logo from "../../assets/media/svg/logo.svg";
import { GC } from "../utils";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const NAV_GC = (props) => {
    return {
        NAV_LEFT: [
            {  
                meta: {
                    isRow: true,
                    className: "flex justify-end align-center",
                    style: {margin: "0 20px 0 20px", width: "120px"},
                },
                content: {
                    items: [
                        {
                            meta: {
                                href: "",
                                isIcon: true,
                                style: {margin: "0 20px 0 0"}
                            },
                            content: {
                                icon: FacebookIcon
                            }
                        },
                        {
                            meta: {
                                href: "",
                                isIcon: true,
                                style: {}
                            },
                            content: {
                                icon: InstagramIcon
                            }
                        }
                    ]
                }
            },
            {
                meta: {
                    href: "/",
                    style: {margin: "5px 0 0 0"},
                },
                content: {
                    title: <img src={logo} height="85px" className="pointer align-self-center"/>
                }
            },
            {
                meta: {
                    href: "/#contact",
                    style: {margin: "0 20px 0 20px", width: "100px"},
                },
                content: {
                    title: 
                    <Button 
                        style={{color: GC.SECONDARY}} 
                        className={`${GC.FONT.FAMILY.DEFAULT}`}
                    >
                        Contact
                    </Button>
                }
            },
            {  
                meta: {
                    href: "/#products",
                    style: {margin: "0 20px 0 0", width: "100px"},
                },
                content: {
                    title: 
                    <Button 
                        style={{color: GC.SECONDARY}} 
                        className={`${GC.FONT.FAMILY.DEFAULT}`}
                    >
                        Products
                    </Button>
                }
            },
        ],

        NAV_RIGHT: []
    }
}
