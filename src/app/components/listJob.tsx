'use client'

import Select from './select';
import styles from '../styles/listJob.module.scss'
import classNames from 'classnames/bind';

import ListJobItem from './listJobItem';
import Pagination from './pagination';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import * as React from 'react'


const cl = classNames.bind(styles);

function ListJob() {
    const tagBarRef = React.useRef<any>(null);
    const [listJob, setListJob] = useState([{id: 1, name: '', logo: 'https://cdn-new.topcv.vn/unsafe/200x/filters:format(webp)/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg'}]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(12);
    const [totalPages, setTotalPages] = useState(0);
    const [disableButtonLeft, setDisableButtonLeft] = useState(true);
    const [disableButtonRight, setDisableButtonRight] = useState(false);

    const handleShowTagRight = () => {
        // setDisableButtonLeft(false);
        // const distanceToScroll = tagBarRef?.current?.offsetWidth;
        // let scrollAmount = 0;
        // const slideTimer = setInterval(() => {
        //     let step = 10;
        //     tagBarRef?.current?.scrollLeft += step;
        //     scrollAmount += Math.abs(step);
        //     console.log(scrollAmount);
        //     if (scrollAmount >= distanceToScroll) {
        //         clearInterval(slideTimer);
        //     }
        //     if (scrollAmount >= tagBarRef.current.scrollWidth - tagBarRef.current.scrollLeft) {
        //         setDisableButtonRight(true);
        //     }
        // }, 10);
    };

    const handleShowTagLeft = () => {
        // setDisableButtonRight(false);
        // const distanceToScroll = tagBarRef.current.offsetWidth;
        // let scrollAmount = 0;
        // const slideTimer = setInterval(() => {
        //     let step = 10;
        //     tagBarRef.current.scrollLeft -= step;
        //     scrollAmount += Math.abs(step);
        //     if (scrollAmount >= distanceToScroll) {
        //         clearInterval(slideTimer);
        //     }
        //     if (tagBarRef.current.scrollLeft == 0) {
        //         setDisableButtonLeft(true);
        //     }
        // }, 10);
    };

    const boxTag = [
        { id: 1, name: 'Ngẫu nhiên' },
        { id: 2, name: 'Hà Nội' },
        { id: 3, name: 'Hồ Chí Minh' },
        { id: 4, name: 'Bình Dương' },
        { id: 5, name: 'Đà NẴng' },
        { id: 6, name: 'Cần Thơ' },
        { id: 7, name: 'KHánh Hào' },
        { id: 8, name: 'Thủ Đưucs' },
        { id: 10, name: 'Lâm Đồng' },
        { id: 11, name: 'Ngvnhiên' },
        { id: 12, name: 'Ngẫdnhiên' },
        { id: 14, name: 'Ngẫuvds nhiên' },
    ];

    const listCondition = [
        { id: 1, name: 'Địa điểm' },
        { id: 2, name: 'Mức lương' },
        { id: 3, name: 'Kinh Nghiệm' },
        { id: 4, name: 'Ngành nghề' },
    ];

   

    const handlePageClick = (event: any) => {
        setCurrentPage(+event.selected + 1);
    };

    useEffect(() => {
        
    }, [currentPage]);

   

    return (
        <section className={cl('wrapper')}>
            <div className={cl('content', 'container')}>
                <div className={cl('box-header')}>
                    <h2 className={cl('header-title')}>Việc làm tốt nhất</h2>
                    <div className={cl('header-tool')}>
                        <span className={cl('see-more')}>Xem tất cả</span>
                        <Pagination
                            currentPage={currentPage}
                            pageCount={20}
                            onPageChange={(page: number) => setCurrentPage(page)}
                        />
                    </div>
                </div>
                <div className={cl('box-filter')}>
                    <div className={cl('filter-condition')}>
                        <div className={cl('select-text')}>
                            
                             <i className={cl("fa-solid fa-filter", 'filter-icon')}></i>
                            <span>
                                Lọc<br></br>theo:
                            </span>
                        </div>
                        <Select
                            listOption={listCondition}
                            className={cl('selection')}
                            classNameShowListOption={cl('list-option')}
                            classNameLenghtOfDefaultText={cl('default-select-text')}
                        />
                    </div>
                    <div className={cl('smart-tag')}>
                        <div className={disableButtonLeft ? cl('direct-page--disable') : cl('direct-page')}>
                            
                             <i className={cl("fa-solid fa-chevron-left")} onClick={handleShowTagLeft}></i>
                        </div>
                        <div className={cl('box-tag')} ref={tagBarRef}>
                            {boxTag &&
                                boxTag.map((item) => {
                                    return (
                                        <div key={item.id} className={cl('box-tag_item')}>
                                            {item.name}
                                        </div>
                                    );
                                })}
                        </div>
                        <div className={disableButtonRight ? cl('direct-page--disable') : cl('direct-page')}>
                              <i className={cl("fa-solid fa-chevron-right")} onClick={handleShowTagRight}></i>
                        </div>
                    </div>
                </div>
                <div className={cl('box-job')}>
                    <div className={cl('box-job_slider')}>
                        <div className={cl('list-job')}>
                            <div className={cl('list-job_content', 'row')}>
                                {listJob && listJob.length > 0 ? (
                                    <>
                                        {listJob.map((item, index) => {
                                            return <ListJobItem key={`job-${index}`} data={item} />;
                                        })}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {totalPages > 0 && (
                    <div className={cl('change-page')}>
                        <ReactPaginate
                            breakLabel="..."
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            nextLabel={  <i className={cl("fa-solid fa-chevron-right")} ></i>}
                            onPageChange={handlePageClick}
                            pageCount={totalPages}
                            previousLabel={<i className={cl("fa-solid fa-chevron-left")} ></i>}
                            containerClassName={cl('pagination')}
                            previousLinkClassName={cl('pagination__link')}
                            nextLinkClassName={cl('pagination__link')}
                            disabledClassName={cl('pagination__link--disabled')}
                            activeClassName={cl('pagination__link--active')}
                            renderOnZeroPageCount={null}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default ListJob;