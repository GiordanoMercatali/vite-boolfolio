<script>
// import axios from 'axios';
import AppMain from './components/AppMain.vue';

export default {
  data(){
    return{
      
    };
  },
  
  components: {
    AppMain
  },
}
</script>

<template>
  <h1>Test</h1>
  <router-view> </router-view>
  <br>
  <AppMain />
</template>

<style>

</style>
