$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var videoContainer = $(".video-container");


    // "Welcome, xxxxx@xx.xxx!" at top of members.js
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    // Create rows per video
    getVideos();
    var videos;

    function getVideos() {
        $.get("/api/videos", function (data) {
            console.log("Videos", data);
            videos = data;
            initializeVideos();
        });
    }

    function initializeVideos() {
        videoContainer.empty();
        var videosToAdd = [];
        for (var i = 0; i < videos.length; i++) {
            videosToAdd.push(createNewRow(videos[i]));
        }
        videoContainer.before(videosToAdd);


    }

    function createNewRow(video) {

        var videoCard = $("<section class='cardvideo column is-one-quarter has-text-centered'>");
        var videoCardBody = $("<div>");
        var videoCardHeading = $("<div>");
        var videoTitle = $("<p class='is-size-4 has-text-weight-bold'>");
        videoTitle.text(video.title);

        var videoBody = $("<p>");
        videoBody.text("Recorded on: " + video.rec_date);

        var videoBody2 = $("<p>");
        videoBody2.text("Keyword: " + video.keyword);


        videoCardHeading.append(videoTitle);

        videoCardBody.append(videoBody);
        videoCardBody.append(videoBody2);
        videoCard.append(videoCardHeading);
        videoCard.append(videoCardBody);
        var playButton = $("<img src='../img/play.png' class='playButton'>");
        videoCard.append(playButton);
        videoCard.attr("id", video.id);
        return videoCard;
    }
    $(document).on("click", ".cardvideo", function () {
        const id = $(this).attr("id");
        console.log(id);
        window.location.replace("/video/" + id);
    });
});


// $(".my-link").on("click", function (event) {
//     event.preventDefault();
//     var videoId = $(this).attr("data-video");
//     $.get(`/video/${videoId}`, function (response) {
//         console.log(response)
//     });
// });