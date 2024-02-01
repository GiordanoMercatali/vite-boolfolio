<template lang="">
    <div>
        
    </div>
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
    
</style>