<template>
    <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-input">
        <input type="checkbox" id="frontend" checked @change="changeOptions">
        <label for="frontend">frontend</label>
    </span>
    <span class="filter-input">
        <input type="checkbox" id="backend" checked @change="changeOptions">
        <label for="backend">backend</label>
    </span>
    <span class="filter-input">
        <input type="checkbox" id="career" checked @change="changeOptions">
        <label for="career">career</label>
    </span>
    
    </base-card>
</template>
<script>
export default {
    emits: ['change-filter'],
    data(){
        return{
            options: {
                frontend: true,
                backend:true,
                career: true,
            }
        }
    },
    methods: {
        changeOptions(event){
            console.log('changed')
            const optionKey = event.target.id
            const optionValue = event.target.checked
            const filteredOptions = {...this.options, [optionKey]:optionValue }
            this.options = filteredOptions
            this.$emit('change-filter', filteredOptions)
        }
    }
}
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>