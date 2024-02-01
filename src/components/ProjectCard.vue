<template lang="">
    <div class="card h-100">
        <h4>{{ project.title }}</h4>
        <p>{{ project.description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        project: Object,
    },
    data(){
        return{
            serverUrl: 'http://127.0.0.1:8000',
        };
    },
    // computed(){
    //     // return this.project;
    // },
}
</script>

<style lang="">
    
</style>