import FormBookTrialLesson from "../FormBookTrialLesson/FormBookTrialLesson";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalBookTrialLesson = ({ onCloseModal, isOpen, name, surname, avatar }) => {
  return (
    <ModalWrapper
      modalIsOpen={isOpen}
      onCloseModal={onCloseModal}
      top="1%"
      transform="translate(-50%, 0)"
    >
      <FormBookTrialLesson
        name={name}
        surname={surname}
        avatar={avatar}
        onCloseModal={onCloseModal}
      />
    </ModalWrapper>
  );
};

export default ModalBookTrialLesson;
