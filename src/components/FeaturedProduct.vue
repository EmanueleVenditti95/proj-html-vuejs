<script>
export default {
    data() {
        return {
            product: {
                img: '/img/shaving_butter-600x600.png',
                text: 'THIS MONTHS FEATURED PRODUCT',
                title: 'Shaving Butter',
                paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet eum tempore veritatis natus dicta omnis sed tenetur a libero, doloremque pariatur dolor consequuntur molestiae!',
                button: {
                    link: '#',
                    text: 'BUY NOW',
                },
            }
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-5">
            <img src="../img/shaving_butter-600x600.png" alt="">
        </div>
        <div class="col-7">
            <p class="gold-title">{{ this.product.text }}</p>
            <h1>{{ this.product.title }}</h1>
            <p class="text">{{ this.product.paragraph }}</p>
            <a class="button" :href=this.product.button.link>{{ this.product.button.text }}</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    padding: 0;
}
.col-5 {
    background-image: url("../img/avadabarbers-cta-background.jpg");
    background-size: cover;
}
.col-7 {
    padding:60px;
    .text {
    margin-top: 50px;
    color: var(--dark-grey);
    line-height: 32px;
}
}

</style>