<template>
  <div class="resume-show">
    <!-- <h1>{{ student }}</h1> -->
    <div class="container">
      <h2>Education:</h2>
      <div v-for="education in student.education" class="card border-secondary mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ education.university_name }}</h5>
          <p class="card-text">{{ education.degree }}</p>
          <p class="card-text">{{ education.details }}</p>
          <p class="card-text">{{ education.start_date + "-" + education.end_date}}</p>
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
        console.log(response.data);
        this.student = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
