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
                            <input type="text" placeholder="Enter E-mail">
                        </div>
                        <div class="field">
                            <label style="text-align: left;" for="">Password</label>
                            <input type="text" placeholder="Enter Password">
                        </div>
                        <div class="ui floating blue button">Login</div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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