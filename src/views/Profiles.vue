<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <NavigationBar />
    <div class="centered-box">
      <div class="box-wrapper">
        <div class="box-title">
          <h2>Selecione um perfil:</h2>
        </div>
        <div class="box-content">
          <div class="avatar-box">
            <q-avatar class="avatar-card" rounded size="150px">
              <img
                src="https://images.unsplash.com/photo-1607019327082-6c7899d8a66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
            </q-avatar>
            <h4>Perfil 1</h4>
          </div>
          <div class="avatar-box">
            <q-avatar class="avatar-card" rounded size="150px">
              <img
                src="https://images.unsplash.com/photo-1601758174493-45d0a4d3e407?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
            </q-avatar>
            <h4>Perfil 2</h4>
          </div>
          <div class="avatar-box">
            <q-avatar class="avatar-card" rounded size="150px">
              <img
                src="https://images.unsplash.com/photo-1607344965879-a0fb7485f10a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
              />
            </q-avatar>
            <h4>Perfil 3</h4>
          </div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import NavigationBar from "../components/NavigationBar";
export default {
  components: {
    NavigationBar,
  },
};
</script>

<style scoped>
.centered-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered-box .box-wrapper {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 12px;
  background-color: #26a69a;
  border-radius: 8px;
}

.box-wrapper .box-title h2 {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  color: white;
}

.centered-box .box-content {
  display: flex;
}

.centered-box .avatar-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  cursor: pointer;
  border: 3px solid #26a69a;
}

.centered-box .avatar-box:hover {
  border: 3px solid white;
  border-radius: 8px;
}

.centered-box .avatar-box img {
  object-fit: cover;
}

.centered-box .avatar-box h4 {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
</style>