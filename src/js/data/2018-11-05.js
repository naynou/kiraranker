/* global dataSet */
/* eslint-env es6 */
/* eslint-disable */
dataSetVersion = "2018-11-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Original", tooltip: "feat. salt", key: "kirara", checked: false},
      { name: "Hidamari Sketch", tooltip: "aka nutbladder grills", key: "wide" },
      { name: "Gakkou Gurashi", tooltip: "spoiler: there is (no) hope", key: "gg" },
      { name: "A Channel", tooltip: "suki tooru~~", key: "achan" },
      { name: "Yuyushiki", tooltip: "yui's harem", key: "yys" },
      { name: "Kin`iro Mosaic", tooltip: "dess", key: "km" },
      { name: "New Game!", tooltip: "ganbaruzoi", key: "ng" },
      { name: "Stella no Mahou", tooltip: "notNewGame, also Teru being Teru", key: "snm" },
      { name: "Urara Meirochou", tooltip: "feat. bellies and Nono being bullied(?)", key: "urara" },
      { name: "Kill Me Baby", tooltip: "the most philosophical slapstick of all time", key: "kmb" },
      { name: "Sakura Trick", tooltip: "me: *drunk on dat gay shit*", key: "gay" },
      { name: "Blend S", tooltip: "a reminder that Hideri's CV is essentially Nico and you are gay", key: "blends" },
      { name: "Slow Start", tooltip: "for once it's not a protag's harem", key: "ss" },
      { name: "Yuru Camp", tooltip: "camp s h i y o", key: "yc" },
      { name: "Yumekui Merry", tooltip: "wait this is Kirara?!", key: "merry" },
      { name: "Ha na ya ma ta", tooltip: "paato paato the dramafes", key: "hana" },
      { name: "Comic Girls", tooltip: "abababa", key: "comiga" },
      { name: "Anne Happy", tooltip: "the kirara that describes you", key: "anhapi" },
      { name: "Haruka na Recieve", tooltip: "haikyu, but fappable and always beach episode", key: "haruka"},
      { name: "K-ON!", tooltip: "KyoAni cashcow about cute girls not trying to do band things", key: "htt"},
      { name: "Koufuku Grafitti", tooltip: "Souma's grandma", key: "foodgasm"},
      { name: "Acchi Kocchi", tooltip: "This animu gave me diabetes", key: "acchi"},
      { name: "Gochuumon Usagi desu ka?", tooltip: "civil war: cawfee VS gween tea", key: "rabbits" },
      { name: "Wakaba＊Girl", tooltip: "ping pong grils", key: "wakaba" },
      { name: "Anima Yell", tooltip: "not love live sunshine, mc is also not bakachika", key: "anima" },
      { name: "Sansha Sanyou", tooltip: "everyone's dying grandma feat. ex-ojou-chan", key: "3leaves"}
    ]
  },
  {
    name: "Filter by Availability",
    key: "when",
    tooltip: "Check this to restrict to characters that appear in the game.",
    checked: false,
    sub: [
        { name: "In-Game", key: "in" },
        { name: "Soon.tm", tooltip: "aka datamined", key: "soon" },
        { name: "Never.tm", key: "never" }
    ]
  },
  {
    name: "Filter by Importance",
    key: "status",
    tooltip: "Okay, seriously, I have an actual standard for this.",
    checked: true,
    sub: [
        { name: "Main Cast", key: "main", tooltip: "By definition, she appears in at least 33% of all chapters after his/her debut."},
        { name: "Game Cast", key: "game", tooltip: "She\'d normally be less than a recurring character, but if she's in the game, she has to be either a fan favorite or an important character!"},
        { name: "Rival", key: "anta", tooltip: "She appears in at least one major arc as a foil / rival / enemy."},
        { name: "Recurring", key: "recur", tooltip: "She appears in at least 10% of all chapters after his/her debut."},
        { name: "Non-Recurring", key: "side", tooltip: "She only appears in one arc after debut, and for the rest of the manga / anime, she is absent. Also, all characters that do not fit the criteria for recurring also fit here.", checked: false}
    ]
  },
  {
    name: "No Traps",
    key: "trap",
    checked: false,
    tooltip: "Check this to remove Hideri (and others?), because (s)he's ranked ??? in your heart."
  },
  {
    name: "No non-Anime charas",
    key: "nonanimu",
    checked: true,
    tooltip: "Check this to remove Omi, you heartless bastard."
  }
];

