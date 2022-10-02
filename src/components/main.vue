<script type="module">
    export default {
    beforeMount() {
        const home = document.createElement('script')
        home.setAttribute('src', '/src/assets/js/index.js')
        document.body.appendChild(home)
        const swiper = document.createElement('script')
        swiper.setAttribute('src', '/src/assets/js/slider.js')
        document.body.appendChild(swiper)
      }
    }
</script>
<template>
    <section class="hero container">
                <div class="hero__img">
                    <picture class="header__picture">
                        <source srcset="../assets/img/logo-responsive/logo.png" media="(max-width: 991px)">
                        <img src="../assets/img/logo/logo.png" alt="logo">
                    </picture>
                </div>
                <div class="hero__content form-style">
                    <div class="hero__form">
                        <div class="hero__sum">
                            <div class="hero__sum-title">
                                <p class="hero__sum-text sum-text">Сума кредиту</p>
                                <p class="hero__sum-res sum-text"></p> 
                            </div>
                            <div class="hero__sum-range">
                                <div class="hero__sum-range-add"><img id="rem" src="../assets/img/icons/-.svg" alt="click"></div>
                                <input type="range" name="" id="r1"  min="500" max="10000" step="100" class="hero__sum-slider" >
                                <div class="hero__sum-range-rem"><img id="add" src="../assets/img/icons/+.svg" alt="click"></div>
                            </div>
                            <div class="hero__sum-info sub-sum">
                                <p id="one">500<span class="hero__sum-val"></span></p>
                                <p id="two">10 000 грн<span class="hero__sum-val"></span></p>
                            </div>
                        </div>
                        <!-- <div class="hero__day">
                            <div class="hero__day-title">
                                <p class="hero__day-text sum-text">Срок</p>
                                <p class="hero__day-res sum-text"></p> 
                            </div>
                            <div class="hero__day-range">
                                <input type="range" name="" id="r1"  min="500" max="10000" step="100" class="hero__day-slider" >
                            </div>
                            <div class="hero__day-info sub-sum">
                                <p id="one">500<span class="hero__day-val"></span></p>
                                <p id="two">10 000 грн<span class="hero__day-val"></span></p>
                            </div>
                        </div> -->
                    </div>
                    <div class="hero__get">
                        <div class="hero__get-wrapper h5">
                         <div class="hero__get-sum totlal">
                            <div class="hero__get-text">Сума</div>
                            <p id="thee"></p>
                            </div>
                            <div class="hero__get-costs totlal">
                            <div class="hero__get-text">Проценты</div>
                                <div class="hero__get-full">
                                    <p id="four"></p>
                                    <p id="five"></p>
                                </div>
                            </div>
                            <div class="hero__get-end">
                                <div class="hero__get-text">Сумма погашення</div>
                                <div class="hero__get-sum">
                                    <p id="six"></p>
                                    <p id="seven"></p>
                                </div>
                            </div>
                        </div>
                         <div class="hero__get-button">
                            <button class="hero__get-btn btn"><RouterLink to="/regist"><div class="text-btn btn">Отримати гроші</div></RouterLink></button>
                         </div>
                    </div>
                </div>
    </section>
    <section class="advances container">
                <div class="advances__content ">
                    <div class="advances__title h2">Наші переваги</div>
                    <div class="advances__info">  
                        <div class="advances__form form-style">
                            <div class="advances__form-bts">
                                <button class="advances__new-btn form-btn form-btn-click h4">Новим клієнтам</button>
                                <button class="advances__old-btn form-btn color-btn h4">Постійним клієнтам</button>
                            </div> 
                            <div class="advances__new-form">
                                <nav class="advances__nav">
                                    <ul class="advances__bar">
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/cash.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Видаємо перший кредит онлайн на суму до 10 000 грн зі зниженою процентною ставкою 0,01% на день</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/time.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Оформляємо кредити онлайн 24/7. Розглядаємо 100% заявок, зокрема анкети клієнтів з проблемною кредитною історією</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/phone.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Запитуємо лише дані паспорта, ІПН, номер платіжної картки й телефону</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/lock.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Переказуємо гроші на платіжну картку відразу після підписання електронного договору про надання кредиту</div>    
                                        </li> 
                                    </ul>
                                </nav>
                            </div>
                            <div class="advances__old-form form-dis">
                                <nav class="advances__nav">
                                    <ul class="advances__bar">
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/oldcash.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Підвищуємо суму до 20 000 грн за стандартної процентної ставки 1,9% на день. Даруємо промокоди та знижки до 99,9% на майбутні кредити згідно з програмою лояльності</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/oldlock.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Розглядаємо повторні заявки в першу чергу — анкету автоматично аналізує система</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/oldcalen.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Закріплюємо за вами особистий кабінет — ви зможете переглядати історію кредитів, швидше оформляти їх і дізнаватися про персональні знижки</div>    
                                        </li>
                                        <li class="advances__bar-item">
                                            <img src="../assets/img/icons/oldvisa.svg" alt="cahsicon">
                                            <div class="advances__bar-item-text h5">Зберігаємо дані в системі — вам не доведеться вводити їх знову</div>    
                                        </li> 
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>         
    </section>
    <section class="howget">
                <div class="howget__content container">
                    <div class="howget__form form-style">
                        <div class="howget__form-bts">
                            <button class="howget__new-btn form-btn form-btn-click h4">Як взяти</button>
                            <button class="howget__old-btn form-btn color-btn h4">Як повернути</button>
                        </div> 
                        <div class="howget__new-form">
                            <nav class="howget__nav">
                                <ul class="howget__bar">
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/one.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">Заповніть заявку</div>
                                            <div class="howget__bar-item-text h5">Виберіть необхідну вам суму і вкажіть термін кредиту</div>    
                                        </div>
                                    </li>
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/two.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">Дочекайтеся рішення</div>
                                            <div class="howget__bar-item-text h5">Зареєструйтеся та очікуйте на рішення щодо заявки</div> 
                                        </div>
                                    </li>
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/thee.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">Отримайте гроші</div>
                                            <div class="howget__bar-item-text h5">Підпишіть договір за допомогою SMS-коду, і відразу ж отримаєте гроші на картку</div>
                                        </div>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="howget__old-form form-dis">
                            <nav class="howget__nav">
                                <ul class="howget__bar">
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/one.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">В личном кабинете</div>
                                            <div class="howget__bar-item-text h5">Погасите кредит онлайн через интернет любой платежной картой в личном кабинете</div>    
                                        </div>
                                    </li>
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/two.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">В «Приват24»</div>
                                            <div class="howget__bar-item-text h5">Закройте кредит в режиме онлайн в приложении или интернет-банкинге «Приват24»</div>
                                        </div> 
                                    </li>
                                    <li class="howget__bar-item">
                                        <img src="../assets/img/icons/thee.svg" alt="cahsicon">
                                        <div class="howget__bar-item-sub">
                                            <div class="howget__bar-item-title h4">В терминале</div>
                                            <div class="howget__bar-item-text h5">Внесите оплату в терминале «ПриватБанка», IBox, EasyPay, City24 или Sistema</div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="howget__btn-get">
                        <button class="howget__btn btn"> <RouterLink to="/regist"><div class="text-btn btn">Отримати гроші</div></RouterLink></button>
                    </div>
                </div>
    </section>
    <section class="reviews container">
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="reviews__content">
                    <div class="reviews__title h2">Відгуки</div>
                    <div class="swiper reviews">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="swiper-slide__content">
                                <div class="swiper-slide__user">
                                    <img class="swiper-clide__user-icon" src="../assets/img/icons/user-prof.svg" alt="profilIcon">
                                    <div class="swiper-slider__user-name">
                                        <div class="swiper-slider__name h7">Джиммі</div>
                                        <div class="swiper-slider__date h6">04.03.2021</div>
                                    </div>
                                </div>
                                <div class="swiper-slide__user-coment h5">
                                    Брав тут гроші два рази, отримував потрібні суми,
                                    і очікування щодо переплат були такими, як обумовлено. 
                                    Окремий плюс компанії — прозорі умови. У договорі 
                                    все ясно прописано — знаєш, скільки береш, скільки будеш 
                                    повинен повернути і які відсотки. Проблем при отриманні
                                    грошей і погашенні жодного разу не виникло.
                                </div>
                            </div>
                          </div>
                        </div>
                       
                        <div class="swiper-pagination"></div>
                      </div>
                </div>
    </section>
    <section class="condition">
                <div class="condition__content container">
                     <div class="condition__content-title h2">Умови оформлення онлайн-кредиту на картку</div>
                     <div class="condition__content-form form-style">
                          <div class="condition__form-sub">
                            <ul class="condition__type">
                                <li class="condition__type-item-title h8">Тип кредита</li>
                                <li class="condition__type-item h8">Перший кредит</li>
                                <li class="condition__type-item h8">Повторний кредит</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Сумма</li>
                                <li class="condition__type-item h5">До 10000 грн</li>
                                <li class="condition__type-item h5">До 20000 грн</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Процентная ставка</li>
                                <li class="condition__type-item h5">1,9% на день — стандартна процентна ставка (річна процентна ставка — 693,5%). 
                                    Ставка може бути знижена до 0,01% на день згідно з програмою лояльності 
                                    (річна процентна ставка — 3,65%). РРПС — від 3,712% до 84812,19%
                                </li>
                                <li class="condition__type-item h5">1,9% на день — стандартна процентна ставка (річна процентна ставка — 693,5%).
                                    Ставка може бути знижена до 0,019% на день згідно з програмою лояльності 
                                    (річна процентна ставка — 6,935%). РРПС — від 7,160% до 84812,19%
                                </li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Час оформлення</li>
                                <li class="condition__type-item h5">До 15 хвилин</li>
                                <li class="condition__type-item h5">До 5 хвилин</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Вік позичальника</li>
                                <li class="condition__type-item h5">Від 18 до 65 років</li>
                                <li class="condition__type-item h5">Від 18 до 65 років</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Способи отримання кредиту</li>
                                <li class="condition__type-item h5">Кредит оформляється в онлайн-режимі</li>
                                <li class="condition__type-item h5">Кредит оформляється в онлайн-режимі</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5"><span>Необхідне для оформлення онлайн-кредиту</span></li>
                                <li class="condition__type-item h5">Паспорт, ІПН (РНОКПП), дійсна платіжна карта, видана на ваше ім’я, мобільний телефон</li>
                                <li class="condition__type-item h5">Дійсна платіжна картка, видана на ваше ім'я, та мобільний телефон. 
                                    Під час оформлення повторного кредиту надавати документи не потрібно</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Можливість пролонгації кредиту</li>
                                <li class="condition__type-item h5">Без обмежень, відповідно до умов договору за стандартною процентною ставкою	</li>
                                <li class="condition__type-item h5">Без обмежень, відповідно до умов договору за стандартною процентною ставкою</li>
                            </ul>
                            <ul class="condition__type">
                                <li class="condition__type-item-title h5">Переваги</li>
                                <li class="condition__type-item h5">Кредит видається зі зниженою процентною ставкою. Оформлення в той самий день</li>
                                <li class="condition__type-item h5">Під час повторного звернення не потрібно проходити реєстрацію. Рішення буде відомо за кілька хвилин</li>
                            </ul>
                          </div>
                     </div>
                     <div class="condition__canculation">
                        <div class="condition__canculation-info" role="first">
                            <div class="condition__canculation-title h8">Приклад розрахунку при оформленні кредиту зі зниженою процентною ставкою 0,01% на день</div>
                            <div class="condition__canculation-text">
                                <p class="condition__canculation-item h5">Розмір кредиту — 1000 грн     |     тривалість — 62 дня     |     відсотки — 0,01% на день.</p>
                                <p class="condition__canculation-item h5">(0,0001 * 62 * 1000) + 1000 = 1006, 20 грн. Підсумковий розмір платежу: 1006,20 грн.</p>
                            </div>
                        </div>
                        <div class="condition__canculation-info" role="second">
                            <div class="condition__canculation-title h8">Приклад розрахунку онлайн-кредиту зі стандартною процентною ставкою 1,9% на день</div>
                            <div class="condition__canculation-text">
                                <p class="condition__canculation-item h5">Розмір кредиту — 1000 грн     |     тривалість — 62 дня     |     відсотки — 1,9% на день.</p>
                                <p class="condition__canculation-item h5">(0,019 * 62 * 1000) + 1000 = 2178 грн. Підсумковий розмір платежу: 2178 грн.</p>
                            </div>
                        </div>
                     </div>
                </div>
    </section>
    <section class="side-bar bar-none">
                <div class="side-bar__wrapper">
                    <div class="side-bar__content">
                        <div class="side-bar__title">
                            <span class="side-bar__sub h8">Справочна інформація</span>
                            <img class="side-bar__exit" src="../assets/img/icons/exit.svg" alt="exit">
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
                                <img src="../assets/img/icons/phone-icon-mob.svg" alt="phone-icon">
                                <div class="side-bar__cotacts-item-sub">
                                    <a href="#" class="h8">0 800 75 33 63</a>
                                    <span>Безкоштовно по Україні</span>
                                    <a href="#" class="h8">Перетелефонуйте мені</a>
                                </div>
                            </li>
                            <li class="side-bar__cotacts-item">
                                <img src="../assets/img/icons/clock-mob.svg" alt="phone-icon">
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
    </section>
</template>