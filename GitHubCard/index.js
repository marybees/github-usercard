import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const gitHubProfileArray = ['marybees', 'willwashburn', 'khaliqgant', 'jtarre', 'mphelps1978'];

gitHubProfileArray.forEach(username => {
  const profileURL = 'https://api.github.com/users/' + username;
  axios.get(profileURL)
.then(response => {
  createCard(response.data);
  })
  .catch(error => {
    console.log("The data was not returned.", error)
  });
});


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/ 

function createCard(cardObj) {
// Create Elements

console.log(cardObj)
const card = document.createElement('div'),
      profilePic = document.createElement('img'),
      cardInfo = document.createElement('div'),
      name = document.createElement('h3'),
      username = document.createElement('p'),
      location = document.createElement('p'),
      profileURL = document.createElement('p'),
      followers = document.createElement('p'),
      following = document.createElement('p'),
      bio = document.createElement('p');

//Add Text Content
name.textContent = cardObj.name;
username.textContent = cardObj.login;
location.textContent = 'Location: ' + cardObj.location;
profileURL.textContent = 'Profile: ' + cardObj.html_url;
followers.textContent = 'Followers: ' + cardObj.followers;
following.textContent = 'Following: ' + cardObj.following;
bio.textContent = 'Bio: ' + cardObj.bio;

//Add Image Source Attribute
profilePic.src = cardObj.avatar_url;

//Add Classes
card.classList.add('card')
cardInfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')

//Select Element
const cards = document.querySelector('.cards')

//Append
cardInfo.append(name);
cardInfo.append(username);
cardInfo.append(location);
cardInfo.append(profileURL);
cardInfo.append(followers);
cardInfo.append(following);
cardInfo.append(bio);
card.append(profilePic);
card.append(cardInfo);
cards.append(card);

return card;
};



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
