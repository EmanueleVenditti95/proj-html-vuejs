<script>
import Services from "./Services.vue";
import Products from "./Products.vue";

export default {
    components: {
        Services,
        Products
    },
    data () {
        return {
            Services,
            Products
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
        <Services />
    </section>    

    <section class="products container-bg">
        <Products />
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