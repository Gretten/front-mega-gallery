<template>
    <div class="main-container">
        <div class="card-container" v-for="image in images" :key="image.id">
            <img class="card-image" :src="image.link" :alt="image.header">
            <span class="card-title">{{ image.header }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    {   
                        id: 1,
                        header: 'Albatroz',
                        link: [require("@/assets/albatroz.jpg")],
                    },
                    {   
                        id: 2,
                        header: 'Cat',
                        link: [require("@/assets/cat.jpg")],
                    },
                     {   
                        id: 3,
                        header: 'Bird',
                        link: [require("@/assets/bird.jpg")],
                    },
                                        {   
                        id: 1,
                        header: 'Albatroz',
                        link: [require("@/assets/albatroz.jpg")],
                    },
                    {   
                        id: 2,
                        header: 'Cat',
                        link: [require("@/assets/cat.jpg")],
                    },
                     {   
                        id: 3,
                        header: 'Bird',
                        link: [require("@/assets/bird.jpg")],
                    },
                ]
            }
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
 