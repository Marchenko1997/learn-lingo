import FormLogIn from "../FormLogIn/FormLogIn";
import ModalWrapper from "../ModalWrapper/ModalWrapper";



const ModalLoginIn = ({onCloseModal, isOpen}) => {
  return (
      <ModalWrapper modalIsOpen={isOpen} onCloseModal={onCloseModal}>
          <FormLogIn onCloseModal={onCloseModal}/>
   </ModalWrapper>
  )
}

export default ModalLoginIn