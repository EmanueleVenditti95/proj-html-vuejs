<script>
export default {
    data() {
        return {
            serviceSection: {
                text: 'MENS GROOMING',
                title: 'Services',
                button: {
                    link: '#',
                    text: 'READ ABOUT OUR SERVICES',
                },
                services: [
                    {
                        image: '/img/avadabarbers-trimcut-icon-before.png',
                        title: 'Trim & Cut',
                        text: 'Avada Barbers experts in te lickety split trim and hair cut. Quick but careful and ridicously good looking.',
                    },
                    {
                        image: '/img/avadabarbers-washndry-icon.png',
                        title: 'Wash & Dry',
                        text: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurios fashion.',
                    },
                    {
                        image: '/img/avadabarbers-beardtrim-icon.png',
                        title: 'Beard Tidy',
                        text: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.',
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
                <div v-for="service in this.serviceSection.services" 
                class="col-4">
                    <img class="icon" :src=service.image alt="">
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.text }}</p>
                </div>
            </div>
                <div class="button"><a :href=this.serviceSection.button.link>{{ this.serviceSection.button.text }}</a></div>
        </div>    
</template>

<style lang="scss">
@use "../styles/general.scss";

.services {
    
    .col-4 {
        padding: 50px;
        p {
            color: var(--dark-grey);
            line-height: 30px;
        }

        h3 {
            margin: 25px 0;
        }
        .icon {
            margin-top: 20px;
            max-width: 70px;
            aspect-ratio: 5 / 8;
        }
    }    
    .button {
        margin-top: 30px;
    }
}
</style>