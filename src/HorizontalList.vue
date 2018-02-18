
<template>
    <div class="horizontal-list">
        <div v-for="(item, index) in 10" @click="changeBackgroundColor(index)">
            <RoundedImage
                :color="color"
                :index="index"
            />
        </div>
    </div>
</template>

<script>
    import RoundedImage from './RoundedImage';

    export default {
        data() {
            return {
                color: 'blue',
            }
        },
        components: {
            RoundedImage,
        },

        methods: {
            changeBackgroundColor(index) {
                this.color="red"
                console.log(this.color, index)
            }
        },
    }
</script>

<style lang="scss">
    .horizontal-list {
        width: 100%;
        display: flex;
        flex-direction: row;

        padding: 1rem;
        margin: 1rem;
    }
</style>
