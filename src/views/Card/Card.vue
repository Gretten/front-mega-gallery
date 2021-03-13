<template>
    <div class="card-container">
        <img class="card-image" :src="link" />
        <span class="card-title">{{ title }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['link', 'title'],
        mounted: function() {
            return this.$props
        }
    }
</script>

<style scoped>
    .card-container {
        display: flex;
        flex-direction: column;
        margin: 10px;
        box-shadow: 0 0 10px black;
        border-radius: 10px;
        max-width: 279px;
        height: 360px;
    }

    .card-image {
        object-fit: cover;
        border-radius: 9px 9px 0 0;
        height: 85%;
        width: 100%;
    }

    .card-title {
        font-weight: 500;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }

</style>