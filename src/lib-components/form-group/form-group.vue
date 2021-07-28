<template>
  <div :id="id" role="group" class="form-group">
    <label v-if="label" :id="idFor('label')" :for="labelFor">{{label}}</label>
    <!-- <div class="group-content"> -->
      <slot />
      <small v-if="description" class="form-text"
         :id="idFor('description')" >
        {{ description }}
    </small>
    <!-- </div> -->
  </div>
</template>

<script src="./form-group.ts" lang="ts"></script>
