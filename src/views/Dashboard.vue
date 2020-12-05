<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <span class="q-ml-sm">
            <q-icon name="theaters" size="64px" />
            My Favorite Movies</span
          >
        </q-toolbar-title>

        <q-space />

        <q-input
          class="GNL__toolbar-input search-bar"
          outlined
          dense
          v-model="search"
          color="secondary"
          placeholder="Nome do filme"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="search = ''"
            />
          </template>
        </q-input>

        <q-space />

        <q-btn class="menu-button" color="secondary" label="Menu">
          <q-menu auto-close>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Catálogo</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Minha lista</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Trocar perfil</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Configurações</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <div class="dash-box">
      <section class="dash-sections">
        <legend>Últimos filmes vistos</legend>
        <div class="movies-gallery">
          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>

          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>

          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>

        <legend>Próximos filmes</legend>

        <div class="movies-gallery">
          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>

          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>

          <q-card class="my-card movie-card">
            <q-card-section horizontal>
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

              <q-card-actions vertical class="justify-around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="accent" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card-section>
          </q-card>
        </div>
      </section>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      search: "",
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

.menu-button {
  min-width: 100px;
  margin: 0 12px;
}

.search-bar {
  min-width: 400px;
}

.dash-box {
  padding-top: 64px;
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
