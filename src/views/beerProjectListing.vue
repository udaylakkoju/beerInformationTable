<template>
  <div class="overflow-auto">
    <div class="beers-listing-table">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :search-options="{
          enabled: true,
        }"
        @on-row-click="onRowClick"
        :pagination-options="{
          enabled: true,
          perPage: 6,
        }"
      >
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import beersData from "../assets/beers.json";

export default {
  name: "BeerProjectListing",
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
          width: '60%'
        },
        {
          label: "Brewery",
          field: "brewery_id",
          type: "number",
          width: '15%',
          sortable: false,
        },
        {
          label: "Last Modified",
          field: "last_mod",
          type: "date",
          width: '25%',
          dateInputFormat: "yyyy-MM-dd HH:mm:ss",
          dateOutputFormat: "MMM do yy",
        },
      ],
      rows: beersData.data,
    };
  },
  computed: {},
  methods: {
    onRowClick(params) {
      let beerInformation = params.row;
      this.$router.push({
        name: "Information",
        params: { data: beerInformation },
      });
    },
  },
  components: {
    VueGoodTable,
  },
};
</script>
<style scoped>
.beers-listing-table {
  padding: 2% 5%;
}
</style>