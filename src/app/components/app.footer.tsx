import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '../styles/footer.module.scss'
import logo from '../../../public/logo.png'


const cl = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('row')}>
                    <div className={cl('col-md-4')}>
                        <div className={cl('footer-brand')}>
                            <Image src={logo} alt='Logo' height={100} width={100}/>                    
                            <p className={cl('slogan')}>Tìm việc khó, có JobLd.</p>
                        </div>
                    </div>
                    <div className={cl('col-md-8')}>
                        <div className={cl('box-item')}>
                            <div className={cl('title')}>Mọi thông tin về JobLd</div>
                            <p className={cl('info')}>
                                JobLd, một website mở cung cấp dịch vụ tư vấn, môi giới việc làm cho người lao động mọi
                                ngành nghề. Mọi thông tin đều công khai và minh bạch giúp người dùng dễ dàng tiếp cận.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
