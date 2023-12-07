import classNames from 'classnames/bind';
import styles from '../styles/searchItem.module.scss'


const cl = classNames.bind(styles);
function SearchItem({ value, onClick }) {
   

    const handleChooseSearchValue = () => {
        // navigate('/find-job');
    };

    return (
        <div className={cl('wrapper')} onClick={onClick}>
            {value.name}
        </div>
    );
}

export default SearchItem;
