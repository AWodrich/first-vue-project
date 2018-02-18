
<template>
  <div class="rounded-image" :class="color">color: {{ color }} / index: {{ index }}</div>
</template>

<script>

    export default {
        props: ['color','index']
    }
</script>

<style lang="scss">
    .rounded-image {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background-color: blue;
    }

    .red {
        background-color: red;
    }
</style>
