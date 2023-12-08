
import classNames from 'classnames/bind';
import styles from '../styles/job.module.scss'
import Header from '../components/app.header'

const cl = classNames.bind(styles);

function JobPage() {
    return (
        <>
            <Header />
            <div className={cl('wrapper')}>
                <div className={cl('content')}></div>
            </div>
        </>
    );
}

export default JobPage;
