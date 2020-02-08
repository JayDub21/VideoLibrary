$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    var blogContainer = $(".blog-container");


    // "Welcome, xxxxx@xx.xxx!" at top of members.js
    $.get("/api/user_data").then(function (data) {
        $(".member-name").text(data.email);
    });

    // Create rows per video
    getVideos();

    function getVideos() {
        $.get("/api/videos", function (data) {
            console.log("Videos", data);
            videos = data;
            if (!videos || !videos.length) {
                console.log(" NO VIDEOS HENRY ");
            }
            else {
                initializeRows();
            }
        });
    }

    function initializeRows() {
        blogContainer.empty();
        var videosToAdd = [];
        for (var i = 0; i < videos.length; i++) {
            videosToAdd.push(createNewRow(videos[i]));
        }
        blogContainer.prepend(videosToAdd);
    }

    // This function constructs a post's HTML
    function createNewRow(video) {
        var newPostCard = $("<div>");
        newPostCard.addClass("cardvideo tile tile2 is-parent is-6 is-vertical has-text-centered");
        var newPostCardBody = $("<article>");
        newPostCardBody.addClass("tile is-child");
        var newPostCardHeading = $("<div>");
        // newPostCardHeading.addClass("card-header");
        var newPostTitle = $("<p>");
        newPostTitle.addClass("is-size-4 has-text-weight-bold");
        // var newPostTitle2 = $("<a>");
        // newPostTitle2.attr("href", "/video");
        // newPostTitle2.addClass("my-link");
        newPostTitle.text(video.title);

        var newPostBody = $("<p>");
        var newPostBody2 = $("<p>");

        newPostBody.text("Recorded on: " + video.rec_date);
        newPostBody2.text("Keywords: " + video.keyword);
        newPostCardHeading.append(newPostTitle);
        // newPostTitle.append(newPostTitle2);
        newPostCardBody.append(newPostBody);
        newPostCardBody.append(newPostBody2);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.attr("id", video.id)
        return newPostCard;
    }
    $(document).on("click", ".cardvideo", function (e) {
        const id = $(this).attr("id");
        console.log(id);
        window.location.replace("/video/" + id);
    })
});


 // $(".my-link").on("click", function (event) {
        //     event.preventDefault();
        //     var videoId = $(this).attr("data-video");
        //     $.get(`/video/${videoId}`, function (response) {
        //         console.log(response)
        //     });
        // });