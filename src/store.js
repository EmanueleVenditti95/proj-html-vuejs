import { reactive } from 'vue';

export const store = reactive({
    menuAddress : {
        title : 'Avada Barbers',
        road : '123 New York Street',
        city : 'New York City',
        website : 'info@yourwebsite.com',
        num : '+1(555)555-1212'
    },
    menuLinks : [
        {
            link : 'www.facebook.com',
            icon : 'fa-brands fa-facebook-f'
        },
        {
            link : 'www.twitter.com',
            icon : 'fa-brands fa-twitter'
        },
        {
            link : 'www.youtube.com',
            icon : 'fa-brands fa-youtube'
        },
        {
            link : 'www.instagram.com',
            icon : 'fa-brands fa-instagram'
        }
    ]

});