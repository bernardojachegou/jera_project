<template>
  <div>Home</div>
</template>

<script>
import client from "../services/http";

export default {
  name: "Home",
  created() {
    client.get("/").then(value => console.log(value));
  }
};
</script>

<style scoped></style>
