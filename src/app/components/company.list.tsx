import classNames from 'classnames/bind';
import styles from '../styles/companyList.module.scss'
import CompanyListItem from '../components/company.listItem'

const cl = classNames.bind(styles);
function CompanyList() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <h2 className={cl('main-title')}>Danh sách công ty</h2>
                <div className={cl('row')}>
                    <CompanyListItem />
                    <CompanyListItem />
                    <CompanyListItem />
                    <CompanyListItem />
                    <CompanyListItem />
                </div>
            </div>
        </div>
    );
}

export default CompanyList;
