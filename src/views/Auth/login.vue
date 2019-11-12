<template>
    <div>
        <div class="ui cards" id="loginForm">
            <div class="card">
                <div class="content" style="padding: 20px 20px 20px 20px">
                    <div class="header">
                        <h3>Login</h3>
                    </div>
                    <form class="ui form" @submit.prevent="login()">
                        <div class="field">
                            <label style="text-align: left;" for="">E-mail</label>
                            <input v-model="email" type="text" placeholder="Enter E-mail">
                        </div>
                        <div class="field">
                            <label style="text-align: left;" for="">Password</label>
                            <div class="ui icon input">
                                <input v-model="password" :type="toggleShowPass?'text':'password'" placeholder="Enter Password">
                                <i class="eye link icon" :class="toggleShowPass?'':'slash'" @click.stop="toggleShowPass=!toggleShowPass"></i>
                            </div>
                        </div>
                        <button class="ui blue button" :class="button" type="submit">Login</button>
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
            toggleShowPass: false,
            email: '',
            password: '',
            err: '',
            button: ''
        }
    },
    methods:{
        login(){
            var $this = this
            this.button = 'loading disabled'
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email,this.password)
            .then(function(){
                var users = firebase.auth().currentUser.uid
                localStorage.setItem("BEEPTS-UserToken",users)
                $this.$router.push('/about')
                $this.$store.state.isAuthenticated = true
            })
            .catch(function(error) {
                $this.err = error.message
                $this.button = ''
            });
        },
    },
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