import {
  BoatIcon,
  BusIcon,
  PlainIcon,
  TrainIcon,
  MailIcon,
  PhoneIcon,
  Location,
} from "../icons/icons";
import {
  aboutImages,
  contactImages,
  galleryImages,
  homeImages,
  roomImages,
} from "./links";
export const homePageData = {
  bannerData: {
    title: "the best lakeview",
    description: "Unwind with Stunning Views and Warm Hospitality",
    images: [homeImages + "/img1.webp", homeImages + "/gallery/img4.webp"],
  },
  galleryData: {
    title: "Gallery",
    description: "Experience the Stunning Views and Cozy Atmosphere",
    images: [
      {
        src: homeImages + "/gallery/img1.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img2.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img3.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img4.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img5.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img7.webp",
        alt: "stunning views",
      },
      {
        src: homeImages + "/gallery/img6.webp",
        alt: "stunning views",
      },
    ],
  },
  roomsData: {
    title: "Rooms",
    description:
      "Experience Comfort and Elegance in Our Beautifully Designed Rooms",
    subDescription:
      "Choose from a range of beautifully designed rooms and suites, each offering comfort, modern amenities, and breathtaking views of Lake Brienz.",
    images: [
      {
        src: homeImages + "/rooms/img1.webp",
        alt: "Signature Lake View",
      },
      {
        src: homeImages + "/rooms/img2.webp",
        alt: "Classic Lake View",
      },
      {
        src: homeImages + "/rooms/img3.webp",
        alt: "Majestic lakeview king",
      },
      {
        src: homeImages + "/rooms/img4.webp",
        alt: "Alpine retreat",
      },
      {
        src: homeImages + "/rooms/img5.webp",
        alt: "Queen’s vista",
      },
      {
        src: homeImages + "/rooms/img6.webp",
        alt: "Lakeview trio",
      },
      {
        src: homeImages + "/rooms/img7.webp",
        alt: "Lakeview studio",
      },
      // {
      //   src: "",
      //   alt: "",
      // },
    ],
  },
  amenitiesData: {
    title: "Amenities",
    description: "Comfort and Convenience at Your Fingertips",
    items: [
      {
        icon: homeImages + "/amenities/CarProfile.png",
        title: "Free Parking",
        description:
          "Enjoy the convenience of free parking during your stay at Hotel Lakeview. Our spacious and secure parking area is designed to accommodate all guests, ensuring a stress-free experience from the moment you arrive",
        src: aboutImages + "/img2.webp",
        color: "#FAE3AF",
      },
      {
        icon: homeImages + "/amenities/PicnicTable.png",
        title: "Breakfast",
        description:
          "Savor delicious meals at our on-site dining options. Start your day with a hearty continental breakfast buffet featuring fresh, locally sourced ingredients. For lunch and dinner, explore nearby restaurants or enjoy a meal in the comfort of your room.",
        src: homeImages + "/amenities/img1.webp",
        color: "#D8D6D7",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Entertainment Lounge",
        description:
          "Unwind in our entertainment zone, designed for relaxation and fun. Enjoy games, books, and cozy seating areas where you can gather with friends or family for a delightful evening of laughter and entertainment.",
        src: homeImages + "/gallery/img2.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/Eye.png",
        title: "Private Balcony/Terrace",
        description:
          "Many of our rooms come with private balconies or terraces, offering stunning views of Lake Brienz and the surrounding mountains. Relax with a book or enjoy a glass of wine while taking in the serene beauty of nature right outside your door.",
        src: homeImages + "/gallery/img1.webp",
        color: "#CE905F",
      },
      {
        icon: homeImages + "/amenities/Confetti.png",
        title: "Private Gatherings (replacement)",
        description:
          "For special occasions or events, we offer spaces suitable for private gatherings. Whether it's a family reunion, birthday celebration, or corporate meeting, our dedicated team is here to help you create memorable experiences tailored to your needs.",
        src: galleryImages + "/slider/img1.webp",
        color: "#CFC4B1",
      },
      {
        icon: homeImages + "/amenities/WifiHigh.png",
        title: "Free WiFi",
        description:
          "Stay connected with our complimentary high-speed WiFi available throughout the hotel. Whether you're working remotely, streaming your favorite shows, or sharing your travel experiences on social media, our reliable internet ensures you can stay in touch with the world.",
        src: homeImages + "/amenities/img2.webp",
        color: "#E0E7E9",
      },
      {
        icon: homeImages + "/amenities/ChefHat.png",
        title: "Common Kitchen",
        description:
          "Our inviting restaurant provides a cozy atmosphere for dining, with both indoor and outdoor seating options. For those who prefer to cook, select accommodations feature kitchen facilities, allowing you to prepare your own meals using fresh local ingredients.",
        src: homeImages + "/amenities/img3.webp",
        color: "#B9BDA7",
      },
    ],
  },
  nearbyattractions: {
    title: "nearby attractions",
    description: "Explore Nearby Natural Wonders",

    images: [
      {
        src: homeImages + "/nearby/img1.webp",
        alt: "Jangfrau",
        description:
          "Jungfrau, renowned for its towering peaks and stunning vistas, features scenic train rides, hiking trails, and snow adventures. Ideal for explorers and nature lovers, it’s a must-visit alpine destination",
      },
      {
        src: homeImages + "/nearby/img2.webp",
        alt: "Harder Kulm",
        description:
          "a short ride from Interlaken, offers sweeping views of Lake Thun, Lake Brienz, and the mountains from its 1,322-meter height. The glass-floored platform and on-site restaurant make it a memorable spot.",
      },
      {
        src: homeImages + "/nearby/img3.webp",
        alt: "Lake Thun",
        description:
          "Lake Thun, known for its clear waters and mountain views, offers boat cruises, charming villages, and historic lakeside castles. Ideal for picnics, swimming, or relaxing, it's a perfect spot for families and couples.",
      },
      {
        src: homeImages + "/nearby/img4.webp",
        alt: "Schynige Platte",
        description:
          "Schynige Platte, accessible by cogwheel train, is known for its scenic hiking trails, alpine flora, and panoramic views of the Eiger, Mönch, and Jungfrau. It’s a perfect retreat for nature lovers and adventure seekers alike.",
      },
      {
        src: homeImages + "/nearby/img5.webp",
        alt: "St. Beatus Caves",
        description:
          "The St. Beatus Caves near Lake Thun feature limestone formations and legends of St. Beatus. Guided tours along well-kept paths reveal their geological history and natural beauty.",
      },
      {
        src: homeImages + "/nearby/img6.webp",
        alt: "Giessbach Falls",
        description:
          "Giessbach Falls, near Lake Brienz, cascades over 500 meters through lush forests. Scenic trails offer beautiful views, and the nearby historic Giessbach Hotel adds to its charm, making it ideal for a day in nature.",
      },
      {
        src: homeImages + "/nearby/img7.webp",
        alt: "Hohematte Park",
        description:
          "Located in central Interlaken, Hohematte Park is a lush green space with manicured gardens, playgrounds, and mountain views. Hosting events year-round, it’s perfect for picnics, strolls, or relaxation for all ages.",
      },
    ],
  },
  DoAtHotel: {
    title: "What you can do at the Hotel ?",
    description: "Discover Activities and Experiences at Hotel Lakeview",
    items: [
      {
        title: "Lakeside Serenity Walk",
        description:
          "Take a leisurely 3-4 km stroll around the pristine lake, where every step offers breathtaking views of the water and the majestic Alps. Perfect for unwinding or capturing the beauty of nature, this walk immerses you in tranquility",
        images: [
          homeImages + "/doathotels/img1.webp",
          homeImages + "/doathotels/img2.webp",
          homeImages + "/doathotels/img3.webp",
          homeImages + "/doathotels/img4.webp",
        ],
      },
      {
        title: "Iseltwald: A View to Remember",
        description:
          "Enjoy unparalleled views of the charming village of Iseltwald right from your balcony. Famous for its appearance in the Korean drama Crash Landing on You, this scenic spot blends natural beauty with cinematic magic",
        images: [
          homeImages + "/doathotels/img5.webp",
          homeImages + "/doathotels/img6.webp",
          homeImages + "/doathotels/img7.webp",
          homeImages + "/doathotels/img8.webp",
        ],
      },
      {
        title: "Seasonal Swimming Bliss",
        description:
          "Dive into relaxation at the swimming spot just below the hotel, open during the season. Whether you're taking a refreshing dip or lounging by the water, it's a perfect way to enjoy the lake",
        images: [
          homeImages + "/doathotels/img9.webp",
          homeImages + "/doathotels/img10.webp",
          homeImages + "/doathotels/img11.webp",
          homeImages + "/doathotels/img12.webp",
        ],
      },
      {
        title: "Fun for the Little Ones",
        description:
          "A nearby children’s park ensures younger guests have their share of fun. Equipped with swings, slides, and a safe play area, it’s an ideal spot for families to create joyful memories together",
        images: [
          homeImages + "/doathotels/img13.webp",
          homeImages + "/doathotels/img14.webp",
          homeImages + "/doathotels/img15.webp",
          homeImages + "/doathotels/img16.webp",
        ],
      },
    ],
  },
  connectivity: {
    title: "At the Heart of Connectivity",
    description:
      "Perfectly located for effortless exploration and unforgettable experiences",
    src: homeImages + "/img3.webp",
    items: [
      {
        icon: <BusIcon />,
        address: "Niederried b.I'laken, Dorf Bus Station",
        distance: "20 meters",
      },
      {
        icon: <BoatIcon />,
        address: "Niederried Ferry Terminal",
        distance: "150 Meters",
      },
      {
        icon: <TrainIcon />,
        address: "Niederried train Station",
        distance: "170 meters",
      },
      {
        icon: <PlainIcon />,
        address: "Sion Airport",
        distance: "63 Kilometers",
      },
    ],
  },
  guestreviews: {
    title: "guest reviews",
    description:
      "Discover What Makes Us a Favorite Through Our Guest Experiences",
    items: [
      {
        title: "Exceptional Service and Comfort!",
        description: `"We spent a week at Lakeview Hotel and were thoroughly impressed by the quality of service and comfort. The rooms are spacious, clean, and equipped with everything we needed. The entertainment zone was a fun addition for our family. A fantastic base for exploring Interlaken!" — Emily R.`,
      },
      {
        title: "A Hidden Gem!",
        description: `“I can't recommend Lakeview Hotel enough! The views of Lake Brienz are absolutely breathtaking, especially from the balcony of our room. The staff were incredibly welcoming and went above and beyond to make our stay memorable. The breakfast was delicious, and the location is perfect for exploring the surrounding area. We will definitely be back!" — Sarah M.`,
      },
      {
        title: "Perfect Romantic Getaway!",
        description: `"My partner and I chose Lakeview Hotel for our anniversary, and it exceeded all expectations. The serene atmosphere, combined with stunning mountain views, made for a perfect romantic escape. We loved having breakfast on our private terrace. Highly recommend for couples looking to unwind!" — James T.`,
      },
    ],
  },
  faq: {
    title: "FAQ",
    description: "Quick answers to common queries",
    item: [
      {
        id: 1,
        title: "How do I make a reservation?",
        content: `
                We offer flexible cancellation policies to help you plan your trip accordingly.
                `,
      },
      {
        id: 2,
        title: "What is the check-in and check-out time?",
        content: `
                We offer flexible cancellation policies to help you plan your trip accordingly.
                `,
      },
      {
        id: 3,
        title: "Is parking available?",
        content: `
                We offer flexible cancellation policies to help you plan your trip accordingly.
                `,
      },
      {
        id: 4,
        title: "What is the check-in and check-out time?",
        content: `
                We offer flexible cancellation policies to help you plan your trip accordingly.
                `,
      },
      {
        id: 5,
        title: "Is parking available?",
        content: `
                We offer flexible cancellation policies to help you plan your trip accordingly.
                `,
      },
    ],
  },
};

