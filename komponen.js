function video_box(res,format,size,url,filename){
    let count = 0
    count += 1
    return `
    <div class="box-video ${count}">
        <div class="res ${count}">${res} (.${format})</div>
        <div class="size ${count}">${size} mb</div>
        <div class="box-download ${count}">
            <button class="download ${count}"><a class="anchor" href="${url}" download="${url}">Download</a></button>
        </div>
    </div>
    `
}

function audio_box(res,format,size,url,filename){
    let count = 0
    count += 1
    return `
    <div class="box-video ${count}">
        <div class="res ${count}">${res} (.${format})</div>
        <div class="size ${count}">${size} mb</div>
        <div class="box-download ${count}">
            <button class="download ${count}"><a class="anchor" href="${url}" download="${url}">Download</a></button>
        </div>
    </div>
    `
}