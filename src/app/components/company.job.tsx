import classNames from 'classnames/bind';
import styles from '../styles/companyJob.module.scss'
import JobAvailable from '../components/company.jobAvailble'

const cl = classNames.bind(styles);
function CompanyJob() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <h2 className={cl('title')}>Tuyển dụng</h2>
                <div className="job-list">
                    <div className={cl('row')}>
                        <JobAvailable />
                        <JobAvailable />
                        <JobAvailable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyJob;
