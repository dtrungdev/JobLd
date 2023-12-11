
import classNames from 'classnames/bind';
import styles from '../styles/job.module.scss'
import Header from '../components/app.header'
import JobLookUp from '../components/job.lookUp';
import JobBox from '../components/job.box';

const cl = classNames.bind(styles);

function JobPage() {
    return (
        <>
            <Header />
              <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <JobLookUp />
                <JobBox />
            </div>
        </div>
        </>
    );
}

export default JobPage;
