

$(document).ready(function() {

const signInForm = $("#submitbtn");
const fullnameInput = $("#fullname");
const usernameInput = $("#username");
const bioInput = $("#bio");

  // When the signup button is clicked, we validate the email and password are not blank
  signInForm.click( function(event) {
    event.preventDefault();

    const userData = {
      fullname: fullnameInput.val().trim(),
      username: usernameInput.val().trim(),
      bio: bioInput.val().trim(),
      
    };
    console.log("userData");
    if (!userData.fullname || !userData.username || !userData.bio) {
      return;
    }
    joinTheChat(userData.fullname, userData.username, userData.bio);
    fullnameInput.val("");
    usernameInput.val("");
    bioInput.val("");
  });


  function joinTheChat(fullname, username, bio) {
    $.post("/api/signins", {
      fullname: fullname,
      username: username,
      bio: bio,
    })
      .then(function(data) {
       const param = $.param({fullname, username, bio})
       console.log(param)
        window.location.replace("/chat?"+param);
        
      })
      
  }




});
