<script>
export default {
    data() {
        return {
            serviceSection: {
                text: 'TALES FROM THE BARBER SHOP',
                title: 'Recent Blog Post',
                button: {
                    link: '#',
                    text: 'READ MORE FROM OUR BLOG',
                },
                services: [
                    {
                        image: '/img/avadabarbers-second-blog-700x441.jpg',
                        title: 'Avada Barbers Now Open',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis.',
                    },
                    {
                        image: '/img/avadabarbers-choosing-blog-700x441.jpg',
                        title: 'Choosing The Right Barber',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis.',
                    },
                    {
                        image: '/img/avadabarbers-ourservice-blog-700x441.jpg',
                        title: 'Quick Service Guide',
                        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quae at rerum molestiae facilis perferendis reiciendis ipsa, adipisci veritatis officiis.',
                    },
                ],
            }

        }
    }
}
</script>

<template>
    <div class="container text-center">
        <p class="gold-title">{{ this.serviceSection.text }}</p>
        <h1>{{ this.serviceSection.title }}</h1>
        <div class="row">
            <div v-for="service in this.serviceSection.services" class="col-4">
                <img class="icon" :src=service.image alt="">
                <h3>{{ service.title }}</h3>
                <p>{{ service.text }}</p>
            </div>
        </div>
        <div class="button"><a :href=this.serviceSection.button.link>{{ this.serviceSection.button.text }}</a></div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.col-4 {
    padding: 15px;
    margin: 60px 0;
    h3 {
        margin: 15px;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>