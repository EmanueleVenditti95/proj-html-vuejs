<script>
  export default {
    name: 'App'
  }
</script>

<template>
    <div class="container-bg debug">
        <div class="container">
            <div class="navbar">
                <img src="../img/avadabarbers-logo-x2-200x70.png" alt="">
                <ul class="row">
                    <li><font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon"/></li>
                    <li><font-awesome-icon icon="fa-solid fa-bars" class="icon"/></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container-bg {
    background-image: url('../img/avadabarbers-homepage-hero-bg.jpg');
    max-width: 1920px;
    margin: 0 auto;
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        .row {
            gap: 20px;
        }
    }
}
.icon {
    color: white;
    font-size: 24px;
}
</style>