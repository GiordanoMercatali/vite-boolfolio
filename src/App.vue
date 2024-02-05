<script>
// import axios from 'axios';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  data(){
    return{
      
    };
  },
  
  components: {
    AppMain,
    AppHeader
  },
}
</script>

<template>
  <h1>Test</h1>
  <AppHeader />
  <router-view> </router-view>
  <br>
  <!-- <AppMain /> -->
</template>

<style>

</style>
