import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


import { api } from '../utils/Api';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: "",
    link: ""
  });
  
  // Открытие ImagePopup
  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      name: card.name,
      link: card.link
    })
  } 

  // Закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
      name: "",
      link: ""
    })
  }

  // Закрытие на оверлей
  function closePopupOnOverley(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  // Открытие попапа
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  return (
  <body className="root common">
    <div className="page">
    <Header />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} />
    

    <PopupWithForm
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    onCloseOverlay={closePopupOnOverley}
    name="edit-profile"
    title="Редактировать профиль"
    buttontitle="Сохранить"
    children={
      <>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-name" type="text" name="name" defaultValue="" minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="popup__input-error popup__input-name-error"></span>
            <input className="popup__input" id="popup__input-profession" type="text" name="profession" defaultValue="" minLength="2" maxLength="200" placeholder="Профессия" required/>
            <span className="popup__input-error popup__input-profession-error" ></span>
          </fieldset>
      </>
    }
     />

    {/*<section className="popup popup_type_edit-profile popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-edit-form"></button>
        <form name="form1" className="popup__form popup__form-edit-profile" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-name" type="text" name="name" defaultValue="" minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="popup__input-error popup__input-name-error"></span>
            <input className="popup__input" id="popup__input-profession" type="text" name="profession" defaultValue="" minLength="2" maxLength="200" placeholder="Профессия" required/>
            <span className="popup__input-error popup__input-profession-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-edit-profile popup__submit_disabled">Сохранить</button>
        </form>
      </div>
  </section>*/}

    <PopupWithForm
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    onCloseOverlay={closePopupOnOverley}
    name="add-card"
    title="Новое место"
    buttontitle="Создать"
    children={
      <>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-place" type="text" name="place" defaultValue="" minLength="2" maxLength="30" placeholder="Название" required/>
            <span className="popup__input-error popup__input-place-error" ></span>
            <input className="popup__input" id="popup__input-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error popup__input-link-error" ></span>
          </fieldset>
      </>
    }
     />

    {/*<section className="popup popup_type_add-card popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-add-form"></button>
        <form name="form2" className="popup__form popup__form-add-card" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-place" type="text" name="place" defaultValue="" minLength="2" maxLength="30" placeholder="Название" required/>
            <span className="popup__input-error popup__input-place-error" ></span>
            <input className="popup__input" id="popup__input-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error popup__input-link-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-add-card popup__submit_disabled" id="create">Создать</button>
        </form>
      </div>
</section>*/}

    <PopupWithForm
    name="delete-confirm"
    title="Вы уверены?"
    buttontitle="Да"
    children={
      <>
      </>
    } />

    {/*<section className="popup popup_type_delete-confirm popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-delete-confirm"></button>
        <form name="form3" className="popup__form popup__form-delete-confirm">
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup__submit-delete-confirm">Да</button>
        </form>
      </div>
</section>*/}

    <PopupWithForm
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    onCloseOverlay={closePopupOnOverley}
    name="update-avatar"
    title="Обновить аватар"
    buttontitle="Сохранить"
    children={
      <>
          <fieldset className="popup__input-container">
            <input className="popup__input" id="popup__input-avatar" type="url" name="avatar" defaultValue="" placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error popup__input-avatar-error" ></span>
          </fieldset>
      </>
    }
     />

    {/*<section className="popup popup_type_update-avatar popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-update-avatar"></button>
        <form name="form4" className="popup__form popup__form-update-avatar" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <fieldset className="popup__input-container">
            <input className="popup__input" id="popup__input-avatar" type="url" name="avatar" defaultValue="" placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error popup__input-avatar-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-update-avatar popup__submit_disabled">Сохранить</button>
        </form>
      </div>
</section>*/}

    <ImagePopup
    
    card={selectedCard}
    onClose={closeAllPopups}
    onCloseOverlay={closePopupOnOverley}
     />

    

  <Footer />  
  </div>
</body>
  );
}

export default App;
