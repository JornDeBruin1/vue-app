<template>
    <div>
        <ion-img :src="image" :alt="title" ></ion-img>
        <h2 class="ion-text-center">{{ title }}</h2>
        <p class="ion-text-center">{{ description }}</p>
    </div>
</template>

<script>
import{IonImg,IonContent} from '@ionic/vue'
export default {
    props:['title', 'image', 'description'],
    components:{
        IonImg,
        IonContent
    }
}
</script>