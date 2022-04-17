"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "posts",
      [
        {
          postName: "Tamagotchi",
          releaseDate: "1990",
          description: "Best thing to have while waiting at the Dr.'s office.",
          images:
            "https://m.media-amazon.com/images/I/819ZUKGJraS._AC_SX425_.jpg",
          likes: 31,
          userId: 1,
        },
        {
          postName: "Lava Lamp",
          releaseDate: "1990",
          description: "Sets the mood!",
          images:
            "https://target.scene7.com/is/image/Target/GUEST_540f59a6-44d3-4f76-b5a2-b0c4fc75a81f?wid=488&hei=488&fmt=pjpeg",
          likes: 3,
          userId: 2,
        },
        {
          postName: "Easy Bake Oven",
          releaseDate: "1963",
          description:
            "The original Easy-Bake Oven was invented in 1963, but it became all the rage in the 90s when it was rereleased by Hasbro. Kids may be starring on the Food Network in shows like “Kids Baking Championship” and “Kids Cookoff,” but there’s still something timeless about this retro 90s toy.",
          images: "https://i.ebayimg.com/images/g/wzcAAOSwwllgzBxj/s-l300.jpg",
          likes: 13,
          userId: 3,
        },
        {
          postName: "Walkie-Talkie",
          releaseDate: "1941",
          description:
            "The first handheld walkie-talkie was the AM SCR-536 transceiver from 1941, also made by Motorola, named the Handie-Talkie (HT). This popular 90s toy originated in the 1940s and was used during the Second World War. In the 80’s, the first official “walkie talkie” by Fisher Price became popularized for contemporary use. Once the 90s hit, the walkie talkie was still considered a favorite spy toy to play with. ",
          images:
            "https://i.pinimg.com/originals/ef/68/3b/ef683b0bc6c22e28726062c64fa79d12.jpg",
          likes: 9,
          userId: 4,
        },
        {
          postName: "Game Boy",
          releaseDate: "Sept 28, 1990",
          description: "Handle held gaming device. Comes in multiple colors",
          images:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/analogue-pocket-4-1639157118.jpg?crop=1.00xw:0.669xh;0.00160xw,0.132xh&resize=1200:*",
          likes: 2,
          userId: 5,
        },
        {
          postName: "Pogs",
          releaseDate: 1991,
          description:
            'Players make a stack of these caps, and take turns to drop a heavier "slammer" object onto it, causing the caps to be disrupted.',
          images:
            "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2016/08/pokemon-pogs-080416.jpg",
          likes: 6,
          userId: 3,
        },
        {
          postName: "Retro Transparent Phone ",
          releaseDate: "1990s",
          description: "Clear corded phone with colorful hardware",
          images:
            "https://images.fatherly.com/wp-content/uploads/2022/02/klosterman-90s-cover-crop.jpg?q=65&enable=upscale&w=1200",
          likes: 6,
          userId: 2,
        },
        {
          postName: "Bop It ",
          releaseDate: "1996",
          description:
            "Bop It was a handheld electronic toy that first came out in 1996, but is so popular that new and improved versions are still on the shelves today. The original game came with just three instructions: bop it, twist it and pull it and you could compete against yourself, or others for the highest score.",
          images:
            "https://upload.wikimedia.org/wikipedia/commons/b/bc/Bop_it.jpg",
          likes: 9,
          userId: 1,
        },
        {
          postName: "Hungry Hungry Hippos",
          releaseDate: "1978",
          description:
            "Hungry Hungry Hippos was one of the best real-life multiplayer games of the 90s and was super addictive. Players had to move their hippos head forward in order to eat as many of the plastic balls as possible. The person with the most balls at the end of the game was the hippo champion, or the fullest hippos something along those lines.",
          images:
            "https://retrododo.com/wp-content/uploads/2020/11/hungry-hippos.jpg",
          likes: 7,
          userId: 4,
        },
        {
          postName: "pokemon",
          releaseDate: "1996",
          description:
            "pokemon cards are a collection and a game played where you battle other opponents on a one on one card pokemon battle",
          images:
            "https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2016/09/20/1331818966444_2/pok%C3%A9mon-super-mystery-dungeon",
          likes: 6,
          userId: 1,
        },
        {
          postName: "Skip it",
          releaseDate: "1980 but wasnt popular till the 1990s",
          description:
            "The Skip-It apparatus was designed to be affixed to the childs ankle via a small plastic hoop and spun around in a 360 degree rotation while continuously skipped by the user",
          images:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2ZnHo7cKKWugBWaFXMeHf4KXWn-v7nLclGoIK7HcDKnMy1fJy3BPT-ZO47J0raNQNlM&usqp=CAU",
          likes: 4,
          userId: 2,
        },
        {
          postName: "BlockBuster Video",
          releaseDate: "Oct 19, 1985",
          description:
            "was an American-based provider of home movie and video game rental services. Back in the day when we had to go to the store to rent movies",
          images:
            "https://www.giantfreakinrobot.com/wp-content/uploads/2021/03/blockbuster-video-logo.png",
          likes: "9",
          userId: "4",
        },
        {
          postName: "AOL instant messenger",
          releaseDate: "may 1997",
          description:
            "AIM was popular by the late 1990s, in United States and other countries, and was the leading instant messaging application in that region into the following decade. Teens and college students were known to use the messengers away message feature to keep in touch with friends",
          images:
            "https://assets-global.website-files.com/6179a66d5f9cc70024c61878/6179a66e5f9cc70024c6ce53_is-aol-still-around2%20(1)%20(1).jpeg",
          likes: 22,
          userId: 1,
        },
        {
          postName: "Furby",
          releaseDate: "1998",
          description:
            "Furby is an American electronic robotic toy that was originally released in 1998 by Tiger Electronics. It resembles a hamster or owllike creature",
          images:
            "https://elephant.art/wp-content/uploads/2020/02/furby-photo3-full-hasbro.jpg",
          likes: 14,
          userId: 3,
        },
        {
          postName: "Lite Brite",
          releaseDate: "1967 popular in the 1990s",
          description:
            "consists of a light box with small colored plastic pegs that fit into a panel and illuminate to create a lit picture",
          images:
            "https://m.media-amazon.com/images/I/712A6lu3wuL._AC_SX425_.jpg",
          likes: 6,
          userId: 4,
        },
        {
          postName: "The macarena",
          releaseDate: "1993",
          description:
            'Macarena" is a Spanish dance song by Latin pop duo Los del Río, about a woman of the same name.',
          images:
            "https://cdn.mos.cms.futurecdn.net/8ZzPEVZ92vbfAgEKn8bxRK-1200-80.jpg",
          likes: 6,
          userId: 5,
        },
        {
          postName: `N'SYNC`,
          releaseDate: "1995",
          description: " was an American boy band ",
          images:
            "https://m.media-amazon.com/images/I/71kl8o4vFpL._SL1101_.jpg",
          likes: 100,
          userId: 4,
        },
        {
          postName: "Backstreet Boys",
          releaseDate: "1993",
          description: "American boy Band",
          images:
            "https://upload.wikimedia.org/wikipedia/en/0/07/Everybodyuscover.jpg",
          likes: 10,
          userId: 2,
        },
        {
          postName: "Friends",
          releaseDate: "september 22, 1994",
          description:
            "Tv show about six friends in their 20s and 30s who live in Manhattan, New York City.",
          images:
            "https://cdn.vox-cdn.com/thumbor/sK3gMTENF_LR1DhAUl9e3V_5jC4=/0x0:2592x2017/1200x800/filters:focal(1089x801:1503x1215)/cdn.vox-cdn.com/uploads/chorus_image/image/65282724/friendscast.0.0.1429818191.0.jpg",
          likes: 32,
          userId: 1,
        },
        {
          postName: "Being Slimed",
          releaseDate: "popular in 1990s",
          description:
            "green semi-viscous substance that has been synonymous with Nickelodeon since its introduction on You Cant Do That On Television.",
          images:
            "https://static.onecms.io/wp-content/uploads/sites/9/2017/08/nickelodeon-slime-edible-blog0817.jpg",
          likes: 2,
          userId: 2,
        },
        {
          postName: "The Oregon Trail",
          releaseDate: "1974 by was at its height in 1995",
          description:
            "The Oregon Trail is a series of educational computer games",
          images:
            "https://www.giantfreakinrobot.com/wp-content/uploads/2021/10/oregon-trail-e1634942600824.jpeg",
          likes: 8,
          userId: 2,
        },
        {
          postName: "The Amanda Show",
          releaseDate: "1999",
          description:
            "The Amanda Show is an American live action sketch comedy and variety show ",
          images:
            "https://m.media-amazon.com/images/I/71lXk40Q3oL._SL1000_.jpg",
          likes: 6,
          userId: 3,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete("users", null, {});
  },
};
