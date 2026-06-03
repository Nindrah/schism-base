export interface CharacterStats {
  strength: number
  agility: number
  resilience: number
  intelligence: number
  astralTechnique: number
}

export type DivineCondition = "Zero-Entropy" | "Primal-Axiomatic" | "Axiomatic" | "Morphogen"

export interface CharacterDetail {
  fullBio: string
  age: number
  height: number
  weight: number
  gender: string
  divineCondition?: DivineCondition
  quote?: string
  specialAbility?: string
  stats?: CharacterStats
  gallery?: string[]
}

export interface Character {
  id: string
  name: string
  role: "Protagonist" | "Alomani" | "Antagonist" | "Support"
  thumbnailImage: string
  shortDescription: string
  details: CharacterDetail
}

export interface Series {
  id: string
  title: string
  description: string
  coverImage: string
  themeColors: {
    primary: string
    secondary: string
    accent: string
    light: string
  }
  statCap: number
  characters: Character[]
}

export const seriesData: Series[] = [
  {
    id: "schism-termina",
    title: "SCHISM: TERMINA",
    description:
      "Anu... ini timeline utama.",
    coverImage: "https://i.imgur.com/1TL1AC7.png",
    themeColors: {
      primary: "from-zinc-900 to-zinc-800",
      secondary: "bg-zinc-700",
      accent: "text-zinc-600",
      light: "bg-zinc-200",
    },
    statCap: 100,
    characters: [
      {
        id: "remeryllus",
        name: "Remeryllus (act 0)",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/9FjkBex.png",
        shortDescription:
          "Seorang gadis yang merupakan emsi di series ini.",
        details: {
          fullBio:
            "Seorang gadis yang enggan buka mata, anak panti asuhan Kitebound paling aneh. Merupakan emsi yang sayang mamah :3",
          age: 9,
          height: 166,
          weight: 71,
          gender: "Perempuan",
          quote: "Di antara surga dan bumi aku-... lupa lagi.",
          specialAbility: "Unknown.",
          stats: {
            strength: 75,
            agility: 70,
            resilience: 71,
            intelligence: 70,
            astralTechnique: 1,
          },
          gallery: [
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "asariya",
        name: "Asariya (act 0)",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/ImDazYb.png",
        shortDescription:
          "Seorang gadis yang juga emsi tapi masih bingung eksistensinya",
        details: {
          fullBio:
            "Asariya adalah gadis yang entah siapa dan apa juga bagaimana serta kenapa, author dan pembimbing juga bingung dia ni apa man...",
          age: 14,
          height: 169,
          weight: 62,
          gender: "Perempuan",
          quote: "Membaca buku yang sama kedua kalinya bisa membuatmu lebih paham...",
          specialAbility: "Krisis Eksistensi.",
          stats: {
            strength: 20,
            agility: 55,
            resilience: 32,
            intelligence: 40,
            astralTechnique: 0,
          },
          gallery: [
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "ezell",
        name: "Ezell",
        role: "Support",
        thumbnailImage: "https://i.imgur.com/75MzgUa.png",
        shortDescription:
          "Lelaki blondeh aseli Kitebound.",
        details: {
          fullBio:
            "Ezell adalah seorang manusia sumbu sedang, dia sayang teman-temannya tapi tsundere malu-malu gitu (kata pembimbing 'najis').",
          age: 15,
          height: 170,
          weight: 68,
          gender: "Laki-laki",
          quote: "Yang benar belum tentu fakta, bisa jadi yang benar puding coklat pak hambali",
          specialAbility: "-",
          stats: {
            strength: 45,
            agility: 52,
            resilience: 46,
            intelligence: 58,
            astralTechnique: 0,
          },
          gallery: [
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "elisa",
        name: "Elisa",
        role: "Support",
        thumbnailImage: "https://i.imgur.com/CynSkzO.png",
        shortDescription:
          "Seorang wanita yang agak dramatis, agak nguawor juga.",
        details: {
          fullBio:
            "Elisa adalah girl dramatically good, bisa jadi ia bagus dalam peran drama sandiwara, tapi bisa enggak juga... terserah dia lah.",
          age: 13,
          height: 166,
          weight: 63,
          gender: "Perempuan",
          quote: "Kelas Kink!",
          specialAbility: "Mendramatisir Suatu Hal",
          stats: {
            strength: 44,
            agility: 50,
            resilience: 56,
            intelligence: 51,
            astralTechnique: 0,
          },
          gallery: [
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "akra",
        name: "Akra",
        role: "Support",
        thumbnailImage: "https://i.imgur.com/OckZC54.png",
        shortDescription:
          "Pejuang yang penting bisa, bisa ga ada akal juga...",
        details: {
          fullBio:
            "Akra adalah tipikal seorang bro yang gas wae... orang yolo dengan kemungkinan bisa mikir dan bisa enggak, takut sama orang kalem karena dikira raja ibelis promaxplus 99999 ahli mimpi (basah).",
          age: 16,
          height: 178,
          weight: 84,
          gender: "Laki-laki",
          quote: "Misir Skid!",
          specialAbility: "maju maju maju",
          stats: {
            strength: 62,
            agility: 60,
            resilience: 61,
            intelligence: 35,
            astralTechnique: 0,
          },
          gallery: [
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
    ],
  },
  {
    id: "schism-the-beginning",
    title: "SCHISM: THE BEGINNING",
    description:
      "Prekuel random dari Schism Termina, fokus pada Primordite Vennamyseus/keturunan Primordium Vennamyseus, tapi bisa nggak fokus juga...",
    coverImage: "https://i.imgur.com/ZbvVdCR.png",
    themeColors: {
      primary: "from-blue-900 to-blue-800",
      secondary: "bg-blue-700",
      accent: "text-blue-700",
      light: "bg-blue-100",
    },
    statCap: 20000,
    characters: [
      {
        id: "lea-ven-belladonna",
        name: "Lea ven Belladonna",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/PiXWKGR.png",
        shortDescription:
          "Anak ke 7, kebetulan melihat beliau normal ibarat si Biji Sawit dengan Indonesia Emas, yak hampir g-",
        details: {
          fullBio:
            "Lea ven Belladonna adalah legenda yang berjalan kecil (emang kecil banget soalnya), disebut legenda karena ia merupakan anak gen-1 yang genetically hampir 1:1 dengan sang induk (tapi kadar duongok nya naudzubillah)",
          age: 511,
          height: 80,
          weight: 20,
          gender: "Perempuan",
          quote: "Kecil-kecil gini gw juga kecil wok!",
          specialAbility: "4th wall - sadar dia karakter 2d series ini.",
          stats: {
            strength: 200,
            agility: 300,
            resilience: 20000,
            intelligence: 100,
            astralTechnique: 20000,
          },
          gallery: [
            "https://i.imgur.com/yPOZ9nI.png",
            "https://i.imgur.com/uM0lGz2.png",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "leo-ven-belleum",
        name: "Leo ven Belleum",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/KgdWZlG.png",
        shortDescription:
          "Anak ke 6, Lea versi lawan Gender.",
        details: {
          fullBio:
            "Leo ven Belleum adalah anak ke 6 di gen-1, kembaran Lea, semua sama, tapi kadar dongok nya lebih terkontrol.",
          age: 511,
          height: 81,
          weight: 21,
          gender: "Laki-laki",
          quote: "Itu rimsvek banget wok!.",
          specialAbility: "4th wall - sadar dia makhluk 2d di series ini.",
          stats: {
            strength: 200,
            agility: 200,
            resilience: 20001,
            intelligence: 200,
            astralTechnique: 19999,
          },
          gallery: [
            "https://i.imgur.com/uM0lGz2.png",
            "https://i.imgur.com/yPOZ9nI.png",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "avoro-ven-belleum",
        name: "Avoro ven Belleum",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/N67qz35.png",
        shortDescription:
          "Kakak tertua, termasuk olang tuwa.",
        details: {
          fullBio:
            "Avoro ven Belleum adalah anak gen-1 Vennamyseus tertua. Apakah jika tertua berarti paling bijak? 50/50... apakah ia paling berkuasa? 50/50... ngantuk? 100.",
          age: 12011,
          height: 318,
          weight: 155,
          gender: "Laki-laki",
          divineCondition: "Primal-Axiomatic",
          quote: "hah?",
          specialAbility: "Sleepy Central Astra - seluruh Astral Energy dan Technique akar Vennamyseus berpusat padanya, tapi ngantuk.",
          stats: {
            strength: 2000,
            agility: 13460,
            resilience: 4400,
            intelligence: 22800,
            astralTechnique: 30250,
          },
          gallery: [
            "https://i.imgur.com/zg4FnXG.jpeg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
            "https://as1.ftcdn.net/v2/jpg/05/88/70/78/1000_F_588707867_pjpsqF5zUNMV1I2g8a3tQAYqinAxFkQp.jpg",
          ],
        },
      },
      {
        id: "ars-ven-belleum",
        name: "Ars ven Belleum",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/VBumDyZ.png",
        shortDescription:
          "Anak ke 4, paling paham manusia (katanya sih).",
        details: {
          fullBio:
            "Ars ven Belleum adalah anak ke 4 di gen-1 Vennamyseus, orang netral, sangat tenang, pengertian (katanya), ia tidak punya musuh (gilak i dont have enemies), beliau selalu mempelajari sosial-antropologi serta dinamika manusia.",
          age: 1735,
          height: 277,
          weight: 168,
          gender: "Laki-laki",
          quote: "Lebih baik memahami manusia daripada nyawit, karena kita tidak bisa melakukan keduanya.",
          specialAbility: "Mr. Universal - disayang semua entitas, punya banyak lawan tanpa punya satupun musuh, apalagi yah...",
          stats: {
            strength: 19530,
            agility: 3300,
            resilience: 3000,
            intelligence: 15170,
            astralTechnique: 3000,
          },
          gallery: [
            "https://i.imgur.com/AkmYxOX.jpeg",
            "https://i.imgur.com/TbxC4BX.png",
            "https://i.imgur.com/XmPS86O.png",
            "https://i.imgur.com/ChP3Jpz.png",
          ],
        },
      },
      {
        id: "artemys-ven-belladonna",
        name: "Artemys ven Belladonna",
        role: "Protagonist",
        thumbnailImage: "https://i.postimg.cc/RVqXh0Z9/Artemys.jpg",
        shortDescription:
          "Kakak tertua kedua, alien serba ada",
        details: {
          fullBio:
            "Artemys ven Belladonna adalah anak genetik mata X sub genus alien-white, termasuk serba ada, ada apa? ya ada aja, hampir semua saudara-saudarinya merasa ngeri-ngeri rese dengan eksistensi beliau, tapi image beliau di mata keponakan dan induknya selalu bagus. Kok bisa? ada aja... ada lah...",
          age: 12010,
          height: 319,
          weight: 199,
          gender: "Perempuan",
          divineCondition: "Zero-Entropy",
          quote: "Jangan cari yang ga ada",
          specialAbility: "Omniversal Omnipresence - serba ada, ada aja serta selalu muncul di saat yang tepat dan tidak secara bersamaan.",
          stats: {
            strength: 25800,
            agility: 19590,
            resilience: 18310,
            intelligence: 3700,
            astralTechnique: 0,
          },
          gallery: [
            "https://i.imgur.com/Uf6vwLM.jpeg",
            "https://i.imgur.com/f9H3s71.png",
            "https://i.imgur.com/TbxC4BX.png",
            "https://i.imgur.com/Gmaitib.png",
          ],
        },
      },
      {
        id: "remulus-ven-belladonna",
        name: "Remulus ven Belladonna",
        role: "Alomani",
        thumbnailImage: "https://i.postimg.cc/SsyGhSPN/Remulus.jpg",
        shortDescription:
          "Anak ke 3, merupakan keturunan Vennamyseus anomaly tapi yaudahlah",
        details: {
          fullBio:
            "Remulus ven Belladonna adalah anak ke 3 di gen-1, anomali karena memakan kakak kembarnya saat masih berbentuk janin-telur dalam kondisi masih menjadi janin-telur juga. Eksistensinya mutlak, dia juga induk tanpa pasangan sama seperti 'induk-nya'. Ditakdirkan lahir di tahun 0 masehi. Sangat santai.",
          age: 2011,
          height: 333,
          weight: 188,
          gender: "Perempuan",
          quote: "Aja sendiri...",
          specialAbility: "Omniversal Anomaly - pusat ketidakaturan dan ketidakjelasan dalam semesta berpangkat.",
          stats: {
            strength: 15555,
            agility: 15555,
            resilience: 15555,
            intelligence: 15555,
            astralTechnique: 15555,
          },
          gallery: [
            "https://i.imgur.com/rkD7JNL.jpeg",
            "https://i.imgur.com/F93EkG0.png",
            "https://i.imgur.com/Gmaitib.png",
            "https://i.imgur.com/uM0lGz2.png",
          ],
        },
      },
      {
        id: "athena-ven-belladonna",
        name: "Athena ven Belladonna",
        role: "Protagonist",
        thumbnailImage: "https://i.postimg.cc/g04Z3vMY/Athena.jpg",
        shortDescription:
          "Anak ke 5, agak normal tapi gak normal...",
        details: {
          fullBio:
            "Athena ven Belladonna adalah anak ke 5 di gen-1, dia paling normal di antara gen-1 ini, namun dibilang gak normal juga benar. Mewarisi genetik mata X dan alien-white seperti si kakak 'Artemys', suka mempelajari kehidupan manusia seperti sang kakak 'Ars', ia juga cukup santai seperti kakaknya, 'Remulus'. Apaalaah.",
          age: 1734,
          height: 274,
          weight: 144,
          gender: "Perempuan",
          quote: "Selera orang beda-beda... tapi selera lu ngeri wok!.",
          specialAbility: "All-willing Adaptive - adaptasi perulangan infinit terhadap apapun, dimanapun, bagaimanapun dan akan selalu terlihat normal bagi siapapun.",
          stats: {
            strength: 2045,
            agility: 19500,
            resilience: 3078,
            intelligence: 3990,
            astralTechnique: 13005,
          },
          gallery: [
            "https://i.imgur.com/Iv9ebEk.jpeg",
            "https://i.imgur.com/TbxC4BX.png",
            "https://i.imgur.com/ChP3Jpz.png",
          ],
        },
      },
    ],
  },
  {
    id: "schism-hell",
    title: "SCHISM: HELL",
    description: "???",
    coverImage: "https://i.imgur.com/c8H139j.jpeg",
    themeColors: {
      primary: "from-red-900 to-red-800",
      secondary: "bg-red-700",
      accent: "text-red-700",
      light: "bg-red-100",
    },
    statCap: 20000,
    characters: [
      {
        id: "anne",
        name: "Anne",
        role: "Protagonist",
        thumbnailImage: "https://i.imgur.com/9GfSuzS.png",
        shortDescription: "???",
        details: {
          fullBio: "'ingin berteriak, namun tidak memiliki mulut' 'ingin menangis, namun tidak memiliki mata'",
          age: 1,
          height: 1,
          weight: 1,
          gender: "???",
          quote: "Manusia hanyalah debu yang berani menggigit tangan penciptanya",
          specialAbility: "???",
          stats: {
            strength: 1,
            agility: 1,
            resilience: 1,
            intelligence: 1,
            astralTechnique: 1,
          },
          gallery: [
            "https://i.imgur.com/9GfSuzS.png",
            "https://i.imgur.com/1EMjl0Y.png",
          ],
        },
      },
    ],
  },
]
