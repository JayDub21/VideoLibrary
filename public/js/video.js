$(document).ready(function () {

    console.log(document.location.href.slice(28));

    id = document.location.href.slice(28);

    $.get("/api/video/" + id).then(function (result) {
        console.log(result);
        console.log(result.title);
        console.log(result.rec_date);
        console.log(result.keyword);
        $(".video-name").text(result.title);
        $(".recorded-date").text(result.rec_date);
        $(".video-iframe").attr("src", result.video_url)
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
    })
});