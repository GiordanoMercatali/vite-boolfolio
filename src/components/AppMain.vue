<template lang="">
    <main>
        <div v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data(){
        return{
            serverUrl: 'http://127.0.0.1:8000',
            projects: [],
        };
    },

    created() {
       // axios.get(`http://127.0.0.1:8000/api/projects`)
         axios.get(`${this.serverUrl}/api/projects`).then((resp) => { this.projects = resp.data.results; });
         //this.projects = resp.data.results => changes depending on the route inside the very API
    },
    components: {
        ProjectCard
    }
}
</script>

<style lang="scss" scoped>
    main{
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        // background-color: red;
    }
</style>