<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
}
</script>

<style scoped>
  dialog{
    margin:0;
    position: fixed;
    top: 20vh;
    left: 30vw;
    width: 40vw;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }
</style>