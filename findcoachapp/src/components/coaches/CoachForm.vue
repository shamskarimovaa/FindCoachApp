<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firsName">Firstname</label>
      <input id="firstName" type="text" v-model="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Lastname</label>
      <input id="lastName" type="text" v-model="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model="description" />
    </div>
    <div class="form-control">
      <label for="rate">Hourly Rate</label>
      <input id="rate" type="number" v-model="rate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input id="frontend" type="checkbox" v-model="areas" value="frontend" checked />
        <label for="frontend">FrontEnd Development</label>
      </div>
      <div>
        <input id="backend" type="checkbox" v-model="areas" value="backend" />
        <label for="backend">BackEnd Development</label>
      </div>
      <div>
        <input id="career" type="checkbox" v-model="areas" value="career" />
        <label for="career">Career Development</label>
      </div>
<div>
   <base-button>Register</base-button>
</div>
   
    </div>
  </form>
</template>
<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: null,
      lastName: null,
      description: null,
      rate: 0,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      var formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formData);
      this.$emit('save-data', formData)
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
