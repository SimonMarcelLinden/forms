<script lang="ts">

import Vue from "vue";
import lFormGroup from '@/lib-components/form-group/form-group.vue';
import lFormInput from '@/lib-components/form-input/form-input.vue';

export default Vue.extend({
  components: { lFormGroup, lFormInput },
  name: "ServeDev",
  data() {
    return {
      inputVal: "John",
      form: {
        email: "jane@example.com",
        firstname: "Jane",
        food: "Carrots",
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onFormSubmit(event: Event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
    },
    onFormReset(event: Event) {
      event.preventDefault();
      this.form.email = '';
    },
  },
});
</script>

<template>
  <div id="app">
    <l-form @reset="onFormReset" @submit="onFormSubmit">
      <l-form-input id="input-1" type="email" name="email" v-model="form.email" placeholder="Enter email" label="E-mail" required />
      <l-form-group id="input-group-2" label="Firstname" labelFor="input-2" description="We'll never share your email with anyone else.">
        <l-form-input id="input-2" type="text" name="firstname" v-model="form.firstname" placeholder="Enter Firstname" required />
      </l-form-group>
    </l-form>
    <pre class="m-0">{{ form }}</pre>
  </div>
</template>

<style src="@/lib-components/form/form.css" />
<style src="@/lib-components/form-group/form-group.css" />
<style src="@/lib-components/form-input/form-input.css" />