import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
// Импортируем объект контекста
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: "",
    link: ""
  });
// параметры???????
  const [currentUser, setCurrentUser] = React.useState('');

React.useEffect(() => {
  api.getProfile()
    .then((data) => {      
      setCurrentUser(data)      
    })    
},
[]);
  
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

  // Открытие попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleUpdateUser(name, about) {
    api.editProfile(name, about)
    .then((data) => {      
      setCurrentUser(data) 
      closeAllPopups()     
    })
  }

  return (
  <div className="root common">
    <div className="page">
        {/* или [currentUser]? */}
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} />    

        <EditProfilePopup
         isOpen={isEditProfilePopupOpen}
         onClose={closeAllPopups}
         onCloseOverlay={closePopupOnOverley}
         onUpdateUser={handleUpdateUser} />    

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={closePopupOnOverley}
          name="add-card"
          title="Новое место"
          buttonTitle="Создать"
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

        <PopupWithForm
          name="delete-confirm"
          title="Вы уверены?"
          buttonTitle="Да"
          children={
          <>
          </>
        } />    

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onCloseOverlay={closePopupOnOverley}
          name="update-avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          children={
          <>
              <fieldset className="popup__input-container">
                <input className="popup__input" id="popup__input-avatar" type="url" name="avatar" defaultValue="" placeholder="Ссылка на аватар" required/>
                <span className="popup__input-error popup__input-avatar-error" ></span>
              </fieldset>
          </>
        }
        />    

        <ImagePopup    
          card={selectedCard}
          onClose={closeAllPopups}
          onCloseOverlay={closePopupOnOverley}
        />    

        <Footer /> 
      </CurrentUserContext.Provider>
    </div>
  </div>
  );
}

export default App;
