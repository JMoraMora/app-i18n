<template>
  <div>
    <h1>i18n</h1>
    <button v-on:click="viewTranslates">console</button>
    <br> <br>
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
  created() {
    fetch('http://quaweb2.phalcon/api/v1/options/loadLangs')
      .then(response => response.json())
      .then(res => 
        this.translate.push(res.data)
      );
  },
  data() {
    return {
      lc: true,
      translate: []
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
    },
    viewTranslates() {
      console.log(this.translate)
    }
  }
}
</script>

<style>

</style>