<template>
  <div id="main">
    <h1>Choose your country !</h1>
    <br />
    <!-- Bonus : Faire une recherche avancé -->
    <country-search @searchCountryByName="displayCountries"/>

    <b-card-group deck class="justify-content-center">
      <div v-for="country in countries">
        <b-card :title="country.name" :img-src="country.flag" img-alt="Flag" style="max-width: 30rem;">
          <b-card-text>
            - Capital : {{ country.capital }} <br />
            - Region : {{ country.region }} <br />
            - Population : {{ country.population }} <br />
            - Spoken languages :
            <b-list-group v-for="language in country.languages">
              <b-list-group-item>{{ language.name }}</b-list-group-item>
            </b-list-group>

          </b-card-text>
          <router-link :to="'country/' + country.name">Détail</router-link>
        </b-card>
        <br />
      </div>
    </b-card-group>

  </div>
</template>

<script>
  // @ is an alias to /src
  import CountrySearch from "@/components/CountrySearch.vue";

  export default {
    name: 'Home',
    components: {
      CountrySearch
    },
    data() {
      return {
        countries: []
      }
    },
    beforeCreate() {
      this.axios
          .get(this.$root.api + 'all')
          .then(res => {
            this.countries = res.data
            console.log(this.countries);
          })
    },
    methods:{
      displayCountries(countries) {
        this.countries = countries;
      }
    }
  }
</script>