export const aboutPageData = {
  bannerData: {
    title: "Experience Serenity by Lake Brienz",
    description:
      "At Hotel Lakeview, we blend Swiss hospitality with breathtaking natural beauty for an unforgettable stay",
    src: homeImages + "/gallery/img1.webp",
    videoSrc: "",
  },
  section2: {
    title: "Our hotel",
    description:
      "Founded in [year], Hotel Lakeview has been a sanctuary for travelers seeking tranquility and adventure in the heart of Switzerland. Nestled on the shores of Lake Brienz, our hotel is built on a legacy of warm hospitality and exceptional service. We strive to create a home-away-from-home for our guests while immersing them in the awe-inspiring beauty of the Swiss Alps",
    src: aboutImages + "/img2.webp",
  },
  ourJourney: {
    title: "Our Journey",
    cards: [
      {
        id: 1,
        title: "Where it all began",
        description:
          "Hotel Lakeview opened its doors on the shores of Lake Brienz, offering guests a perfect blend of comfort and Swiss hospitality. From day one, we aimed to create unforgettable experiences surrounded by the beauty of the Swiss Alps.",
        year: "1999",
        src: aboutImages + "/img3.webp",
      },
      {
        id: 2,
        title: "Expansion and Upgrades",
        description:
          "We expanded our accommodations to include luxurious family rooms and lake-view apartments. Major renovations brought modern amenities while preserving our classic Alpine charm.",
        year: "2004",
        src: homeImages + "/gallery/img4.webp",
      },
      {
        id: 3,
        title: "Sustainability Initiatives",
        description:
          "In our commitment to nature, we adopted eco-friendly practices, including energy-efficient systems, waste reduction, and sourcing locally produced goods to support the community.",
        year: "2010",
        src: homeImages + "/img1.webp",
      },
      {
        id: 4,
        title: "Digital Transformation",
        description:
          "We launched a revamped website and introduced an easy online booking system. A live chat feature and virtual concierge service ensured seamless communication for our guests.",
        year: "2016",
        src: aboutImages + "/img4.webp",
      },
      {
        id: 5,
        title: "Award-Winning Excellence",
        description:
          "Recognized as one of the top boutique hotels in Switzerland, Hotel Lakeview earned accolades for its outstanding service, prime location, and unforgettable guest experiences.",
        year: "2024",
        src: aboutImages + "/img5.webp",
      },
    ],
  },
};

