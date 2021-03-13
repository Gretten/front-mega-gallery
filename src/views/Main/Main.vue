<template>
    <div class="main-container">
        <AddImage />
        <Card 
            v-for="image in images" 
            :key="image.key" 
            :link="image.link" 
            :title="image.title" 
        />
    </div>
</template>

<script>
    import Card from '@/views/Card/Card';
    import AddImage from '@/components/AddImage/AddImage';

    export default {
        name: 'Main',
        props: ['images'],
        components: {
            Card,
            AddImage,
        },
    }
</script>

<style scoped>
    .main-container {
        display: flex;
        margin: 10px;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>