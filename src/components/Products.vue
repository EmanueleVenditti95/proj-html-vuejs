<script>
export default {
    data() {
        return {
            productSection: {
                text: 'WE HAVE YOU COVERED',
                title: 'Avada Grooming Products',
                button: {
                    link: '#',
                    text: 'SHOP OUR PRODUCT RANGE',
                },
                products: [
                    {
                        image: '/img/brush_dark-400x400.png',
                        title: 'Brush',
                        price: '$15.00',
                    },
                    {
                        image: '/img/scissors-400x400.png',
                        title: 'Scissors',
                        price: '$85.00',
                    },
                    {
                        image: '/img/hot_oil_dark-400x400.png',
                        title: 'Hot Oil',
                        price: '$15.00',
                    },
                    {
                        image: '/img/straight_razor_dark-400x400.png',
                        title: 'Straight Razor',
                        price: '$30.00',
                    },
                ],
            },
        }
    }
}

</script>

<template>
    <div class="container-lg text-center">
        <p class="gold-title">{{ this.productSection.text }}</p>
        <h1>{{ this.productSection.title }}</h1>
        <div class="row">
            <div v-for="product in this.productSection.products" class="col-3">
                <img class="icon" :src=product.image alt="">
                <h3>{{ product.title }}</h3>
                <p class="price">{{ product.price }}</p>
            </div>
        </div>
        <div class="button"><a :href=this.productSection.button.link>{{ this.productSection.button.text }}</a></div>
    </div>
</template>

<style lang="scss" scoped>
.price {
    color: var(--gold);
    margin: 20px 0;
    font-weight: lighter;
}

.button {
    margin-bottom: 60px;
}

.icon {
    transition: all .2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
}
</style>
