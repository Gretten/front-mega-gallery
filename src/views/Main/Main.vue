<template>
    <div class="main-container">
        <div class="card-container" v-for="image in images" :key="image.key">
            <img class="card-image" :src="image.link" :alt="image.header">
            <span class="card-title">{{ image.header }}</span>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Main',
        props: ['images'],
        mounted: function() {
            console.log(this.$props)
        }
    }
</script>

<style scoped>
    .main-container {
        display: flex;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .card-container {
        display: flex;
        flex-direction: column;
        max-height: 380px;
        margin: 10px;
        box-shadow: 0 0 10px black;
        padding: 20px;
        border-radius: 10px;
    }

    .card-image {
        max-height: 350px;
    }

    .card-title {
        font-weight: 500;
        font-size: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>