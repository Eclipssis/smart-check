<template>
  <div class="home">
    <header class="header">
        <span class="logo-title">Smart Check</span>
        <div class="app-logo">
          <img src="@/assets/images/app-store.png">
          <img src="@/assets/images/android.png">
        </div>
    </header>

    <div class="container">
        <div class="count-down">
          <div>
              <h2 class="h2">Термін придатності товара</h2>
          </div>

          <vue-countdown :time="expireDays" v-slot="{ days, hours, minutes, seconds }">
            <div class="timer">
              <div class="timer-wrap" :class="{expired: isExpired}">
                  <div class="month-days-minutes">
                      <div class="numbers">
                          <div class="numbers-size">{{ days }}</div>
                      </div>
                      <p class="instruments color-olive">Дні</p>
                  </div>

                  <div class="dots">:</div>

                  <div class="month-days-minutes">
                      <div class="numbers">
                          <div class="numbers-size">{{ formatNumber(hours) }}</div>
                      </div>
                      <p class="instruments color-olive">Години</p>
                  </div>

                  <div class="dots">:</div>

                  <div class="month-days-minutes">
                      <div class="numbers">
                          <div class="numbers-size">{{ formatNumber(minutes) }}</div>
                      </div>
                      <p class="instruments color-olive">Хвилини</p>
                  </div>

                  <div class="dots">:</div>

                  <div class="month-days-minutes">
                      <div class="numbers">
                          <div class="numbers-size">{{ formatNumber(seconds) }}</div>
                      </div>
                      <p class="instruments color-olive">Cекунди</p>
                  </div>
              </div>

          </div>
          </vue-countdown>

        </div>

        <div class="product-img">
            <img src="@/assets/images/moloko.jpg" alt="">
        </div>

        <h1 class="h1">Молоко Галичина т/ф 2,5% 900 мл</h1>

        <div class="product-info">
            <div>
                <span class="instruments">Виробник:</span>
                <span class="info">Галичина</span>
            </div>
            <div class="mr">
                <span class="instruments">Дата виготовлення:</span>
                <span class="info">{{ dateCreated.format('DD.MM.YYYY HH:mm') }}</span>
            </div>

            <div class="mr">
                <span class="instruments">Термін придатності:</span>
                <span class="info">{{ expireDuration }} днів</span>
            </div>

            <div class="mr">
                <span class="instruments">Дата кінцевої реалізації:</span>
                <span class="info">{{ dateExpired.format('DD.MM.YYYY HH:mm') }}</span>
            </div>

            <div class="mr">
                <span class="instruments">Умови зберігання:</span>
                <span class="info"> Температура, вологість </span>
            </div>

            <span class="more">
              <span>Подробнее</span>
              <img src="@/assets/images/arrow-down.png" alt="" class="more-arrow">
            </span>
        </div>

    </div>

    <div class="gray-line"></div>

    <div class="container">
        <h2 class="h2">Соціальні мережі</h2>
        <div class="social-media">
            <a class="web" href="https://www.facebook.com/profile.php?id=100039877674817"></a>
            <a class="facebook" href="!#"></a>
            <a class="insta" href="!#"></a>
            <a class="youtube" href="https://www.instagram.com/noskizhitomirski/"></a>
        </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.0752123534612!2d34.793724139427056!3d50.90924029947134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41290189129907b7%3A0x3317e40bfd2e7046!2sMcDonald&#39;s!5e0!3m2!1sru!2sua!4v1671130761293!5m2!1sru!2sua"
      class="map"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'MolokoView',

  data () {
    return {
      expireDays: 2 * 24 * 60 * 60 * 1000,
      dateCreated: moment('2022.12.01 12:00'),
      dateExpired: moment('2023.01.02 09:00'),
      isExpired: false
    }
  },

  computed: {
    expireDuration () {
      return this.dateExpired.diff(this.dateCreated, 'days')
    }
  },

  methods: {
    formatNumber (number) {
      return number < 10 ? `0${number}` : number
    }
  },

  mounted () {
    const diff = this.dateExpired.diff(moment(), 'seconds')

    let expiteTime = diff * 1000
    if (expiteTime < 0) {
      expiteTime = Math.abs(expiteTime)
      this.isExpired = true
    }
    this.expireDays = expiteTime
  }
}
</script>
