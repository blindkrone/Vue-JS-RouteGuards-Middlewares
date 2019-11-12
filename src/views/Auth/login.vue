<template>
    <div>
        <div class="ui cards" id="loginForm">
            <div class="card">
                <div class="content" style="padding: 20px 20px 20px 20px">
                    <div class="header">
                        <h3>Login</h3>
                    </div>
                    <form class="ui form">
                        <div class="field">
                            <label style="text-align: left;" for="">E-mail</label>
                            <input v-model="email" type="text" placeholder="Enter E-mail">
                        </div>
                        <div class="field">
                            <label style="text-align: left;" for="">Password</label>
                            <input v-model="password" type="password" placeholder="Enter Password">
                        </div>
                        <button class="ui floating blue button" type="button" @click="login()">Login</button>
                    </form>
                    <br>
                    <p>{{err}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
    data(){
        return {
            email: '',
            password: '',
            err: ''
        }
    },
    methods:{
        login(){
            var $this = this
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(function(){
                var users = firebase.auth().currentUser.uid
                localStorage.setItem("BEEPTS-admin-id",users)
                $this.$router.push('/about')
            })
            .catch(function(error) {
                $this.err = error.message
            });
        },
        checkAuthLogged(){
            var user = localStorage.getItem("BEEPT-admin-id")
            if(user !== null){
                this.$router.push('/about')
            }
        }
    },
    mounted(){
        // this.checkAuthLogged()
    }
}
</script>

<style scoped>
    #loginForm{
        display: inline-block;
        position: relative;
        margin: 0 auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>