const roomCard = roomImages + "/card/img";
export const roomsPageData = {
  bannerData: {
    title: "Find Your Ideal Retreat",
    description:
      "Surrounded by warm wooden accents, soft, ambient lighting, and the serene beauty of the Swiss Alps, evenings at Hotel Lakeview offer the perfect atmosphere for relaxation, comfort, and unforgettable memories",
    src: roomImages + "/img1.webp",
  },
  roomcard: [
    {
      title: "Majestic lakeview king",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "1.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "2.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "3.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "4.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "5.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "lakeview Trio",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "6.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "7.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "8.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "9.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "10.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "lakeview studio",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "11.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "13.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "4.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "12.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "classic lakeview",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "12.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "13.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "14.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "5.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "4.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "15.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "Signature lakeview",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "17.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "18.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "19.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "Queen’s vista",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "20.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "21.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "22.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "23.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "24.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
    {
      title: "alpine retreat",
      description:
        "Welcome to Lakeview Hotel, your serene retreat in the picturesque Niederried bei Interlaken, just 7 km from the vibrant heart of Interlaken. Our hotel boasts",
      price: "$200/Day",
      images: [
        {
          src: roomCard + "25.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "26.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "27.webp",
          alt: "dsdsd",
        },
        {
          src: roomCard + "28.webp",
          alt: "dsdsd",
        },
      ],
      list: [
        "FREE WIFI",
        "BALCONY",
        "LAKE VIEW",
        "BATHTUB",
        "1 KING-SIZE BED",
        "CONDITIONER",
        "MINI-BAR",
        "FLAT-SCREEN TV",
      ],
    },
  ],
};

export const galleryPageData = {
  bannerData: {
    title: "Explore the Beauty and Charm of Hotel Lakeview Through Our Gallery",
    description:
      "Step into the tranquil elegance of Hotel Lakeview with stunning visuals that showcase its breathtaking views and warm hospitality",
    src: galleryImages + "/img1.webp",
  },
  galleryData: [
    {
      title: "Bar Lounge",
      images: [
        galleryImages + "/slider/img2.webp",
        homeImages + "/gallery/img2.webp",
        galleryImages + "/slider/img1.webp",
      ],
    },
    {
      title: "Facade",
      images: [
        aboutImages + "/img2.webp",
        homeImages + "/gallery/img4.webp",
        homeImages + "/img1.webp",
      ],
    },
    {
      title: "Reception",
      images: [
        galleryImages + "/slider/img6.webp",
        galleryImages + "/slider/img5.webp",
        galleryImages + "/slider/img4.webp",
      ],
    },
    {
      title: "Restaurant",
      images: [
        galleryImages + "/slider/img9.webp",
        galleryImages + "/slider/img8.webp",
        galleryImages + "/slider/img7.webp",
      ],
    },
  ],
};

export const contactPageData = {
  bannerData: {
    title: "Get in touch, We’re Here to Help",
    description:
      "Have questions or need assistance? Reach out to us for a seamless experience at Hotel Lakeview.",
    link: [
      {
        label: "call us now",
        href: "#",
      },
      {
        label: "Send a message",
        href: "#",
      },
    ],
  },
  reachUsDate: {
    title: "Reach us anytime",
    description: "Fill out the form below, and we’ll get back to you shortly.",
    src: contactImages + "/img1.webp",
    items: [
      {
        icon: <Location />,
        address: "Hotel Lakeview, Lake Brienz Promenade, Switzerland",
        title: "Address",
        src: "#",
      },
      {
        icon: <PhoneIcon />,
        address: "+41 44 123 45 67",
        title: "Phone Number",
        src: "tel:+41 44 123 45 67",
      },
      {
        icon: <MailIcon />,
        address: "info@lakeviewhotel.ch",
        title: "Email",
        src: "mailto:info@lakeviewhotel.ch",
      },
    ],
  },
};
