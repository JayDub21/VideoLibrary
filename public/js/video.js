$(document).ready(function () {

    console.log(document.location.href.slice(28));

    id = document.location.href.slice(28);

    $.get("/api/video/" + id).then(function (result) {
        console.log(result);
        console.log(result.title);
        console.log(result.rec_date);
        $(".video-name").text(result.title);
        $(".recorded-date").text(result.rec_date);
        $(".video-iframe").attr("src", result.video_url)
    })
});