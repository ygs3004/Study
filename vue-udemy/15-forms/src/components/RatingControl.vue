<template>
  <ul>
    <li :class='{active: modelValue ==="poor"}'>
      <button type='button' @click='activate("poor")'>Poor</button>
    </li>
    <li :class='{active: modelValue ==="average"}'>
      <button type='button' @click='activate("average")'>Average</button>
    </li>
    <li :class='{active: modelValue ==="greate"}'>
      <button type='button' @click='activate("greate")'>Greate</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  border-color: rgba(128, 0, 128, 0.85);
}

.active button {
  color: rgba(128, 0, 128, 0.85);
}

</style>