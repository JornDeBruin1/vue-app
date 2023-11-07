<template>
    <div>
        <ion-item :router-link="`/memories/${memory.id}`">
            <IonThumbnail slot="start">
                <IonImg :src="memory.image" :alt="memory.title"></IonImg>
            </IonThumbnail>
            <IonLabel>
                {{ memory.title }}
            </IonLabel>      
        </ion-item>
    </div>
</template>
<script>
import{IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue'

export default {
    props:['memory'],
    components:{
        IonItem,
        IonThumbnail, 
        IonImg, 
        IonLabel
    }   
}
</script>