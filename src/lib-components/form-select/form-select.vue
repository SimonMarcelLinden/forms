<template>
  <select
    :id="id"
    :required="required ? true : false"
    :aria-required="required ? true : false"
    :multiple="multiple"
    v-model="optionVal"
    :value="value"
    class="custom-select"
  >
    <template v-if="options">
      <form-select-option v-for="(option, key) in options" :key="key" :option="option"/>
    </template>
    <template v-else>
      <slot />
    </template>
  </select>
</template>

<script src="./form-select.ts" lang="ts"></script>

