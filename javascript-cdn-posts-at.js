"use strict";
let videoNum1 = '';
function UserNeedLogin() {
    create_popup('none', "Enjoying what you're viewing? Sign in to give it a like!", "Liking posts is reserved for members. Sign in or register to join the community!", '', 'login');
}
;
function closePopup22() {
    let popup_container = document.getElementById('popup_messageID');
    popup_container.style.display = 'none';
    document.body.removeChild(popup_container);
}
;
function create_popup(username, firstH1, secondH2, url, action) {
    var popup = document.createElement("div");
    popup.className = "popup_message";
    popup.id = "popup_messageID";
    let popupMessage = ``;
    if (action === 'login') {
        let loginURL = 'http://127.0.0.1:8000/users/loginUser/';
        let joinURL = 'http://127.0.0.1:8000/users/join/';
        popupMessage = `
        <div class="popup-content">
            <span class='close' onclick='closePopup22()'> &times;</span>
            <h2>${firstH1}</h2>
            <p>${secondH2}</p>
            <a href='${loginURL}'><button>Login</button></a>
            <a href='${joinURL}'><button>Join Now!</button></a>
        </div>
        `;
    }
    else if (action === 'premium') {
        popupMessage = `
        <div class="popup-content">
            <span class='close' onclick='closePopup22()'> &times;</span>
            <h2>${firstH1}</h2>
            <p>${secondH2}</p>
            <a href='${url}'><button>Go Premium!</button></a>
        </div>
        `;
    }
    popup.innerHTML = popupMessage;
    document.body.appendChild(popup);
    popup.style.display = "flex";
    popup.style.flexDirection = 'column';
}
;
function userLikeHTML(id) {
    let edited1 = `heartLiked${id}`;
    let edited2 = `heartUnliked_s${id}`;
    let heartLiked = document.getElementById(edited1);
    let heartUnliked = document.getElementById(edited2);
    heartLiked.style.display = 'block';
    heartUnliked.style.display = 'none';
}
;
function userUnlikeHTML(id) {
    let edited1 = `heartLiked${id}`;
    let edited2 = `heartUnliked_s${id}`;
    let heartLiked = document.getElementById(edited1);
    let heartUnliked = document.getElementById(edited2);
    heartLiked.style.display = 'none';
    heartUnliked.style.display = 'block';
}
function user_like_post(id, user) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const csrfValue = csrfToken.value;
    const formData = new FormData();
    formData.append('post_id', id);
    formData.append('username', user);
    fetch('/userLikedPost/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfValue
        },
        body: formData
    });
    userLikeHTML(id);
}
function UserUnlike(id, user) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const csrfValue = csrfToken.value;
    const formData = new FormData();
    formData.append('post_id', id);
    formData.append('username', user);
    fetch('/userunLikedPost/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfValue
        },
        body: formData
    });
    userUnlikeHTML(id);
}
function userLikeHTML1(id) {
    let edited1 = `heartLiked${id}`;
    let edited2 = `heartUnliked${id}`;
    let heartLiked = document.getElementById(edited1);
    let heartUnliked = document.getElementById(edited2);
    heartLiked.style.display = 'block';
    heartUnliked.style.display = 'none';
}
;
function userUnlikeHTML1(id) {
    let edited1 = `heartLiked${id}`;
    let edited2 = `heartUnliked${id}`;
    let heartLiked = document.getElementById(edited1);
    let heartUnliked = document.getElementById(edited2);
    heartLiked.style.display = 'none';
    heartUnliked.style.display = 'block';
}
function user_like_post1(id, user) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const csrfValue = csrfToken.value;
    const formData = new FormData();
    formData.append('post_id', id);
    formData.append('username', user);
    fetch('/userLikedPost/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfValue
        },
        body: formData
    });
    userLikeHTML1(id);
}
function UserUnlike1(id, user) {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    const csrfValue = csrfToken.value;
    const formData = new FormData();
    formData.append('post_id', id);
    formData.append('username', user);
    fetch('/userunLikedPost/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrfValue
        },
        body: formData
    });
    userUnlikeHTML1(id);
}
let openedBox = false;
let currentOpen = [];
function openPostOptions(id) {
    let postID = 'settingsDropdownID' + id;
    let optionsBox = document.getElementById(postID);
    currentOpen.push(postID);
    let currentSelected = currentOpen[0];
    if (openedBox == false) {
        optionsBox.style.display = 'block';
        openedBox = true;
    }
    else {
        optionsBox.style.display = 'none';
        openedBox = false;
    }
}
let currentPlaying = [];
let isPlaying = false;
let video_controlsID_hovering = false;
function play_(id) {
    let playButton = document.getElementById(`playScreenButton${id}`);
    let pauseButton = document.getElementById(`pauseScreenButton${id}`);
    let vc_playButton = document.getElementById(`btn-play${id}`);
    let vc_pauseButton = document.getElementById(`btn-pause${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    playButton.style.display = 'none';
    pauseButton.style.display = 'none';
    vc_playButton.style.display = 'none';
    vc_pauseButton.style.display = 'inline-block';
    video.play();
    currentPlaying.length = 0;
    currentPlaying.push(id);
    isPlaying = true;
}
;
function pause_(id) {
    let pauseButton = document.getElementById(`pauseScreenButton${id}`);
    let vc_playButton = document.getElementById(`btn-play${id}`);
    let vc_pauseButton = document.getElementById(`btn-pause${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    pauseButton.style.display = 'block';
    vc_playButton.style.display = 'inline-block';
    vc_pauseButton.style.display = 'none';
    video.pause();
    currentPlaying.length = 0;
    isPlaying = false;
}
function clickedVideoOverly(id) {
    if (video_controlsID_hovering) {
        doNothing();
    }
    else {
        let currentlyPlaying = currentPlaying[0];
        if (currentlyPlaying == id) {
            pause_(id);
        }
        else if (currentlyPlaying) {
            pause_(currentlyPlaying);
            play_(id);
        }
        else {
            play_(id);
        }
    }
}
;
function ShowVideoControls(id) {
    let VideoControls = document.getElementById(`video_controlsID${id}`);
    VideoControls.style.display = 'flex';
}
;
function HideVideoControls(id) {
    let VideoControls = document.getElementById(`video_controlsID${id}`);
    VideoControls.style.display = 'none';
}
;
function mouseOverOverly(id) {
    video_controlsID_hovering = true;
}
;
function mouseLeaveOverly(id) {
    video_controlsID_hovering = false;
}
;
function vc_play(id) {
    let playButton = document.getElementById(`playScreenButton${id}`);
    let pauseButton = document.getElementById(`pauseScreenButton${id}`);
    let vc_playButton = document.getElementById(`btn-play${id}`);
    let vc_pauseButton = document.getElementById(`btn-pause${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    playButton.style.display = 'none';
    pauseButton.style.display = 'none';
    vc_playButton.style.display = 'none';
    vc_pauseButton.style.display = 'inline-block';
    video.play();
    currentPlaying.length = 0;
    currentPlaying.push(id);
    isPlaying = true;
}
;
function vc_pause(id) {
    let playButton = document.getElementById(`playScreenButton${id}`);
    let pauseButton = document.getElementById(`pauseScreenButton${id}`);
    let vc_playButton = document.getElementById(`btn-play${id}`);
    let vc_pauseButton = document.getElementById(`btn-pause${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    playButton.style.display = 'none';
    pauseButton.style.display = 'none';
    vc_playButton.style.display = 'inline-block';
    vc_pauseButton.style.display = 'none';
    video.pause();
    currentPlaying.length = 0;
    isPlaying = false;
}
;
function VC_playButton(id) {
    let currentlyPlaying = currentPlaying[0];
    if (currentlyPlaying == id) {
        vc_pause(id);
    }
    else if (currentlyPlaying) {
        vc_pause(currentlyPlaying);
        vc_play(id);
    }
    else {
        vc_play(id);
    }
    ;
}
;
function VC_pauseButton(id) {
    let currentlyPlaying = currentPlaying[0];
    if (currentlyPlaying == id) {
        vc_pause(id);
    }
    else if (currentlyPlaying) {
        vc_pause(currentlyPlaying);
        vc_play(id);
    }
    else {
        vc_play(id);
    }
    ;
}
;
function VC_muteOn(id) {
    let muteOn = document.getElementById(`btn-unmute${id}`);
    let muteOff = document.getElementById(`btn-m-off${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    muteOn.style.display = 'none';
    muteOff.style.display = 'inline-block';
    video.muted = true;
}
;
function VC_muteOff(id) {
    let muteOn = document.getElementById(`btn-unmute${id}`);
    let muteOff = document.getElementById(`btn-m-off${id}`);
    let video = document.getElementById(`Myvideo${id}`);
    muteOn.style.display = 'inline-block';
    muteOff.style.display = 'none';
    video.muted = false;
}
;
function VC_rewind(id) {
    let video = document.getElementById(`Myvideo${id}`);
    video.currentTime = 0;
}
function VC_download(id, username) {
    videoNum1 = id;
    let video = document.getElementById(`Myvideo${id}`);
    video.pause();
    if (username != '') {
        create_popup(username, 'Only premium members can download videos', 'If you want to download videos, you can try an ad free experience with downloadable content by getting RM premium.', '#', 'premium');
    }
    else {
        create_popup(username, 'Only premium members can download videos', 'If you want to download videos, you can try an ad free experience with downloadable content by getting RM premium.', '#', 'premium');
    }
}
let isFullScreen = false;
function exitFS(id) {
    try {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
    catch (error) {
        console.error("Error exiting fullscreen:", error);
    }
    isFullScreen = false;
}
function enterFS(element, secondElement) {
    secondElement.controls = false;
    if (element.requestFullscreen) {
        element.requestFullscreen();
        secondElement.style.height = '100%';
        isFullScreen = true;
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        secondElement.style.height = '100%';
        isFullScreen = true;
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        secondElement.style.height = '100%';
        isFullScreen = true;
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
        secondElement.style.height = '100%';
        isFullScreen = true;
    }
}

let currentFullScreen = '';
function enterFullScreen(id) {
    currentFullScreen = id;
    let video_element = document.getElementById(`video_stale_backgroundID${id}`);
    let video_controls = document.getElementById(`video_controlsID${id}`);
    let enterFullScreenButton = document.getElementById(`btn-f${id}`);
    let exitFullScreenButton = document.getElementById(`btn-xf${id}`);
    enterFullScreenButton.style.display = 'none';
    exitFullScreenButton.style.display = 'inline-block';
    let video = document.getElementById(`Myvideo${id}`);
    enterFS(video_element, video);
    isFullScreen = true;
}
function exitFullScreen(id) {
    let video = document.getElementById(`Myvideo${id}`);
    video.style.height = '300px';
    let enterFullScreenButton = document.getElementById(`btn-f${id}`);
    let exitFullScreenButton = document.getElementById(`btn-xf${id}`);
    enterFullScreenButton.style.display = 'inline-block';
    exitFullScreenButton.style.display = 'none';
    exitFS(id);
    isFullScreen = false;
}
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        doNothing();
    }
    else {
        let video = document.getElementById(`Myvideo${currentFullScreen}`);
        video.style.height = '300px';
        let enterFullScreenButton = document.getElementById(`btn-f${currentFullScreen}`);
        let exitFullScreenButton = document.getElementById(`btn-xf${currentFullScreen}`);
        enterFullScreenButton.style.display = 'inline-block';
        exitFullScreenButton.style.display = 'none';
        isFullScreen = false;
    }
});
