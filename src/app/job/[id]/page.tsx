import classNames from 'classnames/bind';
import styles from '../../styles/jobDetail.module.scss'
import Header from '../../components/app.header'
import { Button } from 'react-bootstrap';
import JobDescription from '../../components/job.description'
import Link from 'next/link';
const cl = classNames.bind(styles);

function JobDetail() {
    return (
        <>
            <Header />
            <div className={cl('box')}>
                <div className={cl('wrapper')}>
                    <div className={cl('content', 'container')}>
                        <div className={cl('row')}>
                            <div className={cl('col-lg-8')}>
                                <div className={cl('information')}>
                                    <div className={cl('overview')}>
                                        <h1 className={cl('job-name')}>
                                            [VSL] Software Leader & Engineers for SDK Project
                                        </h1>
                                        <p className={cl('job-company')}>LG Electronics Development Vietnam (LGEDV)</p>
                                        <div className={cl('job-action')}>
                                            <div
                                                className={cl(
                                                    'd-flex',
                                                    'align-items-center',
                                                    'justify-content-between',
                                                )}
                                            >
                                                <Button className={cl('btn-apply')}>Ứng tuyển</Button>
                                                <Link href={'/'} className={cl('save-job')}>
                                                    
                                                    <i className={cl('fa-regular fa-heart', 'action-icon')}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <JobDescription />
                                    </div>
                                </div>
                            </div>
                            <div className={cl('col-lg-4')}>
                                <div className={cl('company')}>
                                    <div className={cl('brand')}>
                                        <div className={cl('logo')}>
                                            <img
                                                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM09kSGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--17f3114b5ccf13089c59952d1800098c8d92a1c3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Company%20logo.png"
                                                alt=""
                                                className={cl('logo-responsive')}
                                            />
                                        </div>
                                        <div className={cl('title')}>
                                            <h3 className={cl('company-name')}>One Mount Group</h3>
                                            <Link  href={'/'}className={cl('show-more')}>
                                                Xem công ty{' '}
                                               
                                                  <i className={cl('fa-solid fa-arrow-up-right-from-square', 'action-icon')}></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={cl('company-detail')}>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Mô hình công ty</div>
                                            <div className={cl('black-text')}>Sản phẩm</div>
                                        </div>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Quy mô công ty</div>
                                            <div className={cl('black-text')}>10 người</div>
                                        </div>
                                        <div className={cl('item')}>
                                            <div className={cl('grey-text')}>Thời gian làm việc</div>
                                            <div className={cl('black-text')}>Thứ 2 - Thứ 6</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetail;
