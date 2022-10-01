<!-- <script>
    export default {
      mounted() {
        const bar = document.createElement('script')
        bar.setAttribute('src', './src/components/side-bar/side--bar.js')
        document.body.appendChild(bar)
      }
    }
</script> -->
<template>
    <div class="header__content container">
            <nav class="header__bar">
                    <ul class="header__bar-list h5">
                        <li class="header__bar-item"><a class="header__bar-item-link h5 lang" href="#">Як отримати</a></li>
                        <li class="header__bar-item"><a class="header__bar-item-link h5 lang" href="#">Як продовжити</a></li>
                        <li class="header__bar-item"> <a class="header__bar-item-link h5 lang" href="#">Як повернути</a></li>
                    </ul>
            </nav>
            <div class="header__info">
                <div class="header__info-content">
                    <div class="header__info-phone">
                        <a class="header__info-phone-link phone" href="#">0(800)753-365</a>
                        <p class="header__info-text h5">Безкоштовно по Україні</p>
                    </div>
                    <div class="header__info-lang">
                        <div class="header__info-UA lang">UA</div>
                        <div class="header__info-RU lang">RU</div>
                    </div>
                </div>
                <button class="header__btn sub-btn">
                    <img class="header__btn-img" src="../assets/img/icons/input.svg" alt="button">
                    <div class="header__btn-text">Увійти</div>
                </button>
                <div class="header__info-mob">
                    <div class="header__info-mob-content">
                        <img class="header__info-mob-img" src="../assets/img/icons/in-orange.svg" alt="button">
                        <div class="header__info-mob-text">Увійти</div>
                    </div>
                    <div class="header__info-mob-line">
                        <div class="header__info-mob-item"></div>
                        <div class="header__info-mob-item"></div>
                        <div class="header__info-mob-item"></div>
                    </div>
                </div>
            </div>
    </div>
</template>