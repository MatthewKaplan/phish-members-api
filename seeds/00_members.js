exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("member")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("member").insert([
        {
          member: "Trey Anastasio",
          date_of_birth: "September 30, 1964",
          born: "Fort Worth, Texas",
          side_projects:
            "Trey Anastasio Band, Trey Anastasio Trio, Ghosts of the Forest",
          image: "https://i.imgur.com/bde0mQu.jpg",
          also_known_as:
            "Big Red, the Bad Lieutenant, Giuseppe, The Skinny Guinea, Troy, Matt Altaro",
          instruments: "Lead guitarist and vocals for Phish"
        },
        {
          member: "Jon Fishman",
          date_of_birth: "February 19, 1965",
          born: "Philadelphia, Pennsylvania",
          side_projects: "Touchpants, Ghosts of the Forest",
          image: "https://i.imgur.com/ytHC04G.jpg",
          also_known_as:
            "Fish, Princess, Henrietta, Bob Weaver, Morton Charlton Heston, Tubbs, Sarah, Moses Brown, Showboat Gertrude, Tommy Dorsey, Greasy Fizeek, the Wolfman's brother, The Noble Steed, Friar Tuck, Little Beast boy, Moses, Don Hellmann, The Man Mulcahey",
          instruments: "Drummer for Phish"
        },
        {
          member: "Mike Gordon",
          date_of_birth: "June 3, 1965",
          born: "Sudbury, Massachusetts",
          side_projects: "Mike Gordon Band",
          image: "https://i.imgur.com/QyUmPeN.jpg",
          also_known_as:
            "Cactus, Michael “Soft G” Gordon, Gacht, Gactin, Toidler and Ta-a.",
          instruments: "Bass player for Phish"
        },
        {
          member: "Page McConnell",
          date_of_birth: "May 17, 1963",
          born: "Philadelphia, Pennsylvania",
          side_projects: "Vida Blue",
          image: "https://i.imgur.com/sgOQOUN.jpg",
          also_known_as: "The Chairman of the Boards, Leo",
          instruments: "Keyboardist for Phish"
        }
      ]);
    });
};
