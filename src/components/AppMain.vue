<template lang="">
    <main>
        <div>Test</div>
        <div v-for="project in projects" :key="project.id">
        {{project.title}}
    </div>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            baseUrl: 'http://127.0.0.1:8000',
            projects: []
        };
    },

    created() {
        axios.get(`${this.baseUrl}/api/projects`).then((resp) => {
            this.projects = resp.data.results.data;
        });
    },
}
</script>

<style lang="scss" scoped>
    main{
        background-color: red;
    }
</style>