import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            memories:[
                {
                    id: "m1", 
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
                    title: "A trip into the mountains", 
                    description: 'it was a realy nice trip' 
                },
                {
                    id: "m2", 
                    image: "https://www.haydenshapes.com/cdn/shop/articles/RAVEN_SURFNSHOW_low_640x.jpg?v=1603952093",
                    title: "Surfing the sea side", 
                    description: 'feeling the waves' 
                },
                {
                    id: "m3", 
                    image: "https://blog.ricksteves.com/cameron/files/2018/10/cameron-france-dordogne-salade-composee-640x395.jpg",
                    title: "Good food", 
                    description: 'enjoying the good food' 
                },
            ],
        };
    },
    getters: {
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            };
        }
    }
});

export default store;