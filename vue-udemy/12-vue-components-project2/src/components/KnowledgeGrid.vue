<template>
  <ul>
    <knowledge-element
        v-for="topic in topics"
        :key="topic.id"
        :id="topic.id"
        :topic-name="topic.title"
        :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  inject: ['topics'],
  emits: ['select-topic']
};
</script>