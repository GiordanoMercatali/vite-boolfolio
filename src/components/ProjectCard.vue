<template lang="">
    <div class="card h-100">
        <h4>{{ project.title }}</h4>
        <div class="card-body">
            <p>{{ project.description }}</p>
            <a :href="getLink(project.slug)">More</a>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
export default {
    props: {
        project: Object,
    },
    data(){
        return{
            serverUrl: 'http://127.0.0.1:8000',
        };
    },
    
    methods :{
        getLink(currentSlug){
                return `/${currentSlug}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        border: 1px solid black;
        width: 20rem;
        margin-bottom: 2rem;
        padding: 1rem;
        min-height: 13rem;

        .card-body{
            border-top: 1px dotted black
        }
    }
</style>