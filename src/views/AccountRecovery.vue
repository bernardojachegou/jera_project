<template>
  <div class="main">
    <div class="login-box">
      <div class="icon-box">
        <h1>My Favorite Movies</h1>
        <q-icon name="theaters" size="64px" />
        <h2>Recuperar senha</h2>
      </div>
      <q-input
        class="recovery-input"
        color="secondary"
        square
        filled
        v-model="text"
        label="Nome"
        type="text"
      />
      <q-input
        class="recovery-input"
        color="secondary"
        square
        filled
        v-model="text"
        label="E-mail"
        type="email"
      />

      <div class="button-box">
        <q-btn
          class="enter-button"
          unelevated
          rounded
          color="secondary"
          label="Enviar"
        />
      </div>

      <div class="options">
        <div class="create-account">
          <span
            >Não tem conta?
            <a
              ><router-link :to="{ name: 'Register' }"
                >Cadastra-se</router-link
              ></a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecoveryPassword",
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
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

.login-box .icon-box h2 {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-top: 12px;
  text-transform: uppercase;
}

.login-box .recovery-input {
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
  width: 250px;
}

.options {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: #26a69a;
}

a:hover {
  text-decoration: underline;
}
</style>
