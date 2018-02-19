
<template>
    <div class="rounded-image" :class="componentClasses"  @click="changeBackgroundColor">{{ index }}</div>
</template>

<script>

    export default {
        props: ['color', 'index'],

        methods: {
            changeBackgroundColor(e) {
                this.$emit('click', e);
            },
        },

        computed: {
            componentClasses() {
                return (this.color && this.color !== '') ? [`rounded-image--${this.color}`] : '';
            }
        }
    }
</script>

<style lang="scss">
    .rounded-image {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-right: 2rem;
        border: 1px solid blue;

        &--red {
            background-color: red;
        }

        &__main {
            width: 20rem;
            height: 20rem;
            border: 2px solid pink
        }
    }


</style>
