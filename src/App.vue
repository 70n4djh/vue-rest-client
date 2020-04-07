<template>
  <v-app>
    <v-content>
      <div class="headline mt-4 mb-4 font-weight-thin">
        <v-btn class="float-left ml-4" text absolute color="orange" href="/">
          <v-icon class="mr-2">mdi-home</v-icon> Home
        </v-btn>
        <p class="text-center">
          {{ $route.meta.title }}
        </p>

        <v-divider class="mt-4"></v-divider>
      </div>
      <router-view class="mb-8"></router-view>
      <v-footer class="font-weight-medium">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Spring boot client demo</strong>
        </v-col>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
