<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import beersData from "../assets/beers.json";
import About from "./About.vue";
const axios = require('axios');
export default {
  name: "Home",
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Brewery",
          field: "brewery_id",
          type: "number",
          sortable: false,
        },
        {
          label: "Last Modified",
          field: "last_mod",
          sortable: false,
        },
      ],
      rows:beersData.data
    };
  },
  created() {
  // GET request using axios with error handling
  let location = '../assets/beers.json'
  axios.get(location)
    .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
