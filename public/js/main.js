<<<<<<< HEAD
// $(document).ready(function(){
//   // Write index page your CLIENT-SIDE logic here
//   // This will run in the browser
// });

=======
//vanilla JS grabbing elements:
>>>>>>> a31584402e80e4b42df6c5a80a8dc8bb955eec18
const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const userList = document.getElementById('users');

<<<<<<< HEAD
// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
ignoreQueryPrefix: true
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username });
=======
const socket = io();

// Join chatroom
socket.emit('joinRoom', {username});
>>>>>>> a31584402e80e4b42df6c5a80a8dc8bb955eec18

// Get room and users
socket.on('roomUsers', ({ users }) => {
// outputRoomName(room);
outputUsers(users);
});

// Message from server
socket.on('message', message => {
console.log(message);
outputMessage(message);

// Scroll down
chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
<<<<<<< HEAD
chatForm.addEventListener('submit', e => {
e.preventDefault();

// Get message text
let msg = e.target.elements.msg.value;

msg = msg.trim();

if (!msg){
  return false;
}

// Emit message to server
socket.emit('chatMessage', msg);

// Clear input
e.target.elements.msg.value = '';
e.target.elements.msg.focus();
=======
msgInput.addEventListener('submit', e => {
  //prevent the page from reloading
  e.preventDefault();

  // Get message 
  let msg = e.target.elements.msg.value;
  
  msg = msg.trim();
  
  if (!msg){
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
>>>>>>> a31584402e80e4b42df6c5a80a8dc8bb955eec18
});

// Output message to DOM
function outputMessage(message) {
const div = document.createElement('div');
div.classList.add('message');
const p = document.createElement('p');
p.classList.add('meta');
p.innerText = message.username;
p.innerHTML += `<span>${message.time}</span>`;
div.appendChild(p);
const para = document.createElement('p');
para.classList.add('text');
para.innerText = message.text;
div.appendChild(para);
document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
// function outputRoomName(room) {
// roomName.innerText = room;
// }

// Add users to DOM
function outputUsers(users) {
userList.innerHTML = '';
users.forEach(user=>{
  const li = document.createElement('li');
  li.innerText = user.username;
  userList.appendChild(li);
});
}
// create a condition if the same username has been used more than once