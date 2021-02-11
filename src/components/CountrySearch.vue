<template>
  <div>
      <b-input-group prepend="Country" class="mt-3">
        <b-form-input placeholder="Enter one country name" v-model="countryName"></b-form-input>
        <b-input-group-append>
          <b-button variant="primary" @click="findCountryByName()">Confirm</b-button>
        </b-input-group-append>
      </b-input-group>
    <br /> <br />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      results: {},
      countryName: ""
    };
  },
  methods:{
    findCountryByName() {
      this.axios
          .get(this.$root.api + "name/" + this.countryName)
          .then((response) => {
            this.results = response.data;

            if (this.results.length > 0) {
              this.$emit("searchCountryByName", this.results)
            }
          })
    }
  }
}
</script>
