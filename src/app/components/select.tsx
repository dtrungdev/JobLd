import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/select.module.scss'



interface props  {
    listOption: [{
        id: number,
        name: string
    }],
    showInputSearch : boolean,
     className: string,
      classNameShowListOption: string,
       classNameLenghtOfDefaultText: string
}

const cl = classNames.bind(styles);

function Select({listOption, showInputSearch, className, classNameLenghtOfDefaultText, classNameShowListOption}: props) {
    const ref = useRef<any>(null);

    const [searchValue, setSearchValue] = useState('');

    const [isShowInutSearch, setIsShowInputSerch] = useState(showInputSearch);

    const [defaultTextSelect, setDefaultTextSelect] = useState(listOption[0]?.name);
    const [optionList, setOptionList] = useState(listOption);
    const [isShowOptionList, setIsShowOptionList] = useState(false);

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event?.target)) {
            setIsShowOptionList(false);
        }
    };

    const handleListDisplay = () => {
        setIsShowOptionList((preState) => !preState);
    };

    const handleOptionClick = (event: any) => {
        let optionSelected = event.target.getAttribute('value');
        setDefaultTextSelect(optionSelected);
        setIsShowOptionList(false);
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div ref={ref} className={cl('select', className)}>
            <div className={cl('show-text')} onClick={handleListDisplay}>
                <span className={cl('text-render', classNameLenghtOfDefaultText)}>{defaultTextSelect}</span>
                
                <i className={isShowOptionList ? cl("fa-solid fa-chevron-up",'icon-select') : cl("fa-solid fa-chevron-down",'icon-select')}></i>
            </div>
            {isShowOptionList && optionList && (
                <div className={cl('show-list-option', classNameShowListOption)}>
                    {isShowInutSearch === true ? (
                        <div className={cl('search-input')}>
                            <input
                                type="text"
                                className={cl('input-options')}
                                value={searchValue}
                                onChange={(event) => setSearchValue(event.target.value)}
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                    <ul className={cl('list-options')}>
                        {!searchValue
                            ? optionList.map((option) => {
                                  return (
                                      <>
                                          <li
                                              key={option.id}
                                              value={option.name}
                                              onClick={handleOptionClick}
                                              className={
                                                  option.name == defaultTextSelect
                                                      ? cl('option', 'option-active')
                                                      : cl('option')
                                              }
                                          >
                                              {option.name}
                                              {option.name == defaultTextSelect ? (
                                              
                            <i className={cl("fa-solid fa-check",'selected-check-icon' )}  ></i>
                                              ) : (
                                                  ''
                                              )}
                                          </li>
                                      </>
                                  );
                              })
                            : optionList
                                  .filter((obj) => {
                                      return obj.name
                                          .normalize('NFD')
                                          .replace(/[\u0300-\u036f]/g, '')
                                          .toLowerCase()
                                          .includes(
                                              searchValue
                                                  .normalize('NFD')
                                                  .replace(/[\u0300-\u036f]/g, '')
                                                  .toLowerCase(),
                                          );
                                  })
                                  .map((option) => {
                                      return (
                                          <>
                                              <li
                                                  key={option.id}
                                                  value={option.name}
                                                  onClick={handleOptionClick}
                                                  className={
                                                      option.name == defaultTextSelect
                                                          ? cl('option', 'option-active')
                                                          : cl('option')
                                                  }
                                              >
                                                  {option.name}
                                                  {option.name == defaultTextSelect ? (
                                                        <i className={cl("fa-solid fa-check",'selected-check-icon' )}  ></i>
                                                  ) : (
                                                      ''
                                                  )}
                                              </li>
                                          </>
                                      );
                                  })}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default Select;
