import classNames from 'classnames/bind';
import styles from '../styles/popper.module.scss';
import { useState, useEffect, useRef, JSXElementConstructor } from 'react';

const cl = classNames.bind(styles);



function Wrapper(props: {children: string, className: string}) {
    const ref = useRef(null);
    const [showPopper, setShowPopper] = useState(true);

    const handleClickOutside = () => {
        // if (ref.current && !ref.current.contains(event.target)) {
        //     console.log(!ref.current.contains(event.target));
        //     setShowPopper(false);
        // }
        console.log(ref.current)
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return <>{showPopper && <div className={cl('wrapper', props.className)}>{props.children}</div>}</>;
}

export default Wrapper;
