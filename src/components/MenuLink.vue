<script>
export default {
    props: {
        text : String,
        link : String
    },
}
</script>

<template>
    <li>
        <a :href=link >
            {{ text }}
        </a>
    </li>
</template>

<style scoped>
    li {
        padding: 10px;
    }

    li:hover {
        color: var(--gold);
    }
</style>
