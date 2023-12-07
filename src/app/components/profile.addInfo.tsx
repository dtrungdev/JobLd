'use client'
import classNames from 'classnames/bind';
import styles from '../styles/profileAddingInfo.module.scss';

import Selection from './selection'
import userPhoto from '../../../public/user_photo.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState, useCallback, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Editor from '../TextEditor';


const cl = classNames.bind(styles);

function ProfileAddingInfo() {
    const [startDate, setStartDate] = useState(new Date());

    const handleChangeAvatar = (event) => {
        // get the selected file from the input
        const file = event.target.files;
        // create a new FormData object and append the file to it
        console.log(event);
    };

    const handleDeleteAvatar = () => {};

    const listGender = [
        { id: 1, name: 'Nam' },
        { id: 2, name: 'Nữ' },
    ];

    const listProvince = [
        { id: 1, name: 'Hà Nội' },
        { id: 2, name: 'Hồ Chí Minh' },
    ];

    const [objFormInfo, setObjFormInfo] = useState({
        fullname: '',
        title: '',
        email: '',
        phone: '',
        birdthday: '',
        gender: '',
        province: '',
        address: '',
        personalLink: '',
        CV: '',
    });

    const [show, setShow] = useState(false);
    const [isChangeInfo, setIsChangeInfo] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true);
    };

    const handleSaveChange = () => {
        setShow(false);
        setIsChangeInfo(true);
    };

    const handleUploadCV = () => {
       
    };

    return (
        <div className={cl('wrapper ')}>
            <div className={cl('content')}>
                <div className={cl('box')}>
                    <div className={cl('box-title')}>Nhà tuyển dụng sẽ xem :</div>
                    <div className={cl('card')}>
                        <div className={cl('contact-info')}>
                            <div className={cl('avatar')}>
                                <img src={userPhoto} alt="" className={cl('avatar-responsive')} />
                            </div>
                            <div className={cl('info')}>
                                <div className={cl('row', 'align-items-center')}>
                                    <h1 className={cl('contact-name', 'col-12', 'col-lg-6')}>
                                        {isChangeInfo ? objFormInfo.fullname : 'Họ và tên'}
                                    </h1>
                                    <h2 className={cl('position-name', 'col-12', 'col-lg-6')}>
                                        ({isChangeInfo ? objFormInfo.title : 'Vị trí ứng tuyển'} )
                                    </h2>
                                </div>
                                <div className={cl('infos', 'row', 'align-items-center')}>
                                    <div className={cl('info-item', 'col-6')}>
                                      
                                        <i className={cl('fa-solid fa-envelope', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.email : 'Địa chỉ email'}
                                    </div>
                                    <div className={cl('info-item', 'col-6')}>
                                      
                                            <i className={cl('fa-solid fa-phone', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.phone : 'Số điện thoại'}
                                    </div>
                                    <div className={cl('info-item', 'col-6')}>
                                        
                                            <i className={cl('fa-solid fa-calendar-days', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.birdthday : 'Ngày sinh'}
                                    </div>
                                    <div className={cl('info-item', 'col-6')}>
                                       
                                            <i className={cl('fa-solid fa-user', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.gender : 'Giới tính'}
                                    </div>
                                    <div className={cl('info-item', 'col-6')}>
                                     
                                            <i className={cl('fa-solid fa-location-dot', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.address : 'Địa chỉ'}
                                    </div>
                                    <div className={cl('info-item', 'col-6')}>
                                        
                                            <i className={cl('fa-solid fa-globe', 'info-icon')}></i>
                                        {isChangeInfo ? objFormInfo.personalLink : 'Liên kết cá nhân'}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className={cl('cv')}>CV ứng viên</h3>
                    </div>
                  
                        <i className={cl('fa-solid fa-pen-to-square', 'absoluted-icon')} onClick={handleShow}></i>
                    <Modal show={show} onHide={handleClose} centered className={cl('modal')} scrollable size="lg">
                        <Modal.Header closeButton className={cl('modal-header')}>
                            <Modal.Title className={cl('modal-title')}>Thông tin cơ bản</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className={cl('modal-body')}>
                            <div>
                                <div className={cl('edit-avatar')}>
                                    <div className={cl('avatar')}>
                                        <img src={userPhoto} alt="" className={cl('avatar-responsive')} />
                                    </div>
                                    <input type="file" id="change-avatar" hidden onChange={handleChangeAvatar} />
                                    <div className={cl('avatar-action')}>
                                        <label htmlFor="change-avatar" className={cl('change-avatar')}>
                                            
                                                <i className={cl('fa-solid fa-camera', 'avatar-action_icon')}></i>
                                            Sửa
                                        </label>
                                        <span className={cl('delete-avatar')} onClick={handleDeleteAvatar}>
                                         
                                                <i className={cl('fa-solid fa-trash', 'avatar-action_icon')}></i>
                                            Xóa
                                        </span>
                                    </div>
                                </div>
                                <div className={cl('row', 'form')}>
                                    <div className={cl('col-12', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="fullname"
                                            className={cl('input')}
                                            value={objFormInfo.fullname}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, fullname: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="fullname"
                                            className={
                                                objFormInfo.fullname != '' ? cl('label-animate', 'label') : cl('label')
                                            }
                                        >
                                            Họ và tên <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-12', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="title"
                                            className={cl('input')}
                                            value={objFormInfo.title}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, title: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="title"
                                            className={
                                                objFormInfo.title != '' ? cl('label-animate', 'label') : cl('label')
                                            }
                                        >
                                            Vị trí ứng tuyển <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="email"
                                            className={cl('input')}
                                            value={objFormInfo.email}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, email: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="email"
                                            className={
                                                objFormInfo.email != '' ? cl('label-animate', 'label') : cl('label')
                                            }
                                        >
                                            Địa chỉ Email <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="phone"
                                            className={cl('input')}
                                            value={objFormInfo.phone}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, phone: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="phone"
                                            className={
                                                objFormInfo.phone != '' ? cl('label-animate', 'label') : cl('label')
                                            }
                                        >
                                            Số điện thoại <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => {
                                                setStartDate(date);
                                            }}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText=" "
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            className={cl('input')}
                                        />
                                        <label htmlFor="birthday" className={cl('label-animate', 'label')}>
                                            Ngày sinh <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <Selection
                                            showInputSearch={false}
                                            listOption={listGender}
                                            className={cl('input')}
                                            classNameShowText={cl('show-text')}
                                            classNameShowListOption={cl('list-option')}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, gender: event.target.textContent });
                                            }}
                                        />

                                        <label className={cl('label-animate', 'label')}>
                                            Giới tính <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>

                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <Selection
                                            showInputSearch={false}
                                            listOption={listProvince}
                                            className={cl('input')}
                                            classNameShowText={cl('show-text')}
                                            classNameShowListOption={cl('list-option')}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, province: event.target.textContent });
                                            }}
                                        />
                                        <label htmlFor="select-gender" className={cl('label-animate', 'label')}>
                                            Tỉnh/Thành phố <span className={cl('icon-required')}>*</span>
                                        </label>
                                    </div>
                                    <div className={cl('col-6', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="address"
                                            className={cl('input')}
                                            value={objFormInfo.address}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, address: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="address"
                                            className={
                                                objFormInfo.address != '' ? cl('label-animate', 'label') : cl('label')
                                            }
                                        >
                                            Địa chỉ
                                        </label>
                                    </div>
                                    <div className={cl('col-12', 'position-r', 'mb-16')}>
                                        <input
                                            type="text"
                                            name=""
                                            id="personalLink"
                                            className={cl('input')}
                                            value={objFormInfo.personalLink}
                                            onChange={(event) => {
                                                setObjFormInfo({ ...objFormInfo, personalLink: event.target.value });
                                                console.log(objFormInfo);
                                            }}
                                        />
                                        <label
                                            htmlFor="personalLink"
                                            className={
                                                objFormInfo.personalLink != ''
                                                    ? cl('label-animate', 'label')
                                                    : cl('label')
                                            }
                                        >
                                            Link cá nhân (Website, Linkedin, Facebook...)
                                        </label>
                                    </div>
                                    <div className={cl('col-12', 'position-r', 'mb-16')}>
                                        <input type="file" name="" id="uploadCV" hidden onChange={handleUploadCV} />
                                        <label htmlFor="uploadCV" className={cl('btn-uploadCV')}>
                                          
                                                <i className={cl('fa-solid fa-upload')}></i>
                                            Tải CV
                                        </label>
                                    </div>
                                </div>
                                {/*>
                                 */}
                                {/* <Editor text={textContent} onChange={(event) => setTextContent(event.target.value)} /> */}
                                {/*
                                 */}

                                <iframe src={objFormInfo.CV}></iframe>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Hủy
                            </Button>
                            <Button variant="primary" onClick={handleSaveChange}>
                                Lưu
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default ProfileAddingInfo;
