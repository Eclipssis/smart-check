<template>
  <div class="home">
    <header class="header">
        <span class="logo-title">Smart Check</span>
        <div class="app-logo">
          <div class="text-left">
            <img src="@/assets/images/app-store.png" class="apple-app">
            <img src="@/assets/images/android.png" class="android-app">
          </div>
        </div>
    </header>

    <div class="container">
        <div class="count-down">
            <div>
                <h2 class="h2">Термін придатності триватиме:</h2>
            </div>

            <vue-countdown :time="expireDays" v-slot="{ days, hours, minutes, seconds }">
              <div class="timer" :class="{expired: isExpired}">
                <div class="timer-wrap" >
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
            <img src="@/assets/images/photo1671616747.jpeg" alt="">
            <span v-if="isExpired" class="expired-label">ПРОСРОЧЕНО</span>
        </div>

        <h1 class="h1">Носки Чоловічі Житомирські</h1>

        <div class="product-info">
            <div>
                <span class="instruments">Виробник:</span>
                <span class="info">Житомир</span>
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
            <a class="facebook" href="https://www.facebook.com/profile.php?id=100039877674817"></a>
            <a class="insta" href="https://www.instagram.com/noskizhitomirski/"></a>
            <a class="youtube" href="https://www.instagram.com/noskizhitomirski/"></a>
        </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.4975322085556!2d33.41269235115414!3d47.90740987504072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db20e9f6cff72f%3A0x28d7e3209fbbdd10!2z0YPQuy4g0JDQu9C10LrRgdCw0L3QtNGA0LAg0JLQsNGB0Y_QutC40L3QsCwg0JrRgNC40LLQvtC5INCg0L7Qsywg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDUwMDAw!5e0!3m2!1sru!2sua!4v1671201777137!5m2!1sru!2sua"
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
      expireDays: 0,
      dateCreated: moment('2022.12.01 15:00'),
      dateExpired: moment('2023.01.15 15:00'),
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
