const { createApp } = Vue

let youngErik = "images/youngErik.jpg";
let olderErik = "images/olderErik.jpg";
let youngNora = "images/youngNora.jpg";
let olderNora = "images/olderNora.jpg";
const sobrinos = [youngErik,olderErik,youngNora,olderNora];

  //Options API
  createApp({

    data() {
      return {
        sobrinos,
        nephewImage: sobrinos[0],
        nieceImage: sobrinos[2]
      }
    },
    methods:{
        
        updateNephew(id){
            this.nephewImage = this.sobrinos[id];
        },
        updateNiece(id){
            this.nieceImage = this.sobrinos[id];
        }
    }
   

  }).mount('#app')
