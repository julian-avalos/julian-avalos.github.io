var textarea_content;
var main_thread_content;
var new_content;

function add_thread(){
    textarea_content=document.getElementById("content").value;


    new_content="<p id='thread'>" + textarea_content + "</p>";

    document.getElementById("main-thread").innerHTML += new_content;
    document.getElementById("content").value="";

}
