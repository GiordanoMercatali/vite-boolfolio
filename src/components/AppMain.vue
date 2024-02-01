<template lang="">
    <main>
        <!-- <div>Test</div> -->
        <div v-for="project in projects" :key="project.id">
            <span>test</span>
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
         axios.get(`${this.serverUrl}/api/projects`)
       // axios.get(`http://127.0.0.1:8000/api/projects`)
        .then((resp) => {
            this.projects = resp.data.results.data;
        });
    },
    components: { ProjectCard }
}
</script>

<style lang="scss" scoped>
    main{
        background-color: red;
    }
</style>