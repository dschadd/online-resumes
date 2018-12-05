<template>
  <div class="student-index">
    <div v-for="student in students">
      <div class="card border-secondary mb-3 mt-3 ml-2 mr-2" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://www.realityblurred.com/realitytv/images/2018/09/joe-schmo-show-matt-kennedy-gould.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ student.first_name + " " + student.last_name }}</h5>
          <p class="card-text">{{ student.short_bio }}</p>
          <a :href="student.online_resume_url" class="btn btn-primary">Resume</a>
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
      students: []
    };
  },
  created: function() {
    axios.get("https://gentle-sierra-69054.herokuapp.com/api/students").then(
      function(response) {
        this.students = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
