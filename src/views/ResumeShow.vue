<template>

  <div class="resume-show" align="left" style="width:960px">
    <h1><strong>Experience</strong></h1>
    <hr>
    <div v-for="experience in student.experience" align="left">
      <h6 style="text-align:left"><strong>{{ experience.company_name }}, {{ experience.job_title }}
        <span style="float:right">{{experience.start_date}} - {{experience.end_date}}</span></strong></h6>
      <h6>{{ experience.details }}</h6>
      <br>
    </div>
    <br>
    <h1><strong>Capstone</strong></h1>
    <hr>
    <div v-for="capstone in student.capstone" align="left">
      <h6>{{ capstone.name }}</h6>
      <h6>{{ capstone.description }}</h6>
      <h6>Website: {{ capstone.url }}</h6>
      <h6>{{ capstone.screenshot }}</h6>
      <br>
    </div>
    <br>
    <h1><strong>Skills</strong></h1>
    <hr>
    <span v-for="(skill, index) in student.skills">
      <span>{{skill.skill_name}}</span><span v-if="index+1 < student.skills.length">, </span>
    </span>
  </div>
</template>

<style>

</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      student: {},
    };
  },
  created: function() {
    axios.get("https://gentle-sierra-69054.herokuapp.com/api/students/1").then(function(response) {
      this.student = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>
