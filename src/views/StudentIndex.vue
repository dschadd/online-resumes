<template>
  <div class="student-index">
    <div v-for="student in students">
      <a v-bind:href="`/#/students/${student.id}`"> {{ student.first_name }} </a>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      students: [{ id: 1, first_name: "pete" }, { id: 2, first_name: "joe" }]
    };
  },
  created: function() {
    axios.get("http://localhost3000/api/students/").then(function(response) {
      this.student = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
