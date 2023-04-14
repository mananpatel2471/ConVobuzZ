import {useEffect} from "react";
import axios from "axios";
import config from "../../config/default"
import './style.css'

const Video = () => {
  useEffect(() => {
    const SERVER_URL = config.SERVER_URL;
    fetch(SERVER_URL + '/video')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <div>

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="style.css"/>
    <script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/peerjs/1.3.1/peerjs.min.js.map"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script>
      const ROOM_ID = {}
    </script>
    <audio id="chatAudio" src="chat_request.mp3"></audio>
    <div class="overlay" onclick="hideInvitePopup()"></div>
    <div class="invitePop">
      <input type="text" value="..." id="roomLink" readonly/>
      <button onclick="copyToClipboard">Copy</button>

    </div>
    <div class="main">

      <div class="main__left">
        <div class="main__videos">
          <div id="video-grid"></div>
        </div>
        <div class="main__controls">
          <div class="main__controls_block">
            <div
              class="main__controls_button"
              id="muteButton"
              onclick="muteUnmute()"
            >
              <i class="fa fa-microphone"></i>
              <span>Mute</span>
            </div>
            <div
              class="main__controls_button"
              id="playPauseVideo"
              onclick="playStop()"
            >
              <i class="fa fa-video-camera"></i>
              <span>Pause Video</span>
            </div>
          </div>

          <div class="main__controls_block">
            <div class="main__controls_button" onclick="showInvitePopup()">
              <i class="fa fa-user-plus"></i>
              <span>Invaite people</span>
            </div>
            <div class="main__controls_button">
              <i class="fa fa-comment" onclick="ShowChat(this)"></i>
              <span>Chat</span>
            </div>
          </div>

        </div>
      </div>


      <div class="main__right">
        <div class="main__header">
          <h6>Chat</h6>
        </div>
        <div class="main__chat__window" id="main__chat__window">
          <ul class="messages" id="all_messages"></ul>
        </div>
        <div class="main__message_container">
          <input
            type="text"
            id="chat_message"
            placeholder="Type message here.."
          />
          <button class="sendMsg" id="sendMsg">
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>

    <script src="script.js"></script>
  </div>
}
export default Video;