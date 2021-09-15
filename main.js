name_array=["cheese pizza", "pepper pizza", "pineapple pizza"];
document.getElementById("display_name").innerHTML=name_array;
function submit(){
    var name1=document.getElementById("student1").value;
    name_array.push(name1);
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}
