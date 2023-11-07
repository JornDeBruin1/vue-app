<template>
    <base-layout page-title="All Memories">
            <ion-list>
                <ion-item v-for="memory in memories" :key="memory.id" :router-link="`/memories/${memory.id}`">

                    <IonThumbnail slot="start">
                        <IonImg :src="memory.image" :alt="memory.title"></IonImg>
                    </IonThumbnail>
                    <IonLabel>
                        {{ memory.title }}
                    </IonLabel>
                    
                </ion-item>
            </ion-list>
        </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue' 
export default {
    components:{
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    computed:{
        memories(){
            return this.$store.getters.memories;S
        }
    }
}
</script>