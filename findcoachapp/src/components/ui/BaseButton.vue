<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :class="mode" :to="to">
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: false,
      default: "",
    },
    to: {
      type: String,
      required: true,
      default: "/",
    },
  },
};
</script>
<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #a7171a;
  border: 1px solid #a7171a;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #a7171a;
  border-color: #a7171a;
}

.flat {
  background-color: transparent;
  color: #a7171a;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #a7171a;
  color: #a7171a;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>
