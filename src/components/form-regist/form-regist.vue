<!-- <script>
    export default {
      mounted() {
        const form = document.createElement('script')
        form.setAttribute('src', './src/components/form-regist/from.js')
        document.body.appendChild(form)
      }
    }
</script> -->
<template>
    <div class="form wrapper">
        <div class="form-regist form-style">
            <div class="form-regist__body">
                <div class="form-regist__body-content">
                    <h2 class="form-regist__body-title text-form">Реєстрація</h2>
                    <h4 class="form-regist__body-text h5">Для початку реєстрації введіть номер телефону</h4>
                </div>
                <form class="form-regist__body-form" name="form1">
                        <div class="form-regist__content">
                            <div class="form-regist__name" id="form">
                                <input type="text" name="name" id="name" autocomplete="off" required maxlength="7" placeholder="Паша" class="field _req">
                            </div>
                            <div class="form-regist__surname indent" id="form">
                                <input type="text" name="sename" id="sename" autocomplete="off" required maxlength="17" placeholder="Вилли" class="field _req">
                            </div>
                            <div class="form-regist__form-phone" id="form">
                                <span>+380</span>
                                <input type="number" name="phone" id="phone" autocomplete="off" required maxlength="9" placeholder="0990673787" class="field _req">
                            </div>
                        </div>
                        <div class="form-regist__checkbox">
                            <label><input type="checkbox" required title="Поставьте галку" checked> Я согласен (на) с обработкой <a href="#">персональных данных</a></label>
                        </div>
                        <div class="form-regist__body-btn">
                            <Transition>
                                <RouterLink to="/preloader"><button name="btnSubmit" class="btn disabled" disabled>Далі</button></RouterLink>
                            </Transition>
                        </div>
                </form>
            </div>
        </div>
    </div>
    <div class="side-bar bar-none">
                <div class="side-bar__wrapper">
                    <div class="side-bar__content">
                        <div class="side-bar__title">
                            <span class="side-bar__sub h8">Справочна інформація</span>
                            <img class="side-bar__exit" src="@/assets/img/icons/exit.svg" alt="exit">
                        </div>
                        <ul class="side-bar__info h5">
                            <li class="side-bar__info-item">Як отримати</li>
                            <li class="side-bar__info-item">Як продовжити</li>
                            <li class="side-bar__info-item">Як повернути</li>
                        </ul>
                        <div class="side-bar__title">
                            <span class="side-bar__sub h8">Контакти</span>
                        </div>
                        <ul class="side-bar__info">
                            <li class="side-bar__cotacts-item h5">Обробка заявок на кредит - круглодобово без вихідних</li>
                            <li class="side-bar__cotacts-item">
                                <img src="@/assets/img/icons/phone-icon-mob.svg" alt="phone-icon">
                                <div class="side-bar__cotacts-item-sub">
                                    <a href="#" class="h8">0 800 75 33 63</a>
                                    <span>Безкоштовно по Україні</span>
                                    <a href="#" class="h8">Перетелефонуйте мені</a>
                                </div>
                            </li>
                            <li class="side-bar__cotacts-item">
                                <img src="@/assets/img/icons/clock-mob.svg" alt="phone-icon">
                                <div>
                                    <p>Пн-Пт: 8:00 - 23:00</p>    
                                    <p>Сб-Нд: 9:00 - 21:00</p>    
                                </div>
                            </li>
                        </ul>
                        <div class="side-bar__title lang">
                            <span class="side-bar__text">Мова:</span>
                            <div class="side-bar__lang" >
                                <a class="lang" href="#">UA</a>
                                <a class="lang" href="#">RU</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="side-bar__aside"></div>
    </div>
</template>
