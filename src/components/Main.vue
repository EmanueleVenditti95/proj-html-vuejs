<script>

</script>

<template>
    <section class="container-bg">
        <div class="container text-center">
            <p class="gold-title">AWARD WINNING</p>
            <h1>Pro Barbers</h1>
            <div class="button"><a href="#">MEET YOUR NEW BARBER</a></div>
        </div>
    </section>

    <section class="services ">
        <div class="container text-center">
            <p class="gold-title">MENS GROOMING</p>
            <h1>Services</h1>
            <div class="row">
                <div class="col-4">
                    <img class="icon" src="../img/avadabarbers-trimcut-icon-before.png" alt="">
                    <h3>Trim & Cut</h3>
                    <p>Avada Barbers experts in te lickety split trim and hair cut. Quick but careful and ridicously good looking.</p>
                </div>
                <div class="col-4">
                    <img class="icon" src="../img/avadabarbers-washndry-icon.png" alt="">
                    <h3>Wash & Dry</h3>
                    <p>Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurios fashion.</p>
                </div>
                <div class="col-4">
                    <img class="icon" src="../img/avadabarbers-beardtrim-icon.png" alt="">
                    <h3>Beard Tidy</h3>
                    <p>Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.</p>
                </div>
            </div>
            <div class="button"><a href="#">READ ABOUT OUR SERVICES</a></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";

.container-bg {
background-image: url("../img/avadabarbers-about-introbackground.jpg");
background-size: cover;
}
.container {
    padding: 120px 0;
    .button {
        margin-top: 30px;
    }
}

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
}
</style>