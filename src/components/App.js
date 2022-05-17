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
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

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
  const [cards, setCards] = React.useState([]);

function handleAddPlaceSubmit({name, link}) {
  api.addCard({name, link})
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      });
}

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.deleteConfirmCard(card._id)
      //, !isOwn)
      .then(() => {
        setCards((cardState) => {
          return {  
            cardState: cardState.filter((c) => c._id !== card._id)
          }
        });
      });
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then((cards) => {        
        setCards(cards)      
      })    
  },
  []); 

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

  function handleUpdateUser({name, about}) {
    api.editProfile({name, about})
    .then((data) => {      
      setCurrentUser(data) 
      closeAllPopups()     
    })
  }

  function handleUpdateAvatar({avatar}) {
    api.updateAvatar({avatar})
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
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete} />    

        <EditProfilePopup
         isOpen={isEditProfilePopupOpen}
         onClose={closeAllPopups}
         onCloseOverlay={closePopupOnOverley}
         onUpdateUser={handleUpdateUser} />  

        <AddPlacePopup
         isOpen={isAddPlacePopupOpen}
         onClose={closeAllPopups}
         onCloseOverlay={closePopupOnOverley}
         onAddPlace={handleAddPlaceSubmit} />              

        <PopupWithForm
          name="delete-confirm"
          title="Вы уверены?"
          buttonTitle="Да"
          children={
          <>
          </>
        } />

        <EditAvatarPopup
         isOpen={isEditAvatarPopupOpen}
         onClose={closeAllPopups}
         onCloseOverlay={closePopupOnOverley}
         onUpdateAvatar={handleUpdateAvatar} />            

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
