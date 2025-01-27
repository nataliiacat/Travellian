import berlin from './assets/images/berlin.jpg'
import london from './assets/images/london.jpg'
import venice from './assets/images/venice.jpg'
import lisbon from './assets/images/lisbon.jpg'
import portugal from './assets/images/portugal.jpg'
import greece from './assets/images/greece.jpg'
import italy from './assets/images/italy.jpg'
import paris from './assets/images/paris.jpg'
import blogimg from './assets/images/blog.jpg'
import image1 from './assets/images/img1.jpg'
import image2 from './assets/images/img2.jpg'
import image3 from './assets/images/img3.jpg'
import image4 from './assets/images/img4.jpg'
import doe from './assets/images/doe.jpg'
import smith from './assets/images/smith.jpg'
import bellis from './assets/images/bellis.jpg'

export const destinations = [
  {
    id: 1,
    image: berlin,
    title: "Monument of Berlin",
    local: "Berlin, Germany"
  },
  {
    id: 2,
    image: london,
    title: "Millennium Bridge",
    local: "London, United Kingdom"
  },
  {
    id: 3,
    image: venice,
    title: "Rialto Bridge",
    local: "Venice, Italy"
  },
  {
    id: 4,
    image: lisbon,
    title: "Sea of Orange Tiles",
    local: "Lisbon, Portugal"
  }
];

export const specialOffer = [
  {
    id: 1,
    image: portugal,
    local: "Lisbon, Portugal", 
    rating: 3,
    text: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "$500"
  },
  {
    id: 2,
    image: greece,
    local: "Athens, Greecel",
    rating: 4,
    text: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "$800"
  },
  {
    id: 3,
    image: italy,
    rating: 3,
    local: "Rome, Italy",
    text: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "$750"
  },
  {
    id: 4,
    image: paris,
    local: "Paris City",
    rating: 5,
    text: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: "$700"
  }
];

export const blog = {
  image: blogimg,
  title: "Beautiful Italy Let’s travel",
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues."
};

export const gallery = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  }
];

export const experiences = [
  {
    id: 1,
    image: doe,
    autor: "John Doe",
    role: "Accountant",
    review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    rating:5
  },
  {
    id: 2,
    image: smith,
    autor: "John Smith",
    role: "Journalist, HWO News",
    review: "I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    rating: 3
  },
  {
    id: 3,
    image: bellis,
    autor: "Tamara Bellis",
    role: "Managing Director, JTH",
    review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.",
    rating: 4
  },
  {
    id: 4,
    image: doe,
    autor: "John Smith",
    role: "Accountant",
    review: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    rating: 5
  }
];