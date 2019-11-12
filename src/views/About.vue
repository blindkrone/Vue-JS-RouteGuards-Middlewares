<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{message}}</p>
    <div class="ui primary button" @click="logout()">Logout</div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data(){
    return {
      message: '',
    }
  },
  methods:{
    logout(){
      var $this = this
      firebase.auth().signOut()
      .then(function(){
        localStorage.removeItem("BEEPTS-admin-id")
        $this.$router.push('/')
      })
    },
    async checkAuthLogged(){
      this.message = await localStorage.getItem("BEEPTS-admin-id")
      if(!this.message){
        this.$router.push('/')
      }
    }
  },
  mounted(){
    this.checkAuthLogged()
  }
}
</script>

<style scoped>
  
</style>