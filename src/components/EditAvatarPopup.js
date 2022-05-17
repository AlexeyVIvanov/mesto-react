import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {  

 // const [avatar, setAvatar] = React.useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value='';    
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
  //   PROPS?????????????????????
    props.onUpdateAvatar({
      avatar: avatarRef.current.value/* Значение инпута, полученное с помощью рефа */,
    });
    
  }

  return(
    <PopupWithForm
          isOpen={props.isOpen}
          onClose={props.onClose}
          onCloseOverlay={props.onCloseOverlay}
          /* handleSubmit????????? */
          onSubmit={handleSubmit}   
          name="update-avatar"
          title="Обновить аватар"
          buttonTitle="Сохранить"
          children={
          <>
              <fieldset className="popup__input-container">
                <input ref={avatarRef} defaultValue="" className="popup__input" id="popup__input-avatar" type="url" name="avatar"  placeholder="Ссылка на аватар" required/>
                <span className="popup__input-error popup__input-avatar-error" ></span>
              </fieldset>
          </>
        }
        />
  )
}

export default EditAvatarPopup;