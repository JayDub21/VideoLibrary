$(document).ready(function () {
    // Slice id number from URL
    console.log(document.location.href.slice(28));
    id = document.location.href.slice(28);

    // Grabbing video that match ID number
    $.get("/api/video/" + id).then(function (result) {
        console.log(result);
        console.log(result.title);
        console.log(result.rec_date);
        console.log(result.keyword);
        $(".video-name").text(result.title);
        $(".recorded-date").text(result.rec_date);
        $(".video-iframe").attr("src", result.video_url)

        // Video.keywords used for YouTube keyword search
        let search = result.keyword;
        console.log(search);
        var redirectHelp = "https://cors-ut-bootcamp.herokuapp.com/";

        // I TURNED OFF APIKEY BY ADD '!!!' AT END FOR NOW.
        const queryURL = redirectHelp + "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=" + search + "&type=video&key=AIzaSyDVRVA52TlJZwDME-vLn3aOwARe7-H_3OM!!!";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log("response=", response);
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


        // $.get("/api/user_data").then(function (data) {
        //     let user = data.email;
        // });
        // console.log(user);
        let video_number = id;
        console.log(video_number);
    })


})

// var wuphfContainer = $(".wuphf-container");

// // Create rows per Wuphf
// getWuphfs();

// function getWuphfs() {
//     if (api / wuphfs.video_number === id) {
//         makeWuphfRows()
//     } else {
//         console.log(" NO WUPHFS HENRY ");
//     }
// }

// $.get("/api/wuphfs", function (data) {
//     console.log("Wuphfs", data);
//     wuphfs = data;
//     if (!wuphfs || !wuphfs.length) {
//         console.log(" NO WUPHFS HENRY ");
//     }
//     else {
//         makeWuphfRows();
//     }
// });
// }

// $.get("/api/wuphf", function makeWuphfRows() {
//     wuphfContainer.empty();
//     var wuphfsToAdd = [];
//     for (var i = 0; i < wuphfs.length; i++) {
//         wuphfsToAdd.push(newWuphfRow(wuphfs[i]));
//     }
//     wuphfContainer.prepend(wuphfsToAdd);
// }

//         function newWuphfRow(wuphf) {
//         var newWuphfCard = $("<div>");
//         newWuphfCard.addClass("wuphf-body");
//         var wuphfBody = $("<p>");
//         wuphfBody.text(wuphf.body);
//         var wuphfUser = $("<p>");
//         wuphfUser.text("By: " + wuphf.user + " at " wuphf.createdAt);
//         return newWuphfCard;
//     }
// )





// // $(document).on("submit", "#cms", wuphfSubmit);

// $("#wuphf-submit").on("click", function (event) {
//     event.preventDefault();

//     // Make a newWuphf object
//     var newWuphf = {
//         // user: $.get("/api/user_data").then(function (data) {
//         //     $(".member-name").text(data.email);
//         // }),
//         body: $("#wuphf-box").val().trim(),
//         video_number: id,
//         createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
//         updatedAt: moment().format("YYYY-MM-DD HH:mm:ss")
//     };



//     console.log(newWuphf);

//     // Send an AJAX POST-request with jQuery
//     $.post("/api/wuphf", newWuphf)
//         // On success, run the following code
//         .then(function () {

//             var row = $("<div>");
//             row.addClass("wuphf");
//             row.append("<p>" + newWuphf.body + "</p>");
//             // row.append("<p>Wuphf by: " + newWuphf.user + " @ " + moment(newWuphf.createdAt).format("h:mma on dddd") + "</p>");
//             row.append("<p>Wuphf by: " + "AUTHOR" + " @ " + moment(newWuphf.createdAt).format("h:mma on dddd") + "</p>");


//             $("#wuphf-container").prepend(row);

//         });

//     // Empty each input box by replacing the value with an empty string
//     $("#wuphf-box").val("");
// });

// // When the page loads, grab all of our WUPHFs
// $.get("/api/wuphf", function (data) {

//     if (data.length !== 0) {

//         for (var i = 0; i < data.length; i++) {

//             var row = $("<div>");
//             row.addClass("wuphf");
//             row.append("<p>" + data[i].body + "</p>");
//             // row.append("<p>Wuphf by: " + data[i].user + " @ " + moment(data[i].createdAt).format("h:mma on dddd") + "</p>");
//             row.append("<p>Wuphf by: " + "AUTHOR" + " @ " + moment(data[i].createdAt).format("h:mma on dddd") + "</p>");


//             $("#wuphf-container").prepend(row);

//         }

//     }

// });

