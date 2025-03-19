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
    title: "Whispers of Brienz at the Best Lakeview Hotel",
    description: "A slice of Swiss heaven crafted for dreamers, romantics, and adventure seekers alike",
    // images: [homeImages + "/Img1.png", homeImages + "/gallery/img4.webp"],
    images: [homeImages + "/Img1.png", "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/" + "banner (1).jpg",],
  },
  galleryData: {
    title: "Gallery",
    description: "Every frame, a postcard-worthy view",
    images: [
      {
        src: homeImages + "/gallery/img1.png",
        alt: "terrace",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rest2.jpg",
        alt: "lounge",
      },
      {
        src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/gallery/slider/res1.jpg",
        alt: "Restaurant",
      },
      {
        src: homeImages + "/gallery/img4.png",
        alt: "facade",
      },
      {
        src: homeImages + "/gallery/img5.png",
        alt: "lake view",
      },
      {
        src: homeImages + "/gallery/img7.png",
        alt: "balcony",
      },
      {
        src: homeImages + "/gallery/img6.png",
        alt: "bedroom",
      },
    ],
  },
  roomsData: {
    title: "Rooms",
    description:
      "Whether you’re a solo adventurer, a dreamy couple, or a happy family, we’ve got the perfect space for you to make memories that linger long after check-out",
    subDescription:
      "Choose from a range of beautifully designed rooms and suites, each offering comfort, modern amenities, and breathtaking views of Lake Brienz",
    images: [

      {
        src: homeImages + "/rooms/img3.png",
        alt: "Majestic lakeview king",
      },
      {
        src: homeImages + "/rooms/img5.png",
        alt: "Queen’s vista",
      },
      {
        src: homeImages + "/rooms/img4.png",
        alt: "Alpine retreat",
      },
      {
        src: homeImages + "/rooms/img7.png",
        alt: "Lakeview studio",
      },
      {
        src: homeImages + "/rooms/img1.png",
        alt: "Signature Lake View",
      },
      {
        src: homeImages + "/rooms/img6.png",
        alt: "Lakeview trio",
      },
      {
        src: homeImages + "/rooms/img2.png",
        alt: "Classic Lake View",
      },
      // {
      //   src: "",
      //   alt: "",
      // },
    ],
  },
  amenitiesData: {
    title: "Amenities",
    description: "Thoughtful touches, endless delight",
    items: [
      {
        icon: homeImages + "/amenities/CarProfile.png",
        title: "Free Parking Without Reservation",
        description:
          "Arrive stress-free with spacious front and back parking areas, designed to accommodate every guest with ease and comfort.",
        src: aboutImages + "/img2.webp",
        color: "#FAE3AF",
      },
      {
        icon: homeImages + "/amenities/PicnicTable.png",
        title: "Breakfast",
        description:
          "Start your day the right way. Our continental breakfast buffet is packed with fresh, locally-sourced flavors to fuel your adventures ahead",
        src: homeImages + "/amenities/IM1.png",
        color: "#D8D6D7",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Entertainment Lounge",
        description:
          "Relax, recharge, and enjoy. Whether you’re into games, books, or just good conversations under the glow of Swiss hospitality",
        src: homeImages + "/gallery/img2.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/Eye.png",
        title: "Private Balcony/Terrace",
        description:
          "Take in the views—Lake Brienz, the Swiss Alps, and a whole lot of serenity. Unwind with a book, or sip your favorite drink while nature does the rest",
        src: homeImages + "/gallery/img1.webp",
        color: "#CE905F",
      },
      {
        icon: homeImages + "/amenities/WifiHigh.png",
        title: "Free WiFi",
        description:
          "Stay as connected as you want. Our high-speed WiFi ensures you can stay in touch with what matters, while you’re living your best Swiss life",
        src: homeImages + "/amenities/IM2.png",
        color: "#E0E7E9",
      },
      {
        icon: homeImages + "/amenities/SmileyWink.png",
        title: "Entertainment Lounge",
        description:
          "Relax, recharge, and enjoy. Whether you’re into games, books, or just good conversations under the glow of Swiss hospitality",
        src: homeImages + "/gallery/img2.webp",
        color: "#E7CBCE",
      },
      {
        icon: homeImages + "/amenities/ChefHat.png",
        title: "Common Kitchen",
        description:
          "Feel at home with our fully-equipped common kitchen. Whether you’re cooking up a storm or just storing snacks, it’s your space to enjoy",
        src: homeImages + "/amenities/IM3.png",
        color: "#B9BDA7",
      },
    ],
  },
  nearbyattractions: {
    title: "nearby attractions",
    description: "Explore Nearby Natural Wonders",

    images: [
      {
        src: homeImages + "/nearby/IMG1.png",
        alt: "Jangfrau",
        des: "An alpine journey to towering peaks",
        description:
          "Jungfrau, renowned for its towering peaks and stunning vistas, features scenic train rides, hiking trails, and snow adventures. Ideal for explorers and nature lovers, it’s a must-visit alpine destination",
      },
      {
        src: homeImages + "/nearby/IMG2.png",
        alt: "Harder Kulm",
        des: "The roof of Interlaken with panoramic views.",
        description:
          "a short ride from Interlaken, offers sweeping views of Lake Thun, Lake Brienz, and the mountains from its 1,322-meter height. The glass-floored platform and on-site restaurant make it a memorable spot.",
      },
      {
        src: homeImages + "/nearby/IMG3.png",
        alt: "Lake Thun",
        des: "Tranquility on turquoise waters",
        description:
          "Lake Thun, known for its clear waters and mountain views, offers boat cruises, charming villages, and historic lakeside castles. Ideal for picnics, swimming, or relaxing, it's a perfect spot for families and couples.",
      },
      {
        src: homeImages + "/nearby/IMG4.png",
        alt: "Schynige Platte",
        des: "A floral paradise above the clouds",
        description:
          "Schynige Platte, accessible by cogwheel train, is known for its scenic hiking trails, alpine flora, and panoramic views of the Eiger, Mönch, and Jungfrau. It’s a perfect retreat for nature lovers and adventure seekers alike.",
      },
      {
        src: homeImages + "/nearby/IMG5.png",
        alt: "St. Beatus Caves",
        des: "Whispers of legends in limestone chambers",
        description:
          "The St. Beatus Caves near Lake Thun feature limestone formations and legends of St. Beatus. Guided tours along well-kept paths reveal their geological history and natural beauty.",
      },
      {
        src: homeImages + "/nearby/IMG6.png",
        alt: "Giessbach Falls",
        des: "Cascading beauty amidst lush forests",
        description:
          "Giessbach Falls, near Lake Brienz, cascades over 500 meters through lush forests. Scenic trails offer beautiful views, and the nearby historic Giessbach Hotel adds to its charm, making it ideal for a day in nature.",
      },
      {
        src: homeImages + "/nearby/IMG7.png",
        alt: "Hohematte Park",
        des: "A vibrant green canvas in Interlaken’s heart",
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
          homeImages + "/doathotels/IMG1.png",
          homeImages + "/doathotels/IMG2.png",
          homeImages + "/doathotels/IMG3.png",
          homeImages + "/doathotels/IMG4.png",
        ],
      },
      {
        title: "Iseltwald: A View to Remember",
        description:
          "Enjoy unparalleled views of the charming village of Iseltwald right from your balcony. Famous for its appearance in the Korean drama Crash Landing on You, this scenic spot blends natural beauty with cinematic magic",
        images: [
          homeImages + "/doathotels/IMG5.png",
          homeImages + "/doathotels/IMG6.png",
          homeImages + "/doathotels/IMG7.png",
          homeImages + "/doathotels/IMG8.png",
        ],
      },
      {
        title: "Seasonal Swimming Bliss",
        description:
          "Dive into relaxation at the swimming spot just below the hotel, open during the season. Whether you're taking a refreshing dip or lounging by the water, it's a perfect way to enjoy the lake",
        images: [
          homeImages + "/doathotels/IMG9.png",
          homeImages + "/doathotels/IMG10.png",
          homeImages + "/doathotels/IMG11.png",
          homeImages + "/doathotels/IMG12.png",
        ],
      },
      {
        title: "Fun for the Little Ones",
        description:
          "A nearby children’s park ensures younger guests have their share of fun. Equipped with swings, slides, and a safe play area, it’s an ideal spot for families to create joyful memories together",
        images: [
          homeImages + "/doathotels/IMG13.png",
          homeImages + "/doathotels/img14.webp",
          homeImages + "/doathotels/IMG15.png",
          homeImages + "/doathotels/IMG16.png",
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
        distance: "20 meters ,🚶 1 min",
      },
      {
        icon: <BoatIcon />,
        address: "Niederried Ferry Terminal",
        distance: "300 Meters, 🚶 5 mins approx",
      },
      {
        icon: <TrainIcon />,
        address: "Niederried train Station",
        distance: "170 meters, 🚶 2-3 mins approx",
      },
      {
        icon: <PlainIcon />,
        address: "Zurich Airport / Bern Airport",
        distance: "79 M, 🚗 1 hr 46 min / 36 M, 🚗 49 mins",
      },
    ],
  },
  guestreviews: {
    title: "guest reviews",
    description:
      "Don’t Take Our Word for It—Hear What Our Guests Have to Say!",
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
        title: "What time is check-in and check-out?",
        content: `
                Check-in from 14:00 PM; check-out by 10:00 AM – we’ll be waiting with a smile!
                `,
      },
      {
        id: 2,
        title: "Are pets allowed at ORA Lake View?",
        content: `
               Furry friends are welcome! Just let us know before your arrival
                `,
      },
      {
        id: 3,
        title: "How far is the hotel from Interlaken?",
        content: `
                Only 7 km – close enough for adventure, far enough for tranquility
                `,
      },
      {
        id: 4,
        title: "Do rooms include lake or mountain views?",
        content: `
                Yes, all our rooms feature picturesque views of Lake Brienz except Alpine retreat they have partial lakeview and/or the Swiss Alps
                `,
      },
      {
        id: 5,
        title: "Is there public transport nearby?",
        content: `
                Yes, regular buses and trains connect you to Interlaken and beyond, just steps from the hotel
                `,
      },
      {
        id: 6,
        title: "What’s the best way to reach ORA Lake View?",
        content: `
                Whether you’re arriving by car, train, or boat, we’re easy to find. And did we mention the journey itself is half the charm
                `,
      },
      {
        id: 7,
        title: "Can I plan a romantic getaway at ORA Lake View?",
        content: `
                Oh, absolutely! Picture private balconies, candlelit dinners, and views that scream romance. Let us help you create those unforgettable moments
                `,
      },
      {
        id: 8,
        title: "Can I cook my meals in the common kitchen?",
        content: `
                Not quite! Our kitchen is equipped for quick fixes—think reheating or prepping snacks with basic utilities and a microwave. For full meals, we recommend exploring the delightful Swiss eateries nearby
                `,
      },
    ],
  },
};

