const events = [
  {
    id: 1,
    title: "Live jazz evening",
    description: "Описание здесь",
    price: 300,
    type: "concert",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/88/33/8833b8a001857d0d046c830ad4684340.jpg"
  },
  {
    id: 2,
    title: "Ilya Repin exhibition",
    description: "Описание здесь",
    price: 200,
    type: "exhibition",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/10/14/1014614390dc494a313d90dc04890ab9.jpg"
  },
  {
    id: 3,
    title: "Boat party",
    description: "Описание здесь",
    price: 500,
    type: "party",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/93/ed/93ed353172671c70a5f390f5e4294a75.JPG"
  },
  {
    id: 4,
    title: "Augmented Reality exhibition",
    description: "Описание здесь",
    price: 1500,
    type: "exhibition",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/9b/44/9b44663b0607d921e7edbc173fa3fb91.jpg"
  },
  {
    id: 5,
    title: "Chrysta Bell concert",
    description: "Описание здесь",
    price: 1200,
    type: "concert",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/9c/35/9c35f9cc714625034b836ece840a4c72.jpg"
  },
  {
    id: 6,
    title: "Manhattan movie",
    description: "Описание здесь",
    price: 2500,
    type: "cinema",
    imgSrc:
      "https://kudago.com/media/thumbs/xl/images/event/b0/9b/b09b41e811142618e43fde4687b56022.jpeg"
  }
];

export default {
  getEvents: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(events);
      }, 1000);
    });
  }
};
