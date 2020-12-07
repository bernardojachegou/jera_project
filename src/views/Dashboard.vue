<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <NavigationBar />
    <div class="dash-box">
      <section class="dash-sections">
        <legend>Sugestões</legend>
        <div class="movies-gallery">
          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="dark" icon="live_tv" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="secondary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>

        <legend>Minha lista</legend>

        <div class="movies-gallery">
          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="dark" icon="live_tv" />
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="secondary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>
      </section>
    </div>
  </q-layout>
</template>

<script>
import NavigationBar from "../components/NavigationBar";

export default {
  name: "Dashboard",
  components: {
    NavigationBar,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
.dash-box {
  padding-top: 80px;
}

.dash-box .dash-sections {
  margin: 12px;
}

.dash-sections legend {
  font-weight: bold;
  font-size: 20px;
}

.dash-sections .movies-gallery {
  display: flex;
}

.movies-gallery .movie-card {
  width: 300px;
  margin: 12px;
}
</style>
