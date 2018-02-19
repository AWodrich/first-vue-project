<template>

        <div class="card-image">
            <RoundedImage
            :class="componentClasses"
            />
        </div>



</template>


<script>

import RoundedImage from './RoundedImage';


export default {
    name: 'CardImage',

    components: {
        RoundedImage,
    },
    computed: {
        componentClasses() {
            return ['rounded-image__main']
        }
    }
}


</script>


<style lang="scss">

    .card-image {
        width: 100%;
        height: 20rem;
        outline: 2px solid red;

    }

</style>