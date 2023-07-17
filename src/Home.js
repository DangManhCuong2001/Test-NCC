import React from "react";
import './Home.scss';
import css from './image/css.png'
import html from './image/2.png'
import url from './image/3.png'


class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="nav-bar">
                    <div className="li">HOME</div>
                    <div className="li">Services</div>
                    <div className="li">News</div>
                    <div className="li">Blog</div>
                    <div className="li">Contact</div>
                </div>
                <div className="home-content">
                    <div className="margin">
                        <div className="header">

                        </div>
                        <div className="content1">
                            <div className="content1_title">Lorem ipsum dolor sit asmet?</div>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                            </div>
                        </div>
                        <div className="content2">
                            <div className="content2-left">
                                <div className="title">
                                    Lorem ipsum dolor sit asmet
                                </div>
                                <div className="top">
                                    <img className="img" src={css} alt="csslogo" />
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                                </div>
                                <div className="text_2">
                                    <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis</span>
                                </div>
                            </div>
                            <div className="content2-center">
                                <div className="title">
                                    Lorem ipsum dolor sit asmet
                                </div>
                                <div className="top">
                                    <img className="img" src={html} alt="csslogo" />
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                                </div>
                                <div className="text_2">
                                    <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis</span>
                                </div>
                            </div>
                            <div className="content2-right">
                                <div className="title">
                                    Lorem ipsum dolor sit asmet
                                </div>
                                <div className="top">
                                    <img className="img" src={url} alt="csslogo" />
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at</span>
                                </div>
                                <div className="text_2">
                                    <span>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <span>Copyright © 2021</span>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home