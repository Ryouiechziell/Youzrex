const logo = document.querySelector(".logo")
const menu_header = document.querySelector(".menu-header")
const box_menu = document.querySelector(".box-menu")
const thumb = document.querySelector(".thumb")
const title = document.querySelector(".text-title")
const button = document.querySelector(".button")
const input = document.querySelector(".input")
const video_container = document.querySelector(".video-container")
const video = document.querySelector(".video")
const audio = document.querySelector(".audio")
const clear = document.querySelector(".clear")
const mp4 = document.querySelector(".mp4")
const mp3 = document.querySelector(".mp3")
const duration = document.querySelector(".duration")
const download = document.querySelector(".download")
const loading = document.querySelector(".loading")




function dom(video){
        loading.style.display = "none"
        thumb.setAttribute("src", video.thumbnail)
        duration.innerText = video.timestamp
        title.innerText = video.title
        
        set_down("1080p","mp4","0",video.thumbnail,video.thumbnail)
        set_down("720p","mp4","0",video.thumbnail,video.thumbnail)
        set_down("480p","mp4","0",video.thumbnail,video.thumbnail)
        set_down("360p","mp4","0",video.thumbnail,video.thumbnail)
        set_down("240p","mp4","0",video.thumbnail,video.thumbnail)
        set_down("144p","mp4","0",video.thumbnail,video.thumbnail)
        
        set_down("320kbps","mp3","0",video.thumbnail,video.thumbnail)
        set_down("256kbps","mp3","0",video.thumbnail,video.thumbnail)
        set_down("192kbps","mp3","0",video.thumbnail,video.thumbnail)
        set_down("128kbps","mp3","0",video.thumbnail,video.thumbnail)
            
        video_container.style.display = "flex"
        //button.style.background = "#2c2c2c"
}

function set() {
        if (input.value == null || input.value == "") {button.style.backgroundColor = "#2c2c2c"; return false}
        async function get(){
            loading.innerHTML = "<div class='loader'></div>"
            loading.style.display = "flex"
            video_container.style.display = "none"
            video.innerHTML = ""
            audio.innerHTML = ""
            const res = parsing(input.value)
            if(res.status == "id"){
                const req = await getbyid(res.id)
                dom(req)
            }else if(res.status == "query"){
                const req = await getbyquery(res.query)
                const filter = req.all.filter(item => item.type == "video")
                dom(filter[0])
            }
        }    
        get()
}  

function set_down(res,format,size,url,filename){
    if(format == "mp4"){
        video.insertAdjacentHTML("beforeend",video_box(res,format,size,url,filename))
    }else if(format == "mp3"){
        audio.insertAdjacentHTML("beforeend",audio_box(res,format,size,url,filename))
    }
}


logo.addEventListener("click",() => {
    window.location.reload()
})
box_menu.style.display = "none"
menu_header.addEventListener("click",() => {
     if(box_menu.style.display == "none"){
     box_menu.style.display = "flex"
     }else{box_menu.style.display = "none"}
});
input.addEventListener("input",() => {
    if(input.value.length > 0 && input.value != "" && input.value != null){clear.style.display = "flex"}else{clear.style.display = "none"}
})  
clear.addEventListener("click",() => {
    input.value = ""
    clear.style.display = "none"
})
button.addEventListener("click",() => {
    //button.style.background = "#ccc"
    set()
});
const color = "rgb(204, 204, 204)"
mp3.style.backgroundColor = color
mp4.addEventListener("click",() => {
    if(mp4.style.backgroundColor == color){
        mp3.style.backgroundColor = color
        mp4.style.backgroundColor = "white"
        audio.style.display = "none"
        video.style.display = "grid"  
    }
})
mp3.addEventListener("click", () => {
    if(mp3.style.backgroundColor == color){
        mp4.style.backgroundColor = color
        mp3.style.backgroundColor = "white"
        video.style.display = "none"
        audio.style.display = "grid"
    }
})






