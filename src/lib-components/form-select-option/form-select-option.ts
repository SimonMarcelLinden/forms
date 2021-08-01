import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "lFormSelectOption", // vue component name
  components: {},
  props: {
    option: {
      required: true,
      type: [String, Object],
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    isObject: function( value: Object ){
      return value instanceof Object;
    }
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