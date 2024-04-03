// Function to close the offCanvasNavbar when a link is clicked
function closeOffcanvasNavbar() {
  let offcanvasNavbar = document.getElementById("offcanvasNavbar2");
  let offcanvasNavbarInstance =
    bootstrap.Offcanvas.getInstance(offcanvasNavbar);
  if (offcanvasNavbarInstance) {
    offcanvasNavbarInstance.hide();
  }
}

const movies = [
  {
    title: "The Hangover",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7ZUeRvNdwr6qkHB3NFJ2yayrVljVo1BKab463LtDwftZh7HH",
    year: 2009,
    description: `A wild bachelor party in Las Vegas turns into a hilarious search for the groom-to-be when he mysteriously goes missing, and his friends wake up with no memory of the night before.`,
    genre: "Comedy",
  },
  {
    title: "Superbad",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlsFtxwwV1hxpwkdMTwVbV_PhonUm08mJhnweqVusDwIwmvLyK",
    year: 2007,
    description: `Two high school friends set out on a mission to score alcohol for a party, leading to a series of outrageous misadventures as they navigate the challenges of teenage life and friendship.`,
    genre: "Comedy",
  },
  {
    title: "Anchorman",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTz-qId3DM0MURF1ItX653CxsomclV_H_ptN4snmhAay_i0XWsI",
    year: 2004,
    description: `Ron Burgundy, San Diego's top-rated news anchor, finds his position threatened by the arrival of a talented and ambitious female journalist, leading to a comedic battle for supremacy in the world of broadcast news.`,
    genre: "Comedy",
  },
  {
    title: "Bridesmaids",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdJLa8wmx926IBHbSp__ETrPL0zMSCCENuJeZui7WmBSR3QIFa",
    year: 2011,
    description: `When her best friend asks her to be the maid of honor at her wedding, Annie's life quickly unravels as she tries to fulfill her duties amidst a group of quirky bridesmaids, leading to a series of uproarious and heartfelt moments.`,
    genre: "Comedy",
  },
  {
    title: "Shaun of the Dead",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vTn8Pz4QR5F5BodeQH_AXNOHr3gVjUqhdKuYvEKQJu2eothj",
    year: 2004,
    description: `In this hilarious take on the zombie apocalypse genre, slacker Shaun must rise to the occasion when his hometown is overrun by the undead, leading to a comedic journey of survival, friendship, and romance.`,
    genre: "Comedy",
  },
  {
    title: "The Exorcist",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqvU5RQ_ppeJUTwvuoRJZ3I4iBAEFW6vc7BlcQf7mc0qvh3Kue",
    year: 1973,
    description: `When a young girl becomes possessed by a mysterious entity, her desperate mother seeks the help of two priests to perform an exorcism, unleashing a terrifying battle between good and evil.`,
    genre: "Horror",
  },
  {
    title: "The Shining",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
    year: 1980,
    description: `Jack Torrance, a writer seeking solitude, takes a job as the winter caretaker of the isolated Overlook Hotel, where he and his family are haunted by malevolent supernatural forces, driving Jack to madness.`,
    genre: "Horror",
  },
  {
    title: "Psycho",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRicca1uD1bCkKQF3FqdlhTpxRnsetHxLWfQPXU8B1Mt-uqXYHr",
    year: 1960,
    description: `When a secretary embezzles money and goes on the run, she checks into a remote motel run by the mysterious Norman Bates, whose troubled past and unsettling relationship with his mother lead to a series of shocking and chilling events.`,
    genre: "Horror",
  },
  {
    title: "A Nightmare on Elm Street",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2RTGj6wIs_FAWBC4KCXPuvdHRnt4anbzb9i_CHuU4yl6rM6EL",
    year: 1984,
    description: `A group of teenagers in a small town find themselves terrorized by Freddy Krueger, a vengeful spirit who haunts their dreams, striking when they are most vulnerable and turning their nightmares into deadly reality.`,
    genre: "Horror",
  },
  {
    title: "The Conjuring",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPN0jFXkjp_5YGSBfMIWZb5VXfoECC9PFWmBci9gc4NhbUUa3m",
    year: 2013,
    description: `Paranormal investigators Ed and Lorraine Warren are called upon to help a family terrorized by a dark presence in their secluded farmhouse, leading to a terrifying confrontation with demonic forces beyond their imagination.`,
    genre: "Horror",
  },
  {
    title: "Inception",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRahMdIAUM-EOFYqEUdg55XHG4JQYaskXKhDG8WeHkyZH2DXZVz",
    year: 2010,
    description: `In a world where technology allows people to enter the dreams of others, a skilled thief is tasked with planting an idea into the mind of a CEO, leading to a mind-bending journey through multiple layers of reality.`,
    genre: "Science Fiction",
  },
  {
    title: "Blade Runner",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzBrtjEYPZ9LdbAgkIib6W6u5S7fOm8XRlUkd9kCDbftfly3u_",
    year: 1982,
    description: `In a dystopian future, a retired police officer known as a "blade runner" is tasked with hunting down bioengineered beings known as replicants, leading him to question the nature of humanity and his own existence.`,
    genre: "Science Fiction",
  },
  {
    title: "The Matrix",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4jfQQt_0vCA4XSwGiWkffC32Tv2oajdWhaYHHVYylYGJ3v17Q",
    year: 1999,
    description: `A computer hacker discovers that the world he inhabits is a simulated reality created by machines to subdue humanity, leading him to join a group of rebels in their fight against their machine overlords.`,
    genre: "Science Fiction",
  },
  {
    title: "Interstellar",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
    year: 2014,
    description: `In a future where Earth is on the brink of environmental collapse, a group of astronauts embarks on a perilous journey through a wormhole in search of a new habitable planet for humanity, facing time dilation and the mysteries of interstellar space.`,
    genre: "Science Fiction",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRO8A0Lru6h0NM4e2xbltvYo-0LYjEuqfqmC0sz406mtV_S4huU",
    year: 1977,
    description: `In a galaxy far, far away, a young farm boy named Luke Skywalker embarks on an epic adventure alongside a ragtag group of rebels, as they battle the tyrannical Galactic Empire and its sinister Sith lord, Darth Vader.`,
    genre: "Science Fiction",
  },
  {
    title: "Die Hard",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRagI3FRZIH6bs2V3gw3hCWorUfc-JvImrRQXSYQy_ZF-o2a_PK",
    year: 1988,
    description: `New York City cop John McClane becomes the only hope for a group of hostages held by terrorists during a Christmas party at a Los Angeles skyscraper. McClane's quick wit and resourcefulness are put to the test as he battles the ruthless criminals.`,
    genre: "Action",
  },
  {
    title: "Mad Max: Fury Road",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdzSE7YateHtZV7CYhJ_7MG348BLmWSnYAADU6pz4E8dtLgCZM",
    year: 2015,
    description: `In a post-apocalyptic wasteland, Max Rockatansky joins forces with Imperator Furiosa to escape the clutches of a tyrannical warlord and his army. Together, they embark on a high-octane chase across the desert in a race for freedom.`,
    genre: "Action",
  },
  {
    title: "The Dark Knight",
    image: "https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg",
    year: 2008,
    description: `When the Joker wreaks havoc on Gotham City, Batman must confront one of his greatest adversaries while also dealing with the moral dilemmas posed by the Joker's chaotic philosophy. The battle between the Dark Knight and the Clown Prince of Crime escalates to epic proportions.`,
    genre: "Action",
  },
  {
    title: "Terminator 2: Judgment Day",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5J6Ay6y1UT7WAI4U7Zm2KDYITrvfOI3vmaCNdGhx_0jmWiI1d",
    year: 1991,
    description: `In a future where machines rule the world, a cyborg assassin is sent back in time to eliminate the future leader of the human resistance. However, another Terminator is also sent back to protect him, leading to a thrilling showdown between man and machine.`,
    genre: "Action",
  },
  {
    title: "John Wick",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0l5fuKfa2dQBtNqViR1Haj9JpYl4xRtaMasZyv1fLodr9WHsa",
    year: 2014,
    description: `After the tragic death of his beloved dog, retired hitman John Wick seeks vengeance against the mobsters who wronged him. Wick unleashes his lethal skills and embarks on a relentless rampage through the criminal underworld, leaving a trail of destruction in his wake.`,
    genre: "Action",
  },
  {
    title: "Blackfish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsGsyQik_bNx5S0Hh2D8s8I_d0ny5urYiT2V6juSBiCMwlJ85",
    year: 2013,
    description: `This documentary examines the captivity of orca whales, focusing on the controversial practices of SeaWorld and the impact of captivity on the behavior and well-being of these intelligent marine mammals.`,
    genre: "Documentary",
  },
  {
    title: "March of the Penguins",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQD5U8ABoBKzDdy5UVjBa7rE9bbEBaGHOJp4ipPnrzFNlzqsG-7",
    year: 2005,
    description: `Filmed in Antarctica, this documentary follows the incredible journey of emperor penguins as they trek across the frozen landscape to their breeding grounds, facing harsh weather conditions and predators along the way.`,
    genre: "Documentary",
  },
  {
    title: "Fahrenheit 9/11",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2xxCAdCsFecN6R_aBIA48DPT0Ek_2auetjHrIWReYf2ve_5aQ",
    year: 2004,
    description: `Directed by Michael Moore, this documentary explores the aftermath of the September 11 attacks and the Bush administration's response, examining issues such as the War on Terror, government surveillance, and the Iraq War.`,
    genre: "Documentary",
  },
  {
    title: "13th",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRl3R4EfdY9XeHYV_A-fAMGMqG9eWNKh680z043QRulBRHalQ9Z",
    year: 2016,
    description: `Named after the 13th Amendment to the United States Constitution, which abolished slavery, this documentary explores the intersection of race, justice, and mass incarceration in the United States, tracing the legacy of slavery and systemic racism through to the present day.`,
    genre: "Documentary",
  },
  {
    title: "An Inconvenient Truth",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuMgHh-bO6T3pGdrS7cLv72lfHQ3t_0ujguScBc9ydb6YLEX3y",
    year: 2006,
    description: `Former Vice President Al Gore presents a compelling case for the urgent need to address climate change in this documentary, using data and visuals to illustrate the environmental impacts of human activity and advocating for global action to mitigate climate crisis.`,
    genre: "Documentary",
  },
  {
    title: "Alien",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKWeplicF676cMRKV8kqkCErnbNxp6Sm2XQyrrjGNpoLp_lrjI",
    year: 1979,
    description: `A commercial crew aboard the deep space towing vessel, Nostromo, is on its way home when they pick up an SOS warning from a distant moon.`,
    genre: "Horror",
  },
  {
    title: "Fyre: The Greatest Party That Never Happened",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw9WuvRbCeQlf-zIOA7PanlwibBbNJnOorigASB3ffr-igBbmF",
    year: 2019,
    description: `An exclusive behind the scenes look at the infamous unraveling of the Fyre music festival.`,
    genre: "Documentary",
  },
  {
    title: "Guardians of the Galaxy",
    image: "https://contentserver.com.au/assets/516361_p10108283_p_v8_ak.jpg",
    year: 2014,
    description: `A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.`,
    genre: "Action",
  },
];

