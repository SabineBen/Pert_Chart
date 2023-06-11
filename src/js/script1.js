let tbody = document.querySelector('tbody');
let url='http://localhost:5050/app'
let app=[];
 function getApp(){
 fetch(url)
 .then(response=>response.json())   
  .then(data=>{
     console.log(data);
    app = data;
    updateTable();
   })
}
getApp();
function updateTable(){
   let data ="";
     if(app.length>0){
        for(i=0;i<app.length;i++){
            data+= '<tr>'
        }
     }

}