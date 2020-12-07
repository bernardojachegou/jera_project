<template>
  <div class="main">
    <div class="register-box">
      <div class="icon-box">
        <h1>My Favorite Movies</h1>
        <q-icon name="theaters" size="64px" />
        <h2>Novo usuário</h2>
        <router-link :to="{ name: 'Login' }">
          <q-btn class="back-button" round color="secondary" icon="west" />
        </router-link>
      </div>

      <q-input
        class="register-input"
        square
        filled
        color="secondary"
        v-model="text"
        label="E-mail"
        type="email"
      />

      <q-input
        class="register-input"
        color="secondary"
        v-model="password"
        label="Senha"
        filled
        :type="isPwd ? 'password' : 'text'"
        ><template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        class="register-input"
        color="secondary"
        v-model="password"
        label="Repita a senha"
        filled
        :type="isPwd ? 'password' : 'text'"
        ><template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input
        class="register-input"
        color="secondary"
        square
        filled
        v-model="text"
        label="Nome"
        type="text"
      />
      <q-input
        class="register-input"
        color="secondary"
        square
        filled
        v-model="text"
        type="date"
      />
      <div class="button-box">
        <q-btn
          class="enter-button"
          color="secondary"
          unelevated
          rounded
          label="Cadastrar"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      password: "",
      isPwd: true,
    };
  },
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

.register-box {
  margin: 0 auto;
  max-width: 600px;
}

.register-box .icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
}

.register-box .icon-box h1 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

.register-box .icon-box h2 {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-top: 12px;
  text-transform: uppercase;
}

.register-box .register-input {
  margin: 24px 0;
  width: 350px;
}

.register-box .button-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
}

.enter-button {
  width: 250px;
}
</style>