$(document).ready(function () {
  // create movie cards
  function generateMovieCard(movie) {
    return `
      <div class="col-md-6 mb-4 col-lg-3 d-flex justify-content-center movie" data-genre="${movie.genre}">
        <div class="card border-0 rounded" style="width: 250px;">
          <img src="${movie.image}" class="card-img-top img-fluid rounded" alt="${movie.title}" style="width:250px; height:375px; object-fit: cover;">
          <div class="card-img-overlay d-flex flex-column justify-content-center rounded">
            <button type="button" class="btn btn-dark view-details-btn border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-title="${movie.title}" data-image="${movie.image}" data-year="${movie.year}" data-description="${movie.description}" data-genre="${movie.genre}">View Details</button>
          </div>
        </div>
      </div>
    `;
  }

  // function to filter movies based on the selected genre
  function displayMovies(genre) {
    const moviesContainer = $("#movies .row");
    moviesContainer.empty(); // clear existing movies
    movies.forEach((movie) => {
      // If the genre is "All" or it matches the selected genre display the movie with that genre
      if (genre === "All" || movie.genre === genre) {
        moviesContainer.append(generateMovieCard(movie));
      }
    });
    // display the movie details in the modal
    $(".view-details-btn").click(function () {
      const modalTitle = $(".modal-title");
      const movieDetails = $("#movieDetails");
      const title = $(this).data("title");
      const image = $(this).data("image");
      const year = $(this).data("year");
      const description = $(this).data("description");
      const genre = $(this).data("genre");
      modalTitle.text(title);
      movieDetails.html(`
        <div class="d-flex gap-2">
        <div>
        <p><b>Year:</b> ${year}</p>
        <p><b>Description:</b> ${description}</p>
        <p><b>Genre:</b> ${genre}</p>
        </div>
        <img src="${image}" class="card-img-top img-fluid rounded " alt="${title}" style="width:200px;">
        </div>
      `);
    });
    // update the dropdown button text to display selected genre
    $("#genreDropdown").text(genre);
  }

  // display all movies by default
  displayMovies("All");

  // filter the movies on selected genre
  $(".genre-filter").click(function () {
    const selectedGenre = $(this).data("genre");
    displayMovies(selectedGenre);
  });
});
