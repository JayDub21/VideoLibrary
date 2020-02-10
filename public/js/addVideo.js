$(document).ready(function () {
    // Getting references to our form and input
    var addVideoForm = $("form.add-video");
    var vidTitleInput = $("input#title-input");
    var vidRecDateInput = $("input#rec_date-input");
    var vidLinkInput = $("input#video_url-input");
    var vidKeywordInput = $("input#keyword-input");

    // When the signup button is clicked, we validate the email and password are not blank
    addVideoForm.on("submit", function (event) {
        event.preventDefault();
        var vidData = {
            title: vidTitleInput.val().trim(),
            rec_date: vidRecDateInput.val().trim(),
            video_url: vidLinkInput.val().trim(),
            keyword: vidKeywordInput.val().trim()
        };
        // debugger;

        addVideo(vidData.title, vidData.rec_date, vidData.video_url, vidData.keyword);
        vidTitleInput.val("");
        vidRecDateInput.val("");
        vidLinkInput.val("");
        vidKeywordInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors

    function addVideo(title, rec_date, video_url, keyword) {
        $.post("/api/addVid", {
                title: title,
                rec_date: rec_date,
                video_url: video_url,
                keyword: keyword
            })
            .then(function () {
                window.location.replace("/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        // $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
        console.log(err);
    }
});