export const aboutPageData = {
  bannerData: {
    title: "Timeless Swiss Charm, Lakeside Dreams",
    description:
      "Experience Swiss charm, lake views, and modern elegance— with every dawn and dusk",
    src: homeImages + "/gallery/img1.webp",
    videoSrc: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/home/videoplayback.mkv",
  },
  section2: {
    title: "Know Your Hotel",
    description:
      "Almost half a century ago, inspired by the shimmering Lake Brienz and cradled by the majestic Swiss Alps, a Swiss couple envisioned a haven that mirrored their deep love for the land and its timeless beauty. ORA Lake View became their labor of love—The couple, whose hearts are firmly anchored in Swiss tradition, brought their love for their native country into every area of the hotel, providing visitors with a genuine experience of Swiss friendliness and warmth. Today, their legacy endures in every corner of the hotel, where history embraces the present, and guests are welcomed like cherished friends into a tale of romance, heritage, and elegance",
    src: aboutImages + "/IMAGE2.png",
  },
  ourJourney: {
    title: "Our Journey",
    cards: [
      {
        id: 1,
        title: "The Beginning of Something Special",
        description:
          "By the peaceful shores of Interlaken, a hidden gem was born in 1974. From the moment the first guests arrived, the property offered more than just a stay - it offered a feeling. A feeling of calm, of being connected to nature, and of escaping to a place where the beauty of the Swiss Alps and the tranquil lake were always just outside your window",
        year: "1974",
        src: aboutImages + "/IMAGE3.png",
      },
      {
        id: 2,
        title: "A Heartfelt Transformation",
        description:
          "In 1988, a renovation breathed new life into the hotel, blending modern comfort with the stunning surroundings. This wasn’t just about upgrading a building - it was about deepening the connection between the space and the landscape. Guests now found even more ways to relax, reflect, and indulge in the breathtaking views, making every stay unforgettable",
        year: "1988",
        src: homeImages + "/gallery/img4.webp",
      },
      {
        id: 3,
        title: "A Vision Realized",
        description:
          "When new owners took the reins in 2015, they infused the hotel with a new energy - one that honored its roots while embracing the needs of the modern traveler. The aim was simple: to create not just a hotel, but a sanctuary. Here, the spirit of Interlaken - raw, beautiful, and tranquil - was brought into every corner of the experience, creating a place where guests felt at home and at peace",
        year: "2015",
        src: homeImages + "/img1.webp",
      },
      {
        id: 4,
        title: "A Rebirth of Elegance",
        description:
          "In 2019, the hotel underwent a complete reimagining. The addition of a spacious terrace, luxurious living areas, and three (Four )new apartment rooms elevated the experience to new heights. It became a place to truly live the moment, savor the lake views, and enjoy the perfect blend of nature and luxury. It was no longer just a hotel - it was an experience, carefully crafted for those seeking something extraordinary",
        year: "2019",
        src: aboutImages + "/IMAGE4.png",
      },
      // {
      //   id: 5,
      //   title: "Award-Winning Excellence",
      //   description:
      //     "Recognized as one of the top boutique hotels in Switzerland, Hotel Lakeview earned accolades for its outstanding service, prime location, and unforgettable guest experiences.",
      //   year: "2024",
      //   src: aboutImages + "/IMAGE5.png",
      // },
    ],
  },
};

