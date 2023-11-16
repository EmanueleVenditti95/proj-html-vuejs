<script>
import Services from "./Services.vue";
import Products from "./Products.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import Reviews from "./Reviews.vue"

export default {
    components: {
        Services,
        Products,
        FeaturedProduct,
        Reviews
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

    <section class="feat-product container">
        <FeaturedProduct />
    </section>

    <section class="reviews">
        <Reviews />
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

.feat-product.container {
    background-color: var(--dark);
    border-top: 4px solid var(--gold);
    margin-top: -50px;
    padding: 0;
}
</style>