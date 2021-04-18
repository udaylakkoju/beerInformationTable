<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <div class="informationTemplate">
      <h1 class="title">
        {{ beerInformation.name }}
      </h1>
      <p class="lastModified">Last Modified : {{ beerInformation.last_mod }}</p>
      <div>
        <b-table responsive :items="informationTable"></b-table>
      </div>
      <p class="descript">
        <span class="descript-title"> Description </span> :
        <br />
        {{ beerInformation.descript }}
      </p>
    </div>
    <div class="text-right">
      <b-button squared @click="goToLandingPage" class="backButtonClass">
        Back To Landing Page
      </b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Information",
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
      ],
      informationTable: [],
    };
  },
  created() {
    this.beerInformation = this.$route.params.data;
    this.items.push({
      text: this.beerInformation.name ? this.beerInformation.name : "",
      active: true,
    });
    this.informationTable = [
      {
        brewery_id: this.beerInformation.brewery_id,
        cat_id: this.beerInformation.cat_id,
        style_id: this.beerInformation.style_id,
        abv: this.beerInformation.abv,
        ibu: this.beerInformation.ibu,
        srm: this.beerInformation.srm,
        upc: this.beerInformation.upc,
      },
    ];
  },
  methods: {
    goToLandingPage() {
      this.$router.push({
        name: "BeerProjectListing",
      });
    },
  },
  components: {},
};
</script>

<style>
.informationTemplate {
  margin: 2% 5%;
  padding: 2% 5%;
  border: 1px solid black;
}
.title {
  text-transform: uppercase;
}
.lastModified {
  text-align: left;
  font-style: italic;
}
.backButtonClass {
  font-style: italic;
}
.descript-title {
  font-weight: 800;
}

.descript,
.descript-title {
  text-align: left;
}
</style>