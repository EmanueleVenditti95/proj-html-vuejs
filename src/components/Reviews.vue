<script>
export default {
    data() {
        return {
            reviewsSection: {
                text: 'WHAT PEOPLE SAY',
                title: 'Reviews',
                reviews: [
                    {
                        image: '/img/avadabarbers-trimcut-gallery6-400x400.jpg',
                        title: 'John Doe',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis dolore, asperiores ipsum.',
                    },
                    {
                        image: '/img/avadabarbers-trimcut-gallery7-400x402.jpg',
                        title: 'Pete Jones',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis dolore, asperiores ipsum.',
                    },
                    {
                        image: '/img/avadabarbers-trimcut-gallery3-400x402.jpg',
                        title: 'Mark Wilson',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis dolore, asperiores ipsum.',
                    },
                ],
            }

        }
    }
}
</script>

<template>
    <div class="container text-center">
        <p class="gold-title">{{ this.reviewsSection.text }}</p>
        <h1>{{ this.reviewsSection.title }}</h1>
        <div class="row">
            <div v-for="review in this.reviewsSection.reviews" class="col-4">
                <p>{{ review.text }}</p>
                <img class="icon" :src=review.image alt="">
                <h4 class="gold-title">{{ review.title }}</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.col-4 {
    padding: 50px;
    .icon {
        aspect-ratio: 1;
        border-radius: 50%;
        max-width: 120px;
        margin-bottom: 20px;
    }
    .gold-title {
        font-style: italic;
        letter-spacing: 0;
    }
}
</style>