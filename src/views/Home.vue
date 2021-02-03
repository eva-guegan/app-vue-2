<template>
  <div class="home" id="main">
    <HelloWorld msg="Choose your country !"/>
    <br />
    <!-- Faire une barre de recherche qui déclenche une requête vers l'api avec différents critères
    - Une page à côté ?
    - faire une recherche rapide par nom de pays puis un btn recherche avancé
    -->

    <div class="card-deck justify-content-center">
      <div v-for="event in events">
        <div class="card" style="width: 30rem;">
          <img :src="event.flag" class="card-img-top" alt="flag">
          <div class="card-body">
            <h5 class="card-title">{{ event.name }}</h5>
            <p class="card-text">
              Capitale : {{ event.capital }} <br />
              Region : {{ event.region }} <br />
              Population : {{ event.population }} <br />
              Langage natif : {{ event.languages }}
            </p>
            <a href="#" class="btn btn-primary">Détail</a>
            <!-- Voir pour faire une modal de détail via un component comme HelloWorld -->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import axios from "axios";

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    data() {
      return {
        events: []
      }
    },
    beforeCreate() {
      axios
          .get('https://restcountries.eu/rest/v2/all')
          .then(res => {
            this.events = res.data
            console.log(res.data)
          })
    },
  };
</script>
