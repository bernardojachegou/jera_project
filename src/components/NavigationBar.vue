<template>
  <q-header elevated class="bg-white text-grey-8" height-hint="64">
    <q-toolbar class="GNL__toolbar navigation-bar">
      <q-toolbar-title
        v-if="$q.screen.gt.xs"
        shrink
        class="row items-center no-wrap"
      >
        <router-link :to="{ name: 'Dashboard' }">
          <span class="q-ml-sm logo-box">
            <q-icon name="theaters" size="64px" color="black" />My Favorite
            Movies</span
          >
        </router-link>
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
            <router-link :to="{ name: 'Dashboard' }">
              <q-item clickable>
                <q-item-section class="item-section">
                  Minha lista
                </q-item-section>
              </q-item>
            </router-link>

            <q-separator />

            <router-link :to="{ name: 'MovieList' }">
              <q-item clickable>
                <q-item-section class="item-section"> Catálogo </q-item-section>
              </q-item>
            </router-link>

            <router-link :to="{ name: 'Dashboard' }">
              <q-item clickable>
                <q-item-section class="item-section">
                  Favoritos
                </q-item-section>
              </q-item>
            </router-link>

            <q-separator />

            <router-link :to="{ name: 'Profiles' }">
              <q-item clickable>
                <q-item-section class="item-section"
                  >Trocar perfil</q-item-section
                >
              </q-item>
            </router-link>

            <q-separator />

            <router-link :to="{ name: 'Login' }">
              <q-item clickable>
                <q-item-section class="item-section"> Sair </q-item-section>
              </q-item>
            </router-link>
          </q-list>
        </q-menu>
      </q-btn>

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round flat>
          <q-avatar size="40px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <q-tooltip>Configurações</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped>
.navigation-bar {
  padding: 8px 24px;
}

.navigation-bar .logo-box {
  cursor: pointer;
  color: black;
}

.search-bar {
  min-width: 400px;
}

.menu-button {
  min-width: 150px;
  margin-right: 24px;
}

.item-section {
  color: black;
  font-weight: 400;
}
</style>

<script>
export default {
  name: "NavigationBar",
};
</script>
