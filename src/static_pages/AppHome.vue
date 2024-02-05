<template lang="">
    <div>
        <h2>Home</h2>
        <AppMain/>
        <!-- <router-link :to="{name: link}" class="nav-link">
            About
        </router-link> -->
    </div>

</template>

<script>
import AppMain from '../components/AppMain.vue';
export default {
    data() {
    return {
    //   link: 'about',
    }
  },

  components: {
        AppMain
    }

}
</script>

<style lang="scss" scoped>
    span{
        color: red;
    }
</style>