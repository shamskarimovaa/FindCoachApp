<template>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coach in coaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :surname="coach.lastName"
        :areas="coach.areas"
        :rate="coach.hourlyRate"
      >
      </coach-item>
    </ul>
    <h3 v-else>No coaches found</h3>
  </base-card>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data(){
    return {
      options: {
        frontend:true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    isCoach(){
      return this.$store.getters['coaches/isCoach'];
    },
    coaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter(coach => {
        if(this.options.frontend && coach.areas.includes('frontend'))
        return coach;
        if(this.options.backend && coach.areas.includes('backend'))
        return coach;
        if(this.options.career && coach.areas.includes('career'))
        return coach;
        return false;
      })
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilter(options){
      this.options = options;
      console.log(options)
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
