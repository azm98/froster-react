import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
    render() {
        return (
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <div className="col-lg-8 col-md-7 col-sm-12 col-xs-12">
                            <div className="header-content-info">
                                <ul>
                                    <li>
                                        <i class="fas fa-phone"></i>
                                        Customer Support:+923350327579
                                    </li>
                                    <li>
                                        <i class="far fa-envelope"></i>
                                        AZMHAQUE.98@gmail.com
                                    </li>
                                </ul>
                            </div>
                            <div className="socialLinks">
                            <ul>
                                    <li>
                                        <a><img src="\assets\img\facebook.png" alt="facebook link" width="20" height="30"/></a>
                                    </li>
                                    <li>
                                        <a><img src="\assets\img\instagram.png" alt="instagram link" width="20" height="30"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
