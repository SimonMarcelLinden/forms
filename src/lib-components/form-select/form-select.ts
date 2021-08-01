import Vue from "vue";
import lFormSelectOption from "../form-select-option/form-select-option.vue";

export default /*#__PURE__*/ Vue.extend({
  name: "lFormSelect", // vue component name
  components: { lFormSelectOption },
  props: {
    id: {
      required: false,
      type: String,
    },
    required: {
      required: false,
      type: Boolean,
      default: false,
    },
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    options: {
      required: false,
      type: Array,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    optionVal: {
      get(): String {
        return this.value;
      },
      set(val: String) {
        this.$emit("input", val);
      },
    },
  },
});