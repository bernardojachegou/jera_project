<template>
  <div class="main">
    <div class="login-box">
      <div class="icon-box">
        <h1>My Favorite Movies</h1>
        <q-icon name="theaters" size="64px" />
      </div>
      <q-input
        class="login-input"
        square
        filled
        v-model="text"
        label="E-mail"
        type="email"
      />

      <q-input
        class="login-input"
        v-model="password"
        label="Senha"
        filled
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="button-box">
        <q-btn
          class="enter-button"
          unelevated
          rounded
          color="primary"
          label="Entrar"
        />
      </div>

      <div class="options">
        <div class="create-account">
          <span>Não tem conta? <a href="">Cadastra-se</a></span>
        </div>
        <div class="reset-password">
          <span>Esqueceu sua senha? <a href="">Recuperar</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      password: "",
      isPwd: true,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-box {
  margin: 0 auto;
  max-width: 600px;
  max-height: 700px;
}

.login-box .icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
}

.login-box .icon-box h1 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

.login-box .login-input {
  margin: 24px 0;
  width: 350px;
}

.login-box .button-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0 24px 0;
}

.enter-button {
  width: 300px;
}

.options {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: #007ee6;
}

a:hover {
  text-decoration: underline;
}
</style>
