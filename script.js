function get(id){
    return document.querySelector("#"+id);
}
function datos(){
    let nombre = get("nombre").value;
    let email = get("email").value;
    let comentario = get("comentario").value;
 
    console.log(nombre, email, comentario);
 }