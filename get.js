function parsing(url){
  //const youtubeRegex = /^((?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:(?:watch\?v=|embed\/|v\/)|shorts\/|playlist\?list=)|youtu\.be\/)([^#&?]*).*/;
  const youtubeRegex = /^((?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:(?:watch\?v=|embed\/|v\/)|shorts\/)|youtu\.be\/)([^#&?]*).*/;

  if (!youtubeRegex.test(url)) {
    return {status: "query", query: url};
  }
  const match = url.match(youtubeRegex);
  const videoId = match[2];

  return {status: "id",id: videoId};
}

function fungsi(){
    window.open('https://www.facebook.com/muhammadnazril15')
}
async function getbyid(id){
    const body = JSON.stringify({id})
    try{
        const req = await fetch(`https://youtube-nexz.vercel.app/id`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body})
        const res = await req.json()
        if(res.error){
            loading.innerHTML = `<div class='error'>${res.error}</div>`
            loading.style.display = "flex"
            button.style.background = "#6a8dff"
            return false
        }
        return res
    } catch(error) {console.log(error)}   
}

async function getbyquery(query){
    const body = JSON.stringify({query})
    try{
        const req = await fetch(`https://youtube-nexz.vercel.app/query`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body})
        const res = await req.json()
        return res
    } catch(error) {return {error}}   
}

async function getbyplayid(playid){
    const body = JSON.stringify({id})
    try{
        const req = await fetch(`https://youtube-nexz.vercel.app/playlist`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body})
        return await req.json()
    } catch(error) {return {error}}   
}