const roomCardNew = roomImages + "/card/Img";
const roomDirect = roomImages + "/card/";
export const roomsPageData = {
  bannerData: {
    title: "Find Your Ideal Retreat",
    description:
      "Surrounded by warm wooden accents, soft, ambient lighting, and the serene beauty of the Swiss Alps, evenings at Hotel Lakeview offer the perfect atmosphere for relaxation, comfort, and unforgettable memories",
    src: roomImages + "/img1.webp",
  },
  roomcard: [
    {
      title: "Majestic Lakeview King-33sq metres",
      description:
        "With a sprawling king-size bed and sweeping views of Lake Brienz and the Swiss Alps, this room invites you to unwind and indulge in the luxury of space. Perfect for those who crave a balance of comfort and nature",
      price: "$200/Day",
      images: [
        {
          src: roomCardNew + "1.png",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "mej2.jpg",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "mej3.jpg",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "7STD4053.jpg",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "bath.jpg",
          alt: "dsdsd",
        },

        // {
        //   src: roomCardNew + "3.png",
        //   alt: "dsdsd",
        // },
        {
          src: roomDirect + "7STD4054.jpg",
          alt: "dsdsd",
        },
        // {
        //   src: roomCardNew + "5.png",
        //   alt: "dsdsd",
        // },
        {
          src: roomDirect + "7STD4055.jpg",
          alt: "dsdsd",
        },
      ],
      list: [
        "Free wifi",
        "Terrace access with Lakeview",
        "Bathtub for ultimate relaxation",
        "1 king-size bed",
        "mini-bar",
        "flat-screen TV",
      ],
    },
    {
      title: "Queen’s Vista-40 sq metres",
      description:
        "Treat yourself to a royal stay at Queen’s Vista, where sweeping views of the Swiss Alps and Lake Brienz set the stage for an unforgettable getaway. Designed with elegance and comfort in mind, this room combines traditional Swiss luxury with modern amenities",
      price: "$200/Day",
      images: [
        // {
        //   src: roomCardNew + "20.png",
        //   alt: "dsdsd",
        // },
        {
          src: roomDirect + "7STD4064.jpg",//
          alt: "dsdsd",
        },
        // {
        //   src: roomCardNew + "22.png",
        //   alt: "dsdsd",
        // },

        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "queen1.jpg",
          alt: "dsdsd",
        },

        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "queen.jpg",
          alt: "dsdsd",
        },
        {
          src: "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rooms/card/" + "queen2.jpg",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "7STD4065.jpg",//
          alt: "dsdsd",
        },
        {
          src: roomDirect + "7STD4066.jpg",//
          alt: "dsdsd",
        },

      ],
      list: [
        "Free wifi",
        "External Terrace access for lakeview",
        "Bathtub",
        "1 queen-size bed",
        "mini-bar",
        "flat-screen TV",
      ],
    },
    {
      title: "Alpine Retreat-33 sq metres",
      description:
        "For those who seek peace, privacy, and unmatched mountain beauty, the Alpine Retreat is the ideal choice. After a day of hiking or exploring Interlaken, return to your sanctuary to relax in comfort and style",
      price: "$200/Day",
      images: [
        {
          src: roomDirect + "4E1A7889.JPG",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "4E1A7893.JPG",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "4E1A7897.JPG",
          alt: "dsdsd",
        },
      ],
      list: [
        "Balcony with stunning alpine views",
        "External Terrace access for lakeview",
        "Ensuite Bathroom",
        "1 king-size bed",
        "mini-bar",
        "flat-screen TV",
      ],
    },
    {
      title: "Lakeview Studio-22 sq metres",
      description:
        "Sleek and stylish, the Lakeview Studio room offers the ideal balance between contemporary design and Swiss natural beauty. Perfect for solo travelers or couples looking for a simple yet luxurious stay",
      price: "$200/Day",
      images: [
        {
          src: roomDirect + "LS2.jpeg",
          alt: "dsdsd",
        }, {
          src: roomDirect + "LS1.jpeg",
          alt: "dsdsd",
        }, {
          src: roomDirect + "LS3.jpeg",
          alt: "dsdsd",
        }, {
          src: roomDirect + "LS4.jpeg",
          alt: "dsdsd",
        }, {
          src: roomDirect + "LS5.png",
          alt: "dsdsd",
        },
      ],
      list: [
        "free wifi",
        "Balcony with stunning lake view",
        "Ensuite bathroom",
        "mini-bar",
        "flat-screen TV",
        "Kitchenette"
      ],
    },
    {
      title: "Signature Lakeview-28 sq metres",
      description:
        "The Signature Lakeview room epitomizes understated luxury and Swiss charm. With its elegant design and breathtaking views of Lake Brienz, this room is perfect for those who want to experience the finest that ORA Lake View has to offer",
      price: "$200/Day",
      images: [
        // {
        //   src: roomCardNew + "17.png",
        //   alt: "dsdsd",
        // },

        {
          src: roomDirect + "4E1A7998.jpg",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "4E1A7903.JPG",
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "18.png",
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "5.png",
          alt: "dsdsd",
        },
        
        // {
        //   src: roomCard + "30.jpg",
        //   alt: "dsdsd",
        // },
        // {
        //   src: roomCardNew + "19.png",
        //   alt: "dsdsd",
        // },
      ],
      list: [
        "free wifi",
        "Balcony with spectacular lake views",
        "02 Single beds & can be attached for Double occupancy as per request",
        "Ensuite bathroom",
        "mini-bar",
        "flat-screen TV",
      ],
    },
    {
      title: "Lakeview Trio-28 sq metres",
      description:
        "For those who enjoy the company of loved ones or seek extra space, the Lakeview Trio room is designed just for you. With 3 single-beds and a versatile, chic layout, this room offers comfort and style in equal measure",
      price: "$200/Day",
      images: [
        {
          src: roomCardNew + "6.png",
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "7.png",//
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "8.png",//
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "9.png",//
          alt: "dsdsd",
        },
        {
          src: roomCardNew + "10.png",//
          alt: "dsdsd",
        },
      ],
      list: [

        "Free wifi",
        "Balcony with panoramic",
        "lake views",
        "Ensuite bathroom",
        "mini-bar",
        "flat-screen TV",
      ],
    },

    {
      title: "Classic Lakeview-22 sq metres",
      description:
        "The Classic Lakeview room invites you to experience the timeless beauty of Lake Brienz in a cozy, stylish setting. Designed for those who appreciate the finer things in life, this room is a peaceful haven to recharge",
      price: "$200/Day",
      images: [
        {
          src: roomDirect + "4E1A7841.JPG",
          alt: "dsdsd",
        },
        // {
        //   src: roomCardNew + "13.png",
        //   alt: "dsdsd",
        // },
        // {
        //   src: roomCardNew + "14.png",
        //   alt: "dsdsd",
        // },
        {
          src: roomDirect + "4E1A7844.JPG",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "4E1A7842.jpeg",
          alt: "dsdsd",
        },
        {
          src: roomDirect + "4E1A7843.jpeg",
          alt: "dsdsd",
        },
      ],
      list: [
        "free wifi",
        "Balcony with lake view",
        "02 Single beds attached",
        "Ensuite bathroom",
        "mini-bar",
        "flat-screen TV",
      ],
    },



  ],
};

export const galleryPageData = {
  bannerData: {
    title: "No need to photoshop your way out of life!",
    description:
      "Let every image transport you to a world of elegance, where nature’s beauty and comfort meet in perfect harmony",
    src: galleryImages + "/img1.webp",
  },
  galleryData: [
    {
      title: "Bar Lounge",
      images: [
        // galleryImages + "/slider/img2.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/rest2.jpg",
        homeImages + "/gallery/img2.webp",
        galleryImages + "/slider/img1.webp",
      ],
    },
    {
      title: "Facade",
      images: [
        // aboutImages + "/img2.webp",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/FAC.jpg",
        "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/ora-lake-view/banner+(1).jpg",
        homeImages + "/img1.webp",
      ],
    },
    {
      title: "Reception",
      images: [
        galleryImages + "/slider/img6.webp",
        galleryImages + "/slider/img5.webp",
        // galleryImages + "/slider/img4.webp",
        galleryImages + "/slider/174704837.jpg",
      ],
    },
    {
      title: "Restaurant",
      images: [
        galleryImages + "/slider/res.jpg",
        galleryImages + "/slider/res1.jpg",
        // galleryImages + "/slider/img9.webp",
        // galleryImages + "/slider/img8.webp",
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
        label: "call us",
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
