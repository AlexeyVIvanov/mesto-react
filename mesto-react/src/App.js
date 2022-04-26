


function App() {
  return (
    <div className="page">
    <header className="header">
      <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип"/>
    </header>
    <main>
      <section className="profile">

        <img  className="profile__overlay" src="<%=require('./images/edit-avatar.svg')%>" alt="Карандаш"/>

        <img className="profile__avatar" src="<%=require('./images/avatar.jpg')%>" alt="Аватар"/>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button">
              <img src="<%=require('./images/edit-button.svg')%>" alt="Кнопка редактирования"/>
            </button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button">
          <img src="<%=require('./images/add-button.svg')%>" alt="Кнопка добавления"/>
        </button>
      </section>
      <section className="elements">

      </section>
    </main>
    <footer className="footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <section className="popup popup_type_edit-profile popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-edit-form"></button>
        <form name="form1" className="popup__form popup__form-edit-profile" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-name" type="text" name="name" value="" minLength="2" maxLength="40" placeholder="Имя" required/>
            <span className="popup__input-error popup__input-name-error"></span>
            <input className="popup__input" id="popup__input-profession" type="text" name="profession" value="" minLength="2" maxLength="200" placeholder="Профессия" required/>
            <span className="popup__input-error popup__input-profession-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-edit-profile popup__submit_disabled">Сохранить</button>
        </form>
      </div>
    </section>
    <section className="popup popup_type_add-card popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-add-form"></button>
        <form name="form2" className="popup__form popup__form-add-card" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <fieldset className="popup__input-container">
            <input  className="popup__input" id="popup__input-place" type="text" name="place" value="" minLength="2" maxLength="30" placeholder="Название" required/>
            <span className="popup__input-error popup__input-place-error" ></span>
            <input className="popup__input" id="popup__input-link" type="url" name="link" value="" placeholder="Ссылка на картинку" required/>
            <span className="popup__input-error popup__input-link-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-add-card popup__submit_disabled" id="create">Создать</button>
        </form>
      </div>
    </section>
    <section className="popup popup_type_delete-confirm popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-delete-confirm"></button>
        <form name="form3" className="popup__form popup__form-delete-confirm">
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__submit popup__submit-delete-confirm">Да</button>
        </form>
      </div>
    </section>
    <section className="popup popup_type_update-avatar popup_theme_light">
      <div className="popup__container">
        <button type="button" className="popup__close popup__close-popup-update-avatar"></button>
        <form name="form4" className="popup__form popup__form-update-avatar" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <fieldset className="popup__input-container">
            <input className="popup__input" id="popup__input-avatar" type="url" name="avatar" value="" placeholder="Ссылка на аватар" required/>
            <span className="popup__input-error popup__input-avatar-error" ></span>
          </fieldset>
          <button disabled type="submit" className="popup__submit popup__submit-update-avatar popup__submit_disabled">Сохранить</button>
        </form>
      </div>
    </section>
    <section className="popup popup_type_picture popup_theme_dark">
      <div className="popup__container-picture">
        <button type="button" className="popup__close popup__close-popup-picture"></button>
        <img className="popup__image" src="#" alt="#"/>
        <h2 className="popup__caption"></h2>
      </div>
    </section>
    <template className="cards">
      <article className="elements__item">
        <button type="button" className="elements__trash"></button>
        <img className="elements__image" src="#" alt="#"/>
        <div className="elements__caption">
          <h2 className="elements__title"></h2>
          <div className="elements__like-container">
            <button type="button" className="elements__like"></button>
            <span className="elements__like-count"></span>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
