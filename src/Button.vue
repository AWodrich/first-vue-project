<template>
    <div>
        <button @click="hideImage">{{  message }}</button>
    </div>



</template>


<script>

export default {

    name: 'Button',

    props: ['message'],

    methods: {
        hideImage(ev) {
          this.$emit('click',ev);
        }
    }
}


</script>



<style>



</style>