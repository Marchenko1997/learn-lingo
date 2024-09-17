import { useState, useEffect } from "react";

import ModalLoginIn from "../ModalLoginIn/ModalLoginIn";
import ModalRegistration from "../ModalRegistration/ModalRegistration";
import scrollController from "../../services/noScroll"; 
import css from "./AuthNav.module.css";
import sprite from "../../assets/sprite.svg";

const AuthNav = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isLogInOpen, setIsLogInOpen] = useState(false); 
  const [isRegistrOpen, setIsRegistrOpen] = useState(false); 

 
  function openRegistrModal() {
    setIsRegistrOpen(true);
    scrollController.disabledScroll(); 
    document.querySelector("#root").setAttribute("aria-hidden", "true"); 
  }

 
  function closeRegistrModal() {
    setIsRegistrOpen(false);
    scrollController.enableScroll(); 
    document.querySelector("#root").removeAttribute("aria-hidden"); 
  }


  function openLogInModal() {
    setIsLogInOpen(true);
    scrollController.disabledScroll(); 
    document.querySelector("#root").setAttribute("aria-hidden", "true"); 
  }

  function closeLogInModal() {
    setIsLogInOpen(false);
    scrollController.enableScroll(); 
    document.querySelector("#root").removeAttribute("aria-hidden"); 
  }

  function openMenu() {
    setIsOpen(true);
    scrollController.disabledScroll(); 
  }

  // Закрытие меню
  function closeMenu() {
    setIsOpen(false);
    scrollController.enableScroll(); 
  }


  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeMenu(); 
      }
    };

    window.addEventListener("keydown", handleEscClose); 
    return () => {
      window.removeEventListener("keydown", handleEscClose); 
    };
  }, []);

  return (
    <>
     
      {isRegistrOpen && (
        <ModalRegistration
          onCloseModal={closeRegistrModal}
          isOpen={isRegistrOpen}
        />
      )}

   
      {isLogInOpen && (
        <ModalLoginIn onCloseModal={closeLogInModal} isOpen={isLogInOpen} />
      )}

     
      <div className={css.authNavContainer}>
        <button type="button" className={css.btnLogIn} onClick={openLogInModal}>
          <svg className={css.iconLogIn} width="20" height="20">
            <use href={`${sprite}#icon-log-in`}></use>
          </svg>
          Log In
        </button>
        <button
          type="button"
          className={css.btnRegister}
          onClick={openRegistrModal}
        >
          Registration
        </button>
      </div>

    
      <div className={css.containerMenu}>
        <button type="button" className={css.btnAuthNav} onClick={openMenu}>
          <svg className={css.iconThreeDots} width="20" height="20">
            <use href={`${sprite}#icon-dots-three-vertical`}></use>
          </svg>
        </button>

        {isOpen && <div className={css.backdrop} onClick={closeMenu}></div>}

      
        {isOpen && (
          <div className={css.btnsContainer}>
            <button
              type="button"
              className={css.btnLogIn}
              onClick={() => {
                openLogInModal();
                closeMenu();
              }}
            >
              <svg className={css.iconLogIn} width="20" height="20">
                <use href={`${sprite}#icon-log-in`}></use>
              </svg>
              Log In
            </button>
            <button
              type="button"
              className={css.btnRegister}
              onClick={() => {
                openRegistrModal();
                closeMenu();
              }}
            >
              Registration
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthNav;
