'use client'
import classNames from 'classnames/bind';
import styles from '../styles/readMore.module.scss'
import { useState } from 'react';


const cl = classNames.bind(styles);

function ReadMore({ children }) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className={cl('text')}>
            {isReadMore ? text.slice(0, 250) : text}

            <span onClick={toggleReadMore} className={cl('read-or-hide')}>
                {isReadMore ? 'Xem thêm' : 'Thu gọn'}{' '}
               
                <i className={isReadMore ? cl('fa-solid fa-chevron-down'): cl('fa-solid fa-chevron-ip')}></i>
            </span>
        </p>
    );
}

export default ReadMore;
