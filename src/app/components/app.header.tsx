'use client'
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/header.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import logo from '../../../public/logo.png'

import { useState } from 'react';
import Link from 'next/link';

const cl = classNames.bind(styles);
function Header() {
   
    const [show, setShow] = useState(false);
    const [isLogined, setIsLogined] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header className={cl('wrapper')}>
            <div className={cl('inner')}>
                <Link href={'/'} className={cl('logo')} >
                   <Image src={logo} width={50} height={50} alt='Logo'/>
                </Link>
                <div className={cl('nav-left')}>
                    <ul>
                        <li className={cl('nav-left_item')}>
                            <Link href={'/job'} title='Việc làm'>Việc làm</Link>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <Link href={''}>Hồ sơ & CV</Link>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <Link href={'/company'}>Công ty </Link>
                        </li>
                        <li className={cl('nav-left_item')}>
                            <Link href={''}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className={cl('nav-right')}>
                        <Link href={'/recruiter'}>
                    <Button className={cl('recruiter-btn')}>
                     
                        Nhà Tuyển Dụng
                    </Button>
                        </Link>
                    {isLogined ? (
                        <div className={cl('user')}>
                            <div className={cl('user-menu')}>
                                <div className={cl('user-menu_img')}>
                                    <img
                                        src="https://lh3.googleusercontent.com/a/ACg8ocINbZ4JBC-Sb2sgscljl_tazgleMUEEFXNizcNmhmPpRQ=s96-c"
                                        alt="User avatar"
                                        className={cl('user-img')}
                                    />
                                </div>
                                <span>Dương Đình Trung</span>                             
                                <i className={cl("fa-solid fa-chevron-down", 'user-icon')}></i>
                            </div>
                            <ul className={cl('menu-action')} >
                                <li className={cl('menu-action_item')} >
                             <Link href={'/profile'}>
                                     <i className={cl("fa-solid fa-user", 'item-icon')}></i>
                                    Thông tin cá nhân
                             </Link>
                                </li>
                                <li className={cl('menu-action_item')}>
                
                                     <i className={cl("fa-solid fa-briefcase", 'item-icon')}></i>
                                    Việc làm đã lưu
                                </li>
                                <li className={cl('menu-action_item')}>
                                  
                                     <i className={cl("fa-solid fa-right-from-bracket", 'item-icon')}></i>
                                    Đăng xuất
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Button
                                variant="outline-primary"
                                className={cl('login-btn')}
                              
                            >
                                Đăng nhập
                            </Button>
                            <Button
                                variant="primary"
                                className={cl('register-btn')}
                                
                            >
                                Đăng ký
                            </Button>
                        </>
                    )}
                    <div className={cl('change-language')}>
                        <a href="">VI</a>
                        <div className={cl('spacer-change')}></div>
                        <a href="">EN</a>
                    </div>
                </div>
                <div className={cl('offcanvas-toggle')} onClick={() => handleShow()}>                 
                     <i className={cl("fa-solid fa-bars")}></i>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header className={cl('offcanvas-header')} closeButton>
                       <Image src={logo} width={40} height={40} alt='Logo'/>
                        <Offcanvas.Title className={cl('offcanvas-title')}>JobLd</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={cl('offcanvas-body')}>
                        <a  className={cl('body-item')}>
                            Đăng ký tài khoản mới
                        </a>
                        <a className={cl('body-item')}>
                            Đăng nhập
                        </a>
                        <a className={cl('body-item')}>
                            Việc làm
                        </a>
                        <a  className={cl('body-item')}>
                            Hồ sơ và CV
                        </a>
                        <a  className={cl('body-item')}>
                            Công ty
                        </a>
                        <a  className={cl('body-item')}>
                            Blog
                        </a>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </header>
    );
}

export default Header;
