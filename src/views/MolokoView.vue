<template>
  <div class="home">
    <header class="header">
        <span class="logo-title">Smart Check</span>
        <div class="app-logo">
          <img src="@/assets/images/app-store.png" class="apple-app">
          <img src="@/assets/images/android.png">
        </div>
    </header>

    <div class="container">
        <div class="count-down">
          <div>
              <h2 class="h2">Термін придатності <br>
                <template v-if="isExpired">скінчився</template>
                <template v-else>товара</template>
              </h2>

              <p v-if="isExpired" class="expired-text">Прострокованый на:</p>
          </div>

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
            <img src="@/assets/images/moloko.jpg" alt="">
            <span v-if="isExpired" class="expired-label">ПРОСТРОЧЕНО</span>
        </div>

        <h1 class="h1">Молоко Галичина т/ф 2,5% 900 мл</h1>

        <div class="product-info">
            <div>
                <span class="instruments">Номер партії:</span>
                <span class="info">75801</span>
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
                <div>Білок</div>
                <span>3,5%</span>
              </div>

              <div class="detail-item">
                <div>Вуглеводи</div>
                <span>4,8%</span>
              </div>

              <div class="detail-item mb-3">
                <div>Жир</div>
                <span>3,5-4,2%</span>
              </div>

              <div class="">
                ТОВ “Молочна компанія “Галичина”

              </div>
              <div>
                79024, м. Львів, вул. Липинського, 54
              </div>
              <div>моб. +38 (067) 743-65-72</div>
              <div>моб. +38 (032) 232-62-00</div>
            </div>
        </div>

    </div>

    <div class="gray-line"></div>

    <div class="container">
        <h2 class="h2">Соціальні мережі</h2>
        <div class="social-media">
            <a class="web" href="https://galychyna.com.ua/"></a>
            <a class="facebook" href="https://www.facebook.com/Galychyna/"></a>
            <a class="insta" href="https://www.instagram.com/galychyna/"></a>
            <a class="youtube" href="https://www.youtube.com/watch?v=Ei3axtPslNU&ab_channel=%D0%A1%D0%98%D0%A0%D0%9D%D0%90%D0%97%D0%90%D0%92%D0%96%D0%94%D0%98"></a>
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
import momentDurationFormatSetup from 'moment-duration-format'

momentDurationFormatSetup(moment)

export default {
  name: 'MolokoView',

  data () {
    return {
      dateCreated: moment('2023.01.10 22:35'),
      dateExpired: moment('2023.01.18 23:05'),
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
