<script lang="ts">
import formGroup from "@/lib-components/form-group/form-group.vue";
import formInput from "@/lib-components/form-input/form-input.vue";
// import vButton from"@simon.marcel.linden/buttons/src/lib-components/button.vue";

import { vButton } from "@simon.marcel.linden/buttons";

import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { FormsSample } from '@/entry.esm';

export default Vue.extend({
  components: { formGroup, formInput, vButton },
  name: "ServeDev",
  // components: {
  //  FormsSample,
  // }
  data() {
    return {
      inputVal: "John",
      form: {
        email: "jane@example.com",
        name: "",
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
      // console.log("Reset");
    },
  },
});
</script>

<template>
  <div id="app">
    <h1>Forms</h1>
  </div>
</template>
