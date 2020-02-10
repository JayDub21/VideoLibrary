$(document).ready(function () {
    // Slice id number from URL
    var urlSplit = window.location.pathname.split('/');
    let id = urlSplit[2];
    console.log(id);
    // console.log(document.location.href.slice(47));
    // id = document.location.href.slice(28);
    // Grabbing video that match ID number
    $.get("/api/video/" + id).then(function (result) {
        console.log(result);
        console.log(result.title);
        console.log(result.rec_date);
        console.log(result.keyword);
        $(".video-name").text(result.title);
        $(".recorded-date").text(result.rec_date);
        $(".video-iframe").attr("src", result.video_url);
    });
    let keyword = "js";
    $.ajax("/api/video/search/" + keyword).done(function (response) {
        console.log(response);
        for (let i = 0; i < response.items.length; i++) {
            const videos = response.items[i];
            let videoTN = videos;
            console.log(videoTN);
            $("#ytResults").append($(`
                        <div class="youtube-links">
                            <div class="columns">
                                <div class="column is-4">
                                    <img src="${videoTN.snippet.thumbnails.default.url}"width="${videoTN.width}">
                                </div>
                                <div class="column is-8">
                                <a target="_blank" href="https://www.youtube.com/watch?v=${videoTN.id.videoId}"><p>${videoTN.snippet.title}</p></a>
                                    <p>${videoTN.snippet.description}</p>
                                </div>
                            </div>
                        </div>
            `));
        }
    });
});