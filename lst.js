const testimonialData = [{
  "fullText": "I look around, do you know what I see? Losers! I mean like folks who have lost stuff. Their homes. Families. And we're facing a threat that could destroy us all.",
  "imageSrc": "https://www.londonstone.co.uk/media/wysiwyg/moodboard-monday/simon-orchard/Simon_orchard_400x400.png",
  "fullName": "Peter Quill",
  "link": "https://www.londonstone.co.uk",
  "rating": 4
}, {
  "fullText": "Hey, Miss Potts. If you find this recording... don't feel bad about this. Part of the journey is the end. Just for the record, being adrift in space with zero promise of rescue is more fun than it sounds. Food and water ran out four days ago. Oxygen will run out tomorrow morning. That'll be it. When I drift off, I will dream about you. It's always you.",
  "imageSrc": "https://www.londonstone.co.uk/media/wysiwyg/moodboard-monday/simon-orchard/Simon_orchard_400x400.png",
  "fullName": "Tony Stark",
  "link": "https://www.londonstone.co.uk"
}, {
  "fullText": "There are six stones out there. Thanos already has the Power Stone because he stole it last week when he decimated Xandar. He stole the Space Stone from me when he destroyed my ship and slaughtered half my people. The Time and Mind Stones are safe on Earth, they're with the Avengers.",
  "imageSrc": "https://www.londonstone.co.uk/media/wysiwyg/moodboard-monday/simon-orchard/Simon_orchard_400x400.png",
  "fullName": "Thor Odinson",
  "link": "http://www.londonstone.co.uk",
  "rating": 5
}, {
  "fullText": "After everything that happened with S.H.I.E.L.D., during my little hiatus, I went back to Russia and tried to find my parents. Two little gravestones by a chain-link fence. I pulled some weeds and left some flowers. We have what we have when we have it.",
  "imageSrc": "https://www.londonstone.co.uk/media/wysiwyg/moodboard-monday/simon-orchard/Simon_orchard_400x400.png",
  "fullName": "Natasha Romanoff ",
  "link": "http://www.londonstone.co.uk",
  "rating": 3
}, {
  "fullText": "I'm so proud of you. You've come a long way since that day I found you by the lake. But can you keep your emotions in check long enough to take me on? Or will they get the better of you as always? I always told you you'll be ready the day you'll knock me down as yourself. This is that moment. This is that moment, Vers!",
  "imageSrc": "https://www.londonstone.co.uk/media/wysiwyg/moodboard-monday/simon-orchard/Simon_orchard_400x400.png",
  "fullName": "Yon Rog",
  "link": "https://www.londonstone.co.uk",
  "rating": 5
}];



const getRandomTestimonial = () => {
  let arrayLength = testimonialData.length; // 5
  let randomNum = Math.floor(Math.random() * arrayLength);
  return randomNum; // returns random number ranging from 0-4
}

const pageControls = {
  displayTestimonial: function (randomTestimonial) {

    let starRating = testimonialData[randomTestimonial].rating;
    let starListHTML = ''

    for (let i = 0; i < starRating; i++) {

      starListHTML += `
        <li>
          <img class="star" src="https://www.londonstone.co.uk/skin/frontend/londonstone/default/images/chrome/star.svg">
        </li>
      `
    }

    document.getElementById('testimonial').innerHTML = `
      <div class="image-cont">
        <img class="image" src="${testimonialData[randomTestimonial].imageSrc}" alt="${testimonialData[randomTestimonial].fullName}">
      </div>
      <div class="test-cont">
        <ul class="star-list">
          ${starListHTML}
        </ul>
        <blockquote>
          <p class="quote">'${testimonialData[randomTestimonial].fullText}'</p>
          <footer>
            <cite>
              <a class="name" href="${testimonialData[randomTestimonial].link}" target=_blank>${testimonialData[randomTestimonial].fullName} | ${testimonialData[randomTestimonial].link.slice(8)}</a>
            </cite>
          </footer>
        </blockquote>
      </div>
    `;
  }
}


document.addEventListener("DOMContentLoaded", function () {
  pageControls.displayTestimonial(getRandomTestimonial());
});















