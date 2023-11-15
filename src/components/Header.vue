<script>
  export default {
    name: 'App'
  }
</script>

<template>
    <div class="container-bg">
        <div class="container">
            <section class="navbar">
                <img src="../img/avadabarbers-logo-x2-200x70.png" alt="">
                <ul class="row">
                    <li><font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon"/></li>
                    <li><font-awesome-icon icon="fa-solid fa-bars" class="icon"/></li>
                </ul>
            </section>

            <section class="hero row">
                <div class="row-vertical">
                    <h1>Barber Shop</h1>
                    <hr>
                    <p>The Pinnacle of Male Grooming</p>
                    <a href="#">LEARN MORE</a>
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
    max-width: 1920px;
    margin: 0 auto;
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
            font-size: 70px;
            font-family: var(--bfont);
            letter-spacing: 3px;
        }

        hr {
            width: 50%;
            border: 1px solid var(--gold);
        }

        p {
            color: var(--dark-grey);
            font-size: 24px;
        }

        a {
            padding: 15px 30px;
            background-color: transparent;
            color: var(--gold);
            border: 1px solid var(--gold);  
        }

        a:hover {
            background-color: var(--dark-grey);
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
}
</style>