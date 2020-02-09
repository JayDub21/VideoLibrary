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
        newPostCard.addClass("cardvideo tile is-4 is-vertical");

        var newPostCardBody = $("<div>");
        // newPostCardBody.addClass("is-4");
        // var newPostCardBody2 = $("<div>");
        // newPostCardBody2.addClass("tile is-child");
        var newPostCardHeading = $("<div>");
        // newPostCardHeading.addClass("card-header");
        var newPostTitle = $("<p>");
        newPostTitle.addClass("title");
        // newPostAuthor.css({
        //     float: "right",
        //     color: "blue",
        //     "margin-top":
        //         "10px"
        // });



        var newPostBody = $("<p>");
        var newPostBody2 = $("<p>");
        newPostTitle.text(video.title);
        newPostBody.text("Recorded on: " + video.rec_date);
        newPostBody2.text("Keywords: " + video.keyword);
        newPostCardHeading.append(newPostTitle);
        newPostCardBody.append(newPostBody);
        newPostCardBody.append(newPostBody2);
        newPostCard.append(newPostCardHeading);
        newPostCard.append(newPostCardBody);
        newPostCard.data("video", video);
        return newPostCard;
    }
});
