<template>
  <div class="detailsCountry">
    <div v-if="displayContent === true">
      <h1>{{ $route.params.name }}</h1>
      <b-img thumbnail fluid :src="countryDetails.flag" alt="flag" style="width: 30rem"> </b-img>
      <br />

      <!-- TODO: Centrer les éléments + affichage HTML -->
      <h4>General informations</h4>
      <b-list-group horizontal="md">
        <b-list-group-item><b>Capital :</b> {{ countryDetails.capital }}</b-list-group-item>
        <b-list-group-item><b>Region :</b> {{ countryDetails.region }}</b-list-group-item>
        <!-- TODO: Mettre un filtre -->
        <b-list-group-item><b>Population :</b> {{ countryDetails.population |cap }}</b-list-group-item>
        <b-list-group-item><b>Currencies : </b>
          <div v-for="currency in countryDetails.currencies">
            {{ currency.name }} symbolisé par : {{ currency.symbol }}, code : {{ currency.code }}
          </div>
        </b-list-group-item>
      </b-list-group>

      <br />
      <h4>Geographic informations</h4>
      <b-list-group horizontal="md">
        <b-list-group-item><b>Subregion :</b> {{ countryDetails.subregion }}</b-list-group-item>
        <b-list-group-item><b>TimeZones : </b>
          <div v-for="timeZone in countryDetails.timezones">
            {{ timeZone}}
          </div>
        </b-list-group-item>
        <!-- TODO: nom entier du pays -->
        <b-list-group-item><b>Borders :</b>
          <div v-for="border in countryDetails.borders">
            {{ border }}
          </div>
        </b-list-group-item>
      </b-list-group>

      <br />
      <h4>Cultural informations</h4>
      <b-list-group horizontal="md">
        <b-list-group-item><b>Demonym :</b> {{ countryDetails.demonym }}</b-list-group-item>
        <b-list-group-item><b>Native name :</b> {{ countryDetails.nativeName }}</b-list-group-item>
        <b-list-group-item><b>Languages :</b>
          <div v-for="language in countryDetails.languages">
            {{ language.name }} (native name : {{ language.nativeName }})
          </div>
        </b-list-group-item>
      </b-list-group>

      <br />
      <h4>Other informations</h4>
      <b-list-group horizontal="md">
        <b-list-group-item><b>Translations :</b>
          <!-- TODO: Mettre le nom de la langue -->
          <div v-for="translation in countryDetails.translations">
            {{ translation }}
          </div>
        </b-list-group-item>
        <b-list-group-item><b>Regional blocs</b>
          <div v-for="bloc in countryDetails.regionalBlocs">
            {{ bloc.name }}
          </div>
        </b-list-group-item>
      </b-list-group>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'detailsCountry',
    components: {},
    data() {
      return {
        countryDetails: {},
        displayContent: false,
      }
    },
    created() {
      this.getDetails();
    },
    methods:{
      getDetails() {
        this.axios
            .get("https://restcountries.eu/rest/v2/name/"+ this.$route.params.name +"?fullText=true")
            .then((response) => {
              //La réponse JSON est contenu dans un tableau avec toujours une entrer
              this.countryDetails = response.data[0];
              this.displayContent = true;
              console.log(this.countryDetails)
            });
      }
    }
  }
</script>