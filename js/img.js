function download(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function() {
        let img_in_plane = reader.result;
        console.log(img_in_plane);
    }
}
export default download;