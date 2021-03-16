import {useState} from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(true);
    const toggleModal = () => {
        setIsShowing(!isShowing)
        console.log("modal set to: ", !isShowing)
    }
    return {isShowing, toggleModal}
}

export default useModal;