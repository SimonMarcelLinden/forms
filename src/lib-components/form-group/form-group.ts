import Vue from "vue";

export default /*#__PURE__*/ Vue.extend({
  name: "formGroup", // vue component name
  components: {},
  props: {
    id: {
      required: false,
      type: String,
    },
    label: {
      required: false,
      type: String,
    },
    labelFor: {
      required: false,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    idFor: function ( type: string ) {
        if (this.id)
            return this.id + '_' + type
      return;
    },
  },
});