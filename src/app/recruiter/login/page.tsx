'use client'
import classNames from 'classnames/bind';
import styles from '../../styles/recruiterLogin.module.scss'


import { Button } from 'react-bootstrap';

import { useState } from 'react';


import logo from '../../../../public/logo.png'
import Link from 'next/link';


const cl = classNames.bind(styles);
function RecruiterLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowAlert, setIsShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const defaultObjectValidInput = {
        isValidEmail: true,
        isValidPassword: true,
    };
    const [objectValidInput, setObjectValidInput] = useState(defaultObjectValidInput);
    const isValidInputs = () => {
        if (!email && !password) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidEmail: false, isValidPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập thông tin.');
            return false;
        }
        if (!email) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidEmail: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập email.');
            return false;
        }
        if (!password) {
            setObjectValidInput({ ...defaultObjectValidInput, isValidPassword: false });
            setIsShowAlert(true);
            setAlertMessage('Vui lòng nhập mật khẩu.');
            return false;
        }
        setIsShowAlert(false);
        setObjectValidInput(defaultObjectValidInput);
        return true;
    };

    const handleLogin = async () => {
        // let check = isValidInputs();
        // let response = await loginUser(email, password);
        // if (response && +response.EC === 0) {
        //     // navigate('/');
        // }

        // if (response && +response.EC !== 0) {
        //     setIsShowAlert(true);
        //     setAlertMessage(response.EM);
        // }
    };

    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'd-flex', 'flex-wrap-reverse')}>
                <div className={cl('auth')}>
                    <div className={cl('auth-inner')}>
                        <div className={cl('auth-form')}>
                            <header className={cl('header')}>
                                <h2 className={cl('title')}>Chào mừng nhà tuyển dụng đã quay trở lại với JobLd</h2>
                                <div className={cl('info')}>
                                    Tìm kiếm những ứng viên chất lượng và phù hợp với yêu cầu của công ty
                                </div>
                            </header>
                            <div className={isShowAlert ? cl('alert-message') : cl('hidden')}>{alertMessage}</div>
                            <div className={cl('register')}>
                                <div className={cl('form-group')}>
                                    <label htmlFor="email">Email</label>
                                    <div
                                        className={
                                            objectValidInput.isValidEmail
                                                ? cl('input-group')
                                                : cl('input-group', 'error')
                                        }
                                    >
                                        <span className={cl('icon-box')}>
                                           
                                            <i className={cl('fa-solid fa-envelope')}></i>
                                        </span>
                                        <input
                                            type="text"
                                            name=""
                                            id="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(event) => {
                                                setEmail(event.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={cl('form-group')}>
                                    <label htmlFor="password">Password</label>
                                    <div
                                        className={
                                            objectValidInput.isValidPassword
                                                ? cl('input-group')
                                                : cl('input-group', 'error')
                                        }
                                    >
                                        <span className={cl('icon-box')}>
                                           
                                              <i className={cl('fa-solid fa-shield')}></i>
                                        </span>
                                        <input
                                            type={isShowPassword === false ? 'password' : 'text'}
                                            name=""
                                            id="password"
                                            placeholder="Mật khẩu"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <span className={cl('icon-box', 'hide-password')}>
                                          
                                              <i className={isShowPassword === false? cl('fa-solid fa-eye-slash'): cl('fa-solid fa-eye')} onClick={()=> setIsShowPassword(!isShowPassword)}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className={cl('forgot-password')}>Quên mật khẩu</div>
                                <Button variant="primary" className={cl('btn-sign')} onClick={() => handleLogin()}>
                                    Đăng nhập
                                </Button>

                                <div className={cl('footer', 'text-center')}>
                                    <span>Bạn chưa có tài khoản? </span>
                                    <Link href={'/'}  className={cl('text-success')}>
                                        Đăng ký ngay
                                    </Link>
                                    <div className={cl('block')}>
                                        <Link href={'/'} className={cl('go-home')}>
                                            Về trang chủ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cl('right')}>
                    <div className={cl('text', 'd-flex', 'align-center', 'flex-column')}>
                        <img src={logo} alt="" style={{ width: '100px', marginBottom: '20px', alignItems: 'center' }} />
                        <div className={cl('brand-text')}>JobLb</div>
                        <div className={cl('slogan-text')}>Tìm việc khó, có JobLd</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecruiterLogin;
