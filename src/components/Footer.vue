<script>

</script>

<template>
    <section class="top-footer container-lg">
        <div class="container text-center">
            <div class="row">
                <div class="col-4">
                    <img src="../img/avadabarbers_footer_shop_image-500x390.png" alt="">
                    <div class="button">
                        <a href="#">SHOP OUR RANGE NOW</a>
                    </div>
                </div>
                <div class="col-4 row-vertical">
                    <img class="logo" src="../img/avadabarbers-stickylogo-x2.png" alt="">
                    <ul class="address">
                        <li>Avada Barbers</li>
                        <li>123 New York Street</li>
                        <li>New York City</li>
                        <li>info@yourwebsite.com</li>
                        <li>+1(555)555-1212</li>
                    </ul>
                    <p class="gold-title">FOLLOW US</p>
                    <ul class="row">
                        <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-youtube" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                    </ul>
                </div>
                <div class="col-4">
                    <img src="../img/avadabarbers_footer_appointment_image-500x390.png" alt="">
                    <div class="button">
                        <a href="#">BOOK YOUR APPOINTMENT</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container-lg">
        <p class="text">Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.top-footer.container-lg {
    background-color: var(--dark);
    padding-top: 60px;
    .row{
        justify-content: center;
        gap: 15px;
        color: var(--grey);
    }
    .row-vertical {
        justify-content: center;
        align-items: center;
        gap: 30px;
        .logo{
            max-width: 180px;
        }
        .address {
            margin: 20px 0;
            color: var(--dark-grey);
            line-height: 25px;
        }
    }
    .button {
        font-size: 14px;
        padding: 12px 28px;
        margin-top: 25px;
    }
}

.container-lg {
    background-color: var(--light-dark);
    padding: 60px;
    .text{
        color: rgb(76, 74, 74);
        text-align: center;
    }
}
</style>