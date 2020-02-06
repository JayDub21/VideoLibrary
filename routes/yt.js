// require("dotenv").config();


//========================================================
// This .on("click") function will trigger the AJAX Call
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

$("#ytBtn").on("click", (event) => {
    event.preventDefault();

    // Search Input -- Change later to Main
    // Topic of the Day
    let search = $("#ytInput").val();
    console.log(search);
    // const apiKey = process.env.API_KEY;

    var redirectHelp = "https://cors-ut-bootcamp.herokuapp.com/";

    const queryURL = redirectHelp + "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=" + search + "&type=video&key=AIzaSyDVRVA52TlJZwDME-vLn3aOwARe7-H_3OM";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log("response=", response);
        for (let i = 0; i < response.items.length; i++) {
            const videos = response.items[i];

            let videoTN = videos
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


// [i].snippets.thumbnails.default
