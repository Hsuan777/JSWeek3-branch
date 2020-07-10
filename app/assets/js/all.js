

let app = new Vue({
  el:`#app`,
  data:{
    api:`https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json`,
    apiData:[],
    
  },
  methods:{
    
    getData(){
      let vm = this;
      axios.get(vm.api).then((response) =>{
        vm.apiData = response.data;

      });
    },
    
  },
  created(){
    this.getData();
  },
  // mounted(){
  //   this.getData();
  // }
});
