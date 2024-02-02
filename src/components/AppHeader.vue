<template lang="">
    <header>
        <h2>Header</h2>
        <ul>
            <li v-for="link in links">
                <router-link :to="{name: link}" class="nav-link">
                    {{link}}
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
  data() {
    return {
      links: ['home', 'about']
    }
  }
}
</script>

<style lang="scss" scoped>
    ul{
        display: flex;
        justify-content: start;
        
        li{
            margin-right: 1rem;
            list-style-type: none;
        }
    }
</style>