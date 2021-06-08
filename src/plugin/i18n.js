import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  es: {
    titulo: 'titulo',
    cuerpo: 'cuerpo'
  },
  en: {
    titulo: 'title',
    cuerpo: 'body'
  }
}

export default new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages, // set locale messages
})