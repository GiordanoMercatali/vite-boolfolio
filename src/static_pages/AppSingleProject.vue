<template lang="">
    <div>
        <h2>{{project.title}}</h2>
        <!-- <p v-if="{{project.description}}">{{project.description}}</p>
        <p v-else> No data </p> -->
        <p>{{project.description ? project.description : "No data"}}</p>
        <div>
            <h2>Details</h2>
            <ul>
                <li>
                    <span class="bullet-title">Languages: </span>
                    <!-- <span v-if="{{project.languages}}">{{project.languages}}</span>
                    <span v-else> No data </span>-->
                    <span>{{project.languages ? project.languages : "No data"}}</span> 
                </li>

                <li>
                    <span class="bullet-title">N° of Stakeholders: </span>
                    <!-- <span v-if="{{project.n_stakeholders}}">{{project.n_stakeholders}}</span>
                    <span v-else> No data </span>-->
                    <span>{{project.n_stakeholders ? project.n_stakeholders : "No data"}}</span> 
                </li>

                <li>
                    <span class="bullet-title">Year: </span>
                    <!-- <span v-if="{{project.year}}">{{project.year}}</span>
                    <span v-else> No data </span> -->
                    <span>{{project.year ? project.year : "No data"}}</span> 
                </li>
            </ul>
        </div>
        <!-- <a href="{{project.git_link}}">{{project.git_link}}</a> -->
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            serverUrl: 'http://127.0.0.1:8000',
            project: "",
        };
    },

    created() {

        // console.log("Montato");

        axios.get(`${this.serverUrl}/api/projects/${this.$route.params.slug}`).then((resp) => {
            console.log(resp);
            this.project = resp.data.results;
        });
    }
}
</script>
<style lang="scss" scoped>
    .bullet-title{
        font-weight: bold;
    }
</style>