<script>
    export default {
      mounted() {
        const form = document.createElement('script')
        form.setAttribute('src', './src/components/preloader/index.js')
        document.body.appendChild(form)
      }
    }
</script>

<template>
  <div class="welcome wrapper">
    <div class="welcome__content form-style">
        <div class="welcome__title h7">Лист про підтвердження реестрації відправленно вам на пошту</div>
        <router-link to="/"><button class="welcome__btn btn">Перейти на головну сторінку</button></router-link>
    </div>
  </div>
  <div id="preloader" class="visible"></div>
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