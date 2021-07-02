import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="froster-logo">
                        <img src="fros.jfif" alt="froster logo"></img>
                    </div>
                    <div className="froster-nav">
                        <ul>
                            <li>
                                <a href="#">HOME</a>
                            </li>
                            <li>
                                <a href="#">ABOUT</a>
                            </li>
                            <li>
                                <a href="#">TESTIMONIALS</a>
                            </li>
                            <li>
                                <a href="#">GALLERY</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
