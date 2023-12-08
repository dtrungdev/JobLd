'use client'
import classNames from 'classnames/bind';
import styles from '../../styles/recruiterApp.module.scss';
import HeaderRecruiter from '../../components/recruiter.header'


import CampaignRecruit from '../../components/recruiter.campaign'
import { Button, Table } from 'react-bootstrap';
import Selection from '../../components/selection'
import { useState } from 'react';
import RecruitmentNew from '../../components/recruiter.news'

const cl = classNames.bind(styles);

function RecruiterApp() {
    const listGender = [
        { id: 1, name: 'nam' },
        { id: 2, name: 'nữ' },
    ];
    const [isTurnOn, setIsTurnOn] = useState(false);
    const styleTurnOff = {
        transform: 'translate3d(0px,0,0)',
    };
    const styleTurnOn = {
        transform: 'translate3d(14px,0,0)',
        backgroundColor: '#196703',
    };
    return (
        <>
            <HeaderRecruiter />
            <div className={cl('wrapper')}>
                <div className={cl('content', 'container-fluid')}>
                    <div className={cl('row')}>
                        <div className={cl('left-side', 'col-2')}>
                            <div className={cl('recruiter-info')}></div>
                            <div className={cl('action')}>
                                <div className={cl('row', 'flex-direction-column')}>
                                    <div className={cl('col-12', 'action-item')}>
                                     
                                        <i className={cl('fa-solid fa-table-list', 'action-icon')}></i>
                                         Bảng tin
                                    </div>
                                    <div className={cl('col-12', 'action-item')}>
                                         <i className={cl('fa-solid fa-briefcase', 'action-icon')}></i> Chiến dịch
                                        tuyển dụng
                                    </div>
                                    <div className={cl('col-12', 'action-item')}>
                                         <i className={cl('fa-solid fa-file', 'action-icon')}></i> Tin tuyển dụng
                                    </div>
                                    <div className={cl('col-12', 'action-item', 'border-bottom')}>
                                         <i className={cl('fa-solid fa-circle-user', 'action-icon')}></i> Quản lý CV
                                    </div>

                                    <div className={cl('col-12', 'action-item')}>
                                         <i className={cl('fa-solid fa-gear', 'action-icon')}></i> Cài đặt tài
                                        khoản
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cl('right-side', 'col-10')}>
                            <h2 className={cl('action-title', 'col-12')}>Chiến dịch tuyển dụng</h2>
                            <main className={cl('main')}>
                                {/* <CampaignRecruit /> */}
                                <RecruitmentNew />
                                <div className={cl('container-mini')}>
                                    <div className={cl('manage-menu')}>
                                        <Button className={cl('btn-create-campaign')}>
                                             <i className={cl('fa-solid fa-brief-case')}></i> Chiến dịch mới{' '}
                                        </Button>
                                        <Selection
                                            placeholder={'Tất cả chiến dịch'}
                                            showInputSearch={false}
                                            listOption={listGender}
                                            className={cl('select')}
                                            classNameShowListOption={cl('list-option')}
                                        />
                                        <div className={cl('d-flex')} style={{ width: '100%' }}>
                                            <input
                                                type="text"
                                                placeholder="Tìm chiến dịch (Nhấn Enter để tìm kiếm)"
                                                className={cl('input-group')}
                                            />
                                            <Button className={cl('btn-search')}>
                                                <i className={cl('fa-solid fa-search')}></i>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cl('manage-table')}>
                                        <Table bordered size="lg">
                                            <thead>
                                                <tr>
                                                    <th>Chiến dịch tuyển dụng</th>
                                                    <th>Tin tuyển dụng</th>
                                                    <th>Lọc CV</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className={cl('field-data')}>
                                                    <td>
                                                        <div className={cl('d-flex')}>
                                                            <div>
                                                                <span
                                                                    className={cl('toggle')}
                                                                    onClick={() => {
                                                                        setIsTurnOn(!isTurnOn);
                                                                    }}
                                                                >
                                                                    <span
                                                                        className={cl('bar')}
                                                                        style={
                                                                            isTurnOn === true
                                                                                ? {
                                                                                      backgroundColor: `var(--primary-color)`,
                                                                                  }
                                                                                : { backgroundColor: `#bdc1c6` }
                                                                        }
                                                                    ></span>
                                                                    <span
                                                                        className={cl('knob')}
                                                                        style={
                                                                            isTurnOn == true
                                                                                ? styleTurnOn
                                                                                : styleTurnOff
                                                                        }
                                                                    ></span>
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className={cl('title-data')}>
                                                                    Tuyển dụng nhân viên thu nhập cao đvs sđvs vsdsvd
                                                                    dsdsvvds sdvvdsdvs dvsdvs
                                                                </p>
                                                                <span className={cl('cv-counter')}>Chưa có CV nào</span>
                                                                <div className={cl('edit-data')}>
                                                                   
                                                                    <i className={cl('fa-solid fa-wand-magic-sparkles')} style={{marginRight: '6px'}}></i>
                                                                    Sửa chiến dịch
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <p className={cl('title-data')}>
                                                                Tuyển nhân viên Makerting viên Makerting viên Makerting
                                                            </p>
                                                            <div className={cl('edit-data')}>
                                                               
                                                                    <i className={cl('fa-solid fa-wand-magic-sparkles')} style={{marginRight: '6px'}}></i>
                                                                Chỉnh sửa
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={cl('highlight')}>Tìm CV</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Larry the Bird</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecruiterApp;
