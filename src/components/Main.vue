<script>
import Sections from "./Sections.vue";

export default {
    components: {
        Sections
    },
    data () {
        return {
            Sections
        }
    }
}

</script>

<template>
    <section class="container-bg">
        <div class="container text-center">
            <p class="gold-title">AWARD WINNING</p>
            <h1>Pro Barbers</h1>
            <div class="button"><a href="#">MEET YOUR NEW BARBER</a></div>
        </div>
    </section>

    <section class="services">
        <Sections />
    </section>    

    <section class="products container-bg">
        <div class="container">

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container-bg {
background-image: url("../img/avadabarbers-about-introbackground.jpg");
background-size: cover;
}
.container {
    padding: 120px 0;
    .button {
        margin-top: 30px;
    }
}

.products.container-bg {
    background-image: url("../img/avadabarbers-reviewsbackground.jpg");
}
</style>