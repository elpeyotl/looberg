<template>
    <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
            <slot />
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    methods: {
        init () {
            var mySwiper = new Swiper ('.swiper-container', {
                // Optional parameters
                loop: true,
                autoplay: {
                    delay: 10000,
                },
                effect: 'fade',
            })
        }
    },
    mounted () {
        this.init();
    }
}
</script>

<style lang="scss">


</style>