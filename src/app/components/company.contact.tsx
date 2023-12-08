import classNames from 'classnames/bind';
import styles from '../styles/companyContact.module.scss'


const cl = classNames.bind(styles);

function CompanyContact() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <h2 className={cl('title')}>Thông tin liên hệ</h2>
                <div className={cl('description')}>
                    <div className={cl('social')}>
                        <span className={cl('social-title')}>Mạng xã hội</span>
                        <div className={cl('social-icons')}>
                            <i className={cl('fa-brands fa-facebook', 'social-icon')}></i>
                            <i className={cl('fa-solid fa-globe', 'social-icon')}></i>
                            <i className={cl('fa-brands fa-linkedin', 'social-icon')}></i>
                            <i className={cl('fa-brands fa-twitter', 'social-icon')}></i>
                         
                        </div>
                    </div>
                    <div className={cl('hotline')}>
                        Hotline / Số điện thoại <br></br>
                         <i className={cl('fa-solid fa-phone', 'icon')}></i>
                        <span className={cl('telephone')}>0288000111</span>
                    </div>
                    <div className={cl('address')}>
                        <i className={cl('fa-solid fa-location-dot', 'icon')}></i>
                        Địa chỉ công ty <br></br>
                        <span className={cl('address-detail')}>28bis Mạc Đĩnh Chi, phường Đa Kao, quận 1, TP.HCM</span>
                    </div>
                    <div></div>
                </div>
                <div className={cl('map')}></div>
            </div>
        </div>
    );
}

export default CompanyContact;
