<script>
import Services from "./Services.vue";
import Products from "./Products.vue";
import FeaturedProduct from "./FeaturedProduct.vue";
import Reviews from "./Reviews.vue";
import BlogPosts from "./BlogPosts.vue";

export default {
    components: {
        Services,
        Products,
        FeaturedProduct,
        Reviews,
        BlogPosts
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ 
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            })
        },
    }
}

</script>

<template>
    <section class="award container-bg">
        <div class="container text-center">
            <p class="gold-title">AWARD WINNING</p>
            <h1>Pro Barbers</h1>
            <div class="button"><a href="#">MEET YOUR NEW BARBER</a></div>
        </div>
    </section>

    <section class="services container-bg">
        <Services />
    </section>

    <section class="products container-bg">
        <Products />
    </section>

    <section class="feat-product container">
        <FeaturedProduct />
    </section>

    <section class="reviews container-bg">
        <Reviews />
    </section>

    <section class="blog-posts container-bg">
        <BlogPosts />
    </section>

    <div class="arrow-up" @click="scrollToTop()"><font-awesome-icon icon="fa-solid fa-chevron-up" /></div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.award.container-bg {
    background-image: url("../img/avadabarbers-about-introbackground.jpg");
    background-size: cover;
}

.services.container-bg {
    background: linear-gradient(175deg, var(--light-dark) 8%, transparent 8.5%),
        linear-gradient(-175deg, var(--light-dark) 8%, transparent 8.5%);
}

.container {
    padding: 120px 0;

    .button {
        margin-top: 30px;
    }
}

.products.container-bg {
    background: linear-gradient(175deg, var(--light) 8%, transparent 8.5%),
        linear-gradient(-175deg, var(--light) 8%, transparent 8.5%),
        url("../img/avadabarbers-reviewsbackground.jpg");
    background-size: contain;
    padding-top: 50px;
}

.feat-product.container {
    background-color: var(--dark);
    border-top: 4px solid var(--gold);
    margin-top: -50px;
    padding: 0;
}

.reviews.container-bg {
    background: linear-gradient(355deg, var(--light-grey) 10%, transparent 8.5%),
        linear-gradient(-355deg, var(--light-grey) 10%, transparent 8.5%);
}

.blog-posts.container-bg {
    background-color: var(--light-grey);
}

.arrow-up {
    position: fixed;
    bottom: 5px;
    right: 50px;
    color: var(--light);
    background-color: var(--dark-grey);
    font-size: 16px;
    padding: 5px 10px;
    cursor: pointer;
}
</style>