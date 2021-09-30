const eventsURL = "https://csm.styve.digital/wp-json/wp/v2/posts?_embed";
const eventsContainer = document.querySelector(".events");

async function getEvents(url) {
  try {
    const response = await fetch(url);
    const events = await response.json();

    console.log(events);

    events.forEach(function (event, index) {
      const eventIMG = event._embedded["wp:featuredmedia"][0].source_url;
      const eventIMGAlt = event._embedded["wp:featuredmedia"][0].alt_text;
      if (index <= 2) {
        eventsContainer.innerHTML += `<div class="event-def">
                                      <img src="${eventIMG}" alt="${eventIMGAlt}" class="event-head-img"></img>
                                      <h3>${event.title.rendered}</h3>
                                      <div class="event-date">${event.excerpt.rendered}</div>
                                      <div class="event-txt">${event.content.rendered}</div>
                                      </div>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}
getEvents(eventsURL);
