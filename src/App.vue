<template>
  <div id="app">
    <div id="nav" v-if="isAuthenticated">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/henlo">Henlo</router-link>
      <div class="ui primary button" @click="logout()">Logout</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { mapState } from 'vuex';
export default {
  methods:{
    logout(){
        var $this = this
        firebase.auth().signOut()
        .then(function(){
          localStorage.removeItem("BEEPTS-UserToken")
          $this.$store.state.isAuthenticated = false
          $this.$router.push('/')
        })
    },
    /* if the page is refreshed, re-set the store isAuthenticated state with the Current UserToken for the navbar*/
    async checkIfAuthenticated(){
      var auth = await localStorage.getItem("BEEPTS-UserToken")
      if(auth !== null){
        this.$store.state.isAuthenticated = true
      }
    },
  },
  mounted(){
    this.checkIfAuthenticated()
  },
  computed: mapState(['isAuthenticated']),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
