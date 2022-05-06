import React from 'react';

function PopupWithForm(props) {
  return(
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""} popup_theme_light`} onClick={props.onCloseOverlay}>
    <div className="popup__container">
      <button onClick={props.onClose} type="button" className="popup__close popup__close-popup-edit-form"></button>
      <form name={`${props.name}`} className="popup__form popup__form-edit-profile" noValidate>
        <h2 className="popup__title">{props.title}</h2>
          {props.children}
        <button disabled type="submit" className="popup__submit popup__submit-edit-profile popup__submit_disabled">{props.buttontitle}</button>
      </form>
    </div>
  </section>
  )
}

export default PopupWithForm;