dataSet[dataSetVersion].characterData = [
  // Hidamari Sketch
  {
    name: "Yuno",
    img: "https://i.imgur.com/5l2Ekoc.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2018"]
    }
  },
  {
    name: "Miyako",
    img: "https://i.imgur.com/ftrtMk5.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Hiro",
    img: "https://i.imgur.com/WHJzb50.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Sae",
    img: "https://i.imgur.com/TUVJgMh.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nori",
    img: "https://i.imgur.com/F0ToNFe.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nazuna",
    img: "https://i.imgur.com/chPqUyM.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yoshinoya",
    img: "https://i.imgur.com/HQ585oP.png",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Matsuri",
    img: "https://i.imgur.com/sbKhIbT.jpg",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },


  // Yuyushiki
  {
    name: "Yuzuko Nonohara",
    img: "https://i.imgur.com/L0NW5TO.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yui Ichii",
    img: "https://i.imgur.com/cgAG4bf.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yukari Hinata",
    img: "https://i.imgur.com/qaIc7uo.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yoriko Matsumoto",
    img: "https://i.imgur.com/GP5t5Eb.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Chiho Aikawa",
    img: "https://i.imgur.com/JcVdm7T.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Fumi Hasegawa",
    img: "https://i.imgur.com/CKkoeBm.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Kei Okano",
    img: "https://i.imgur.com/Vgd0EYl.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },


  // Gakkou Gurashi
  {
    name: "Yuki Takeya",
    img: "https://i.imgur.com/92TcgbJ.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit", "ssr"]
    }
  },
  {
    name: "Kurumi Ebisuzawa",
    img: "https://i.imgur.com/vllHhFw.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Miki Naoki",
    img: "https://i.imgur.com/djD9QzI.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Megumi Sakura",
    img: "https://i.imgur.com/iPOUVOX.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main", "recur"]
    }
  },
  {
    name: "Yuri Wakasa",
    img: "https://i.imgur.com/2GqbLBG.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Ruu Wakasa",
    img: "https://i.imgur.com/4ZosD4E.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Hikako Kirai",
    img: "https://i.imgur.com/EmHBMc5.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Touko Deguchi",
    img: "https://i.imgur.com/5zeW3XR.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aki Hikarizato",
    img: "https://i.imgur.com/EKUaV08.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aosoi Shiiko",
    img: "https://i.imgur.com/jzhiF2o.jpg?2",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Kei Shidou",
    img: "https://i.imgur.com/IhlBqzf.jpg?1",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["side"]
    }
  },


  // New Game
  {
    name: "Aoba Suzukaze",
    img: "https://i.imgur.com/p8rY4Ig.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Hifumi Takimoto",
    img: "https://i.imgur.com/5dOhBCb.jpg",
    opts: {
      series: ["ng"],
      when:["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2018"]
    }
  },
  {
    name: "Hajime Shinoda",
    img: "https://i.imgur.com/3ieZMGf.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yun Iijima",
    img: "https://i.imgur.com/BakGJt0.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kou Yagami",
    img: "https://i.imgur.com/VKkU0ip.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Rin Tooyama",
    img: "https://i.imgur.com/0vJEsV6.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nene Sakura",
    img: "https://i.imgur.com/rQPuFYZ.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Umiko Ahagon",
    img: "https://i.imgur.com/xhpJjXm.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Momiji Mochizuki",
    img: "https://i.imgur.com/d4zfF7D.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"]
    }
  },
  {
    name: "Tsubame Narumi",
    img: "https://i.imgur.com/uHa3HP8.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"]
    }
  },
  {
    name: "Shizuku Hazuki",
    img: "https://i.imgur.com/5w0JkRO.jpg?1",
    tooltip: "She's officially called Haduki but no. Just no.",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Christina Wako Yamato",
    img: "https://i.imgur.com/Le6dnRN.png?1",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["side", "anta"]
    }
  },
  {
    name: "Hotaru Hoshikawa",
    img: "https://i.imgur.com/YjSCHNv.jpg",
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["recur"]
    }
  },


  // A Channel
  {
    name: "Tooru",
    img: "https://i.imgur.com/lWooYNy.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2018"]
    }
  },
  {
    name: "Run",
    img: "https://i.imgur.com/ebsBgzG.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yuuko",
    img: "https://i.imgur.com/BuPNZVn.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nagi",
    img: "https://i.imgur.com/9qvxdJV.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Miho",
    img: "https://i.imgur.com/QddPCdv.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yutaka",
    img: "https://i.imgur.com/gu8tZD0.png?1",
    opts: {
      series: ["achan"],
      when: ["never"],
      status: ["main"]
    }
  },


  // Kiniro Mosaic
  {
    name: "Karen Kujou",
    img: "https://i.imgur.com/5URXuui.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Alice Cartelet",
    img: "https://i.imgur.com/o6bSQh9.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Shinobu Oomiya",
    img: "https://i.imgur.com/azmRVtf.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Aya Komichi",
    img: "https://i.imgur.com/PJxlbjW.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Youko Inokuma",
    img: "https://i.imgur.com/axxZUpr.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Honoka Matsubara",
    img: "https://i.imgur.com/2gCfVEJ.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Isami Oomiya",
    img: "https://i.imgur.com/RxESoYN.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Sakura Karasuma",
    img: "https://i.imgur.com/a2UrZ8S.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Akari Kuzehashi",
    img: "https://i.imgur.com/QyeV3qt.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },


  // Stella no Mahou
  {
    name: "Tamaki Honda",
    img: "https://i.imgur.com/bUCJJLY.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kayo Fujikawa",
    img: "https://i.imgur.com/66TOqSK.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Shiina Murakami",
    img: "https://i.imgur.com/C8a072I.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Ayame Seki",
    img: "https://i.imgur.com/8dznFFB.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yumine Fuda",
    img: "https://i.imgur.com/pNDnT4N.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Teru Hyakutake",
    img: "https://i.imgur.com/30PorMj.jpg",
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["recur"]
    }
  },


  // Kill Me Baby
  {
    name: "Yasuna Oribe",
    img: "https://i.imgur.com/ZkAWMB4.jpg",
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Sonya",
    img: "https://i.imgur.com/OdOHOo5.jpg",
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Agiri Goshiki",
    img: "https://i.imgur.com/rGImX7i.jpg",
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Unused Character",
    img: "https://i.imgur.com/OBbq22v.jpg?1",
    opts: {
      series: ["kmb"],
      when: ["never"],
      status: ["side"]
    }
  },


  // Sakura Trick
  {
    name: "Haruka Takayama",
    img: "https://i.imgur.com/KTDZz6R.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yuu Sonoda",
    img: "https://i.imgur.com/A90z1hY.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Shizuku Minami",
    img: "https://i.imgur.com/C8Q4Ok2.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kotone Noda",
    img: "https://i.imgur.com/KcBa8tw.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kaede Ikeno",
    img: "https://i.imgur.com/LpzlvyA.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yuzu Iizuka",
    img: "https://i.imgur.com/wLQ0QkC.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Mitsuki Sonoda",
    img: "https://i.imgur.com/iTEN611.png?1",
    opts: {
      series: ["gay"],
      when: ["never"],
      status: ["anta", "recur"]
    }
  },
  {
    name: "Rina Sakai",
    img: "https://i.imgur.com/3rIBQEw.jpg?1",
    opts: {
      series: ["gay"],
      when: ["never"],
      status: ["side"]
    }
  },
  {
    name: "Sumi Otokawa",
    img:"https://i.imgur.com/tuf8d9z.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["side"],
      rarity: ["sr"]
    }
  },


  // Blend S
  {
    name: "Maika Sakuranomiya",
    img: "https://i.imgur.com/e3d4iSl.jpg",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kaho Hinata",
    img: "https://i.imgur.com/qhvHz8a.png",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Mafuyu Hoshikawa",
    img: "https://i.imgur.com/sUcCxgA.jpg",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Miu Amano",
    img: "https://i.imgur.com/rL6dWi3.jpg",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Hideri Kanzaki",
    img: "https://i.imgur.com/E1NPdK7.jpg",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      trap: true
    }
  },
  {
    name: "Aika Sakuranomiya",
    img: "https://i.imgur.com/oy7IAi3.jpg",
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["recur"],
      rarity: ["sr"]
    }
  },

