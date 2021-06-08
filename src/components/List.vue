<template>
  <div>
    <h1>i18n</h1>
    <button v-on:click="changeLanguage">traducir</button>
    <div>
      <p>{{ $t('titulo') }}</p>
      <p>{{ $t('cuerpo') }}</p>
    </div>
  </div>
</template>

<script>
import i18n from '@/plugin/i18n'
export default {
  data() {
    return {
      lc: true
    }
  },
  methods: {
    changeLanguage() {
      if(this.lc) {
        i18n.locale = 'es'
        this.lc = false
      } else {
        i18n.locale = 'en'
        this.lc = true
      }
    }
  }
}
</script>

<style>

</style>