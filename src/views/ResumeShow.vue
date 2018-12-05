<template>
  <div class="resume-show">
    <div class="container">
      <img class="card-img-top" src="" alt="Profile pic" />
      <div class="card text-center">
        <div class="card-body">
          <h4 class="card-title">{{ student.first_name + " " + student.last_name }}</h4>
          <p class="card-text">{{ student.short_bio }}</p>
          <a :href="student.linkedin_url" class="btn btn-primary ml-2" target="_blank">LinkedIn</a>
          <a :href="student.website_url" class="btn btn-primary ml-2" target="_blank">Personal Website</a>
          <a :href="student.github_url" class="btn btn-primary ml-2" target="_blank">Github</a>
          <div class="card-footer text-muted">{{ student.email + " " + student.phone_number }}</div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Education:</h2>
      <div v-for="education in student.education" class="card border-secondary mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ education.university_name }}</h5>
          <p class="card-text">{{ education.degree }}</p>
          <p class="card-text">{{ education.details }}</p>
          <p class="card-text">{{ education.start_date + "-" + education.end_date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    axios.get("https://gentle-sierra-69054.herokuapp.com/api/students/1").then(
      function(response) {
        this.student = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
