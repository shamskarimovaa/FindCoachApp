<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <base-badge v-for="area in areas" :key="area" :mode="area" :title="area">{{ area }}</base-badge>
    <div class="actions">
      <base-button link mode="outline" :to="contactLink">Contact</base-button>
      <base-button :to="detailsLink">ViewDetails</base-button>
    </div>
  </li>
</template>
<script>
export default {
  props: ["firstName", "surname", "areas", "id", "rate"],
  computed: {
    fullName() {
      return this.firstName + " " + this.surname;
    },
    contactLink() {
      return "/coach/" + this.id + "/contact";
    },
    detailsLink() {
      return "/coach/" + this.id;
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
