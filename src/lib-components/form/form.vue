<template>
  <form class="form form-custom" @reset="onReset" @submit="onSubmit">
    <slot />
  </form>
</template>

<script src="./form.ts" lang="ts"></script>