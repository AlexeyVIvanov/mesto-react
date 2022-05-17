import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) { 

  // Подписка на контекст
  //const currentUser = React.useContext(CurrentUserContext);

  //const cardRef = React.useRef();

  //React.useEffect(() => {
  //  cardRef.current.value='';
  //  cardRef.current.value='';    
  //}, [currentUser]);

  //function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
  //  e.preventDefault();
  //   PROPS?????????????????????
  //  props.onAddPlace({
  //    name: cardRef.current.value/* Значение инпута, полученное с помощью рефа */,
  //    link: cardRef.current.value,
  //  });
    
  //}
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setLink(currentUser.link);
  }, [currentUser]);

  function handlePlaceChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name,
      link,
    });
  }


  return(
    <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          onCloseOverlay={props.onCloseOverlay}
          /* handleSubmit????????? */
          onSubmit={handleSubmit}   
          name="add-card"
          title="Новое место"
          buttonTitle="Создать"
          children={
          <>
              <fieldset className="popup__input-container">
                <input value={name || ''} onChange={handlePlaceChange} className="popup__input" id="popup__input-place" type="text" name="place"  minLength="2" maxLength="30" placeholder="Название" required/>
                <span className="popup__input-error popup__input-place-error" ></span>
                <input value={link || ''} onChange={handleLinkChange} className="popup__input" id="popup__input-link" type="url" name="link"  placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error popup__input-link-error" ></span>
              </fieldset>
          </>
        }
        />
  )
}

export default AddPlacePopup;