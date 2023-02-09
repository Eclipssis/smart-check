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
            <h2 class="h2">Термін придатності <br>
              <template v-if="isExpired">скінчився</template>
              <template v-else>товара</template>
            </h2>

            <p v-if="isExpired" class="expired-text">Прострокованый на:</p>

            <div v-if="duration" class="timer" :class="{expired: isExpired}">
              <div class="timer-wrap" >
                <div class="month-days-minutes">
                    <div class="numbers">
                        <div class="numbers-size">{{ duration.days() }}</div>
                    </div>
                    <p class="instruments color-olive">Дні</p>
                </div>

                <div class="dots">:</div>

                <div class="month-days-minutes">
                    <div class="numbers">
                        <div class="numbers-size">{{ formatNumber(duration.hours()) }}</div>
                    </div>
                    <p class="instruments color-olive">Години</p>
                </div>

                <div class="dots">:</div>

                <div class="month-days-minutes">
                    <div class="numbers">
                        <div class="numbers-size">{{ formatNumber(duration.minutes()) }}</div>
                    </div>
                    <p class="instruments color-olive">Хвилини</p>
                </div>

                <div class="dots">:</div>

                <div class="month-days-minutes">
                    <div class="numbers">
                        <div class="numbers-size">{{ formatNumber(duration.seconds()) }}</div>
                    </div>
                    <p class="instruments color-olive">Cекунди</p>
                </div>
              </div>

            </div>

        </div>

        <div class="product-img">
            <img src="@/assets/images/photo1671616747.jpeg" alt="">
            <span v-if="isExpired" class="expired-label">ПРОСТРОЧЕНО</span>
        </div>

        <h1 class="h1">Носки Чоловічі Житомирські</h1>

        <div class="product-info">
            <div>
                <span class="instruments">Номер партії:</span>
                <span class="info">20855</span>
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

            <div class="text-center">
              <span class="more" @click="onOpenDetails">
                <span>Докладніше</span>
                <img src="@/assets/images/arrow-down.png" alt="" class="more-arrow" :class="{'open': isOpen}">
              </span>
            </div>

            <div
              :class="{'open': isOpen}"
              :style="{height: isOpen ? `${detailsHeight}px` : '0px' }"
              class="details"
              ref="details"
            >
              <h3 class="detail-title">Cклад:</h3>
              <div class="detail-item">
                <div>Бавовна</div>
                <span>80%</span>
              </div>

              <div class="detail-item">
                <div>Поліестер</div>
                <span>16%</span>
              </div>

              <div class="detail-item mb-3">
                <div>Еластан</div>
                <span>4%</span>
              </div>

              <div class="">
                Виробник: ФОП Камінна Л.В.
              </div>
              <div>
              Україна, м. Житомир, вул Ватуніна, 55б
              </div>
              <div>моб. +38 (097) 485-11-52</div>
              <div>моб. +38 (097) 410-02-54</div>
            </div>
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
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

export default {
  name: 'MolokoView',

  data () {
    return {
      dateCreated: moment('2023.01.01 15:00'),
      dateExpired: moment('2023.01.25 15:00'),
      isExpired: false,
      isOpen: false,
      detailsHeight: 0,

      duration: 0,
      toExpireId: null,
      fromExpireId: null,
      time: 0
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
    },

    onOpenDetails () {
      this.isOpen = !this.isOpen

      if (this.isOpen) {
        this.detailsHeight = this.$refs.details.scrollHeight
      }
    },

    countRevert () {
      this.time = this.time + 1
      this.duration = moment.duration(this.time, 'seconds')

      const end = this.dateExpired.diff(this.dateCreated, 'seconds')
      if (this.time >= end) {
        clearInterval(this.fromExpireId)
      }
    },

    startRevertCount () {
      this.countRevert()

      this.fromExpireId = setInterval(() => {
        this.countRevert()
      }, 1000)
    },

    startTimer () {
      const diff = this.dateExpired.diff(moment(), 'seconds')

      if (diff < 0) {
        if (this.toExpireId) clearInterval(this.toExpireId)
        this.isExpired = true
        this.time = Math.abs(diff === -1 ? 0 : diff)
        if (!this.fromExpireId) this.startRevertCount()
      } else {
        this.duration = moment.duration(diff, 'seconds')
      }
    }
  },

  mounted () {
    this.startTimer()

    this.toExpireId = setInterval(() => {
      this.startTimer()
    }, 1000)
  }
}
</script>
