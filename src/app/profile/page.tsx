'use client'

import classNames from 'classnames/bind';
import styles from '../styles/profile.module.scss'
import Header from '../components/app.header'

import ProfileAddingInfo from '../components/profile.addInfo';
import { useState, useRef } from 'react';

const cl = classNames.bind(styles);

function ProfilePage() {
    const [file, setFile] = useState();
    const [viewFile, setViewFile] = useState();
    const inputUploadRef = useRef(null);
    const [showFileUploaded, setShowFileUploaded] = useState({ show: false, messege: '' });

    const handleUploadCV = (event) => {
        let selectedFile = event.target.files[0];
        if (selectedFile) {
            let objUrl = URL.createObjectURL(selectedFile);
            console.log(objUrl);
            setViewFile(objUrl);
        } else {
            console.log('select your file');
        }
    };
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content', 'container')}>
                    <div className={cl('main', 'row')}>
                        <div className={cl('information')}>
                            <ProfileAddingInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;
