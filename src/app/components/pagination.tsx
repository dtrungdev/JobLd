import classnames from 'classnames/bind';
import styles from './Pagination.module.scss';

interface props {
    currentPage : number,
    pageCount: number,
    onPageChange: ()=> void,
}

const cl = classnames.bind(styles);
const Pagination = (props : props) => {
    const handlePageChange = (page: number) => {
        
    };
    return (
        <>
            <span
                className={+props.currentPage <= 1 ? cl('btn-arrow--disable') : cl('btn-arrow')}
                onClick={() => handlePageChange(props.currentPage - 1)}
            >
                
                <i className={cl('fa-solid fa-chevron-left', 'icon')}></i>
            </span>

            <span
                className={+props.currentPage >= props.pageCount ? cl('btn-arrow--disable') : cl('btn-arrow')}
                onClick={() => handlePageChange(props.currentPage + 1)}
            >
         <i className={cl('fa-solid fa-chevron-right', 'icon')}></i>
            </span>
        </>
    );
};

export default Pagination;