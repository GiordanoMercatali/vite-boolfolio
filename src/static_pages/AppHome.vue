<template lang="">
    <div>
        <h2>Home</h2>
        <router-link :to="{name: link}" class="nav-link">
            About
        </router-link>
    </div>

</template>

<script>
export default {
    data() {
    return {
      link: 'about',
    }
  }

}
</script>

<style lang="scss" scoped>
    span{
        color: red;
    }
</style>