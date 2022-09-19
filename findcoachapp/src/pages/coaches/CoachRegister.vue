<template>
  <base-card>
    <h2>Register as a Coach now!</h2>
    <coach-form @save-data="register"></coach-form>
  </base-card>
</template>
<script>
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: {
    CoachForm,
  },
  methods: {
    register(data) {
      this.$store.dispatch("coaches/register", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>
