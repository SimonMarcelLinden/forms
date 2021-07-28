<template>
  <option v-if="isObject(option)" :value="option['value']">{{ option.text }}</option>
  <option v-else :value="option">{{ option }}</option>
</template>

<script src="./form-select-option.ts" lang="ts"></script>