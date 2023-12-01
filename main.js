// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('heart')
  const modal = document.getElementById('modal')
  heart.addEventListener('click', () => {
      mimicServerCall(true)
       .then((resp) => {
          heart.classList.add('activated-heart')
          modal.classList.remove('hidden')
          modal.textContent = resp
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 3000)
    
        })
       .catch((error) => {
          modal.classList.remove('hidden')
          modal.textContent = error
          setTimeout(() => {
            modal.classList.add('hidden')
          }, 3000)
          // .then(() => {})
        })
  })
    heart.addEventListener('click', () => {
    heart.classList.remove('activated-heart')
  
  })
})
  




  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
