<script>
import MenuLink from "./MenuLink.vue";

export default {
    components: {
        MenuLink
    },
    data(){
        return{
            menuArray : [
                {
                    text : 'Home',
                    link: '#',
                },
                {
                    text : 'About Us',
                    link: '#',
                },
                {
                    text : 'Services',
                    link: '#',
                },
                {
                    text : 'Shop',
                    link: '#',
                },
                {
                    text : 'Our Team',
                    link: '#',
                },
                {
                    text : 'Blog',
                    link: '#',
                },{
                    text : 'Contact Us',
                    link: '#',
                },
            ],
            active : false,
        }
    },
    methods: {
        showMenu() {
            this.active = !this.active;
            console.log(this.active)
        },
        hideMenu() {
            this.active = false;
        }
    }

  }
</script>

<template>
    <div class="container-bg" @click="hideMenu">
        <div class="container">
            <section class="navbar">
                <img src="../img/avadabarbers-logo-x2-200x70.png" alt="">
                <ul class="row">
                    <li><font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon"/></li>
                    <li @click="showMenu" @click.stop>
                        <font-awesome-icon icon="fa-solid fa-bars" class="icon"/>
                        <ul v-show="this.active" 
                        class="menu">
                            <li>
                                <MenuLink v-for="link in menuArray"
                                :text="link.text"
                                :link="link.link"/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section class="hero row">
                <div class="row-vertical">
                    <h1>Barber Shop</h1>
                    <hr>
                    <p>The Pinnacle of Male Grooming</p>
                    <a href="#" class="button">LEARN MORE</a>
                </div>
                <div>
                    <img src="../img/avadabarbers_hero_focalmirror.png" alt="">
                </div>            
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container-bg {
    background-image: url('../img/avadabarbers-homepage-hero-bg.jpg');
    background-size: cover;
    .container {
        position: relative;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 30px;
        .row {
            gap: 20px;
        }
    }
    .hero{
        justify-content: space-between;
        h1 {
            color: var(--light);
        }

        hr {
            width: 50%;
            border: 1px solid var(--gold);
        }

        p {
            color: var(--dark-grey);
            font-size: 24px;
        }

        img {
            max-width: 500px;
            padding-bottom: 150px;
        }

        .row-vertical {
            justify-content: center;
            gap: 40px;
            align-items: flex-start;
        }
    }
}
.icon {
    color: var(--light);
    font-size: 24px;
    cursor: pointer;
}

.menu {
    color: var(--light);
    position: absolute;
    right: 0;
    margin-top: 20px;
    padding: 20px;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 10px;
}
</style>