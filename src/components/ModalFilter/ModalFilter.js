import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import InputLocation from '../Inputs/InputLocation';
import InputTimeOption from '../Inputs/InputTimeOption';
import './ModalFilter.scss'

const modalElement = document.getElementById('modal-root');

const ModalFilter = ({isShowing, hide}) => {

    const handleEscape = (event) => {
        if(event.target.className === "modal__container")hide()
    }
    
    useEffect(() => {
        if(isShowing) modalElement.addEventListener('click', handleEscape, false)
        return () => {
            modalElement.removeEventListener('click', handleEscape, false)
        }
    }, [handleEscape, isShowing]);

    return createPortal(
        isShowing ? (
            <>
            <div className="modal__container">
                <div className="modal">
                    <InputLocation parentName={"modal"}/>
                    <InputTimeOption placeholder={"Full Time Only"} parentName={"modal"}/>
                    <div className="modal__searchButton">
                        <p className="modal__searchButton--text">Search</p>
                    </div>


                </div>
            </div>
            </>
        ) : null,modalElement
    )
}
export default ModalFilter;