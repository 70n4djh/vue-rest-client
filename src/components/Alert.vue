<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      text
      color="orange"
      type="error"
      :value="alert"
      transition="scale-transition"
    >{{parentMessage}}</v-alert>
  </div>
</template>

<script>
export default {
  name: "Alert",
  // To use props, they must be declared
  props: {
    parentMessage: String,
    alert: Boolean,
  }
};
</script>
