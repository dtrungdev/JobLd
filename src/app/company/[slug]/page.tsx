import classNames from 'classnames/bind';
import styles from '../../styles/companyDetail.module.scss'

import Header from '../../components/app.header'
import CompanyOverview from '../../components/company.overview'
import CompanyIntroduce from '../../components/company.introduce'
import CompanyContact from '../../components/company.contact'
import CompanyBenefit from '../../components/company.benefit';
import CompanyJob from '../../components/company.job';
import CompanySize from '../../components/company.size';

const cl = classNames.bind(styles);
function CompanyDetail() {
    return (
        <div className={cl('wrapper')}>
            <div className={cl('content')}>
                <Header />
                <CompanyOverview />
                <div className={cl('main')}>
                    <div className={cl('main-content', 'container')}>
                        <div className={cl('row')}>
                            <div className={cl('col-lg-8')}>
                                <div className={cl('switch-page')}>
                                    <div className={cl('company-overview')}>Giới thiệu</div>
                                    <div className={cl('company-review')}>Đánh giá</div>
                                </div>
                                <div className=""></div>
                                <CompanySize />
                                <CompanyIntroduce />
                                <CompanyBenefit />
                                <CompanyJob />
                            </div>
                            <div className={cl('col-lg-4')}>
                                <CompanyContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyDetail;
