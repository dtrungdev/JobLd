import HeaderRecruiterPage from '../components/recruiter.header'
import classNames from 'classnames/bind';
import styles from '../styles/recruiter.module.scss'
import { Button } from 'react-bootstrap';
import Image from 'next/image';



const cl = classNames.bind(styles);

function RecruiterPage() {
    return (
        <>
            <HeaderRecruiterPage />
            <div className={cl('wrapper')}>
                <div className={cl('content', 'container') }>                    
                   <div className={cl('d-flex', 'box', 'flex-column', 'flex-lg-row', 'gap-4')} >
                    <div className={cl('left-side')} style={{width: '100%', marginTop: '30px'}}>
                    <h1 className={cl('title')}>Tuyển dụng nhân sự chất lượng và phù hợp</h1>
                    <p className={cl('opinion')}>Đưa ra tiêu chí và yêu cầu nhân sự, JobLd sẽ cùng nhà tuyển dụng tìm kiếm ứng viên tiềm năng</p>
                    <Button className={cl('btn-start-recruit')}>Bắt đầu đăng tin tuyển dụng <i className={cl('fa-solid fa-chevron-right')} style={{fontSize:'1.4rem'}}></i></Button>
                    </div>
                    <div className={cl('right-side')} style={{width: '100%'}}>
                        <Image src={'https://iili.io/JIwWciJ.jpg' } alt='campaign-recruitment' width={100} height={60} sizes="100vw"  style={{
          width: '100%',
          height: 'auto',
          padding: '4px',
             background: 'linear-gradient(33deg, #133d26 0%, #123138 54.89%)',
             borderRadius: '4px'
        }}/>
                    </div>
                   </div>
                </div>
            </div>
        </>
    );
}

export default RecruiterPage;