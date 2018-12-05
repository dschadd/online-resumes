<template>
  <div class="resume-show">
    <h1>{{ student }}</h1>
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
    axios.get("http://localhost3000/api/students/" + this.$route.params.id).then(function(response) {
      this.student = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
