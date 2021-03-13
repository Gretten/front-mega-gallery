<template>
    <div class="container">
        <img 
            v-if="uploaded"
            :src="imgSrc" 
            class="prerender"
        >
        <input 
            type="text"
            v-if="uploaded"
            class="new-name"
            v-model="newCardName"
            placeholder="card name"
            required
            @keydown.enter="addImage"
        >
        <div 
            v-if="!uploaded"
            class="dummy"
            @click="clickOnDummy"
        >
            <span>New</span>
            <span>Image</span>
        </div>
        <input 
            type="file" 
            class="hidden-input"
            ref="hiddenInput"
            @change="evt"
        >
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        data() {
            return {
                uploaded: false,
                imgSrc: '',
                newCardName: '',
                file: null,
            }
        },
        methods: {
            ...mapMutations([
                'setCurrentImage'
            ]),
            clickOnDummy() {
                this.$refs.hiddenInput.click();
            },
            evt(e) {
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.file = file;
                    this.uploaded = true;
                    this.imgSrc = reader.result;
                };
            },
            addImage() {
                const payload = {
                    file: this.file,
                    title: this.newCardName,
                }
                console.log(payload)
            }
        }
    }
</script>

<style scoped>
    .container {
        color: rgb(120, 217, 235);
        font-weight: 800;
        margin: 10px;
        border-radius: 10px;
        max-width: 236px;
        width: 100%;
        height: 346px;
        border: 7px dashed rgb(120, 217, 235);        
        cursor: pointer;
    }
    .dummy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        height: 100%;
    }
    .hidden-input {
        display: none;
    }
    .prerender {
        height: 99%;
        width: 99%;
        object-fit: cover;
    }
    .new-name {
        position: relative;
        bottom: -11px;
        right: 7px;
        width: 100%;
        /* background: #d1f8ff; */
        border: 5px dashed #d1f8ff;
        height: 29px;
    }
    .new-name:hover {
        border: 5px dashed #d1f8ff;
        outline: none;
    }
    .new-name::placeholder {
        color: #c5c5c5;
        font-size: 15px;
        font-family: monospace;
    }
</style>