// Urara Meirochou
  {
    name: "Chiya",
    img: "https://i.imgur.com/eBN4GyI.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kon Tatsumi",
    img: "https://i.imgur.com/4F0PsCK.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Koume Yukimi",
    img: "https://i.imgur.com/TFhcRab.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nono Natsume",
    img: "https://i.imgur.com/rVTC4z8.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Saku Iroi",
    img: "https://i.imgur.com/UfhhRxQ.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nina Natsume",
    img: "https://i.imgur.com/SHRbP8I.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
  name: "Omi Nijou",
  img: "https://i.imgur.com/xIyeAVA.jpg",
  opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      nonanimu: true
    }
  },

  // Yumekui Merry
    {
      name: "Merry Nightmare",
      img: "https://i.imgur.com/bajvH05.jpg",
      opts: {
        series: ["merry"],
        when: ["in"],
        status: ["main"],
        rarity: ["ssr", "christmas2018"]
      }
    },
    {
      name: "Isana Tachibana",
      img: "https://i.imgur.com/mEUz3wq.jpg",
      opts: {
        series: ["merry"],
        when: ["in"],
        status: ["main"]
      }
    },

    // Slow Start
    {
      name: "Hana Ichinose",
      img: "https://i.imgur.com/WpzwFZ5.jpg",
      opts: {
        series: ["ss"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Kamuri Sengoku",
      img: "https://i.imgur.com/znhDmEC.jpg",
      opts: {
        series: ["ss"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Eiko Tokura",
      img: "https://i.imgur.com/a79XKDs.jpg",
      opts: {
        series: ["ss"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Tamate Momochi",
      img: "https://i.imgur.com/nxNye7Z.jpg",
      tooltip: "........image change 11/10",
      opts: {
        series: ["ss"],
        when: ["in"],
        status: ["main"],
        rarity: ["ssr"]
      }
    },
    {
      name: "Kiyose Enami",
      img: "https://i.imgur.com/1UpHb7J.png",
      opts: {
        series: ["ss"],
        when: ["never"],
        status: ["recur"]
      }
    },
    {
      name: "Shion Kyozuka",
      img: "https://i.imgur.com/oIy2RuN.png",
      opts: {
        series: ["ss"],
        when: ["never"],
        status: ["main"]
      }
    },
    {
      name: "Hiroe Hannen",
      img: "https://i.imgur.com/ERJQQso.png",
      opts: {
        series: ["ss"],
        when: ["never"],
        status: ["main"]
      }
    },

  // Yurukyan
    {
      name: "Rin Shima",
      img: "https://i.imgur.com/5ErUzMs.jpg",
      opts: {
        series: ["yc"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Nadeshiko Kagamihara",
      img: "https://i.imgur.com/2hZl9mo.jpg", //TODO: Change it from Swimsuit ver. to Normal
      opts: {
        series: ["yc"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Chiaki Oogaki",
      img: "https://i.imgur.com/r0bgj9g.jpg",
      opts: {
        series: ["yc"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Aoi Inuyama",
      img: "https://i.imgur.com/ZFuNrUl.jpg",
      opts: {
        series: ["yc"],
        when: ["in"],
        status: ["main"]
      }
    },
    {
      name: "Ena Saito",
      img: "https://i.imgur.com/Juyi9AY.jpg",
      opts: {
        series: ["yc"],
        when: ["in"],
        status: ["main"],
        rarity: ["sr"]
      }
    },
    {
      name: "Minami Toba",
      img: "https://i.imgur.com/mi7Tzxx.png?1",
      opts: {
        series: ["yc"],
        when: ["never"],
        status: ["recur"]
      }
    },

    // Hanayamata
      {
        name: "Naru Sekiya",
        img: "https://i.imgur.com/g4K4aip.jpg",
        opts: {
          series: ["hana"],
          when: ["in"],
          status: ["main"]
        }
      },
      {
        name: "Hana N. Fountainstand",
        img: "https://i.imgur.com/2RBo55C.jpg",
        opts: {
          series: ["hana"],
          when: ["in"],
          status: ["main"]
        }
      },
      {
        name: "Yaya Sasame",
        img: "https://i.imgur.com/IdTayFK.jpg",
        opts: {
          series: ["hana"],
          when: ["in"],
          status: ["main"]
        }
      },
      {
        name: "Machi Tokiwa",
        img: "https://i.imgur.com/6IXwETH.png",
        opts: {
          series: ["hana"],
          when: ["never"],
          status: ["main"]
        }
      },
      {
        name: "Tami Nishimikado",
        img: "https://i.imgur.com/GBac75Y.png",
        opts: {
          series: ["hana"],
          when: ["never"],
          status: ["main"]
        }
      },
      {
        name: "Sari Tokiwa",
        img: "https://i.imgur.com/sloNQvt.png",
        opts: {
          series: ["hana"],
          when: ["never"],
          status: ["main"]
        }
      },

      // Comiga
        {
          name: "Kaoruko Moeta",
          img: "https://i.imgur.com/smulddG.jpg",
          opts: {
            series: ["comiga"],
            when: ["in"],
            status: ["main"]
          }
        },
        {
          name: "Koyume Koizuka",
          img: "https://i.imgur.com/uiZ6UnM.jpg",
          opts: {
            series: ["comiga"],
            when: ["in"],
            status: ["main"]
          }
        },
        {
          name: "Ruki Irokawa",
          img: "https://i.imgur.com/8yFKqS0.jpg",
          opts: {
            series: ["comiga"],
            when: ["in"],
            status: ["main"]
          }
        },
        {
          name: "Tsubasa Katsuki",
          img: "https://i.imgur.com/GUSW0oF.jpg",
          opts: {
            series: ["comiga"],
            when: ["in"],
            status: ["main"]
          }
        },


  // Harukana Recieve
  {
    name: "Haruka Oozora",
    img: "https://i.imgur.com/GFnRZPv.jpg",
    //tooltip:  "or Ozora, but eh...\n" +
    //          "Source: Manga Cover",
    //img: "https://i.imgur.com/eNx3eMR.png",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Kanata Higa",
    img: "https://i.imgur.com/he96Tag.jpg",
    //old img: "https://i.imgur.com/UfOyS1O.png",
    //tooltip: "Source: Manga Cover",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Emily Thomas",
    img: "https://i.imgur.com/HBrDEYF.jpg",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Claire Thomas",
    img: "https://i.imgur.com/fkV7tOL.jpg",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"]
    }
  },


  // Gochuumon Usagi desu ka? 
  {
    name: "Cocoa Hoto",
    img: "https://i.imgur.com/YyAvDhc.jpg",
    // Old
    //img: "https://i.imgur.com/6FmRYa4.png",
    //tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Chino Kafuu",
    img: "https://i.imgur.com/3I8DXoi.jpg",
    //Old
    //img: "https://i.imgur.com/h4kPNQf.png",
    //tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Rize Tazeda",
    img: "https://i.imgur.com/9eH0An5.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Syaro Kirima",
    img: "https://i.imgur.com/tCY04oi.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Chiya Ujimatsu",
    img: "https://i.imgur.com/XbiNMIP.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Maya Jouga",
    img: "https://i.imgur.com/BSqZQlc.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Megumi Natsu",
    img: "https://i.imgur.com/GGe1Qpg.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Mocha Hoto",
    img: "https://i.imgur.com/up2RpPg.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["anta", "main"]
    }
  },
  {
    name: "Midori Aoyama",
    img: "https://i.imgur.com/uG9Bo6P.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Rin Mate",
    img: "https://i.imgur.com/Q2vuEub.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["side"]
    }
  },


  // Anne Happy
  {
    name: "Anne Hanakoizumi",
    img: "https://i.imgur.com/e7zWKrI.jpg",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Ruri Hibarigaoka",
    img: "https://i.imgur.com/8uWBUTi.jpg",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Botan Kumegawa",
    img: "https://i.imgur.com/4vs0sKn.jpg",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Hibiki Hagyu",
    img: "https://i.imgur.com/lJtxN1V.png",
    opts: {
      series: ["anhapi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Ren Ekoda",
    img: "https://i.imgur.com/JyfNl7B.png",
    opts: {
      series: ["anhapi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
      name: "Kodaira",
      img: "https://i.imgur.com/JVukdFe.png?1",
      opts: {
        series: ["anhapi"],
        when: ["never"],
        status: ["anta", "main"]
      }
  },
  {
    name: "Tsubaki Sayama",
    img: "https://i.imgur.com/4uzoEuL.png?1",
    tooltip: "Ti Ti Timo Timo~",
    opts: {
      series: ["anhapi"],
      when: ["never"],
      status: ["main", "recur"]
    }
  },


  // Anima Yell
  {
    name: "Kohane Hatoya",
    img: "https://i.imgur.com/2YTeSTh.jpg",
    tooltip: "chunchun",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hizume Arima",
    img: "https://i.imgur.com/AQOCbDI.jpg",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Uki Sawatari",
    img: "https://i.imgur.com/2HnezS0.jpg",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },


  /// OTHER GAME SERIES GO HERE

  /// END

  /// START OF NON-GAME SERIES

  // Wakaba Girl
  {
    name: "Wakaba Kohashi",
    img: "https://i.imgur.com/dYUP68u.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Nao Mashiba",
    img: "https://i.imgur.com/84Vxxlr.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Moeko Tokita",
    img: "https://i.imgur.com/qL4n1gx.png",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Mao Kurokawa",
    img: "https://i.imgur.com/0NDEPes.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },

  
  // K-ON!
  {
    name: "Yui Hirasawa",
    img: "https://i.imgur.com/T9XI82C.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"],
    
    }
  },
  {
    name: "Ritsu Tainaka",
    img: "https://i.imgur.com/rqzGnvT.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Mio Akiyama",
    img: "https://i.imgur.com/HvY2A9x.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Tsumugi Kotobuki",
    img: "https://i.imgur.com/lpIbi33.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Azusa Nakano",
    img: "https://i.imgur.com/gDMySi6.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Ui Hirasawa",
    img: "https://i.imgur.com/XiKaKbw.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["recur", "main"]
    }
  },
  {
    name: "Sawako Yamanaka",
    img: "https://i.imgur.com/uahNEif.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Nodoka Manabe",
    img: "https://i.imgur.com/5hPydoW.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Jun Suzuki",
    img: "https://i.imgur.com/45kkift.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur", "main"]
    }
  },
  {
    name: "Megumi Sokabe",
    img: "https://i.imgur.com/0LREy3t.jpg?1",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["side"]
    }
  },
  // 2011 High School Arc
  {
    name: "Nao Okuda",
    img: "https://i.imgur.com/Qb60op5.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Sumire Saitou",
    img: "https://i.imgur.com/w4sIeFG.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  // Currently Missing: College Arc mains


  // Koufuku Graffiti
  {
    name: "Ryou Machiko",
    img: "https://i.imgur.com/aqIBUGu.png",
    opts: {
      series: ["foodgasm"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Kirin Morino",
    img: "https://i.imgur.com/YiaXy3f.png",
    opts: {
      series: ["foodgasm"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Shiina",
    img: "https://i.imgur.com/kz6elXN.png",
    opts: {
      series: ["foodgasm"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Yuki Uchiki",
    img: "https://i.imgur.com/0bRzvDT.png",
    opts: {
      series: ["foodgasm"],
      when: ["never"],
      status: ["recur"]
    }
  },


  // Acchi Kocchi
  {
    name: "Tsumiki Miniwa",
    img: "https://i.imgur.com/Tj3snKf.png",
    opts: {
      series: ["acchi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Mayoi Katase",
    img: "https://i.imgur.com/5j5RwHr.png",
    opts: {
      series: ["acchi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Hime Haruno",
    img: "https://i.imgur.com/kBdrRj7.png",
    opts: {
      series: ["acchi"],
      when: ["never"],
      status: ["main"]
    }
  },

  
  // Sansha Sanyou
  {
    name: "Youko Nishikawa",
    img: "https://i.imgur.com/gbbqgDV.png", // This is a placeholder image
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Futaba Odagiri",
    img: "https://i.imgur.com/FkAlciw.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Teru Hayama",
    img: "https://i.imgur.com/vOz9eho.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Shino Sonobe",
    img: "https://i.imgur.com/v3o3C8q.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Kou Hayama",
    img: "https://i.imgur.com/Jbizr3s.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Serina Nishiyama",
    img: "https://i.imgur.com/sEFBd1U.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Sasame Tsuji",
    img: "https://i.imgur.com/FAZ7Io5.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur", "anta"]
    }
  },
  {
    name: "Hajime Tsuji",
    img: "https://i.imgur.com/jAya3dy.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur", "anta"]
    }
  },
  {
    name: "Mitsugu Yamaji",
    img: "https://i.imgur.com/jAya3dy.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Yuu Takezono",
    img: "https://i.imgur.com/jAya3dy.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur", "anta"]
    }
  },
  {
    name: "Sakura Usuda",
    img: "https://i.imgur.com/FDRkBzp.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Asako Kondou",
    img: "https://i.imgur.com/OncwN4F.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["side"]
    }
  }


  // END
];
