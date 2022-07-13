Vue.component('todos',{
    props:['todo'],
    template:"<li>{{todo.text}}</li>"
});
var n = new Vue({
    el:"#app_10",
    data:{
        allitems : [
            {id:0,text:"Hello I'm firstly "},
            {id:1,text:"Hello I'm secondly "},
            {id:0,text:"Hello I'm Thirdly "},

        ]
    }
})
