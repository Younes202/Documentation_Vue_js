Vue.component('component',{
    props:['pro'],
    template:'<li>{{pro.text}}</li>'
})
var all = new Vue({
    el:'#app_10',
    data:{
        allitems:[
            {text:'Younes Sghyer'},
            {text:'Khalile Sghyer'},
            {text:'Wissal Sghyer'},
            {text:'Amine Sghyer'},

        ],
        succes:true
    },
    methods:{
       Display :function(){
        if(this.succes)
        {
            this.succes=false;
        }
      else
      {
        this.succes=true
      }
    }
    } })

    
