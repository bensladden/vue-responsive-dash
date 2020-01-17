<template>
  <div class="exampleViewer-container">
    <div class="exampleViewer-header">
      <button @click="showCode=true">Show Code</button>
      <button @click="showCode=false">Show Result</button>
    </div>
    <div class="exampleViewer-body">
      <div v-if="showCode !== true">
        <slot name="result" />
      </div>
      <div v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCode: true
    };
  }
};
</script>

<style>
.exampleViewer-container {
  margin: 20px 0;
  padding: 20px;
  background: #eee;
  border-radius: 5px;
}

.exampleViewer-body {
  margin: 20px 0;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
}
</style>