<template lang="">
    <div>
        <h2>About us</h2>
        <router-link :to="{name: link}" class="nav-link">
            Home
        </router-link>
    </div>

</template>

<script>
export default {
    data() {
    return {
      link: 'home',
    }
  }
}
</script>

<style lang="scss" scoped>
    span{
        color: red;
    }
</style>