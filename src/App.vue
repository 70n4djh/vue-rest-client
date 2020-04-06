<template>
  <v-app>
    <v-content>
      <v-banner>
        {{ $route.meta.title }}
        </v-banner>
      <router-view></router-view>
      <v-footer
        absolute
        class="font-weight-medium"
        >
          <v-col
            class="text-center"
            cols="12"
          >
            {{ new Date().getFullYear() }} — <strong>Spring boot client demo</strong>
          </v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
