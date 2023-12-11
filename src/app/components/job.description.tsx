import classNames from 'classnames/bind';
import styles from '../styles/jobDescription.module.scss'


import Link from 'next/link';

const cl = classNames.bind(styles);
function JobDescription() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <div className={cl('job-overview')}>
                    <div className={cl('photo')}></div>
                    <div className={cl('d-flex', 'flex-column', 'gap-2')}>
                        <div className={cl('d-inline-block', 'row-text')}>
                              <i className={cl('fa-solid fa-location-dot', 'icon')}></i>3rd Floor, Rivera Park
                            Building, 7/28 Thanh Thai, District 10, Ho Chi Minh
                            <Link href={'/'}className={cl('show-more')}>
                                
                                 <i className={cl('fa-solid fa-arrow-right-up-from-square')}></i>
                            </Link>
                        </div>
                        <div className={cl('d-inline-block', 'row-text')}>
                            
                             <i className={cl('fa-solid fa-briefcase', 'icon')}></i>
                            Tại văn phòng
                        </div>
                        <div className={cl('d-inline-block', 'row-text')}>
                             <i className={cl('fa-solid fa-clock', 'icon')}></i>
                            Đăng 1 phút trước
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;
