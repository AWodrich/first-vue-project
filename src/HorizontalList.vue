<template>
    <div class="horizontal-list">
        <div
            v-for="index in 4"
        >
            <template
                v-if="toHideIndex !== index"
            >
                <RoundedImage
                    :class="{'rounded-image rounded-image--red' : (activeIndex == index)}"
                    @click="changeBackgroundColor(index)"
                    :index="index"
                />
                <Button
                    :message="messageOnButton"
                    @click="hideImage(index)"
                />
            </template>
        </div>
    </div>
</template>

<script>

    import RoundedImage from './RoundedImage';
    import Button from './Button';

    export default {
        data() {
            return {
                color: '',
                activeIndex: 0,
                messageOnButton: 'change me',
                toHideIndex: null,
            }
        },
        components: {
            RoundedImage,
            Button,
        },

        methods: {
            changeBackgroundColor(index) {
                this.activeIndex = index;
            },

            hideImage(index) {
                this.toHideIndex = index;
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
