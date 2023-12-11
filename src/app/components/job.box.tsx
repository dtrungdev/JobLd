import classNames from 'classnames/bind';
import styles from '../styles/jobBox.module.scss'
import { Button } from 'react-bootstrap';

import JobBoxItem from '../components/job.boxItem'

const cl = classNames.bind(styles);

function JobBox() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('header')}>
                    <p>
                        Tìm thấy <span className={cl('strong-text')}>89</span> việc làm phù hợp với yêu cầu của bạn.
                    </p>
                    <Button className={cl('btn-filter')}>
                        <div className={cl('filter')}>
                             <i className={cl('fa-solid fa-filter')} style={{marginRight:'2px'}}></i>
                            Bộ lọc
                        </div>
                    </Button>
                </div>
                <div className={cl('row', 'main')}>
                    <div className={cl('col-lg-8')}>
                        <JobBoxItem />
                        <JobBoxItem />
                        <JobBoxItem />
                    </div>
                    <div className={cl('col-lg-4')}></div>
                </div>
            </div>
        </div>
    );
}

export default JobBox;
