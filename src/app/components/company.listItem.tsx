import classNames from 'classnames/bind';
import styles from '../styles/companyListItem.module.scss'
import Link from 'next/link';


const cl = classNames.bind(styles);

function CompanyListItem() {
    return (
        <div className={cl('wrapper', 'col-lg-4', 'col-sm-6')}>
            <div className={cl('content')}>
                <Link href={'/company/123'}>
                    <div className={cl('company-logo')}>
                        <Link className={cl('link')} href={'/company/123'}>
                            <img
                                src="https://static.topcv.vn/company_logos/cong-ty-tnhh-transcosmos-viet-nam-61c9331426cc8.jpg"
                                alt=""
                                className={cl('logo')}
                            />
                        </Link>
                    </div>

                    <div className={cl('company-info')}>
                        <h3 className={cl('name')}>CÔNG TY TNHH BUYMED</h3>
                        <p className={cl('address')}>
                           
                            <i className={cl('fa-solid fa-location-dot', 'icon')}></i>
                            Hồ Chí Minh
                        </p>
                        <p className={cl('category')}>
                          
                            <i className={cl('fa-solid fa-building', 'icon')}></i>
                            Bất động sản
                        </p>
                        <span className={cl('job-availble')}>
                            7 việc làm đang tuyển dụng{' '}
                           
                            
                            <i className={cl('fa-solid fa-chevron-right', 'job-availble_icon')}></i>
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CompanyListItem;
