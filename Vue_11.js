var data = {a:1};
var vm= new Vue({
    el:'#app_10',
    data: data 
})
if(vm.$data === data)
{
    alert("1 :that 's right");
}
else
{
    alert("1 : that's not right");
}

if(vm.$el === document.getElementById('app_10'))
{
    alert("2 : that 's right");
}
else
{
    
        alert("2 : that 's right");
    
}
