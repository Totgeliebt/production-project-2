import {
    ReactNode, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    // element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const ref = useRef();
    const [mounted, setMounted] = useState(false);
    const {
        children,
        // element = document.body,
    } = props;
    useEffect(() => {
        console.log('Portal отработал', document.querySelector('#app'));
        ref.current = document.querySelector('#root') || undefined;
        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};
