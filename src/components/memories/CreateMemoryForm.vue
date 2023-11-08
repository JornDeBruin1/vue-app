<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enterdTitle"></ion-input>
            </ion-item>
            <ion-item>
                <ion-thumbnail slot="start">
                    <img src=""/>
                </ion-thumbnail>
                <ion-button type="button" fill="clear" @click="takePhoto">
                    <ion-icon slot="start" :icon="camera"></ion-icon>
                    Take Photo
                </ion-button>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">save</ion-button>
    </form>
</template>

<script>
    import{
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput,
        IonTextarea, 
        IonButton,
        IonThumbnail,
        IonIcon
    } from '@ionic/vue'
    import { camera } from 'ionicons/icons';
  


export default {
    emits: ['save-memory'],
    components:{
        IonList, 
        IonItem, 
        IonLabel, 
        IonInput,
        IonTextarea,
        IonButton,
        IonThumbnail,
        IonIcon

    },
    data(){
        return{
            enterdTitle: "",
            enteredImageUrl: "",
            enteredDescription:"",
            previewImageUrl: "",
            camera
        };
    },
    methods:{        
        },
        submitForm(){
            const memoryData = {
                title: this.enterdTitle,
                imageUrl: this.enteredImageUrl,
                description: this.enteredDescription,
            };
            this.$emit('save-memory', memoryData);
        },
    };
</script>
