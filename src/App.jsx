import React, { useState, useRef } from 'react';
import QRCodeLib from 'qrcode';

export const STICKER_PACKS = [
  {
    "id": "zine_art",
    "name": "Hand-Drawn Zine Art",
    "icon": "\ud83c\udfa8",
    "subpacks": [
      {
        "id": "zine_hand_drawn",
        "name": "Illustrated Zine Pack",
        "items": [
          {
            "id": "whale_shark",
            "label": "Whale Shark",
            "filename": "whale_shark.png",
            "width": 164,
            "height": 120,
            "src": "/stickers/whale_shark.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "tomato",
            "label": "Heirloom Tomato",
            "filename": "tomato.png",
            "width": 145,
            "height": 138,
            "src": "/stickers/tomato.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "blueberries",
            "label": "Blueberries Burst",
            "filename": "blueberries.png",
            "width": 188,
            "height": 180,
            "src": "/stickers/blueberries.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "oval_sardines",
            "label": "Oval Sardine Can",
            "filename": "oval_sardines.png",
            "width": 110,
            "height": 174,
            "src": "/stickers/oval_sardines.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "tin_sardines",
            "label": "Red Key Sardine Tin",
            "filename": "tin_sardines.png",
            "width": 149,
            "height": 148,
            "src": "/stickers/tin_sardines.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "fig_slice",
            "label": "Fresh Fig",
            "filename": "fig_slice.png",
            "width": 132,
            "height": 134,
            "src": "/stickers/fig_slice.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "red_goldfish",
            "label": "Red Goldfish",
            "filename": "red_goldfish.png",
            "width": 132,
            "height": 149,
            "src": "/stickers/red_goldfish.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "rainbow_tuna",
            "label": "Rainbow Tuna",
            "filename": "rainbow_tuna.png",
            "width": 233,
            "height": 88,
            "src": "/stickers/rainbow_tuna.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "orange_goldfish",
            "label": "Orange Goldfish",
            "filename": "orange_goldfish.png",
            "width": 157,
            "height": 128,
            "src": "/stickers/orange_goldfish.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "salmon",
            "label": "Pink Salmon",
            "filename": "salmon.png",
            "width": 238,
            "height": 83,
            "src": "/stickers/salmon.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "pomegranate",
            "label": "Ripe Pomegranate",
            "filename": "pomegranate.png",
            "width": 136,
            "height": 139,
            "src": "/stickers/pomegranate.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "mango",
            "label": "Sweet Mango",
            "filename": "mango.png",
            "width": 149,
            "height": 133,
            "src": "/stickers/mango.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "yellow_sardine",
            "label": "Yellow Sardine",
            "filename": "yellow_sardine.png",
            "width": 246,
            "height": 77,
            "src": "/stickers/yellow_sardine.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "peeled_orange",
            "label": "Peeled Clementine",
            "filename": "peeled_orange.png",
            "width": 142,
            "height": 113,
            "src": "/stickers/peeled_orange.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "crane_bird",
            "label": "Star Crane Bird",
            "filename": "crane_bird.png",
            "width": 123,
            "height": 178,
            "src": "/stickers/crane_bird.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "blue_mackerel",
            "label": "Blue Mackerel",
            "filename": "blue_mackerel.png",
            "width": 245,
            "height": 74,
            "src": "/stickers/blue_mackerel.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "vertical_fish_trio",
            "label": "Colorful Fish Trio",
            "filename": "vertical_fish_trio.png",
            "width": 134,
            "height": 219,
            "src": "/stickers/vertical_fish_trio.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          },
          {
            "id": "yellow_bell_pepper",
            "label": "Yellow Bell Pepper",
            "filename": "yellow_bell_pepper.png",
            "width": 197,
            "height": 217,
            "src": "/stickers/yellow_bell_pepper.png",
            "pack_id": "zine_art",
            "subpack_id": "zine_hand_drawn"
          }
        ]
      }
    ]
  },
  {
    "id": "real_fish",
    "name": "Realistic Fish",
    "icon": "\ud83d\udc1f",
    "subpacks": [
      {
        "id": "ocean_species",
        "name": "Aquarium & Ocean Species",
        "items": [
          {
            "id": "real_fish_r1_c1",
            "label": "Orange Zebra Fish",
            "filename": "real_fish_r1_c1.png",
            "src": "/stickers/real_fish/real_fish_r1_c1.png",
            "width": 196,
            "height": 68,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r1_c2",
            "label": "Red Mullet Goatfish",
            "filename": "real_fish_r1_c2.png",
            "src": "/stickers/real_fish/real_fish_r1_c2.png",
            "width": 266,
            "height": 94,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r2_c1",
            "label": "Ram Cichlid",
            "filename": "real_fish_r2_c1.png",
            "src": "/stickers/real_fish/real_fish_r2_c1.png",
            "width": 218,
            "height": 102,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r2_c2",
            "label": "Black Striped Angelfish",
            "filename": "real_fish_r2_c2.png",
            "src": "/stickers/real_fish/real_fish_r2_c2.png",
            "width": 217,
            "height": 104,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r3_c1",
            "label": "Neon Tetra",
            "filename": "real_fish_r3_c1.png",
            "src": "/stickers/real_fish/real_fish_r3_c1.png",
            "width": 215,
            "height": 66,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r3_c2",
            "label": "Sea Bream Porgy",
            "filename": "real_fish_r3_c2.png",
            "src": "/stickers/real_fish/real_fish_r3_c2.png",
            "width": 229,
            "height": 93,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r4_c1",
            "label": "Golden Goldfish",
            "filename": "real_fish_r4_c1.png",
            "src": "/stickers/real_fish/real_fish_r4_c1.png",
            "width": 217,
            "height": 98,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r4_c2",
            "label": "Striped Pilot Fish",
            "filename": "real_fish_r4_c2.png",
            "src": "/stickers/real_fish/real_fish_r4_c2.png",
            "width": 244,
            "height": 86,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r5_c1",
            "label": "Oranda Goldfish",
            "filename": "real_fish_r5_c1.png",
            "src": "/stickers/real_fish/real_fish_r5_c1.png",
            "width": 202,
            "height": 86,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r5_c2",
            "label": "Red Seabream",
            "filename": "real_fish_r5_c2.png",
            "src": "/stickers/real_fish/real_fish_r5_c2.png",
            "width": 220,
            "height": 105,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r6_c1",
            "label": "Silver Roach Carp",
            "filename": "real_fish_r6_c1.png",
            "src": "/stickers/real_fish/real_fish_r6_c1.png",
            "width": 211,
            "height": 79,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r6_c2",
            "label": "Colorful Gourami",
            "filename": "real_fish_r6_c2.png",
            "src": "/stickers/real_fish/real_fish_r6_c2.png",
            "width": 217,
            "height": 97,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r7_c1",
            "label": "Celestial Pearl Danio",
            "filename": "real_fish_r7_c1.png",
            "src": "/stickers/real_fish/real_fish_r7_c1.png",
            "width": 234,
            "height": 81,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r7_c2",
            "label": "Blue Mackerel Real",
            "filename": "real_fish_r7_c2.png",
            "src": "/stickers/real_fish/real_fish_r7_c2.png",
            "width": 240,
            "height": 49,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r8_c1",
            "label": "Bright Orange Goldfish",
            "filename": "real_fish_r8_c1.png",
            "src": "/stickers/real_fish/real_fish_r8_c1.png",
            "width": 178,
            "height": 80,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r8_c2",
            "label": "Deep Red Coral Grouper",
            "filename": "real_fish_r8_c2.png",
            "src": "/stickers/real_fish/real_fish_r8_c2.png",
            "width": 253,
            "height": 87,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r9_c1",
            "label": "Peacock Cichlid",
            "filename": "real_fish_r9_c1.png",
            "src": "/stickers/real_fish/real_fish_r9_c1.png",
            "width": 251,
            "height": 114,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          },
          {
            "id": "real_fish_r9_c2",
            "label": "Fancy Tail Guppy",
            "filename": "real_fish_r9_c2.png",
            "src": "/stickers/real_fish/real_fish_r9_c2.png",
            "width": 238,
            "height": 99,
            "pack_id": "real_fish",
            "subpack_id": "ocean_species"
          }
        ]
      }
    ]
  },
  {
    "id": "reaction_memes",
    "name": "Reaction Memes",
    "icon": "\ud83c\udfad",
    "subpacks": [
      {
        "id": "meme_pack_1",
        "name": "Meme Expressions 1",
        "items": [
          {
            "id": "meme1_r1_c1",
            "label": "Woman Reading Document",
            "filename": "meme1_r1_c1.png",
            "src": "/stickers/memes_1/meme1_r1_c1.png",
            "width": 147,
            "height": 88,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r1_c2",
            "label": "Smug Girl Fur Coat",
            "filename": "meme1_r1_c2.png",
            "src": "/stickers/memes_1/meme1_r1_c2.png",
            "width": 150,
            "height": 111,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r1_c3",
            "label": "Woody Shocked Cowboy",
            "filename": "meme1_r1_c3.png",
            "src": "/stickers/memes_1/meme1_r1_c3.png",
            "width": 78,
            "height": 110,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r2_c1",
            "label": "Woman Towel Hair",
            "filename": "meme1_r2_c1.png",
            "src": "/stickers/memes_1/meme1_r2_c1.png",
            "width": 83,
            "height": 152,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r2_c2",
            "label": "Doja Cat Blonde Smile",
            "filename": "meme1_r2_c2.png",
            "src": "/stickers/memes_1/meme1_r2_c2.png",
            "width": 123,
            "height": 151,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r2_c3",
            "label": "White Chicks Laughing",
            "filename": "meme1_r2_c3.png",
            "src": "/stickers/memes_1/meme1_r2_c3.png",
            "width": 149,
            "height": 146,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r3_c1",
            "label": "Pink Jacket Facepalm",
            "filename": "meme1_r3_c1.png",
            "src": "/stickers/memes_1/meme1_r3_c1.png",
            "width": 147,
            "height": 144,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r3_c2",
            "label": "Curly Hair Pointing Side-Eye",
            "filename": "meme1_r3_c2.png",
            "src": "/stickers/memes_1/meme1_r3_c2.png",
            "width": 144,
            "height": 118,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r3_c3",
            "label": "Shut Up Hand Gesture",
            "filename": "meme1_r3_c3.png",
            "src": "/stickers/memes_1/meme1_r3_c3.png",
            "width": 145,
            "height": 146,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r4_c1",
            "label": "Guy White Tee Shrugging",
            "filename": "meme1_r4_c1.png",
            "src": "/stickers/memes_1/meme1_r4_c1.png",
            "width": 149,
            "height": 147,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r4_c2",
            "label": "Guy Praying Hands Smile",
            "filename": "meme1_r4_c2.png",
            "src": "/stickers/memes_1/meme1_r4_c2.png",
            "width": 146,
            "height": 138,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r4_c3",
            "label": "Prisoner Raised Eyebrow",
            "filename": "meme1_r4_c3.png",
            "src": "/stickers/memes_1/meme1_r4_c3.png",
            "width": 149,
            "height": 125,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r5_c1",
            "label": "Pink Suit Shrug",
            "filename": "meme1_r5_c1.png",
            "src": "/stickers/memes_1/meme1_r5_c1.png",
            "width": 149,
            "height": 128,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r5_c2",
            "label": "Guy Adjusting Sunglasses",
            "filename": "meme1_r5_c2.png",
            "src": "/stickers/memes_1/meme1_r5_c2.png",
            "width": 149,
            "height": 90,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          },
          {
            "id": "meme1_r5_c3",
            "label": "Snoop Dogg Side-Eye",
            "filename": "meme1_r5_c3.png",
            "src": "/stickers/memes_1/meme1_r5_c3.png",
            "width": 100,
            "height": 127,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_1"
          }
        ]
      },
      {
        "id": "meme_pack_2",
        "name": "Meme Expressions 2",
        "items": [
          {
            "id": "meme2_r1_c1",
            "label": "Kid Holding Cross",
            "filename": "meme2_r1_c1.png",
            "src": "/stickers/memes_2/meme2_r1_c1.png",
            "width": 90,
            "height": 179,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r1_c2",
            "label": "FBI Tom Cats",
            "filename": "meme2_r1_c2.png",
            "src": "/stickers/memes_2/meme2_r1_c2.png",
            "width": 166,
            "height": 115,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r1_c3",
            "label": "SpongeBob Under Lamp",
            "filename": "meme2_r1_c3.png",
            "src": "/stickers/memes_2/meme2_r1_c3.png",
            "width": 86,
            "height": 175,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r2_c1",
            "label": "Guy Sipping Tea Sweater",
            "filename": "meme2_r2_c1.png",
            "src": "/stickers/memes_2/meme2_r2_c1.png",
            "width": 171,
            "height": 205,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r2_c2",
            "label": "Animated Woman Yellow Dress",
            "filename": "meme2_r2_c2.png",
            "src": "/stickers/memes_2/meme2_r2_c2.png",
            "width": 135,
            "height": 176,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r2_c3",
            "label": "White Walker Blue Face",
            "filename": "meme2_r2_c3.png",
            "src": "/stickers/memes_2/meme2_r2_c3.png",
            "width": 159,
            "height": 150,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r3_c1",
            "label": "LeBron James Flex",
            "filename": "meme2_r3_c1.png",
            "src": "/stickers/memes_2/meme2_r3_c1.png",
            "width": 184,
            "height": 205,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r3_c2",
            "label": "Naruto Crying Guy",
            "filename": "meme2_r3_c2.png",
            "src": "/stickers/memes_2/meme2_r3_c2.png",
            "width": 135,
            "height": 172,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r3_c3",
            "label": "Guy Leaning Hand Cap",
            "filename": "meme2_r3_c3.png",
            "src": "/stickers/memes_2/meme2_r3_c3.png",
            "width": 165,
            "height": 160,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r4_c1",
            "label": "Cinderella Crying",
            "filename": "meme2_r4_c1.png",
            "src": "/stickers/memes_2/meme2_r4_c1.png",
            "width": 186,
            "height": 205,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r4_c2",
            "label": "Referee Timeout Gesture",
            "filename": "meme2_r4_c2.png",
            "src": "/stickers/memes_2/meme2_r4_c2.png",
            "width": 165,
            "height": 168,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r4_c3",
            "label": "Will Smith Face Swap",
            "filename": "meme2_r4_c3.png",
            "src": "/stickers/memes_2/meme2_r4_c3.png",
            "width": 160,
            "height": 177,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r5_c1",
            "label": "Woman Mask Removal",
            "filename": "meme2_r5_c1.png",
            "src": "/stickers/memes_2/meme2_r5_c1.png",
            "width": 186,
            "height": 205,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r5_c2",
            "label": "Two Guys Waving Dancing",
            "filename": "meme2_r5_c2.png",
            "src": "/stickers/memes_2/meme2_r5_c2.png",
            "width": 166,
            "height": 108,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          },
          {
            "id": "meme2_r5_c3",
            "label": "Confused Guy Looking Down",
            "filename": "meme2_r5_c3.png",
            "src": "/stickers/memes_2/meme2_r5_c3.png",
            "width": 163,
            "height": 116,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_2"
          }
        ]
      },
      {
        "id": "meme_pack_3",
        "name": "Pop Culture & Memes 3",
        "items": [
          {
            "id": "meme3_r1_c1",
            "label": "Lightning McQueen",
            "filename": "meme3_r1_c1.png",
            "src": "/stickers/memes_3/meme3_r1_c1.png",
            "width": 85,
            "height": 71,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r1_c2",
            "label": "Guy Hand Chest Gesture",
            "filename": "meme3_r1_c2.png",
            "src": "/stickers/memes_3/meme3_r1_c2.png",
            "width": 83,
            "height": 75,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r1_c3",
            "label": "Kermit Sad Frog",
            "filename": "meme3_r1_c3.png",
            "src": "/stickers/memes_3/meme3_r1_c3.png",
            "width": 62,
            "height": 85,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r1_c4",
            "label": "Elmo Fire Baby",
            "filename": "meme3_r1_c4.png",
            "src": "/stickers/memes_3/meme3_r1_c4.png",
            "width": 86,
            "height": 88,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r1_c5",
            "label": "Side-Eye Chloe",
            "filename": "meme3_r1_c5.png",
            "src": "/stickers/memes_3/meme3_r1_c5.png",
            "width": 85,
            "height": 84,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r2_c1",
            "label": "Toddler Counting Fingers",
            "filename": "meme3_r2_c1.png",
            "src": "/stickers/memes_3/meme3_r2_c1.png",
            "width": 108,
            "height": 117,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r2_c2",
            "label": "Messy Hair Bed Girl",
            "filename": "meme3_r2_c2.png",
            "src": "/stickers/memes_3/meme3_r2_c2.png",
            "width": 115,
            "height": 119,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r2_c3",
            "label": "Roblox Blonde Girl",
            "filename": "meme3_r2_c3.png",
            "src": "/stickers/memes_3/meme3_r2_c3.png",
            "width": 108,
            "height": 114,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r2_c4",
            "label": "Bratz Dolls Shocked",
            "filename": "meme3_r2_c4.png",
            "src": "/stickers/memes_3/meme3_r2_c4.png",
            "width": 109,
            "height": 109,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r3_c1",
            "label": "Barbie Doll Shocked",
            "filename": "meme3_r3_c1.png",
            "src": "/stickers/memes_3/meme3_r3_c1.png",
            "width": 111,
            "height": 108,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r3_c2",
            "label": "Guy Holding Credit Card",
            "filename": "meme3_r3_c2.png",
            "src": "/stickers/memes_3/meme3_r3_c2.png",
            "width": 110,
            "height": 110,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r3_c3",
            "label": "Dora Haircut Guy Smirk",
            "filename": "meme3_r3_c3.png",
            "src": "/stickers/memes_3/meme3_r3_c3.png",
            "width": 104,
            "height": 118,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r3_c4",
            "label": "Mr Bean GTA Render",
            "filename": "meme3_r3_c4.png",
            "src": "/stickers/memes_3/meme3_r3_c4.png",
            "width": 113,
            "height": 112,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r4_c1",
            "label": "Yellow Towel Stop Hand",
            "filename": "meme3_r4_c1.png",
            "src": "/stickers/memes_3/meme3_r4_c1.png",
            "width": 110,
            "height": 110,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r4_c2",
            "label": "Eye Wide Shocked Hands Head",
            "filename": "meme3_r4_c2.png",
            "src": "/stickers/memes_3/meme3_r4_c2.png",
            "width": 120,
            "height": 120,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r4_c3",
            "label": "Smirking Toddler Yellow Shirt",
            "filename": "meme3_r4_c3.png",
            "src": "/stickers/memes_3/meme3_r4_c3.png",
            "width": 117,
            "height": 120,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r4_c4",
            "label": "CJ GTA Hands Behind Head",
            "filename": "meme3_r4_c4.png",
            "src": "/stickers/memes_3/meme3_r4_c4.png",
            "width": 116,
            "height": 110,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r5_c1",
            "label": "Peter Griffin Telephone",
            "filename": "meme3_r5_c1.png",
            "src": "/stickers/memes_3/meme3_r5_c1.png",
            "width": 126,
            "height": 107,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r5_c2",
            "label": "Barbie Facepalm Sunglasses",
            "filename": "meme3_r5_c2.png",
            "src": "/stickers/memes_3/meme3_r5_c2.png",
            "width": 121,
            "height": 121,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r5_c3",
            "label": "Toddler Sunglasses Thumbs Up",
            "filename": "meme3_r5_c3.png",
            "src": "/stickers/memes_3/meme3_r5_c3.png",
            "width": 123,
            "height": 123,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r5_c4",
            "label": "Traumatized Dog",
            "filename": "meme3_r5_c4.png",
            "src": "/stickers/memes_3/meme3_r5_c4.png",
            "width": 109,
            "height": 117,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r6_c1",
            "label": "Shower Crying Guy",
            "filename": "meme3_r6_c1.png",
            "src": "/stickers/memes_3/meme3_r6_c1.png",
            "width": 118,
            "height": 103,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r6_c2",
            "label": "Girl Looking Over Sunglasses",
            "filename": "meme3_r6_c2.png",
            "src": "/stickers/memes_3/meme3_r6_c2.png",
            "width": 119,
            "height": 117,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r6_c3",
            "label": "1000-Yard Stare Soldier",
            "filename": "meme3_r6_c3.png",
            "src": "/stickers/memes_3/meme3_r6_c3.png",
            "width": 114,
            "height": 112,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r6_c4",
            "label": "Cat Glass Jar",
            "filename": "meme3_r6_c4.png",
            "src": "/stickers/memes_3/meme3_r6_c4.png",
            "width": 123,
            "height": 118,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r7_c1",
            "label": "Asian Girl Facepalm",
            "filename": "meme3_r7_c1.png",
            "src": "/stickers/memes_3/meme3_r7_c1.png",
            "width": 123,
            "height": 116,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r7_c2",
            "label": "Boy Holding Cup Side-Eye",
            "filename": "meme3_r7_c2.png",
            "src": "/stickers/memes_3/meme3_r7_c2.png",
            "width": 124,
            "height": 124,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r7_c3",
            "label": "White Dog Sunglasses",
            "filename": "meme3_r7_c3.png",
            "src": "/stickers/memes_3/meme3_r7_c3.png",
            "width": 98,
            "height": 153,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          },
          {
            "id": "meme3_r7_c4",
            "label": "Roll Safe Guy Thinking",
            "filename": "meme3_r7_c4.png",
            "src": "/stickers/memes_3/meme3_r7_c4.png",
            "width": 131,
            "height": 131,
            "pack_id": "reaction_memes",
            "subpack_id": "meme_pack_3"
          }
        ]
      }
    ]
  }
];

export const STICKERS_LIST = [
  {
    "id": "whale_shark",
    "label": "Whale Shark",
    "filename": "whale_shark.png",
    "width": 164,
    "height": 120,
    "src": "/stickers/whale_shark.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "tomato",
    "label": "Heirloom Tomato",
    "filename": "tomato.png",
    "width": 145,
    "height": 138,
    "src": "/stickers/tomato.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "blueberries",
    "label": "Blueberries Burst",
    "filename": "blueberries.png",
    "width": 188,
    "height": 180,
    "src": "/stickers/blueberries.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "oval_sardines",
    "label": "Oval Sardine Can",
    "filename": "oval_sardines.png",
    "width": 110,
    "height": 174,
    "src": "/stickers/oval_sardines.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "tin_sardines",
    "label": "Red Key Sardine Tin",
    "filename": "tin_sardines.png",
    "width": 149,
    "height": 148,
    "src": "/stickers/tin_sardines.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "fig_slice",
    "label": "Fresh Fig",
    "filename": "fig_slice.png",
    "width": 132,
    "height": 134,
    "src": "/stickers/fig_slice.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "red_goldfish",
    "label": "Red Goldfish",
    "filename": "red_goldfish.png",
    "width": 132,
    "height": 149,
    "src": "/stickers/red_goldfish.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "rainbow_tuna",
    "label": "Rainbow Tuna",
    "filename": "rainbow_tuna.png",
    "width": 233,
    "height": 88,
    "src": "/stickers/rainbow_tuna.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "orange_goldfish",
    "label": "Orange Goldfish",
    "filename": "orange_goldfish.png",
    "width": 157,
    "height": 128,
    "src": "/stickers/orange_goldfish.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "salmon",
    "label": "Pink Salmon",
    "filename": "salmon.png",
    "width": 238,
    "height": 83,
    "src": "/stickers/salmon.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "pomegranate",
    "label": "Ripe Pomegranate",
    "filename": "pomegranate.png",
    "width": 136,
    "height": 139,
    "src": "/stickers/pomegranate.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "mango",
    "label": "Sweet Mango",
    "filename": "mango.png",
    "width": 149,
    "height": 133,
    "src": "/stickers/mango.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "yellow_sardine",
    "label": "Yellow Sardine",
    "filename": "yellow_sardine.png",
    "width": 246,
    "height": 77,
    "src": "/stickers/yellow_sardine.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "peeled_orange",
    "label": "Peeled Clementine",
    "filename": "peeled_orange.png",
    "width": 142,
    "height": 113,
    "src": "/stickers/peeled_orange.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "crane_bird",
    "label": "Star Crane Bird",
    "filename": "crane_bird.png",
    "width": 123,
    "height": 178,
    "src": "/stickers/crane_bird.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "blue_mackerel",
    "label": "Blue Mackerel",
    "filename": "blue_mackerel.png",
    "width": 245,
    "height": 74,
    "src": "/stickers/blue_mackerel.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "vertical_fish_trio",
    "label": "Colorful Fish Trio",
    "filename": "vertical_fish_trio.png",
    "width": 134,
    "height": 219,
    "src": "/stickers/vertical_fish_trio.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "yellow_bell_pepper",
    "label": "Yellow Bell Pepper",
    "filename": "yellow_bell_pepper.png",
    "width": 197,
    "height": 217,
    "src": "/stickers/yellow_bell_pepper.png",
    "pack_id": "zine_art",
    "subpack_id": "zine_hand_drawn"
  },
  {
    "id": "real_fish_r1_c1",
    "label": "Orange Zebra Fish",
    "filename": "real_fish_r1_c1.png",
    "src": "/stickers/real_fish/real_fish_r1_c1.png",
    "width": 196,
    "height": 68,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r1_c2",
    "label": "Red Mullet Goatfish",
    "filename": "real_fish_r1_c2.png",
    "src": "/stickers/real_fish/real_fish_r1_c2.png",
    "width": 266,
    "height": 94,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r2_c1",
    "label": "Ram Cichlid",
    "filename": "real_fish_r2_c1.png",
    "src": "/stickers/real_fish/real_fish_r2_c1.png",
    "width": 218,
    "height": 102,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r2_c2",
    "label": "Black Striped Angelfish",
    "filename": "real_fish_r2_c2.png",
    "src": "/stickers/real_fish/real_fish_r2_c2.png",
    "width": 217,
    "height": 104,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r3_c1",
    "label": "Neon Tetra",
    "filename": "real_fish_r3_c1.png",
    "src": "/stickers/real_fish/real_fish_r3_c1.png",
    "width": 215,
    "height": 66,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r3_c2",
    "label": "Sea Bream Porgy",
    "filename": "real_fish_r3_c2.png",
    "src": "/stickers/real_fish/real_fish_r3_c2.png",
    "width": 229,
    "height": 93,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r4_c1",
    "label": "Golden Goldfish",
    "filename": "real_fish_r4_c1.png",
    "src": "/stickers/real_fish/real_fish_r4_c1.png",
    "width": 217,
    "height": 98,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r4_c2",
    "label": "Striped Pilot Fish",
    "filename": "real_fish_r4_c2.png",
    "src": "/stickers/real_fish/real_fish_r4_c2.png",
    "width": 244,
    "height": 86,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r5_c1",
    "label": "Oranda Goldfish",
    "filename": "real_fish_r5_c1.png",
    "src": "/stickers/real_fish/real_fish_r5_c1.png",
    "width": 202,
    "height": 86,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r5_c2",
    "label": "Red Seabream",
    "filename": "real_fish_r5_c2.png",
    "src": "/stickers/real_fish/real_fish_r5_c2.png",
    "width": 220,
    "height": 105,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r6_c1",
    "label": "Silver Roach Carp",
    "filename": "real_fish_r6_c1.png",
    "src": "/stickers/real_fish/real_fish_r6_c1.png",
    "width": 211,
    "height": 79,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r6_c2",
    "label": "Colorful Gourami",
    "filename": "real_fish_r6_c2.png",
    "src": "/stickers/real_fish/real_fish_r6_c2.png",
    "width": 217,
    "height": 97,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r7_c1",
    "label": "Celestial Pearl Danio",
    "filename": "real_fish_r7_c1.png",
    "src": "/stickers/real_fish/real_fish_r7_c1.png",
    "width": 234,
    "height": 81,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r7_c2",
    "label": "Blue Mackerel Real",
    "filename": "real_fish_r7_c2.png",
    "src": "/stickers/real_fish/real_fish_r7_c2.png",
    "width": 240,
    "height": 49,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r8_c1",
    "label": "Bright Orange Goldfish",
    "filename": "real_fish_r8_c1.png",
    "src": "/stickers/real_fish/real_fish_r8_c1.png",
    "width": 178,
    "height": 80,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r8_c2",
    "label": "Deep Red Coral Grouper",
    "filename": "real_fish_r8_c2.png",
    "src": "/stickers/real_fish/real_fish_r8_c2.png",
    "width": 253,
    "height": 87,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r9_c1",
    "label": "Peacock Cichlid",
    "filename": "real_fish_r9_c1.png",
    "src": "/stickers/real_fish/real_fish_r9_c1.png",
    "width": 251,
    "height": 114,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "real_fish_r9_c2",
    "label": "Fancy Tail Guppy",
    "filename": "real_fish_r9_c2.png",
    "src": "/stickers/real_fish/real_fish_r9_c2.png",
    "width": 238,
    "height": 99,
    "pack_id": "real_fish",
    "subpack_id": "ocean_species"
  },
  {
    "id": "meme1_r1_c1",
    "label": "Woman Reading Document",
    "filename": "meme1_r1_c1.png",
    "src": "/stickers/memes_1/meme1_r1_c1.png",
    "width": 147,
    "height": 88,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r1_c2",
    "label": "Smug Girl Fur Coat",
    "filename": "meme1_r1_c2.png",
    "src": "/stickers/memes_1/meme1_r1_c2.png",
    "width": 150,
    "height": 111,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r1_c3",
    "label": "Woody Shocked Cowboy",
    "filename": "meme1_r1_c3.png",
    "src": "/stickers/memes_1/meme1_r1_c3.png",
    "width": 78,
    "height": 110,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r2_c1",
    "label": "Woman Towel Hair",
    "filename": "meme1_r2_c1.png",
    "src": "/stickers/memes_1/meme1_r2_c1.png",
    "width": 83,
    "height": 152,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r2_c2",
    "label": "Doja Cat Blonde Smile",
    "filename": "meme1_r2_c2.png",
    "src": "/stickers/memes_1/meme1_r2_c2.png",
    "width": 123,
    "height": 151,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r2_c3",
    "label": "White Chicks Laughing",
    "filename": "meme1_r2_c3.png",
    "src": "/stickers/memes_1/meme1_r2_c3.png",
    "width": 149,
    "height": 146,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r3_c1",
    "label": "Pink Jacket Facepalm",
    "filename": "meme1_r3_c1.png",
    "src": "/stickers/memes_1/meme1_r3_c1.png",
    "width": 147,
    "height": 144,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r3_c2",
    "label": "Curly Hair Pointing Side-Eye",
    "filename": "meme1_r3_c2.png",
    "src": "/stickers/memes_1/meme1_r3_c2.png",
    "width": 144,
    "height": 118,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r3_c3",
    "label": "Shut Up Hand Gesture",
    "filename": "meme1_r3_c3.png",
    "src": "/stickers/memes_1/meme1_r3_c3.png",
    "width": 145,
    "height": 146,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r4_c1",
    "label": "Guy White Tee Shrugging",
    "filename": "meme1_r4_c1.png",
    "src": "/stickers/memes_1/meme1_r4_c1.png",
    "width": 149,
    "height": 147,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r4_c2",
    "label": "Guy Praying Hands Smile",
    "filename": "meme1_r4_c2.png",
    "src": "/stickers/memes_1/meme1_r4_c2.png",
    "width": 146,
    "height": 138,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r4_c3",
    "label": "Prisoner Raised Eyebrow",
    "filename": "meme1_r4_c3.png",
    "src": "/stickers/memes_1/meme1_r4_c3.png",
    "width": 149,
    "height": 125,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r5_c1",
    "label": "Pink Suit Shrug",
    "filename": "meme1_r5_c1.png",
    "src": "/stickers/memes_1/meme1_r5_c1.png",
    "width": 149,
    "height": 128,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r5_c2",
    "label": "Guy Adjusting Sunglasses",
    "filename": "meme1_r5_c2.png",
    "src": "/stickers/memes_1/meme1_r5_c2.png",
    "width": 149,
    "height": 90,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme1_r5_c3",
    "label": "Snoop Dogg Side-Eye",
    "filename": "meme1_r5_c3.png",
    "src": "/stickers/memes_1/meme1_r5_c3.png",
    "width": 100,
    "height": 127,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_1"
  },
  {
    "id": "meme2_r1_c1",
    "label": "Kid Holding Cross",
    "filename": "meme2_r1_c1.png",
    "src": "/stickers/memes_2/meme2_r1_c1.png",
    "width": 90,
    "height": 179,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r1_c2",
    "label": "FBI Tom Cats",
    "filename": "meme2_r1_c2.png",
    "src": "/stickers/memes_2/meme2_r1_c2.png",
    "width": 166,
    "height": 115,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r1_c3",
    "label": "SpongeBob Under Lamp",
    "filename": "meme2_r1_c3.png",
    "src": "/stickers/memes_2/meme2_r1_c3.png",
    "width": 86,
    "height": 175,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r2_c1",
    "label": "Guy Sipping Tea Sweater",
    "filename": "meme2_r2_c1.png",
    "src": "/stickers/memes_2/meme2_r2_c1.png",
    "width": 171,
    "height": 205,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r2_c2",
    "label": "Animated Woman Yellow Dress",
    "filename": "meme2_r2_c2.png",
    "src": "/stickers/memes_2/meme2_r2_c2.png",
    "width": 135,
    "height": 176,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r2_c3",
    "label": "White Walker Blue Face",
    "filename": "meme2_r2_c3.png",
    "src": "/stickers/memes_2/meme2_r2_c3.png",
    "width": 159,
    "height": 150,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r3_c1",
    "label": "LeBron James Flex",
    "filename": "meme2_r3_c1.png",
    "src": "/stickers/memes_2/meme2_r3_c1.png",
    "width": 184,
    "height": 205,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r3_c2",
    "label": "Naruto Crying Guy",
    "filename": "meme2_r3_c2.png",
    "src": "/stickers/memes_2/meme2_r3_c2.png",
    "width": 135,
    "height": 172,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r3_c3",
    "label": "Guy Leaning Hand Cap",
    "filename": "meme2_r3_c3.png",
    "src": "/stickers/memes_2/meme2_r3_c3.png",
    "width": 165,
    "height": 160,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r4_c1",
    "label": "Cinderella Crying",
    "filename": "meme2_r4_c1.png",
    "src": "/stickers/memes_2/meme2_r4_c1.png",
    "width": 186,
    "height": 205,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r4_c2",
    "label": "Referee Timeout Gesture",
    "filename": "meme2_r4_c2.png",
    "src": "/stickers/memes_2/meme2_r4_c2.png",
    "width": 165,
    "height": 168,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r4_c3",
    "label": "Will Smith Face Swap",
    "filename": "meme2_r4_c3.png",
    "src": "/stickers/memes_2/meme2_r4_c3.png",
    "width": 160,
    "height": 177,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r5_c1",
    "label": "Woman Mask Removal",
    "filename": "meme2_r5_c1.png",
    "src": "/stickers/memes_2/meme2_r5_c1.png",
    "width": 186,
    "height": 205,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r5_c2",
    "label": "Two Guys Waving Dancing",
    "filename": "meme2_r5_c2.png",
    "src": "/stickers/memes_2/meme2_r5_c2.png",
    "width": 166,
    "height": 108,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme2_r5_c3",
    "label": "Confused Guy Looking Down",
    "filename": "meme2_r5_c3.png",
    "src": "/stickers/memes_2/meme2_r5_c3.png",
    "width": 163,
    "height": 116,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_2"
  },
  {
    "id": "meme3_r1_c1",
    "label": "Lightning McQueen",
    "filename": "meme3_r1_c1.png",
    "src": "/stickers/memes_3/meme3_r1_c1.png",
    "width": 85,
    "height": 71,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r1_c2",
    "label": "Guy Hand Chest Gesture",
    "filename": "meme3_r1_c2.png",
    "src": "/stickers/memes_3/meme3_r1_c2.png",
    "width": 83,
    "height": 75,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r1_c3",
    "label": "Kermit Sad Frog",
    "filename": "meme3_r1_c3.png",
    "src": "/stickers/memes_3/meme3_r1_c3.png",
    "width": 62,
    "height": 85,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r1_c4",
    "label": "Elmo Fire Baby",
    "filename": "meme3_r1_c4.png",
    "src": "/stickers/memes_3/meme3_r1_c4.png",
    "width": 86,
    "height": 88,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r1_c5",
    "label": "Side-Eye Chloe",
    "filename": "meme3_r1_c5.png",
    "src": "/stickers/memes_3/meme3_r1_c5.png",
    "width": 85,
    "height": 84,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r2_c1",
    "label": "Toddler Counting Fingers",
    "filename": "meme3_r2_c1.png",
    "src": "/stickers/memes_3/meme3_r2_c1.png",
    "width": 108,
    "height": 117,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r2_c2",
    "label": "Messy Hair Bed Girl",
    "filename": "meme3_r2_c2.png",
    "src": "/stickers/memes_3/meme3_r2_c2.png",
    "width": 115,
    "height": 119,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r2_c3",
    "label": "Roblox Blonde Girl",
    "filename": "meme3_r2_c3.png",
    "src": "/stickers/memes_3/meme3_r2_c3.png",
    "width": 108,
    "height": 114,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r2_c4",
    "label": "Bratz Dolls Shocked",
    "filename": "meme3_r2_c4.png",
    "src": "/stickers/memes_3/meme3_r2_c4.png",
    "width": 109,
    "height": 109,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r3_c1",
    "label": "Barbie Doll Shocked",
    "filename": "meme3_r3_c1.png",
    "src": "/stickers/memes_3/meme3_r3_c1.png",
    "width": 111,
    "height": 108,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r3_c2",
    "label": "Guy Holding Credit Card",
    "filename": "meme3_r3_c2.png",
    "src": "/stickers/memes_3/meme3_r3_c2.png",
    "width": 110,
    "height": 110,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r3_c3",
    "label": "Dora Haircut Guy Smirk",
    "filename": "meme3_r3_c3.png",
    "src": "/stickers/memes_3/meme3_r3_c3.png",
    "width": 104,
    "height": 118,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r3_c4",
    "label": "Mr Bean GTA Render",
    "filename": "meme3_r3_c4.png",
    "src": "/stickers/memes_3/meme3_r3_c4.png",
    "width": 113,
    "height": 112,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r4_c1",
    "label": "Yellow Towel Stop Hand",
    "filename": "meme3_r4_c1.png",
    "src": "/stickers/memes_3/meme3_r4_c1.png",
    "width": 110,
    "height": 110,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r4_c2",
    "label": "Eye Wide Shocked Hands Head",
    "filename": "meme3_r4_c2.png",
    "src": "/stickers/memes_3/meme3_r4_c2.png",
    "width": 120,
    "height": 120,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r4_c3",
    "label": "Smirking Toddler Yellow Shirt",
    "filename": "meme3_r4_c3.png",
    "src": "/stickers/memes_3/meme3_r4_c3.png",
    "width": 117,
    "height": 120,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r4_c4",
    "label": "CJ GTA Hands Behind Head",
    "filename": "meme3_r4_c4.png",
    "src": "/stickers/memes_3/meme3_r4_c4.png",
    "width": 116,
    "height": 110,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r5_c1",
    "label": "Peter Griffin Telephone",
    "filename": "meme3_r5_c1.png",
    "src": "/stickers/memes_3/meme3_r5_c1.png",
    "width": 126,
    "height": 107,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r5_c2",
    "label": "Barbie Facepalm Sunglasses",
    "filename": "meme3_r5_c2.png",
    "src": "/stickers/memes_3/meme3_r5_c2.png",
    "width": 121,
    "height": 121,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r5_c3",
    "label": "Toddler Sunglasses Thumbs Up",
    "filename": "meme3_r5_c3.png",
    "src": "/stickers/memes_3/meme3_r5_c3.png",
    "width": 123,
    "height": 123,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r5_c4",
    "label": "Traumatized Dog",
    "filename": "meme3_r5_c4.png",
    "src": "/stickers/memes_3/meme3_r5_c4.png",
    "width": 109,
    "height": 117,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r6_c1",
    "label": "Shower Crying Guy",
    "filename": "meme3_r6_c1.png",
    "src": "/stickers/memes_3/meme3_r6_c1.png",
    "width": 118,
    "height": 103,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r6_c2",
    "label": "Girl Looking Over Sunglasses",
    "filename": "meme3_r6_c2.png",
    "src": "/stickers/memes_3/meme3_r6_c2.png",
    "width": 119,
    "height": 117,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r6_c3",
    "label": "1000-Yard Stare Soldier",
    "filename": "meme3_r6_c3.png",
    "src": "/stickers/memes_3/meme3_r6_c3.png",
    "width": 114,
    "height": 112,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r6_c4",
    "label": "Cat Glass Jar",
    "filename": "meme3_r6_c4.png",
    "src": "/stickers/memes_3/meme3_r6_c4.png",
    "width": 123,
    "height": 118,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r7_c1",
    "label": "Asian Girl Facepalm",
    "filename": "meme3_r7_c1.png",
    "src": "/stickers/memes_3/meme3_r7_c1.png",
    "width": 123,
    "height": 116,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r7_c2",
    "label": "Boy Holding Cup Side-Eye",
    "filename": "meme3_r7_c2.png",
    "src": "/stickers/memes_3/meme3_r7_c2.png",
    "width": 124,
    "height": 124,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r7_c3",
    "label": "White Dog Sunglasses",
    "filename": "meme3_r7_c3.png",
    "src": "/stickers/memes_3/meme3_r7_c3.png",
    "width": 98,
    "height": 153,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  },
  {
    "id": "meme3_r7_c4",
    "label": "Roll Safe Guy Thinking",
    "filename": "meme3_r7_c4.png",
    "src": "/stickers/memes_3/meme3_r7_c4.png",
    "width": 131,
    "height": 131,
    "pack_id": "reaction_memes",
    "subpack_id": "meme_pack_3"
  }
];








// --- Template Bundles (one pick = both strip + report) ---
const TEMPLATE_BUNDLES = [
  {
    id: "classic",
    name: "Classic Maple",
    icon: "🍁",
    desc: "Warm orange & cream",
    bg: "#FFF6EE",
    bgDot: "rgba(61, 43, 31, 0.12)",
    accent: "#FF5722",
    accentHover: "#E85D3D",
    accentLight: "#FFEDE0",
    accentLighter: "#FFF3E9",
    rail: "#2A1B12",
    dark: "#3D2B1F",
    darkMid: "#7A5C46",
    darkLight: "#A9876F",
    tapeColors: ["#FFE066", "#FFA07A", "#A8E6CF"],
    starColor: "#FFD166",
    footerBg: "#3D2B1F",
    footerText: "#FFC107",
    sparkle: "#FFFFFF",
    headerTextSub: "#FFE8D6",
    reportAccent: "#FF7A3D",
    reportNoteBg: "#FFF3E9",
    reportNoteTape: "#FFDBC0",
    reportNoteText: "#5A3E2B",
    reportFooterStar: "#FFDBC0",
    swatches: ["#FFF6EE", "#FF5722", "#2A1B12"],
  },
  {
    id: "autumn",
    name: "Autumn Harvest",
    icon: "🍂",
    desc: "Burgundy & forest gold",
    bg: "#FFF5F0",
    bgDot: "rgba(59, 31, 31, 0.10)",
    accent: "#8B2252",
    accentHover: "#6B1A3F",
    accentLight: "#F5D6E0",
    accentLighter: "#FFF0F3",
    rail: "#2D1B0E",
    dark: "#3B1F1F",
    darkMid: "#7A4A4A",
    darkLight: "#A07060",
    tapeColors: ["#D4A055", "#C07850", "#7BA05B"],
    starColor: "#D4A055",
    footerBg: "#3B1F1F",
    footerText: "#D4A055",
    sparkle: "#FFF0F3",
    headerTextSub: "#F5D6E0",
    reportAccent: "#8B2252",
    reportNoteBg: "#FFF0F3",
    reportNoteTape: "#F5D6E0",
    reportNoteText: "#5A2B3B",
    reportFooterStar: "#F5D6E0",
    swatches: ["#FFF5F0", "#8B2252", "#2D1B0E"],
  },
  {
    id: "sunrise",
    name: "Sunrise Gold",
    icon: "🌅",
    desc: "Golden amber & peach",
    bg: "#FFFBF0",
    bgDot: "rgba(74, 53, 32, 0.10)",
    accent: "#D4A017",
    accentHover: "#B8890F",
    accentLight: "#FFECC0",
    accentLighter: "#FFF8E8",
    rail: "#3D2B1F",
    dark: "#4A3520",
    darkMid: "#7A6040",
    darkLight: "#A89070",
    tapeColors: ["#FFD4A0", "#F0A070", "#FFB0C0"],
    starColor: "#FFD060",
    footerBg: "#4A3520",
    footerText: "#FFD060",
    sparkle: "#FFFBF0",
    headerTextSub: "#FFECC0",
    reportAccent: "#D4A017",
    reportNoteBg: "#FFF8E8",
    reportNoteTape: "#FFECC0",
    reportNoteText: "#5A4020",
    reportFooterStar: "#FFECC0",
    swatches: ["#FFFBF0", "#D4A017", "#3D2B1F"],
  },
  {
    id: "oceanic",
    name: "Oceanic Teal",
    icon: "🌊",
    desc: "Teal & warm coral",
    bg: "#F0FAFA",
    bgDot: "rgba(26, 58, 58, 0.10)",
    accent: "#1A8A7D",
    accentHover: "#147568",
    accentLight: "#C0EDE8",
    accentLighter: "#E8F8F5",
    rail: "#1A3A3A",
    dark: "#1A3A3A",
    darkMid: "#4A7A7A",
    darkLight: "#70A0A0",
    tapeColors: ["#FF9A8C", "#90D4E8", "#A8E6CF"],
    starColor: "#FF9A8C",
    footerBg: "#1A3A3A",
    footerText: "#FF9A8C",
    sparkle: "#F0FAFA",
    headerTextSub: "#C0EDE8",
    reportAccent: "#1A8A7D",
    reportNoteBg: "#E8F8F5",
    reportNoteTape: "#C0EDE8",
    reportNoteText: "#1A4A4A",
    reportFooterStar: "#C0EDE8",
    swatches: ["#F0FAFA", "#1A8A7D", "#1A3A3A"],
  },
];

function getTemplateBundle(templateId) {
  return TEMPLATE_BUNDLES.find((t) => t.id === templateId) || TEMPLATE_BUNDLES[0];
}

// --- Supabase Storage Config ---
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hdhvrlkizorscvehttzd.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaHZybGtpem9yc2N2ZWh0dHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyNjMwNzIsImV4cCI6MjA5MjgzOTA3Mn0.m6L3oEVAfyp2TjYmBCfDRo_30rdsWLEsGVZzRZIy3MU";
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET || "booth-photos";

async function uploadImageToSupabase(canvas, folder, fileName) {
  try {
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) return null;

    const filePath = `${folder}/${fileName}`;
    const res = await fetch(
      `${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filePath}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          apikey: SUPABASE_ANON_KEY,
          "Content-Type": "image/png",
          "x-upsert": "true",
        },
        body: blob,
      }
    );

    if (!res.ok) {
      console.error("Upload failed", await res.text());
      return null;
    }

    return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${filePath}`;
  } catch (err) {
    console.error("Upload error", err);
    return null;
  }
}

// --- 1. Photobooth Strip Canvas Generator (MAPLE 2026 Brand & Y2K Layout) ---
function generateStripCanvas(canvas, { name, cohort, faculty, userPhotos = [], filterKey = "none", placedStickers = [], templateId = "classic" }, callback) {
  const ctx = canvas.getContext("2d");
  const T = getTemplateBundle(templateId);
  const W = 640;
  const H = 1540;
  canvas.width = W;
  canvas.height = H;

  // 1. Background: warm cream + colorful polka dot grid & dots
  ctx.fillStyle = T.bg;
  ctx.fillRect(0, 0, W, H);

  // Background dot pattern
  ctx.fillStyle = T.bgDot;
  for (let px = 14; px < W; px += 22) {
    for (let py = 14; py < H; py += 22) {
      ctx.beginPath();
      ctx.arc(px, py, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Scattered colorful polka dots
  drawColorfulPolkaDots(ctx, W, H);

  // 2. Film strip side rails
  ctx.fillStyle = T.rail;
  ctx.fillRect(0, 0, 36, H);
  ctx.fillRect(W - 36, 0, 36, H);
  ctx.fillStyle = T.bg;
  drawFilmPerforations(ctx, 0, 0, H, "left");
  drawFilmPerforations(ctx, W, 0, H, "right");

  // 3. Header Banner with masking tape & big stars
  const headerY = 38;
  const headerH = 125;
  
  // Header shadow
  ctx.fillStyle = T.rail;
  drawRoundedRect(ctx, 52, headerY + 5, W - 104, headerH, 20);
  ctx.fill();

  // Header main body
  ctx.fillStyle = T.accent;
  drawRoundedRect(ctx, 48, headerY, W - 96, headerH, 20);
  ctx.fill();
  ctx.strokeStyle = T.rail;
  ctx.lineWidth = 4.5;
  drawRoundedRect(ctx, 48, headerY, W - 96, headerH, 20);
  ctx.stroke();

  // Corner Tape Strips
  drawTapeStrip(ctx, 40, headerY - 12, 65, 24, -9, T.tapeColors[0]);
  drawTapeStrip(ctx, W - 105, headerY - 12, 65, 24, 9, T.tapeColors[1]);

  // Header Big Typography
  ctx.fillStyle = T.dark;
  ctx.font = "bold 44px 'Pixelta', cursive, serif";
  ctx.textAlign = "center";
  ctx.fillText("MAPLE 2026", W / 2 + 2, headerY + 54);

  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("MAPLE 2026", W / 2, headerY + 52);

  ctx.font = "900 22px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillText("PHOTOBOOTH STRIP", W / 2, headerY + 80);

  ctx.font = "bold 14px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillStyle = T.headerTextSub;
  ctx.fillText("World Mental Health Day • CIMSA Unsoed", W / 2, headerY + 104);

  drawCanvasStar(ctx, 76, headerY + 62, 18, T.starColor);
  drawCanvasStar(ctx, W - 76, headerY + 62, 18, T.starColor);
  drawCanvasSparkle(ctx, 110, headerY + 36, 12, T.sparkle);
  drawCanvasSparkle(ctx, W - 110, headerY + 36, 12, T.sparkle);

  // 4. 3 Photo Frames
  const frameX = 52;
  const frameW = W - 104;
  const frameH = 380;
  const frameGap = 26;
  const startY = headerY + 135;
  const framePositions = [startY, startY + frameH + frameGap, startY + 2 * (frameH + frameGap)];

  let loadedCount = 0;
  let rendered = false;
  const totalSlots = 3;

  function onSlotDone() {
    loadedCount++;
    if (loadedCount >= totalSlots && !rendered) {
      rendered = true;

      // 5. Footer Banner
      const footerY = framePositions[2] + frameH + 20;
      ctx.fillStyle = T.rail;
      drawRoundedRect(ctx, frameX + 4, footerY + 4, frameW, 46, 16);
      ctx.fill();

      ctx.fillStyle = T.dark;
      drawRoundedRect(ctx, frameX, footerY, frameW, 46, 16);
      ctx.fill();
      ctx.strokeStyle = T.rail;
      ctx.lineWidth = 3;
      drawRoundedRect(ctx, frameX, footerY, frameW, 46, 16);
      ctx.stroke();

      ctx.fillStyle = T.footerText;
      ctx.font = "bold 16px 'Pixelify Sans', monospace, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("MAPLE 2026 ★ CIMSA UNSOED PHOTOBOOTH", W / 2, footerY + 28);

      drawCanvasStar(ctx, frameX + 24, footerY + 23, 12, T.footerText);
      drawCanvasStar(ctx, frameX + frameW - 24, footerY + 23, 12, T.footerText);

      // Draw user placed stickers on canvas
      if (placedStickers && placedStickers.length > 0) {
        let loadedCount = 0;
        const total = placedStickers.length;
        placedStickers.forEach((st) => {
          const img = new Image();
          if (typeof st.src === "string" && st.src.startsWith("http")) {
            img.crossOrigin = "Anonymous";
          }
          const finish = () => {
            loadedCount++;
            if (loadedCount >= total && callback) callback();
          };
          img.onload = () => {
            try {
              ctx.save();
              ctx.translate(st.x, st.y);
              ctx.rotate(((st.rotation || 0) * Math.PI) / 180);
              const drawW = (st.width || 120) * (st.scale || 1);
              const drawH = (st.height || 120) * (st.scale || 1);
              ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
              ctx.restore();
            } catch (err) {
              console.error("Error drawing sticker on strip", err);
            } finally {
              finish();
            }
          };
          img.onerror = finish;
          img.src = st.src;
        });
      } else {
        if (callback) callback();
      }
    }
  }

  for (let i = 0; i < totalSlots; i++) {
    const fy = framePositions[i];
    const photoSrc = userPhotos[i];

    // Frame Shadow
    ctx.fillStyle = T.rail;
    drawRoundedRect(ctx, frameX + 5, fy + 5, frameW, frameH, 18);
    ctx.fill();

    // Frame Main Card
    ctx.fillStyle = T.accentLighter;
    drawRoundedRect(ctx, frameX, fy, frameW, frameH, 18);
    ctx.fill();
    ctx.strokeStyle = T.rail;
    ctx.lineWidth = 4;
    drawRoundedRect(ctx, frameX, fy, frameW, frameH, 18);
    ctx.stroke();

    // Frame Corner Tapes
    const tapeColors = [T.tapeColors[0], T.tapeColors[1], T.tapeColors[2]];
    drawTapeStrip(ctx, frameX - 6, fy - 6, 50, 18, -12, tapeColors[i % 3]);
    drawTapeStrip(ctx, frameX + frameW - 44, fy - 6, 50, 18, 12, tapeColors[(i + 1) % 3]);

    if (photoSrc) {
      let slotDoneCalled = false;
      const safeSlotDone = () => {
        if (!slotDoneCalled) {
          slotDoneCalled = true;
          onSlotDone();
        }
      };

      const img = new Image();
      if (typeof photoSrc === "string" && photoSrc.startsWith("http")) {
        img.crossOrigin = "Anonymous";
      }
      const slotIdx = i;

      const drawSlot = () => {
        try {
          ctx.save();
          drawRoundedRect(ctx, frameX + 10, fy + 10, frameW - 20, frameH - 20, 12);
          ctx.clip();

          const imgR = img.width / img.height;
          const tW = frameW - 20;
          const tH = frameH - 20;
          const tR = tW / tH;
          let sw, sh, sx, sy;
          if (imgR > tR) { sh = img.height; sw = sh * tR; sx = (img.width - sw) / 2; sy = 0; }
          else { sw = img.width; sh = sw / tR; sx = 0; sy = (img.height - sh) / 2; }

          if (filterKey === "pixelated") {
            const off = document.createElement("canvas");
            const scale = 0.12;
            off.width = Math.max(16, Math.floor(tW * scale));
            off.height = Math.max(16, Math.floor(tH * scale));
            const offCtx = off.getContext("2d");
            offCtx.imageSmoothingEnabled = false;
            offCtx.filter = "contrast(135%) saturate(140%)";
            offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, off.width, off.height);

            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(off, 0, 0, off.width, off.height, frameX + 10, fy + 10, tW, tH);
            ctx.imageSmoothingEnabled = true;
          } else {
            applyCanvasFilter(ctx, filterKey);
            ctx.drawImage(img, sx, sy, sw, sh, frameX + 10, fy + 10, tW, tH);
            ctx.filter = "none";
          }

          // Draw Filter Overlays
          if (filterKey === "nightshot") {
            ctx.fillStyle = "rgba(0, 20, 0, 0.22)";
            for (let ly = fy + 10; ly < fy + 10 + tH; ly += 4) {
              ctx.fillRect(frameX + 10, ly, tW, 1.5);
            }
            ctx.fillStyle = "#00FF66";
            ctx.font = "bold 13px 'Pixelify Sans', monospace, sans-serif";
            ctx.textAlign = "left";
            ctx.fillText("NIGHTSHOT NITE 0.0dB", frameX + 22, fy + 34);
            ctx.fillText("REC ●", frameX + tW - 70, fy + 34);
          } else if (filterKey === "vhs") {
            ctx.fillStyle = "rgba(0, 0, 0, 0.16)";
            for (let ly = fy + 10; ly < fy + 10 + tH; ly += 6) {
              ctx.fillRect(frameX + 10, ly, tW, 2);
            }
            ctx.fillStyle = "#00FFFF";
            ctx.font = "bold 13px 'Pixelify Sans', monospace, sans-serif";
            ctx.textAlign = "left";
            ctx.fillText("PLAY ▶ 0:02:16", frameX + 22, fy + 34);
            ctx.fillStyle = "#FFDD00";
            ctx.fillText("SP  SLP", frameX + tW - 70, fy + 34);
          }

          ctx.restore();

          // Pose Stamp Badge
          ctx.fillStyle = T.rail;
          drawRoundedRect(ctx, frameX + 22, fy + frameH - 50, 124, 36, 16);
          ctx.fill();

          ctx.fillStyle = T.accent;
          drawRoundedRect(ctx, frameX + 20, fy + frameH - 52, 124, 36, 16);
          ctx.fill();
          ctx.strokeStyle = T.rail;
          ctx.lineWidth = 2.5;
          drawRoundedRect(ctx, frameX + 20, fy + frameH - 52, 124, 36, 16);
          ctx.stroke();

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 16px 'Pixelify Sans', monospace, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`POSE #${slotIdx + 1}`, frameX + 82, fy + frameH - 28);

          drawCanvasStar(ctx, frameX + frameW - 32, fy + frameH - 32, 13, T.starColor);
          drawCanvasSparkle(ctx, frameX + frameW - 58, fy + frameH - 32, 9, T.sparkle);
        } catch (err) {
          console.error("Error drawing photo slot", err);
        } finally {
          safeSlotDone();
        }
      };

      img.onload = drawSlot;
      img.onerror = safeSlotDone;
      img.src = photoSrc;
      if (img.complete && img.naturalWidth > 0) {
        drawSlot();
      }
    } else {
      ctx.fillStyle = T.accentLighter;
      drawRoundedRect(ctx, frameX + 12, fy + 12, frameW - 24, frameH - 24, 14);
      ctx.fill();
      ctx.fillStyle = T.accent;
      ctx.font = "bold 38px 'Pixelta', cursive, serif";
      ctx.textAlign = "center";
      ctx.fillText(`POSE #${i + 1}`, W / 2, fy + frameH / 2 - 10);
      ctx.font = "700 16px 'Pixelify Sans', monospace, sans-serif";
      ctx.fillStyle = T.darkLight;
      ctx.fillText("Snap your photo!", W / 2, fy + frameH / 2 + 24);
      safeSlotDone();
    }
  }
}

// --- 2. Academic Burnout Report Card Canvas Generator ---
function generateReportCanvas(canvas, { name, cohort, faculty, cat, scores = {}, overall01 = 0, templateId = "classic" }, callback) {
  const ctx = canvas.getContext("2d");
  const T = getTemplateBundle(templateId);
  const W = 640;
  const H = 960;
  canvas.width = W;
  canvas.height = H;

  // Background: warm cream + dot pattern
  ctx.fillStyle = T.bg;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = T.bgDot;
  for (let px = 14; px < W; px += 22) {
    for (let py = 14; py < H; py += 22) {
      ctx.beginPath();
      ctx.arc(px, py, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Outer border frame
  ctx.strokeStyle = T.dark;
  ctx.lineWidth = 5;
  ctx.strokeRect(18, 18, W - 36, H - 36);
  ctx.lineWidth = 1.5;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  // Header Banner
  const headerY = 42;
  ctx.fillStyle = T.reportAccent;
  drawRoundedRect(ctx, 45, headerY, W - 90, 110, 18);
  ctx.fill();
  ctx.strokeStyle = T.dark;
  ctx.lineWidth = 3.5;
  drawRoundedRect(ctx, 45, headerY, W - 90, 110, 18);
  ctx.stroke();

  drawTapeStrip(ctx, 38, headerY - 8, 55, 20, -7, T.reportNoteTape);
  drawTapeStrip(ctx, W - 93, headerY - 8, 55, 20, 7, T.reportNoteTape);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 32px 'Pixelta', cursive, serif";
  ctx.textAlign = "center";
  ctx.fillText("MAPLE 2026", W / 2, headerY + 48);
  ctx.font = "bold 18px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillText("ACADEMIC BURNOUT REPORT", W / 2, headerY + 75);
  ctx.font = "600 13px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillStyle = "#FFE8D6";
  ctx.fillText("World Mental Health Day — CIMSA Unsoed", W / 2, headerY + 96);

  // Student Info Box
  let curY = headerY + 132;
  ctx.fillStyle = T.dark;
  ctx.font = "bold 26px 'Pixelta', cursive, serif";
  ctx.textAlign = "left";
  ctx.fillText(name || "Unsoed Student", 52, curY);

  ctx.font = "600 15px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillStyle = T.darkMid;
  ctx.fillText(`${faculty || "General Faculty"} • Class of ${cohort || "2026"}`, 52, curY + 24);

  // Burnout Level Badge
  const scorePct = Math.round(overall01 * 100);
  const badgeW = 280;
  const badgeH = 44;
  ctx.fillStyle = cat.color;
  drawRoundedRect(ctx, 52, curY + 42, badgeW, badgeH, 22);
  ctx.fill();
  ctx.strokeStyle = T.dark;
  ctx.lineWidth = 2.5;
  drawRoundedRect(ctx, 52, curY + 42, badgeW, badgeH, 22);
  ctx.stroke();

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px 'Pixelify Sans', monospace, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`${cat.label} Burnout (${scorePct}%)`, 52 + badgeW / 2, curY + 71);

  // Dimension Breakdown Bars
  let barY = curY + 114;
  ctx.fillStyle = T.dark;
  ctx.font = "bold 18px 'Pixelta', cursive, serif";
  ctx.textAlign = "left";
  ctx.fillText("Dimension Scores Breakdown:", 52, barY);
  barY += 24;

  dimensions.forEach((dim) => {
    const scoreVal = scores[dim.key] || 0;
    const pct = Math.min(1, Math.max(0, scoreVal / 5));

    // Label & score text
    ctx.fillStyle = T.dark;
    ctx.font = "600 14px 'Pixelify Sans', monospace, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(dim.fullLabel, 52, barY + 14);

    ctx.textAlign = "right";
    ctx.fillText(`${scoreVal.toFixed(1)} / 5.0`, W - 52, barY + 14);

    // Progress Bar Track
    const trackX = 52;
    const trackW = W - 104;
    const trackH = 16;
    ctx.fillStyle = T.reportNoteBg;
    drawRoundedRect(ctx, trackX, barY + 22, trackW, trackH, 8);
    ctx.fill();
    ctx.strokeStyle = T.dark;
    ctx.lineWidth = 2;
    drawRoundedRect(ctx, trackX, barY + 22, trackW, trackH, 8);
    ctx.stroke();

    // Progress Fill
    if (pct > 0) {
      const fillW = Math.max(16, trackW * pct);
      ctx.fillStyle = pct > 0.65 ? "#E85D3D" : pct > 0.4 ? "#F59E0B" : "#50B878";
      drawRoundedRect(ctx, trackX, barY + 22, fillW, trackH, 8);
      ctx.fill();
      ctx.strokeStyle = T.dark;
      ctx.lineWidth = 2;
      drawRoundedRect(ctx, trackX, barY + 22, fillW, trackH, 8);
      ctx.stroke();
    }

    barY += 46;
  });

  // Booth Counseling Note Box
  barY += 10;
  const noteH = 140;
  ctx.fillStyle = T.reportNoteBg;
  drawRoundedRect(ctx, 48, barY, W - 96, noteH, 18);
  ctx.fill();
  ctx.strokeStyle = T.dark;
  ctx.lineWidth = 3;
  drawRoundedRect(ctx, 48, barY, W - 96, noteH, 18);
  ctx.stroke();

  drawTapeStrip(ctx, 42, barY - 6, 50, 16, -5, T.reportNoteTape);
  drawTapeStrip(ctx, W - 92, barY - 6, 50, 16, 5, T.reportNoteTape);

  ctx.fillStyle = T.dark;
  ctx.font = "bold 17px 'Pixelta', cursive, serif";
  ctx.textAlign = "left";
  ctx.fillText("Booth Counseling Note:", 68, barY + 34);

  ctx.font = "500 14px 'Pixelify Sans', monospace, sans-serif";
  ctx.fillStyle = T.reportNoteText;
  drawWrappedText(ctx, cat.tip, 68, barY + 62, W - 136, 20);

  // Footer
  ctx.fillStyle = T.darkMid;
  ctx.font = "600 12px 'Pixelify Sans', monospace, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("WMHD 2026 • CIMSA Unsoed Counseling Services • Not a clinical diagnosis", W / 2, H - 36);

  drawCanvasStar(ctx, 60, H - 38, 8, T.reportNoteTape);
  drawCanvasStar(ctx, W - 60, H - 38, 8, T.reportNoteTape);

  if (callback) callback();
}

const dimensions = [
  {
    key: "ex",
    code: "01",
    label: "Self-Exhaustion",
    fullLabel: "Self-Exhaustion",
    items: [
      "Studying drains my physical and mental energy.",
      "I feel physically exhausted when attending campus classes.",
      "I feel out of energy before the academic day ends.",
    ],
  },
  {
    key: "ntr",
    code: "02",
    label: "Lecturer Relations",
    fullLabel: "Negative Lecturer Relations",
    items: [
      "I find it difficult to communicate openly with my lecturers.",
      "I feel lecturers lack understanding of students' situations.",
      "I avoid asking questions out of fear of lecturer responses.",
    ],
  },
  {
    key: "so",
    code: "03",
    label: "Academic Overload",
    fullLabel: "Subjective Academic Overload",
    items: [
      "My academic workload and assignments feel overwhelming.",
      "I struggle to manage time between multiple assignments.",
      "My coursework feels heavier than I can comfortably manage.",
    ],
  },
  {
    key: "ai",
    code: "04",
    label: "Academic Ineffectiveness",
    fullLabel: "Academic Ineffectiveness",
    items: [
      "I feel my study effort yields no meaningful results.",
      "I doubt my ability to complete my studies successfully.",
      "I feel less competent compared to my peers.",
    ],
  },
  {
    key: "npr",
    code: "05",
    label: "Peer Relations",
    fullLabel: "Negative Peer Relations",
    items: [
      "I feel I receive little support from my classmates.",
      "I feel an unhealthy competition with my peers.",
      "I feel alone when facing academic pressures.",
    ],
  },
];

const likertOptions = [
  { v: 1, label: "Never" },
  { v: 2, label: "Rarely" },
  { v: 3, label: "Sometimes" },
  { v: 4, label: "Often" },
  { v: 5, label: "Always" },
];

const brandInfo = {
  name: "MAPLE 2026",
  tagline: "World Mental Health Day",
  org: "CIMSA Unsoed",
  event: "WMHD 2026",
};

const flatQuestions = dimensions.flatMap((dim) =>
  dim.items.map((text, idx) => ({ dim: dim.key, text, idx }))
);

function getCategory(ratio) {
  if (ratio < 0.4) {
    return {
      label: "Light",
      color: "#50B878",
      tip: "Your condition is manageable. Keep a balanced rhythm of rest and social connection!",
    };
  } else if (ratio < 0.65) {
    return {
      label: "Moderate",
      color: "#F59E0B",
      tip: "A few areas are starting to weigh on you. Try reaching out to a close friend or reorganizing your schedule.",
    };
  } else {
    return {
      label: "High",
      color: "#E85D3D",
      tip: "Your score indicates significant academic burnout. Consider visiting campus counseling services — you are not alone.",
    };
  }
}

// --- Supabase Cloud Sync for Assessment Entries ---
async function saveEntryToSupabase(entry) {
  try {
    const jsonString = JSON.stringify(entry);
    const blob = new Blob([jsonString], { type: "application/json" });
    const filePath = `entries/${entry.ts}_${entry.id}.json`;
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filePath}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: blob,
    });
    return res.ok;
  } catch (err) {
    console.error("Supabase entry save error:", err);
    return false;
  }
}

async function listEntriesFromSupabase() {
  try {
    const res = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${STORAGE_BUCKET}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prefix: "entries/", limit: 500 }),
    });
    if (!res.ok) return [];
    const files = await res.json();
    if (!Array.isArray(files)) return [];

    const jsonFiles = files.filter((f) => f.name && f.name.endsWith(".json"));
    const fetched = await Promise.all(
      jsonFiles.map(async (f) => {
        try {
          const fileRes = await fetch(`${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/entries/${f.name}`, {
            headers: { apikey: SUPABASE_ANON_KEY },
          });
          if (fileRes.ok) return await fileRes.json();
        } catch {}
        return null;
      })
    );
    return fetched.filter(Boolean);
  } catch (err) {
    console.error("Supabase entry list error:", err);
    return [];
  }
}

const STORAGE_PREFIX = "maple_entry_";
const OLD_STORAGE_PREFIX = "sehatin_entry_";

async function saveEntry(entry) {
  try {
    localStorage.setItem(STORAGE_PREFIX + entry.id, JSON.stringify(entry));
    saveEntryToSupabase(entry);
    return true;
  } catch (err) {
    console.error("save failed", err);
    return false;
  }
}

async function listEntries() {
  try {
    const localList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith(STORAGE_PREFIX) || key.startsWith(OLD_STORAGE_PREFIX))) {
        try {
          const item = localStorage.getItem(key);
          if (item) localList.push(JSON.parse(item));
        } catch {}
      }
    }

    const cloudList = await listEntriesFromSupabase();
    const map = new Map();
    [...localList, ...cloudList].forEach((e) => {
      if (e && e.id) map.set(e.id, e);
    });

    const combined = Array.from(map.values());
    return combined.sort((a, b) => (b.ts || 0) - (a.ts || 0));
  } catch (err) {
    console.error("list failed", err);
    return [];
  }
}

const filterOptions = [
  { key: "none", label: "Normal", css: "none" },
  { key: "bw", label: "Black & White 🎞️", css: "grayscale(100%) contrast(125%)" },
  { key: "nightshot", label: "Nightshot 📹", css: "grayscale(100%) sepia(100%) hue-rotate(85deg) saturate(600%) contrast(150%) brightness(110%)" },
  { key: "vhs", label: "VHS Retro 📼", css: "contrast(130%) saturate(220%) hue-rotate(-10deg) sepia(25%) brightness(105%)" },
  { key: "pixelated", label: "Pixelated 👾", css: "contrast(135%) saturate(140%)" },
  { key: "sepia", label: "Sepia Retro", css: "sepia(85%) contrast(110%)" },
  { key: "pop", label: "Pop Art", css: "contrast(150%) saturate(150%)" },
  { key: "warm", label: "Warm Film", css: "brightness(105%) sepia(25%) saturate(125%)" },
];

// --- Real QR Code via 'qrcode' library ---

function QRCodeSvg({ value = "https://sehatin-booth.vercel.app", size = 120 }) {
  const [dataUrl, setDataUrl] = useState(null);
  React.useEffect(() => {
    QRCodeLib.toDataURL(value, {
      width: size * 2,
      margin: 2,
      color: { dark: "#3D2B1F", light: "#FFFFFF" },
      errorCorrectionLevel: "M",
    }).then(setDataUrl).catch(() => {});
  }, [value, size]);

  if (!dataUrl) return null;
  return (
    <img
      src={dataUrl}
      alt="QR Code"
      width={size}
      height={size}
      style={{ borderRadius: 10, border: "2.5px solid #3D2B1F", background: "#FFF" }}
    />
  );
}

async function drawQRCodeOnCanvas(ctx, value, x, y, size) {
  try {
    const dataUrl = await QRCodeLib.toDataURL(value, {
      width: size,
      margin: 2,
      color: { dark: "#3D2B1F", light: "#FFFFFF" },
      errorCorrectionLevel: "M",
    });
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, x, y, size, size);
        ctx.strokeStyle = "#3D2B1F";
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y, size, size);
        resolve();
      };
      img.src = dataUrl;
    });
  } catch {
    // fallback: draw placeholder box
    ctx.fillStyle = "#EEE";
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = "#3D2B1F";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, size, size);
    ctx.fillStyle = "#3D2B1F";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("QR Error", x + size / 2, y + size / 2);
  }
}

// --- Canvas Helpers ---
function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    if (ctx.measureText(testLine).width > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + " ";
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY;
}

function applyCanvasFilter(ctx, filterKey) {
  const filters = {
    bw: "grayscale(100%) contrast(125%)",
    nightshot: "grayscale(100%) sepia(100%) hue-rotate(85deg) saturate(600%) contrast(150%) brightness(110%)",
    vhs: "contrast(130%) saturate(220%) hue-rotate(-10deg) sepia(25%) brightness(105%)",
    pixelated: "contrast(135%) saturate(140%)",
    sepia: "sepia(85%) contrast(110%)",
    pop: "contrast(150%) saturate(150%)",
    warm: "brightness(105%) sepia(25%) saturate(125%)",
  };
  ctx.filter = filters[filterKey] || "none";
}

// --- Canvas: Draw Zine Doodle Elements ---
function drawCanvasStar(ctx, cx, cy, r, fill) {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = "#3D2B1F";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const a = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const aInner = a + Math.PI / 5;
    ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    ctx.lineTo(cx + r * 0.4 * Math.cos(aInner), cy + r * 0.4 * Math.sin(aInner));
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawCanvasSparkle(ctx, cx, cy, r, fill) {
  ctx.save();
  ctx.fillStyle = fill;
  ctx.strokeStyle = "#3D2B1F";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.quadraticCurveTo(cx, cy, cx + r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy + r);
  ctx.quadraticCurveTo(cx, cy, cx - r, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy - r);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawColorfulPolkaDots(ctx, W, H) {
  const colors = ["#FF5722", "#FFC107", "#00BCD4", "#E91E63", "#4CAF50", "#FF9800"];
  const dots = [
    { x: 44, y: 30, r: 6, c: 0 }, { x: 596, y: 30, r: 7, c: 1 },
    { x: 42, y: 170, r: 5, c: 2 }, { x: 598, y: 170, r: 6, c: 3 },
    { x: 45, y: 340, r: 7, c: 4 }, { x: 595, y: 340, r: 5, c: 0 },
    { x: 40, y: 560, r: 6, c: 1 }, { x: 600, y: 560, r: 7, c: 2 },
    { x: 44, y: 740, r: 5, c: 3 }, { x: 596, y: 740, r: 6, c: 4 },
    { x: 42, y: 960, r: 7, c: 0 }, { x: 598, y: 960, r: 5, c: 1 },
    { x: 45, y: 1160, r: 6, c: 2 }, { x: 595, y: 1160, r: 7, c: 3 },
    { x: 40, y: 1380, r: 5, c: 4 }, { x: 600, y: 1380, r: 6, c: 0 },
    { x: 44, y: 1500, r: 7, c: 1 }, { x: 596, y: 1500, r: 5, c: 2 },
    { x: 120, y: 175, r: 5, c: 0 }, { x: 520, y: 175, r: 6, c: 1 },
    { x: 80, y: 585, r: 7, c: 2 }, { x: 560, y: 585, r: 5, c: 3 },
    { x: 90, y: 995, r: 6, c: 4 }, { x: 550, y: 995, r: 7, c: 0 },
    { x: 110, y: 1405, r: 5, c: 1 }, { x: 530, y: 1405, r: 6, c: 2 },
  ];

  dots.forEach(({ x, y, r, c }) => {
    ctx.save();
    ctx.fillStyle = colors[c % colors.length];
    ctx.strokeStyle = "#3D2B1F";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
}

function drawTapeStrip(ctx, x, y, w, h, angle, color) {
  ctx.save();
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.7;
  ctx.fillRect(-w / 2, -h / 2, w, h);
  // tape texture lines
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1;
  for (let i = -w / 2 + 6; i < w / 2; i += 8) {
    ctx.beginPath();
    ctx.moveTo(i, -h / 2);
    ctx.lineTo(i, h / 2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawFilmPerforations(ctx, x, y, height, side) {
  const perfW = 14;
  const perfH = 20;
  const gap = 36;
  ctx.fillStyle = "#3D2B1F";
  for (let py = y + 20; py < y + height - 20; py += gap) {
    const px = side === "left" ? x + 6 : x - 20;
    drawRoundedRect(ctx, px, py, perfW, perfH, 4);
    ctx.fill();
  }
}



function RadarChart({ scores, size = 320 }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 62;
  const count = dimensions.length;

  const points = dimensions.map((dim, i) => {
    const angle = (Math.PI * 2 * i) / count - Math.PI / 2;
    const val = scores[dim.key] / 5;
    const r = 20 + val * radius;

    const labelDistance = radius + 22;
    const lx = cx + labelDistance * Math.cos(angle);
    const ly = cy + labelDistance * Math.sin(angle);

    let textAnchor = "middle";
    if (Math.cos(angle) > 0.2) {
      textAnchor = "start";
    } else if (Math.cos(angle) < -0.2) {
      textAnchor = "end";
    }

    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      labelX: lx,
      labelY: ly,
      textAnchor,
      angle,
      dim,
      val,
    };
  });

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ overflow: "visible" }}>
      {[0.25, 0.5, 0.75, 1].map((level) => (
        <circle
          key={level}
          cx={cx}
          cy={cy}
          r={20 + level * radius}
          fill="none"
          stroke="#FFE1CC"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
      ))}
      <path d={pathD} fill="#FF7A3D" fillOpacity="0.55" stroke="#E85D3D" strokeWidth="3" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="6.5" fill="#E85D3D" stroke="#fff" strokeWidth="2" />
      ))}
      <circle cx={cx} cy={cy} r="20" fill="#FFC29B" stroke="#E85D3D" strokeWidth="2.5" />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="11" fontWeight="800" fill="#E85D3D" style={{ fontFamily: "var(--font-display)" }}>
        MAPLE
      </text>
      {points.map((p, i) => (
        <g key={"lbl" + i}>
          <text
            x={p.labelX}
            y={p.labelY + 4}
            textAnchor={p.textAnchor}
            fontSize="12"
            fontWeight="700"
            fill="#3D2B1F"
            style={{ fontFamily: "var(--font-body)", fontStyle: "normal" }}
          >
            {p.dim.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function TemplateBundleChooser({ selectedId, onSelect }) {
  return (
    <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 16, boxShadow: "3.5px 3.5px 0px #FFDBC0", position: "relative", zIndex: 10 }}>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#3D2B1F", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
        <span>🎨</span> <span>Choose Your Template</span>
      </div>
      <div style={{ fontSize: 11.5, color: "#7A5C46", marginBottom: 12, lineHeight: 1.3, textAlign: "left" }}>
        Applies to both your Photo Strip & Burnout Report!
      </div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 6, scrollbarWidth: "thin" }}>
        {TEMPLATE_BUNDLES.map((t) => {
          const isActive = selectedId === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (typeof onSelect === "function") onSelect(t.id);
              }}
              style={{
                flex: "0 0 auto",
                width: 110,
                padding: "12px 8px",
                borderRadius: 16,
                border: isActive ? "3px solid #3D2B1F" : "2px solid #3D2B1F",
                background: isActive ? t.accentLight : "#FFFFFF",
                boxShadow: isActive ? "3px 3px 0px #3D2B1F" : "1.5px 1.5px 0px #FFDBC0",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.15s ease",
                transform: isActive ? "translateY(-2px)" : "none",
                pointerEvents: "auto",
                position: "relative",
                zIndex: 12,
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 4, pointerEvents: "none" }}>{t.icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", lineHeight: 1.2, pointerEvents: "none" }}>{t.name}</div>
              <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 6, pointerEvents: "none" }}>
                {t.swatches.map((c, i) => (
                  <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: c, border: "1.5px solid #3D2B1F" }} />
                ))}
              </div>
              {isActive ? (
                <div style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: t.accent, pointerEvents: "none" }}>✓ Active</div>
              ) : (
                <div style={{ marginTop: 6, fontSize: 11, fontWeight: 500, color: "#7A5C46", pointerEvents: "none" }}>Select</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}


// --- Background Sticker Decorations (Floating 19 Artworks) ---
function BackgroundStickerDecorations({ onOpenGallery }) {
  const bgStickers = [
    // Top Row
    { src: "/stickers/whale_shark.png", title: "Whale Shark", top: "3%", left: "1.5%", width: 140, rot: -8, anim: "3.8s" },
    { src: "/stickers/real_fish/real_fish_r3_c1.png", title: "Neon Tetra", top: "2%", left: "28%", width: 130, rot: 5, anim: "4.1s" },
    { src: "/stickers/memes_3/meme3_r1_c4.png", title: "Elmo Fire Baby", top: "2%", right: "28%", width: 95, rot: -6, anim: "3.6s" },
    { src: "/stickers/crane_bird.png", title: "Star Crane Bird", top: "3%", right: "1.5%", width: 120, rot: 10, anim: "4.2s" },

    // Middle-Upper Row
    { src: "/stickers/memes_1/meme1_r5_c3.png", title: "Snoop Dogg Side-Eye", top: "28%", left: "1%", width: 120, rot: -10, anim: "4.5s" },
    { src: "/stickers/real_fish/real_fish_r2_c1.png", title: "Ram Cichlid", top: "26%", right: "1.5%", width: 110, rot: 8, anim: "3.9s" },

    // Mid-Lower Row
    { src: "/stickers/peeled_orange.png", title: "Peeled Clementine", top: "54%", left: "1.5%", width: 130, rot: 7, anim: "3.7s" },
    { src: "/stickers/memes_3/meme3_r1_c5.png", title: "Side-Eye Chloe", top: "52%", right: "1%", width: 100, rot: -8, anim: "4.0s" },

    // Lower Row
    { src: "/stickers/yellow_bell_pepper.png", title: "Yellow Bell Pepper", top: "76%", left: "2%", width: 135, rot: 9, anim: "4.3s" },
    { src: "/stickers/real_fish/real_fish_r4_c1.png", title: "Golden Goldfish", top: "74%", right: "2%", width: 135, rot: -7, anim: "3.8s" },

    // Bottom Row
    { src: "/stickers/memes_3/meme3_r7_c4.png", title: "Roll Safe Thinking", bottom: "2%", left: "2%", width: 110, rot: 5, anim: "4.1s" },
    { src: "/stickers/rainbow_tuna.png", title: "Rainbow Tuna", bottom: "1.5%", left: "30%", width: 140, rot: -6, anim: "3.9s" },
    { src: "/stickers/memes_3/meme3_r1_c3.png", title: "Kermit Sad Frog", bottom: "1.5%", right: "30%", width: 90, rot: 7, anim: "4.4s" },
    { src: "/stickers/blueberries.png", title: "Blueberries Burst", bottom: "2%", right: "2%", width: 125, rot: -8, anim: "3.7s" },
  ];

  return (
    <>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        {bgStickers.map((st, i) => (
          <img
            key={i}
            src={st.src}
            alt={st.title}
            title={`${st.title} — Click to open 93 sticker gallery!`}
            className="floating-sticker"
            onClick={onOpenGallery}
            style={{
              position: "absolute",
              top: st.top,
              bottom: st.bottom,
              left: st.left,
              right: st.right,
              width: st.width,
              transform: `rotate(${st.rot}deg)`,
              animation: `stickerSway ${st.anim} ease-in-out infinite alternate`,
              pointerEvents: "auto",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Floating Badge to Open Sticker Gallery */}
      <button
        onClick={onOpenGallery}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 999,
          background: "#FF7A3D",
          color: "#FFFFFF",
          border: "2.5px solid #3D2B1F",
          borderRadius: 30,
          padding: "10px 18px",
          fontWeight: 700,
          fontSize: 13.5,
          boxShadow: "3px 4px 0px #3D2B1F",
          display: "flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 18 }}>🎨</span>
        <span>Sticker Packs (93 Artworks)</span>
      </button>
    </>
  );
}

// --- Sticker Gallery Modal (Showcase All 19 Items) ---
function StickerGalleryModal({ onClose, onSelectSticker }) {
  const [activePackId, setActivePackId] = useState(STICKER_PACKS[0].id);
  const [activeSubpackId, setActiveSubpackId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activePack = STICKER_PACKS.find((p) => p.id === activePackId) || STICKER_PACKS[0];

  // Get items for current pack and subpack filter
  let displayItems = [];
  if (activeSubpackId === "all") {
    activePack.subpacks.forEach((sp) => displayItems.push(...sp.items));
  } else {
    const sp = activePack.subpacks.find((s) => s.id === activeSubpackId);
    if (sp) displayItems = sp.items;
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    displayItems = displayItems.filter((item) => item.label.toLowerCase().includes(q));
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(30, 20, 15, 0.85)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10000, padding: 16 }}>
      <div className="card-container animate-card" style={{ maxWidth: 680, width: "100%", maxHeight: "90vh", overflowY: "auto", padding: 24, textAlign: "left" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div className="zine-badge"><DoodleStarSvg /> Sticker Packs & Sub-Packs (93 Artworks)</div>
          <button onClick={onClose} style={{ background: "#3D2B1F", color: "#FFF", width: 32, height: 32, borderRadius: "50%", fontWeight: 700, border: "none", cursor: "pointer" }}>✕</button>
        </div>

        {/* Pack Selector Tabs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {STICKER_PACKS.map((pack) => (
            <button
              key={pack.id}
              onClick={() => {
                setActivePackId(pack.id);
                setActiveSubpackId("all");
              }}
              style={{
                background: activePackId === pack.id ? "#FF7A3D" : "#FFEDE0",
                color: activePackId === pack.id ? "#FFFFFF" : "#3D2B1F",
                border: "2px solid #3D2B1F",
                boxShadow: activePackId === pack.id ? "2.5px 2.5px 0px #3D2B1F" : "none",
                borderRadius: 16,
                padding: "8px 16px",
                fontSize: 13.5,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{pack.icon}</span>
              <span>{pack.name}</span>
              <span style={{ fontSize: 11, background: "rgba(0,0,0,0.15)", padding: "2px 7px", borderRadius: 10 }}>
                {pack.subpacks.reduce((acc, sp) => acc + sp.items.length, 0)}
              </span>
            </button>
          ))}
        </div>

        {/* Sub-Pack Pills (If pack has multiple subpacks) */}
        {activePack.subpacks.length > 1 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14, background: "#FFF3E9", padding: 8, borderRadius: 14, border: "1.5px solid #3D2B1F" }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#7A5C46", alignSelf: "center", marginRight: 4 }}>Sub-Packs:</span>
            <button
              onClick={() => setActiveSubpackId("all")}
              style={{
                background: activeSubpackId === "all" ? "#3D2B1F" : "#FFFFFF",
                color: activeSubpackId === "all" ? "#FFFFFF" : "#3D2B1F",
                border: "1.5px solid #3D2B1F",
                borderRadius: 12,
                padding: "4px 10px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              All ({activePack.subpacks.reduce((acc, sp) => acc + sp.items.length, 0)})
            </button>
            {activePack.subpacks.map((sp) => (
              <button
                key={sp.id}
                onClick={() => setActiveSubpackId(sp.id)}
                style={{
                  background: activeSubpackId === sp.id ? "#3D2B1F" : "#FFFFFF",
                  color: activeSubpackId === sp.id ? "#FFFFFF" : "#3D2B1F",
                  border: "1.5px solid #3D2B1F",
                  borderRadius: 12,
                  padding: "4px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {sp.name} ({sp.items.length})
              </button>
            ))}
          </div>
        )}

        {/* Search Bar */}
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            placeholder="🔍 Search stickers by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 14,
              border: "2px solid #3D2B1F",
              fontSize: 13,
              background: "#FFF8F3",
            }}
          />
        </div>

        {/* Sticker Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 12, maxHeight: "50vh", overflowY: "auto", paddingRight: 4 }}>
          {displayItems.map((st) => (
            <div
              key={st.id}
              style={{
                background: "#FFF3E9",
                border: "2px solid #3D2B1F",
                borderRadius: 16,
                padding: 10,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justify: "space-between",
                boxShadow: "2.5px 2.5px 0px #FFDBC0",
              }}
            >
              <div style={{ width: "100%", height: 90, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6 }}>
                <img
                  src={st.src}
                  alt={st.label}
                  style={{ maxWidth: "100%", maxHeight: 85, objectFit: "contain", filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.18))" }}
                />
              </div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }} title={st.label}>
                {st.label}
              </div>
              <div style={{ fontSize: 10, color: "#7A5C46", marginBottom: 8 }}>
                {st.width}×{st.height}px
              </div>

              <button
                onClick={() => {
                  if (onSelectSticker) onSelectSticker(st);
                  onClose();
                }}
                style={{
                  background: "#FF7A3D",
                  color: "#FFFFFF",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "6px 10px",
                  borderRadius: 12,
                  border: "1.5px solid #3D2B1F",
                  boxShadow: "2px 2px 0px #3D2B1F",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                + Add to Strip
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 22, textAlign: "right" }}>
          <button style={styles.btnPrimaryEqual} onClick={onClose}>Close Gallery</button>
        </div>
      </div>
    </div>
  );
}


function PhotoboothStudio({
  templateId,
  onSelectTemplate,
  userPhotos = [],
  retakes = [3, 3, 3],
  filterKey = "none",
  placedStickers = [],
  onSavePhotos,
  onClose,
}) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const containerRef = useRef(null);

  const [studioTab, setStudioTab] = useState("camera"); // "camera" | "decorate"
  const [activeSlot, setActiveSlot] = useState(0);
  const [photos, setPhotos] = useState(userPhotos.length === 3 ? [...userPhotos] : [null, null, null]);
  const [remainingRetakes, setRemainingRetakes] = useState(retakes.length === 3 ? [...retakes] : [3, 3, 3]);
  const [selectedFilter, setSelectedFilter] = useState(filterKey);
  const [stickers, setStickers] = useState(placedStickers);
  const [selectedStickerId, setSelectedStickerId] = useState(null);
  const [cameraError, setCameraError] = useState(null);

  // Sticker Pack & Subpack state in Decorate tab
  const [activePackId, setActivePackId] = useState(STICKER_PACKS[0].id);
  const [activeSubpackId, setActiveSubpackId] = useState("all");

  // Dragging state
  const [dragState, setDragState] = useState(null); // { instId, startX, startY, initStickerX, initStickerY }

  const activePack = STICKER_PACKS.find((p) => p.id === activePackId) || STICKER_PACKS[0];
  let currentPackItems = [];
  if (activeSubpackId === "all") {
    activePack.subpacks.forEach((sp) => currentPackItems.push(...sp.items));
  } else {
    const sp = activePack.subpacks.find((s) => s.id === activeSubpackId);
    if (sp) currentPackItems = sp.items;
  }

  React.useEffect(() => {
    async function initCam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access failed", err);
        setCameraError("Camera permission unavailable. Please use file upload for your poses!");
      }
    }
    if (studioTab === "camera") {
      initCam();
    }

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [studioTab]);

  // Update strip canvas preview when stickers or photos change
  React.useEffect(() => {
    if (previewCanvasRef.current) {
      generateStripCanvas(
        previewCanvasRef.current,
        {
          name: "Preview",
          cohort: "2026",
          faculty: "CIMSA",
          userPhotos: photos,
          filterKey: selectedFilter,
          placedStickers: stickers,
          templateId: templateId || "classic",
        },
        () => {}
      );
    }
  }, [photos, selectedFilter, stickers, studioTab, templateId]);

  function captureCurrentSlot() {
    if (!videoRef.current || remainingRetakes[activeSlot] <= 0) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.92);

    const nextPhotos = [...photos];
    nextPhotos[activeSlot] = dataUrl;
    setPhotos(nextPhotos);

    const nextRetakes = [...remainingRetakes];
    nextRetakes[activeSlot] = Math.max(0, nextRetakes[activeSlot] - 1);
    setRemainingRetakes(nextRetakes);

    if (activeSlot < 2) {
      setActiveSlot(activeSlot + 1);
    }
  }

  function handleSlotUpload(slotIdx, e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const nextPhotos = [...photos];
        nextPhotos[slotIdx] = evt.target.result;
        setPhotos(nextPhotos);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleAddSticker(stItem) {
    const newInst = {
      id: stItem.id,
      label: stItem.label,
      src: stItem.src,
      width: stItem.width || 120,
      height: stItem.height || 120,
      x: 320, // canvas center
      y: 400 + Math.floor(Math.random() * 600),
      scale: 0.85,
      rotation: Math.floor((Math.random() - 0.5) * 20),
    };
    setStickers((prev) => [...prev, newInst]);
    setSelectedStickerId(newInst.instId);
  }

  function handleApplyPreset(presetName) {
    let presetItems = [];
    if (presetName === "ocean") {
      presetItems = [
        { id: "whale_shark", x: 180, y: 150, scale: 0.8, rotation: -6 },
        { id: "rainbow_tuna", x: 440, y: 560, scale: 0.75, rotation: 8 },
        { id: "red_goldfish", x: 160, y: 1100, scale: 0.8, rotation: -10 },
      ];
    } else if (presetName === "fruit") {
      presetItems = [
        { id: "tomato", x: 480, y: 160, scale: 0.85, rotation: 12 },
        { id: "blueberries", x: 160, y: 550, scale: 0.75, rotation: -8 },
        { id: "fig_slice", x: 490, y: 980, scale: 0.8, rotation: 10 },
        { id: "mango", x: 160, y: 1380, scale: 0.75, rotation: -5 },
      ];
    } else if (presetName === "sardine") {
      presetItems = [
        { id: "tin_sardines", x: 480, y: 170, scale: 0.8, rotation: -8 },
        { id: "oval_sardines", x: 150, y: 960, scale: 0.8, rotation: 10 },
        { id: "blue_mackerel", x: 460, y: 1380, scale: 0.75, rotation: -5 },
      ];
    } else if (presetName === "zine") {
      presetItems = [
        { id: "crane_bird", x: 480, y: 170, scale: 0.8, rotation: 8 },
        { id: "yellow_bell_pepper", x: 160, y: 970, scale: 0.75, rotation: -12 },
        { id: "peeled_orange", x: 480, y: 1380, scale: 0.8, rotation: 6 },
      ];
    } else if (presetName === "clear") {
      setStickers([]);
      setSelectedStickerId(null);
      return;
    }

    const newInsts = presetItems.map((p) => {
      const def = STICKERS_LIST.find((s) => s.id === p.id) || STICKERS_LIST[0];
      return {
        instId: Date.now() + "_" + Math.random().toString(36).substring(2, 7),
        ...def,
        x: p.x,
        y: p.y,
        scale: p.scale,
        rotation: p.rotation,
      };
    });
    setStickers((prev) => [...prev, ...newInsts]);
  }

  function updateSelectedSticker(prop, val) {
    if (!selectedStickerId) return;
    setStickers((prev) =>
      prev.map((s) => (s.instId === selectedStickerId ? { ...s, [prop]: val } : s))
    );
  }

  function removeSelectedSticker() {
    if (!selectedStickerId) return;
    setStickers((prev) => prev.filter((s) => s.instId !== selectedStickerId));
    setSelectedStickerId(null);
  }

  // Pointer events for dragging stickers on the strip canvas
  const handlePointerDown = (e, instId) => {
    e.stopPropagation();
    setSelectedStickerId(instId);
    const target = stickers.find((s) => s.instId === instId);
    if (!target) return;

    setDragState({
      instId,
      startX: e.clientX,
      startY: e.clientY,
      initStickerX: target.x,
      initStickerY: target.y,
    });
  };

  const handlePointerMove = (e) => {
    if (!dragState) return;
    const previewW = containerRef.current ? containerRef.current.offsetWidth : 260;
    const scaleFactor = 640 / previewW; // ratio from 260px preview to 640px canvas

    const dx = (e.clientX - dragState.startX) * scaleFactor;
    const dy = (e.clientY - dragState.startY) * scaleFactor;

    setStickers((prev) =>
      prev.map((s) =>
        s.instId === dragState.instId
          ? {
              ...s,
              x: Math.max(10, Math.min(630, dragState.initStickerX + dx)),
              y: Math.max(10, Math.min(1530, dragState.initStickerY + dy)),
            }
          : s
      )
    );
  };

  const handlePointerUp = () => {
    setDragState(null);
  };

  function handleFinish() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
    }
    onSavePhotos(photos, remainingRetakes, selectedFilter, stickers);
  }

  const activeFilterObj = filterOptions.find((f) => f.key === selectedFilter) || filterOptions[0];
  const selectedStickerObj = stickers.find((s) => s.instId === selectedStickerId);

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(30, 20, 15, 0.85)", backdropFilter: "blur(5px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 16 }}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <div className="card-container animate-card" style={{ maxWidth: 640, width: "100%", padding: 24, textAlign: "center", maxHeight: "92vh", overflowY: "auto" }}>
        <div className="zine-badge"><DoodleStarSvg /> Photobooth Studio & Decorator</div>

        {/* Tab Toggle */}
        <div style={{ display: "flex", gap: 10, margin: "14px 0 16px", background: "#FFF3E9", padding: 5, borderRadius: 18, border: "2px solid #3D2B1F" }}>
          <button
            onClick={() => setStudioTab("camera")}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 14,
              fontSize: 14,
              fontWeight: 700,
              background: studioTab === "camera" ? "#FF7A3D" : "transparent",
              color: studioTab === "camera" ? "#FFFFFF" : "#3D2B1F",
              border: studioTab === "camera" ? "2px solid #3D2B1F" : "none",
              boxShadow: studioTab === "camera" ? "2px 2px 0px #3D2B1F" : "none",
              cursor: "pointer",
            }}
          >
            📸 Camera & Filters
          </button>
          <button
            onClick={() => setStudioTab("decorate")}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 14,
              fontSize: 14,
              fontWeight: 700,
              background: studioTab === "decorate" ? "#FF7A3D" : "transparent",
              color: studioTab === "decorate" ? "#FFFFFF" : "#3D2B1F",
              border: studioTab === "decorate" ? "2px solid #3D2B1F" : "none",
              boxShadow: studioTab === "decorate" ? "2px 2px 0px #3D2B1F" : "none",
              cursor: "pointer",
            }}
          >
            🎨 Decorate ({stickers.length} Stickers)
          </button>
        </div>

        {studioTab === "camera" ? (
          <>
            {/* Live Filter Selector Pills */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 14 }}>
              {filterOptions.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setSelectedFilter(f.key)}
                  style={{
                    background: selectedFilter === f.key ? "#FF7A3D" : "#FFEDE0",
                    color: selectedFilter === f.key ? "#FFFFFF" : "#3D2B1F",
                    border: "2px solid #3D2B1F",
                    boxShadow: selectedFilter === f.key ? "2.5px 2.5px 0px #3D2B1F" : "none",
                    borderRadius: 14,
                    padding: "6px 12px",
                    fontSize: 12.5,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Camera Viewfinder */}
            {!cameraError ? (
              <div style={{ position: "relative", width: "100%", height: 260, borderRadius: 18, overflow: "hidden", border: "3px solid #3D2B1F", background: "#000", margin: "10px 0", boxShadow: "4px 4px 0px #FFDBC0" }}>
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scaleX(-1)",
                    filter: activeFilterObj.css,
                    imageRendering: selectedFilter === "pixelated" ? "pixelated" : "auto",
                  }}
                />
                {selectedFilter === "nightshot" && (
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none", border: "2px solid rgba(0,255,102,0.4)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 12, color: "#00FF66", fontFamily: "'Pixelify Sans', monospace", fontSize: 13, fontWeight: 700 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>NIGHTSHOT NITE 0.0dB</span>
                      <span>REC ●</span>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 11 }}>IR ILLUMINATOR ON</div>
                  </div>
                )}
                {selectedFilter === "vhs" && (
                  <div style={{ position: "absolute", inset: 0, pointerEvents: "none", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 12, color: "#00FFFF", fontFamily: "'Pixelify Sans', monospace", fontSize: 13, fontWeight: 700 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>PLAY ▶ 0:02:16</span>
                      <span style={{ color: "#FFDD00" }}>SP SLP</span>
                    </div>
                    <div style={{ textAlign: "left", fontSize: 11, color: "#FF7A3D" }}>AUTO TRACKING</div>
                  </div>
                )}
                <div style={{ position: "absolute", top: 12, left: 12, background: "#3D2B1F", color: "#FFF", padding: "4px 12px", borderRadius: 12, fontSize: 13, fontWeight: 700 }}>
                  Pose #{activeSlot + 1} of 3
                </div>
                <div style={{ position: "absolute", bottom: 12, right: 12, background: remainingRetakes[activeSlot] > 0 ? "#FF7A3D" : "#E85D3D", color: "#FFF", padding: "4px 12px", borderRadius: 12, fontSize: 12, fontWeight: 700 }}>
                  Retakes left: {remainingRetakes[activeSlot]}/3
                </div>
              </div>
            ) : (
              <div style={{ background: "#FFF3E9", padding: 14, borderRadius: 16, border: "2px solid #3D2B1F", margin: "12px 0", color: "#E85D3D", fontSize: 13 }}>
                {cameraError}
              </div>
            )}

            {/* Snap & Retake Controls */}
            <div style={{ display: "flex", gap: 10, margin: "12px 0" }}>
              {!cameraError && (
                <button
                  style={{ ...styles.btnPrimaryHero, flex: 1, padding: "12px 16px", fontSize: 16 }}
                  onClick={captureCurrentSlot}
                  disabled={remainingRetakes[activeSlot] <= 0}
                >
                  📸 Snap Pose #{activeSlot + 1}
                </button>
              )}
            </div>

            {/* 3 Slot Previews */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, margin: "16px 0" }}>
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlot(idx)}
                  style={{
                    border: activeSlot === idx ? "3px solid #FF7A3D" : "2px solid #3D2B1F",
                    borderRadius: 14,
                    padding: 6,
                    background: activeSlot === idx ? "#FFF3E9" : "#FFFFFF",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#7A5C46", marginBottom: 4 }}>
                    Pose #{idx + 1} ({remainingRetakes[idx]}/3)
                  </div>
                  {photos[idx] ? (
                    <img
                      src={photos[idx]}
                      alt={`Slot ${idx + 1}`}
                      style={{ width: "100%", height: 80, objectFit: "cover", borderRadius: 8, filter: activeFilterObj.css }}
                    />
                  ) : (
                    <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 80, border: "1.5px dashed #A9876F", borderRadius: 8, background: "#FFF8F3", cursor: "pointer" }}>
                      <span style={{ fontSize: 18 }}>📁</span>
                      <span style={{ fontSize: 10, color: "#7A5C46", fontWeight: 700 }}>Upload</span>
                      <input type="file" accept="image/*" onChange={(e) => handleSlotUpload(idx, e)} style={{ display: "none" }} />
                    </label>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          /* DECORATE TAB WITH DRAGGABLE MOVABLE STICKERS */
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#7A5C46", marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
              <span>👆 Click & drag any sticker on the strip below to move it around!</span>
            </div>

            {/* Quick Presets */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
              <button onClick={() => handleApplyPreset("ocean")} style={{ background: "#EBF8FF", border: "1.5px solid #3D2B1F", borderRadius: 12, padding: "5px 10px", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>
                🐟 Sea Life
              </button>
              <button onClick={() => handleApplyPreset("fruit")} style={{ background: "#FFF5F5", border: "1.5px solid #3D2B1F", borderRadius: 12, padding: "5px 10px", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>
                🍅 Fruity Zine
              </button>
              <button onClick={() => handleApplyPreset("sardine")} style={{ background: "#FEFCBF", border: "1.5px solid #3D2B1F", borderRadius: 12, padding: "5px 10px", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>
                🥫 Sardine Party
              </button>
              <button onClick={() => handleApplyPreset("zine")} style={{ background: "#FAF5FF", border: "1.5px solid #3D2B1F", borderRadius: 12, padding: "5px 10px", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>
                ✨ Crane & Stars
              </button>
              <button onClick={() => handleApplyPreset("clear")} style={{ background: "#FFF0F0", color: "#E85D3D", border: "1.5px solid #3D2B1F", borderRadius: 12, padding: "5px 10px", fontSize: 11.5, fontWeight: 700, cursor: "pointer" }}>
                🗑️ Clear All
              </button>
            </div>

            {/* Live Strip Canvas Preview with Interactive Draggable Overlay */}
            <div
              ref={containerRef}
              style={{
                position: "relative",
                width: 260,
                height: 625,
                margin: "0 auto 16px",
                borderRadius: 16,
                overflow: "hidden",
                border: "3.5px solid #3D2B1F",
                boxShadow: "5px 5px 0px #FFDBC0",
                background: "#FFF6EE",
                userSelect: "none",
                touchAction: "none",
              }}
            >
              <canvas ref={previewCanvasRef} style={{ width: "100%", height: "100%", display: "block" }} />

              {/* Draggable Movable Stickers Overlay */}
              {stickers.map((st) => {
                const isSelected = selectedStickerId === st.instId;
                const prevW = containerRef.current ? containerRef.current.offsetWidth : 260;
                const scaleF = prevW / 640.0;
                const displayX = st.x * scaleF;
                const displayY = st.y * scaleF * (625 / 625.6);
                const displayW = (st.width || 120) * (st.scale || 1) * scaleF;
                const displayH = (st.height || 120) * (st.scale || 1) * scaleF;

                return (
                  <div
                    key={st.instId}
                    onPointerDown={(e) => handlePointerDown(e, st.instId)}
                    style={{
                      position: "absolute",
                      left: displayX,
                      top: displayY,
                      width: displayW,
                      height: displayH,
                      transform: `translate(-50%, -50%) rotate(${st.rotation || 0}deg)`,
                      cursor: dragState?.instId === st.instId ? "grabbing" : "grab",
                      zIndex: isSelected ? 100 : 10,
                      outline: isSelected ? "2.5px dashed #FF7A3D" : "none",
                      outlineOffset: 3,
                      borderRadius: 4,
                    }}
                  >
                    <img
                      src={st.src}
                      alt={st.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(2px 3px 4px rgba(0,0,0,0.25))",
                        pointerEvents: "none",
                      }}
                    />
                    {isSelected && (
                      <div
                        style={{
                          position: "absolute",
                          top: -12,
                          right: -12,
                          background: "#E85D3D",
                          color: "#FFF",
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          fontSize: 11,
                          fontWeight: 800,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          removeSelectedSticker();
                        }}
                      >
                        ✕
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Sticker Controls */}
            {selectedStickerObj && (
              <div style={{ background: "#FFF3E9", padding: 12, borderRadius: 16, border: "2px solid #3D2B1F", marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#3D2B1F" }}>
                    Selected: {selectedStickerObj.label}
                  </span>
                  <button onClick={removeSelectedSticker} style={{ background: "#E85D3D", color: "#FFF", border: "1px solid #3D2B1F", borderRadius: 8, padding: "3px 8px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                    🗑️ Remove
                  </button>
                </div>
                <div style={{ display: "flex", gap: 14, fontSize: 12, color: "#3D2B1F", alignItems: "center" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                    Scale:
                    <input
                      type="range"
                      min="0.4"
                      max="2.2"
                      step="0.05"
                      value={selectedStickerObj.scale || 1}
                      onChange={(e) => updateSelectedSticker("scale", parseFloat(e.target.value))}
                      style={{ width: "100%" }}
                    />
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                    Rotate:
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      step="5"
                      value={selectedStickerObj.rotation || 0}
                      onChange={(e) => updateSelectedSticker("rotation", parseInt(e.target.value))}
                      style={{ width: "100%" }}
                    />
                  </label>
                </div>
              </div>
            )}

            {/* Template Chooser Mini */}
            <div style={{ margin: "8px 0 12px", textAlign: "left" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#3D2B1F", marginBottom: 6 }}>
                🎨 Photostrip & Report Theme:
              </div>
              <div style={{ display: "flex", gap: 8, overflowX: "auto" }}>
                {TEMPLATE_BUNDLES.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (typeof onSelectTemplate === "function") onSelectTemplate(t.id);
                    }}
                    style={{
                      flex: "1",
                      minWidth: 70,
                      padding: "8px 6px",
                      borderRadius: 12,
                      border: templateId === t.id ? "2.5px solid #3D2B1F" : "1.5px solid #A9876F",
                      background: templateId === t.id ? t.accentLight : "#FFFFFF",
                      boxShadow: templateId === t.id ? "2px 2px 0px #3D2B1F" : "none",
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#3D2B1F",
                      display: "flex",
                      alignItems: "center",
                      justify: "center",
                      gap: 4,
                      pointerEvents: "auto",
                    }}
                    title={t.name}
                  >
                    <span>{t.icon}</span> <span>{t.name.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sticker Pack & Subpack Selector Pills */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {STICKER_PACKS.map((pack) => (
                <button
                  key={pack.id}
                  onClick={() => {
                    setActivePackId(pack.id);
                    setActiveSubpackId("all");
                  }}
                  style={{
                    background: activePackId === pack.id ? "#FF7A3D" : "#FFEDE0",
                    color: activePackId === pack.id ? "#FFFFFF" : "#3D2B1F",
                    border: "1.5px solid #3D2B1F",
                    borderRadius: 12,
                    padding: "4px 10px",
                    fontSize: 11.5,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {pack.icon} {pack.name}
                </button>
              ))}
            </div>

            {/* Subpack Pills */}
            {activePack.subpacks.length > 1 && (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                {activePack.subpacks.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => setActiveSubpackId(sp.id)}
                    style={{
                      background: activeSubpackId === sp.id ? "#3D2B1F" : "#FFFFFF",
                      color: activeSubpackId === sp.id ? "#FFFFFF" : "#3D2B1F",
                      border: "1.5px solid #3D2B1F",
                      borderRadius: 10,
                      padding: "3px 8px",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {sp.name}
                  </button>
                ))}
              </div>
            )}

            {/* Sticker Horizontal Scroll Tray */}
            <div className="sticker-tray" style={{ marginTop: 6 }}>
              {currentPackItems.map((st) => (
                <div key={st.id} className="sticker-chip" onClick={() => handleAddSticker(st)}>
                  <img src={st.src} alt={st.label} style={{ width: 44, height: 44, objectFit: "contain" }} />
                  <span style={{ fontSize: 10, fontWeight: 700, marginTop: 4, whiteSpace: "nowrap" }}>{st.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <button style={styles.btnPrimaryEqual} onClick={handleFinish}>
            Save Strip & Continue →
          </button>
          <button style={styles.btnGhostEqual} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
function MapleLogoSvg() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 8H20.5 L15.5 12L17.5 18L12 14L6.5 18L8.5 12L3.5 8H9.5L12 2Z" fill="#E85D3D" />
    </svg>
  );
}

function DoodleStarSvg() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4 }}>
      <path d="M10 2L11.8 7.2H17.2L12.8 10.4L14.5 15.6L10 12.3L5.5 15.6L7.2 10.4L2.8 7.2H8.2L10 2Z" stroke="#E85D3D" strokeWidth="2" strokeLinejoin="round" fill="#FFEDE0"/>
    </svg>
  );
}

function DoodleFlowerSvg() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <circle cx="12" cy="12" r="3" fill="#F59E0B" stroke="#3D2B1F" strokeWidth="2"/>
      <circle cx="12" cy="6" r="3" fill="#FF7A3D" stroke="#3D2B1F" strokeWidth="2"/>
      <circle cx="18" cy="12" r="3" fill="#FF7A3D" stroke="#3D2B1F" strokeWidth="2"/>
      <circle cx="12" cy="18" r="3" fill="#FF7A3D" stroke="#3D2B1F" strokeWidth="2"/>
      <circle cx="6" cy="12" r="3" fill="#FF7A3D" stroke="#3D2B1F" strokeWidth="2"/>
    </svg>
  );
}

function BrandHeader({ step, totalSteps }) {
  return (
    <div style={styles.brandHeader}>
      <div style={styles.brandMark}>
        <MapleLogoSvg />
      </div>
      <div style={styles.brandText}>
        <div style={styles.brandName}>{brandInfo.name}</div>
        <div style={styles.brandTagline}>{brandInfo.tagline}</div>
      </div>
      {step != null && (
        <div style={styles.stepDots}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              style={{
                ...styles.stepDot,
                ...(i === step ? styles.stepDotActive : {}),
                ...(i < step ? styles.stepDotDone : {}),
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function BrandFooter({ onOpenAdmin }) {
  return (
    <div style={styles.brandFooter}>
      <span
        style={{
          display: "inline-block",
          background: "#3D2B1F",
          color: "#FFFFFF",
          padding: "5px 16px",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.5px",
          boxShadow: "2.5px 2.5px 0px #FFDBC0",
          border: "1.5px solid #FFDBC0",
        }}
      >
        {brandInfo.org} • {brandInfo.event} • <span style={{ color: "#FFC107" }}>v1.2.5</span>
      </span>
      <div style={{ marginTop: 6 }}>
        <button type="button" onClick={onOpenAdmin} style={{ fontSize: 11, color: "#FFDBC0", textDecoration: "underline", opacity: 0.8, cursor: "pointer" }}>Organizer Panel Access</button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [identity, setIdentity] = useState({ name: "", cohort: "", faculty: "" });
  const [features, setFeatures] = useState({ wantReport: true, wantPhoto: true, wantQR: true });
  const [consent, setConsent] = useState(false);
  const [answers, setAnswers] = useState({});
  const [qIndex, setQIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userPhotos, setUserPhotos] = useState([null, null, null]);
  const [retakes, setRetakes] = useState([3, 3, 3]);
  const [filterKey, setFilterKey] = useState("none");
  const [showStudio, setShowStudio] = useState(false);
  const [viewerUrl, setViewerUrl] = useState(null);
  const [viewerData, setViewerData] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [placedStickers, setPlacedStickers] = useState([]);
  const [showStickerGallery, setShowStickerGallery] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [templateId, setTemplateId] = useState("classic");

  const stripCanvasRef = useRef(null);
  const reportCanvasRef = useRef(null);

  const totalQ = flatQuestions.length;

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const strip = params.get("strip");
    const report = params.get("report");
    const name = params.get("name") || "";
    if (strip || report) {
      setViewerData({ strip, report, name });
      setScreen("viewer");
    }
  }, []);

  function resetAll() {
    setIdentity({ name: "", cohort: "", faculty: "" });
    setAnswers({});
    setQIndex(0);
    setResult(null);
    setUserPhotos([null, null, null]);
    setRetakes([3, 3, 3]);
    setFilterKey("none");
    setViewerUrl(null);
    setPlacedStickers([]);
    setConsent(false);
    setTemplateId("classic");
    setScreen("welcome");
  }

  function handleStartSession() {
    if (!consent) return;
    if (features.wantReport) {
      setScreen("quiz");
    } else if (features.wantPhoto) {
      setScreen("result");
      setShowStudio(true);
    } else {
      setScreen("result");
    }
  }

  function handleAnswer(value) {
    const currentQ = flatQuestions[qIndex];
    const key = `${currentQ.dim}_${currentQ.idx}`;
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    if (qIndex < totalQ - 1) {
      setTimeout(() => setQIndex(qIndex + 1), 180);
    } else {
      setTimeout(() => calculateResult(newAnswers), 220);
    }
  }

  async function calculateResult(allAnswers) {
    const scores = {};
    dimensions.forEach((dim) => {
      const vals = dim.items.map((_, idx) => allAnswers[`${dim.key}_${idx}`] || 0);
      scores[dim.key] = vals.reduce((acc, curr) => acc + curr, 0) / vals.length;
    });

    const overall01 = Object.values(scores).reduce((acc, curr) => acc + curr, 0) / (dimensions.length * 5);
    const category = getCategory(overall01);

    const resEntry = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      ts: Date.now(),
      name: identity.name,
      cohort: identity.cohort,
      faculty: identity.faculty,
      scores,
      overall01,
      category: category.label,
    };

    setResult(resEntry);
    setScreen("result");
    if (features.wantPhoto) {
      setShowStudio(true);
    }
    await saveEntry(resEntry);
  }

  async function loadAdmin() {
    setLoading(true);
    const data = await listEntries();
    setEntries(data);
    setLoading(false);
    setScreen("admin");
  }

  function downloadCanvas(canvas, filename) {
    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          const dataUrl = canvas.toDataURL("image/png");
          const a = document.createElement("a");
          a.href = dataUrl;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
      }, "image/png");
    } catch (err) {
      console.error("toBlob download failed", err);
      try {
        const dataUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } catch (e) {
        window.open(canvas.toDataURL("image/png"), "_blank");
      }
    }
  }

  function downloadStrip() {
    const resName = result?.name || identity.name || "student";
    const resCohort = result?.cohort || identity.cohort || "";
    const resFaculty = result?.faculty || identity.faculty || "";
    if (!stripCanvasRef.current) return;
    generateStripCanvas(
      stripCanvasRef.current,
      { name: resName, cohort: resCohort, faculty: resFaculty, userPhotos, filterKey, placedStickers, templateId },
      () => {
        downloadCanvas(stripCanvasRef.current, `maple-2026-photobooth-strip-${resName.replace(/\s+/g, "_")}.png`);
      }
    );
  }

  function downloadReport() {
    if (!result || !reportCanvasRef.current) return;
    const cat = getCategory(result.overall01);
    generateReportCanvas(
      reportCanvasRef.current,
      { name: result.name, cohort: result.cohort, faculty: result.faculty, cat, scores: result.scores, overall01: result.overall01, templateId },
      () => {
        downloadCanvas(reportCanvasRef.current, `maple-2026-burnout-report-${(result.name || "student").replace(/\s+/g, "_")}.png`);
      }
    );
  }

  async function saveBothAndUpload() {
    const resName = result?.name || identity.name || "student";
    const resCohort = result?.cohort || identity.cohort || "";
    const resFaculty = result?.faculty || identity.faculty || "";
    setUploading(true);

    let stripUrl = null;
    let reportUrl = null;

    if (features.wantPhoto && stripCanvasRef.current) {
      await new Promise((resolve) => {
        generateStripCanvas(
          stripCanvasRef.current,
          { name: resName, cohort: resCohort, faculty: resFaculty, userPhotos, filterKey, placedStickers, templateId },
          resolve
        );
      });
      const timestamp = Date.now();
      const stripFile = `${timestamp}_strip_${resName.replace(/\s+/g, "_")}.png`;
      stripUrl = await uploadImageToSupabase(stripCanvasRef.current, "strips", stripFile);
    }

    if (features.wantReport && result && reportCanvasRef.current) {
      const cat = getCategory(result.overall01);
      await new Promise((resolve) => {
        generateReportCanvas(
          reportCanvasRef.current,
          { name: result.name, cohort: result.cohort, faculty: result.faculty, cat, scores: result.scores, overall01: result.overall01, templateId },
          resolve
        );
      });
      const timestamp = Date.now();
      const reportFile = `${timestamp}_report_${resName.replace(/\s+/g, "_")}.png`;
      reportUrl = await uploadImageToSupabase(reportCanvasRef.current, "reports", reportFile);
    }

    if (stripUrl || reportUrl) {
      const origin = window.location.origin + window.location.pathname;
      const vUrl = `${origin}?strip=${encodeURIComponent(stripUrl || "")}&report=${encodeURIComponent(reportUrl || "")}&name=${encodeURIComponent(resName)}`;
      setViewerUrl(vUrl);
    }
    setUploading(false);
  }

  function downloadCSV() {
    const headers = [
      "timestamp",
      "name",
      "cohort",
      "faculty",
      ...dimensions.map((d) => d.fullLabel),
      "total_score_pct",
      "category",
    ];

    const rows = entries.map((e) => {
      const totalPct = Math.round(e.overall01 * 100);
      return [
        new Date(e.ts).toLocaleString("en-US"),
        e.name || "-",
        e.cohort || "-",
        e.faculty || "-",
        ...dimensions.map((d) => (e.scores[d.key] || 0).toFixed(2)),
        totalPct,
        e.category,
      ];
    });

    const csvContent = [headers, ...rows]
      .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `maple-2026-rekap-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={styles.appRoot}>
      {screen === "welcome" && <WelcomeScreen onStart={() => setScreen("identity")} onAdmin={() => setShowPinModal(true)} />}
      {screen === "identity" && (
        <IdentityScreen
          identity={identity}
          setIdentity={setIdentity}
          features={features}
          setFeatures={setFeatures}
          consent={consent}
          setConsent={setConsent}
          templateId={templateId}
          onSelectTemplate={setTemplateId}
          onStartSession={handleStartSession}
          onBack={() => setScreen("welcome")}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen
          qIndex={qIndex}
          totalQ={totalQ}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={() => (qIndex > 0 ? setQIndex(qIndex - 1) : setScreen("identity"))}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          result={result}
          userPhotos={userPhotos}
          filterKey={filterKey}
          features={features}
          viewerUrl={viewerUrl}
          uploading={uploading}
          templateId={templateId}
          onSelectTemplate={setTemplateId}
          onOpenStudio={() => setShowStudio(true)}
          onDownloadStrip={downloadStrip}
          onDownloadReport={downloadReport}
          onSaveAndGetQR={saveBothAndUpload}
          onDone={resetAll}
        />
      )}
      {screen === "viewer" && (
        <ViewerScreen
          viewerData={viewerData}
          onStartNew={resetAll}
        />
      )}
      {screen === "admin" && (
        <AdminScreen
          entries={entries}
          loading={loading}
          onDownloadCSV={downloadCSV}
          onBack={() => setScreen("welcome")}
          onRefresh={loadAdmin}
        />
      )}

      <BackgroundStickerDecorations onOpenGallery={() => setShowStickerGallery(true)} />

      {showStickerGallery && (
        <StickerGalleryModal
          onClose={() => setShowStickerGallery(false)}
          onSelectSticker={() => setShowStudio(true)}
        />
      )}

      <OrganizerPinModal
        isOpen={showPinModal}
        onClose={() => setShowPinModal(false)}
        onSuccess={() => {
          setShowPinModal(false);
          loadAdmin();
        }}
      />

      {showStudio && (
        <PhotoboothStudio
          userPhotos={userPhotos}
          retakes={retakes}
          filterKey={filterKey}
          placedStickers={placedStickers}
          templateId={templateId}
          onSelectTemplate={setTemplateId}
          onSavePhotos={(newPhotos, newRetakes, newFilter, newStickers) => {
            setUserPhotos(newPhotos);
            setRetakes(newRetakes);
            setFilterKey(newFilter);
            if (newStickers) setPlacedStickers(newStickers);
            setShowStudio(false);
          }}
          onClose={() => setShowStudio(false)}
        />
      )}

      <canvas ref={stripCanvasRef} style={{ display: "none" }} />
      <canvas ref={reportCanvasRef} style={{ display: "none" }} />
    </div>
  );
}

function ViewerScreen({ viewerData, onStartNew }) {
  const { strip, report, name } = viewerData || {};

  async function handleDownload(url, filename) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      window.open(url, "_blank");
    }
  }

  return (
    <div style={styles.center}>
      <div className="card-container animate-card" style={{ textAlign: "center", maxWidth: 540 }}>
        <div className="zine-badge"><DoodleFlowerSvg /> MAPLE 2026 Web Viewer</div>
        <h2 style={styles.h2}>{name ? `Session Files for ${name}` : "Photobooth & Burnout Session"}</h2>
        <p style={{ fontSize: 13.5, color: "#7A5C46", marginTop: -10, marginBottom: 18 }}>
          World Mental Health Day — CIMSA Unsoed
        </p>

        {strip && (
          <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 14, boxShadow: "3.5px 3.5px 0px #FFDBC0" }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: "#3D2B1F", marginBottom: 10, textAlign: "left" }}>
              🎞️ Photobooth Photo Strip (3 Poses)
            </div>
            <img
              src={strip}
              alt="Photobooth Strip"
              style={{ width: "100%", maxHeight: 440, objectFit: "contain", borderRadius: 14, border: "2px solid #3D2B1F", background: "#FFF" }}
            />
            <button
              onClick={() => handleDownload(strip, `maple_2026_photobooth_strip_${name || "student"}.png`)}
              style={{
                marginTop: 12,
                background: "#FF7A3D",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 14.5,
                padding: "12px 20px",
                borderRadius: 16,
                border: "2px solid #3D2B1F",
                boxShadow: "3px 3px 0px #3D2B1F",
                width: "100%",
                cursor: "pointer",
              }}
            >
              📥 Download Photo Strip
            </button>
          </div>
        )}

        {report && (
          <div style={{ margin: "18px 0 16px", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 14, boxShadow: "3.5px 3.5px 0px #FFDBC0" }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: "#3D2B1F", marginBottom: 10, textAlign: "left" }}>
              📊 Academic Burnout Report
            </div>
            <img
              src={report}
              alt="Burnout Report Card"
              style={{ width: "100%", maxHeight: 380, objectFit: "contain", borderRadius: 14, border: "2px solid #3D2B1F", background: "#FFF" }}
            />
            <button
              onClick={() => handleDownload(report, `maple_2026_burnout_report_${name || "student"}.png`)}
              style={{
                marginTop: 12,
                background: "#50B878",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 14.5,
                padding: "12px 20px",
                borderRadius: 16,
                border: "2px solid #3D2B1F",
                boxShadow: "3px 3px 0px #3D2B1F",
                width: "100%",
                cursor: "pointer",
              }}
            >
              📥 Download Burnout Report
            </button>
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          <button style={styles.btnPrimaryEqual} onClick={onStartNew}>
            ✨ Start New Session
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultScreen({
  templateId,
  onSelectTemplate,
  result,
  userPhotos = [],
  filterKey = "none",
  features,
  viewerUrl,
  uploading,
  onOpenStudio,
  onDownloadStrip,
  onDownloadReport,
  onSaveAndGetQR,
  onDone,
}) {
  const cat = result ? getCategory(result.overall01) : null;
  const scorePct = result ? Math.round(result.overall01 * 100) : 0;
  const activeFilterObj = filterOptions.find((f) => f.key === filterKey) || filterOptions[0];

  return (
    <div style={styles.center}>
      <div className="card-container animate-card" style={{ textAlign: "center", maxWidth: 540 }}>
        <div className="zine-badge"><DoodleFlowerSvg /> Session Outputs</div>
        <TemplateBundleChooser selectedId={templateId} onSelect={onSelectTemplate} />
        <h2 style={styles.h2}>{result?.name ? `Hello, ${result.name}!` : "Your Session Outputs"}</h2>

        {/* Section 1: Academic Burnout Report (If selected) */}
        {features.wantReport && cat && (
          <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 16, boxShadow: "3.5px 3.5px 0px #FFDBC0", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#3D2B1F", display: "flex", alignItems: "center", gap: 6 }}>
                <span>📊</span> <span>Academic Burnout Report</span>
              </span>
              <span style={{ fontSize: 12, background: cat.color, color: "#FFF", fontWeight: 700, padding: "3px 10px", borderRadius: 12 }}>
                {cat.label} ({scorePct}%)
              </span>
            </div>

            <div style={{ background: "#FFF3E9", borderRadius: 12, border: "1.5px solid #3D2B1F", padding: 10, fontSize: 12.5, color: "#5A3E2B", lineHeight: 1.4, margin: "8px 0 12px" }}>
              <div style={{ fontWeight: 700, color: "#3D2B1F", marginBottom: 2 }}>
                {result.faculty || "Faculty"} • Class of {result.cohort || "2026"}
              </div>
              <div>{cat.tip}</div>
            </div>

            <button
              onClick={onDownloadReport}
              style={{
                background: "#50B878",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: 13.5,
                padding: "10px 16px",
                borderRadius: 14,
                border: "2px solid #3D2B1F",
                boxShadow: "2.5px 2.5px 0px #3D2B1F",
                width: "100%",
                cursor: "pointer",
              }}
            >
              📥 Save Burnout Report (PNG)
            </button>
          </div>
        )}

        {/* Section 2: 3-Pose Photobooth Strip (If selected) */}
        {features.wantPhoto && (
          <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 16, boxShadow: "3.5px 3.5px 0px #FFDBC0", textAlign: "left" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#3D2B1F", display: "flex", alignItems: "center", gap: 6 }}>
                <span>🎞️</span> <span>Photobooth Strip</span>
              </span>
              <span style={{ fontSize: 11.5, background: "#FFEDE0", color: "#E85D3D", fontWeight: 700, padding: "2px 8px", borderRadius: 8 }}>
                Filter: {activeFilterObj.label}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, margin: "10px 0" }}>
              {[0, 1, 2].map((idx) => (
                <div key={idx} style={{ height: 90, borderRadius: 10, border: "2px solid #3D2B1F", overflow: "hidden", background: "#FFF3E9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {userPhotos[idx] ? (
                    <img src={userPhotos[idx]} alt={`Pose ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", filter: activeFilterObj.css }} />
                  ) : (
                    <span style={{ fontSize: 11, color: "#7A5C46", fontWeight: 700 }}>Pose #{idx + 1}</span>
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button
                onClick={onOpenStudio}
                style={{
                  background: "#FFEDE0",
                  color: "#E85D3D",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "10px 14px",
                  borderRadius: 14,
                  border: "2px solid #3D2B1F",
                  flex: 1,
                  cursor: "pointer",
                }}
              >
                📸 Retake / Studio
              </button>
              <button
                onClick={onDownloadStrip}
                style={{
                  background: "#FF7A3D",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "10px 14px",
                  borderRadius: 14,
                  border: "2px solid #3D2B1F",
                  boxShadow: "2.5px 2.5px 0px #3D2B1F",
                  flex: 1.5,
                  cursor: "pointer",
                }}
              >
                📥 Save Photo Strip
              </button>
            </div>
          </div>
        )}

        {/* Section 3: Phone Download via QR Code (If selected) */}
        {features.wantQR && (
          <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 20, border: "2.5px solid #3D2B1F", padding: 16, boxShadow: "3.5px 3.5px 0px #FFDBC0" }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#3D2B1F", marginBottom: 10, textAlign: "left", display: "flex", alignItems: "center", gap: 6 }}>
              <span>📱</span> <span>Phone Download (QR Code)</span>
            </div>

            {viewerUrl ? (
              <div style={{ background: "#FFF3E9", borderRadius: 16, border: "2px solid #3D2B1F", padding: 14, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <QRCodeSvg value={viewerUrl} size={110} />
                <div style={{ textAlign: "left", maxWidth: 220 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#3D2B1F" }}>
                    Scan with Phone
                  </div>
                  <div style={{ fontSize: 11.5, color: "#7A5C46", marginTop: 4, lineHeight: 1.35 }}>
                    Open mobile download presenter for your saved items!
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={onSaveAndGetQR}
                disabled={uploading}
                style={{
                  background: "#F59E0B",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 20px",
                  borderRadius: 14,
                  border: "2px solid #3D2B1F",
                  boxShadow: "2.5px 2.5px 0px #3D2B1F",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                {uploading ? "⏳ Preparing QR Link..." : "🔗 Generate Phone Download QR Code"}
              </button>
            )}
          </div>
        )}

        <div style={{ marginTop: 24 }}>
          <button style={styles.btnPrimaryEqual} onClick={onDone}>
            ✨ Finish & Start New Session
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeScreen({ onStart, onAdmin }) {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div style={styles.center}>
      <div style={styles.blobTop} />
      <div className="card-container animate-card" style={{ textAlign: "center" }}>
        <BrandHeader />
        <div 
          className="animate-float"
          style={{ margin: "16px 0 8px", cursor: "pointer", display: "inline-block" }} 
          onClick={() => setClickCount((c) => c + 1)}
        >
          <div className="zine-badge">
            <DoodleStarSvg /> Photobooth & Burnout Assessment
          </div>
        </div>
        <h1 style={styles.h1}>
          Check-in & Snap Your Poses
        </h1>
        <p style={styles.pMuted}>
          Booth <b>{brandInfo.event}</b> by {brandInfo.org}. Check your academic burnout status and snap your 3-pose photobooth strip!
        </p>
        <button style={styles.btnPrimaryHero} onClick={onStart}>
          Start Session
        </button>
        <p style={styles.pTiny}>~3 minutes • Confidential • Choice of features</p>
        {clickCount >= 5 && (
          <button style={styles.btnGhostAdmin} onClick={onAdmin}>
            Organizer Panel
          </button>
        )}
        <BrandFooter onOpenAdmin={() => setShowPinModal(true)} />
      </div>
    </div>
  );
}

function IdentityScreen({ identity, setIdentity, features, setFeatures, consent, setConsent, templateId, onSelectTemplate, onStartSession, onBack }) {
  return (
    <div style={styles.center}>
      <div className="card-container animate-card" style={{ maxWidth: 520 }}>
        <div className="zine-badge"><DoodleStarSvg /> Photobooth & Assessment Setup</div>
        <h2 style={styles.h2}>Session Preferences</h2>

        {/* Identity Inputs */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Name / Initials (Optional)</label>
          <input
            style={styles.input}
            placeholder="e.g. Alex / A.S."
            value={identity.name}
            onChange={(e) => setIdentity({ ...identity, name: e.target.value })}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Cohort / Year</label>
            <input
              style={styles.input}
              placeholder="e.g. 2026"
              value={identity.cohort}
              onChange={(e) => setIdentity({ ...identity, cohort: e.target.value })}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Faculty / Major</label>
            <input
              style={styles.input}
              placeholder="e.g. Medicine"
              value={identity.faculty}
              onChange={(e) => setIdentity({ ...identity, faculty: e.target.value })}
            />
          </div>
        </div>

        {/* Template Chooser */}
        <TemplateBundleChooser selectedId={templateId} onSelect={onSelectTemplate} />

        {/* Checkbox Section: Choose Your Experience */}
        <div style={{ margin: "16px 0", background: "#FFF8F3", borderRadius: 16, border: "2px solid #3D2B1F", padding: 14, boxShadow: "3px 3px 0px #FFDBC0", textAlign: "left" }}>
          <div style={{ fontWeight: 700, color: "#3D2B1F", fontSize: 14, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span>🛠️</span> <span>Select Features You Want:</span>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, cursor: "pointer", fontSize: 13.5, color: "#3D2B1F", fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={features.wantReport}
              onChange={(e) => setFeatures({ ...features, wantReport: e.target.checked })}
              style={{ width: 18, height: 18, accentColor: "#FF7A3D", cursor: "pointer" }}
            />
            📊 Academic Burnout Test & Report Card
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, cursor: "pointer", fontSize: 13.5, color: "#3D2B1F", fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={features.wantPhoto}
              onChange={(e) => setFeatures({ ...features, wantPhoto: e.target.checked })}
              style={{ width: 18, height: 18, accentColor: "#FF7A3D", cursor: "pointer" }}
            />
            📸 Photobooth Studio Session
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontSize: 13.5, color: "#3D2B1F", fontWeight: 600 }}>
            <input
              type="checkbox"
              checked={features.wantQR}
              onChange={(e) => setFeatures({ ...features, wantQR: e.target.checked })}
              style={{ width: 18, height: 18, accentColor: "#FF7A3D", cursor: "pointer" }}
            />
            📱 QR Code for Phone Download
          </label>
        </div>

        {/* Informed Consent Requirement */}
        <div style={{ margin: "14px 0", background: "#FFF3E9", borderRadius: 16, border: "2px solid #E85D3D", padding: 14, textAlign: "left" }}>
          <div style={{ fontWeight: 700, color: "#E85D3D", fontSize: 13.5, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
            <span>📋</span> <span>Informed Consent</span>
          </div>
          <p style={{ fontSize: 12, color: "#7A5C46", margin: "0 0 10px", lineHeight: 1.4 }}>
            Your responses are anonymous and kept confidential. Data is used strictly for campus mental health awareness and booth service evaluation.
          </p>
          <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", fontSize: 12.5, color: "#3D2B1F", fontWeight: 700, lineHeight: 1.3 }}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              style={{ width: 18, height: 18, marginTop: 1, accentColor: "#E85D3D", cursor: "pointer" }}
            />
            I agree to participate in this session under these terms.
          </label>
        </div>

        <div className="btn-group-equal" style={{ marginTop: 20 }}>
          <button style={styles.btnGhostEqual} onClick={onBack}>
            ← Back
          </button>
          <button
            style={{
              ...styles.btnPrimaryEqual,
              opacity: consent && (features.wantReport || features.wantPhoto || features.wantQR) ? 1 : 0.5,
              cursor: consent && (features.wantReport || features.wantPhoto || features.wantQR) ? "pointer" : "not-allowed",
            }}
            disabled={!consent || (!features.wantReport && !features.wantPhoto && !features.wantQR)}
            onClick={onStartSession}
          >
            Start Session →
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizScreen({ qIndex, totalQ, answers, onAnswer, onBack }) {
  const currentQ = flatQuestions[qIndex];
  const dim = dimensions.find((d) => d.key === currentQ.dim);
  const progressPct = Math.round(((qIndex + 1) / totalQ) * 100);
  const selectedValue = answers[`${currentQ.dim}_${currentQ.idx}`];

  return (
    <div style={styles.center}>
      <div className="card-container animate-card">
        <div style={styles.progressHeaderRow}>
          <span style={styles.progressLabel}>
            Question <b>{qIndex + 1}</b> of <b>{totalQ}</b>
          </span>
          <span style={styles.progressPctText}>{progressPct}%</span>
        </div>
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progressPct}%` }} />
        </div>

        <div style={{ textAlign: "center", margin: "10px 0 6px" }}>
          <div className="zine-badge">
            <DoodleStarSvg /> {dim.code} • {dim.label}
          </div>
        </div>

        <div style={styles.questionFrame}>
          <h2 style={styles.question}>{currentQ.text}</h2>
        </div>

        <div className="grid-5-equal" style={{ marginTop: 16 }}>
          {likertOptions.map((opt) => {
            const isSelected = selectedValue === opt.v;
            return (
              <button
                key={opt.v}
                onClick={() => onAnswer(opt.v)}
                style={{
                  ...styles.likertBtn,
                  ...(isSelected ? styles.likertBtnActive : {}),
                }}
              >
                <span style={{
                  ...styles.likertNum,
                  color: isSelected ? "#FFFFFF" : "#3D2B1F"
                }}>{opt.v}</span>
                <span style={{
                  ...styles.likertLabel,
                  color: isSelected ? "#FFFFFF" : "#7A5C46"
                }}>{opt.label}</span>
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button style={styles.btnGhostSmall} onClick={onBack}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}


function OrganizerPinModal({ isOpen, onClose, onSuccess }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (pin === "2026" || pin === "maple2026" || pin === "cimsa") {
      setError(false);
      setPin("");
      onSuccess();
    } else {
      setError(true);
    }
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(30, 20, 15, 0.85)", backdropFilter: "blur(5px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999, padding: 16 }}>
      <div className="card-container animate-card" style={{ maxWidth: 400, textAlign: "center", padding: 28 }}>
        <div className="zine-badge"><DoodleStarSvg /> Organizer Authentication</div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#3D2B1F", margin: "14px 0 6px" }}>Organizer Panel Access</h3>
        <p style={{ fontSize: 13, color: "#7A5C46", marginBottom: 16 }}>Enter Organizer PIN to view real-time assessment data and directory:</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter PIN (Default: 2026)"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            autoFocus
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: 14,
              border: error ? "2px solid #E85D3D" : "2px solid #3D2B1F",
              fontSize: 16,
              textAlign: "center",
              letterSpacing: 4,
              marginBottom: 10,
              background: "#FFF3E9",
            }}
          />
          {error && <div style={{ color: "#E85D3D", fontSize: 12, fontWeight: 700, marginBottom: 10 }}>Incorrect PIN. (Default: 2026)</div>}

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button type="button" onClick={onClose} style={{ flex: 1, padding: "10px", borderRadius: 14, border: "2px solid #3D2B1F", background: "#FFEDE0", color: "#E85D3D", fontWeight: 700, cursor: "pointer" }}>
              Cancel
            </button>
            <button type="submit" style={{ flex: 1, padding: "10px", borderRadius: 14, border: "2px solid #3D2B1F", background: "#FF7A3D", color: "#FFFFFF", fontWeight: 700, boxShadow: "2.5px 2.5px 0px #3D2B1F", cursor: "pointer" }}>
              Unlock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AdminScreen({ entries, loading, onDownloadCSV, onBack, onRefresh }) {
  const [adminTab, setAdminTab] = useState("analytics"); // "analytics" | "directory"
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all"); // "all" | "Light" | "Moderate" | "High"

  const count = entries.length;

  // Dimension Averages
  const dimAvgs = dimensions.map((dim) => {
    const avg = count ? entries.reduce((acc, e) => acc + (e.scores?.[dim.key] || 0), 0) / count : 0;
    return { ...dim, avg };
  });

  // Category counts & percentages
  const catCounts = { Light: 0, Moderate: 0, High: 0 };
  entries.forEach((e) => {
    if (e.category) catCounts[e.category] = (catCounts[e.category] || 0) + 1;
  });

  // Faculty distribution
  const facultyCounts = {};
  entries.forEach((e) => {
    const fac = e.faculty?.trim() || "Unspecified";
    facultyCounts[fac] = (facultyCounts[fac] || 0) + 1;
  });
  const topFaculties = Object.entries(facultyCounts).sort((a, b) => b[1] - a[1]);

  // Filtered directory list
  const filteredEntries = entries.filter((e) => {
    const matchesCat = catFilter === "all" || e.category === catFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !search ||
      (e.name || "").toLowerCase().includes(q) ||
      (e.faculty || "").toLowerCase().includes(q) ||
      (e.cohort || "").toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  function handleDeleteEntry(id) {
    if (window.confirm("Are you sure you want to remove this local entry?")) {
      try {
        localStorage.removeItem(STORAGE_PREFIX + id);
        localStorage.removeItem(OLD_STORAGE_PREFIX + id);
        onRefresh();
      } catch (err) {
        console.error("Delete entry error", err);
      }
    }
  }

  return (
    <div style={styles.center}>
      <div className="card-container animate-card" style={{ maxWidth: 680, padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div className="zine-badge"><DoodleStarSvg /> Organizer Panel</div>
          <span style={{ fontSize: 11.5, background: "#E8F8F5", color: "#1A8A7D", border: "1.5px solid #1A8A7D", padding: "3px 10px", borderRadius: 12, fontWeight: 700 }}>
            Cloud Synced ({count} Total)
          </span>
        </div>

        <h2 style={styles.h2}>MAPLE 2026 Assessment Dashboard</h2>
        <p style={{ fontSize: 13, color: "#7A5C46", marginTop: -8, marginBottom: 16 }}>
          Real-time academic burnout analytics & respondent management for CIMSA Unsoed organizers.
        </p>

        {/* Tab Selector */}
        <div style={{ display: "flex", gap: 8, margin: "14px 0 16px", background: "#FFF3E9", padding: 5, borderRadius: 16, border: "2px solid #3D2B1F" }}>
          <button
            type="button"
            onClick={() => setAdminTab("analytics")}
            style={{
              flex: 1,
              padding: "9px 12px",
              borderRadius: 12,
              fontSize: 13.5,
              fontWeight: 700,
              background: adminTab === "analytics" ? "#FF7A3D" : "transparent",
              color: adminTab === "analytics" ? "#FFFFFF" : "#3D2B1F",
              border: adminTab === "analytics" ? "2px solid #3D2B1F" : "none",
              boxShadow: adminTab === "analytics" ? "2px 2px 0px #3D2B1F" : "none",
              cursor: "pointer",
            }}
          >
            Analytics Summary
          </button>
          <button
            type="button"
            onClick={() => setAdminTab("directory")}
            style={{
              flex: 1,
              padding: "9px 12px",
              borderRadius: 12,
              fontSize: 13.5,
              fontWeight: 700,
              background: adminTab === "directory" ? "#FF7A3D" : "transparent",
              color: adminTab === "directory" ? "#FFFFFF" : "#3D2B1F",
              border: adminTab === "directory" ? "2px solid #3D2B1F" : "none",
              boxShadow: adminTab === "directory" ? "2px 2px 0px #3D2B1F" : "none",
              cursor: "pointer",
            }}
          >
            Respondent Directory ({count})
          </button>
        </div>

        {loading ? (
          <div style={{ padding: "40px 0", textAlign: "center", color: "#7A5C46", fontWeight: 700 }}>
            Syncing data with Supabase Cloud...
          </div>
        ) : adminTab === "analytics" ? (
          <>
            {/* Category Breakdown Cards */}
            <div style={styles.catGridSymmetric}>
              <div style={{ ...styles.catCard, borderTop: "4px solid #50B878" }}>
                <div style={styles.catCardLabel}>Light Burnout</div>
                <div style={styles.catCardValue}>{catCounts.Light || 0}</div>
                <div style={{ fontSize: 11, color: "#7A5C46", fontWeight: 700 }}>
                  {count ? Math.round(((catCounts.Light || 0) / count) * 100) : 0}%
                </div>
              </div>
              <div style={{ ...styles.catCard, borderTop: "4px solid #F59E0B" }}>
                <div style={styles.catCardLabel}>Moderate Burnout</div>
                <div style={styles.catCardValue}>{catCounts.Moderate || 0}</div>
                <div style={{ fontSize: 11, color: "#7A5C46", fontWeight: 700 }}>
                  {count ? Math.round(((catCounts.Moderate || 0) / count) * 100) : 0}%
                </div>
              </div>
              <div style={{ ...styles.catCard, borderTop: "4px solid #E85D3D" }}>
                <div style={styles.catCardLabel}>High Burnout</div>
                <div style={styles.catCardValue}>{catCounts.High || 0}</div>
                <div style={{ fontSize: 11, color: "#7A5C46", fontWeight: 700 }}>
                  {count ? Math.round(((catCounts.High || 0) / count) * 100) : 0}%
                </div>
              </div>
            </div>

            {/* Dimension Breakdown Bars */}
            <div style={{ marginTop: 20, textAlign: "left", background: "#FFF8F3", padding: 16, borderRadius: 18, border: "2px solid #3D2B1F" }}>
              <div style={{ fontWeight: 700, color: "#3D2B1F", marginBottom: 12, fontSize: 14 }}>
                Dimension Average Scores (Scale 1.0 - 5.0):
              </div>
              {dimAvgs.map((dim) => (
                <div key={dim.key} style={{ marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, fontWeight: 700, color: "#3D2B1F", marginBottom: 4 }}>
                    <span>{dim.code} {dim.fullLabel}</span>
                    <span>{dim.avg.toFixed(1)} / 5.0</span>
                  </div>
                  <div style={{ height: 12, background: "#FFF3E9", borderRadius: 8, border: "1.5px solid #3D2B1F", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${(dim.avg / 5) * 100}%`,
                        background: dim.avg > 3.2 ? "#E85D3D" : dim.avg > 2.2 ? "#F59E0B" : "#50B878",
                        transition: "width 0.4s ease",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Faculty Distribution */}
            {topFaculties.length > 0 && (
              <div style={{ marginTop: 16, textAlign: "left", background: "#FFF8F3", padding: 14, borderRadius: 16, border: "2px solid #3D2B1F" }}>
                <div style={{ fontWeight: 700, color: "#3D2B1F", marginBottom: 8, fontSize: 13 }}>
                  Top Participating Faculties:
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {topFaculties.slice(0, 6).map(([fac, num]) => (
                    <span key={fac} style={{ background: "#FFEDE0", border: "1.5px solid #3D2B1F", borderRadius: 10, padding: "4px 10px", fontSize: 12, fontWeight: 700, color: "#3D2B1F" }}>
                      {fac}: <b>{num}</b>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Search & Filter Controls */}
            <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              <input
                type="text"
                placeholder="Search name, cohort, faculty..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  flex: 2,
                  padding: "9px 14px",
                  borderRadius: 12,
                  border: "2px solid #3D2B1F",
                  fontSize: 13,
                  background: "#FFF3E9",
                }}
              />
              <select
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
                style={{
                  flex: 1,
                  padding: "9px 10px",
                  borderRadius: 12,
                  border: "2px solid #3D2B1F",
                  fontSize: 12.5,
                  fontWeight: 700,
                  background: "#FFF3E9",
                  color: "#3D2B1F",
                  cursor: "pointer",
                }}
              >
                <option value="all">All Levels ({count})</option>
                <option value="Light">Light ({catCounts.Light || 0})</option>
                <option value="Moderate">Moderate ({catCounts.Moderate || 0})</option>
                <option value="High">High ({catCounts.High || 0})</option>
              </select>
            </div>

            {/* Respondent Directory Table */}
            <div style={{ maxHeight: 360, overflowY: "auto", border: "2px solid #3D2B1F", borderRadius: 14, background: "#FFFFFF" }}>
              {filteredEntries.length === 0 ? (
                <div style={{ padding: "30px 0", color: "#7A5C46", fontSize: 13, fontWeight: 600 }}>
                  No respondents found matching your filters.
                </div>
              ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 12.5 }}>
                  <thead>
                    <tr style={{ background: "#FFEDE0", borderBottom: "2px solid #3D2B1F", color: "#3D2B1F" }}>
                      <th style={{ padding: "10px 12px", fontWeight: 700 }}>#</th>
                      <th style={{ padding: "10px 12px", fontWeight: 700 }}>Name</th>
                      <th style={{ padding: "10px 12px", fontWeight: 700 }}>Faculty / Year</th>
                      <th style={{ padding: "10px 12px", fontWeight: 700 }}>Burnout</th>
                      <th style={{ padding: "10px 12px", fontWeight: 700 }}>Date</th>
                      <th style={{ padding: "10px 12px", textAlign: "center" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.map((e, idx) => {
                      const catCol = e.category === "High" ? "#E85D3D" : e.category === "Moderate" ? "#F59E0B" : "#50B878";
                      const dateStr = e.ts ? new Date(e.ts).toLocaleDateString("en-GB", { month: "short", day: "numeric" }) : "-";
                      const scorePct = Math.round((e.overall01 || 0) * 100);
                      return (
                        <tr key={e.id || idx} style={{ borderBottom: "1px solid #FFDBC0" }}>
                          <td style={{ padding: "10px 12px", fontWeight: 700, color: "#7A5C46" }}>{idx + 1}</td>
                          <td style={{ padding: "10px 12px", fontWeight: 700, color: "#3D2B1F" }}>{e.name || "Anonymous"}</td>
                          <td style={{ padding: "10px 12px", color: "#5A3E2B" }}>
                            {e.faculty || "-"} {e.cohort ? `'${String(e.cohort).slice(-2)}` : ""}
                          </td>
                          <td style={{ padding: "10px 12px" }}>
                            <span style={{ background: catCol, color: "#FFF", fontWeight: 700, padding: "2px 8px", borderRadius: 8, fontSize: 11 }}>
                              {e.category || "Light"} ({scorePct}%)
                            </span>
                          </td>
                          <td style={{ padding: "10px 12px", color: "#7A5C46", fontSize: 11.5 }}>{dateStr}</td>
                          <td style={{ padding: "10px 12px", textAlign: "center" }}>
                            <button
                              type="button"
                              onClick={() => handleDeleteEntry(e.id)}
                              style={{ background: "transparent", color: "#E85D3D", border: "none", fontSize: 14, cursor: "pointer", padding: "2px 6px" }}
                              title="Delete local entry"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}

        {/* Action Controls */}
        <div className="btn-group-equal" style={{ marginTop: 20 }}>
          <button style={styles.btnGhostEqual} onClick={onBack}>
            Exit Panel
          </button>
          <button style={styles.btnSecondaryEqual} onClick={onRefresh}>
            Refresh
          </button>
          <button style={styles.btnPrimaryEqual} onClick={onDownloadCSV} disabled={!count}>
            Export CSV ({count})
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  appRoot: {
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  center: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "28px 16px",
    position: "relative",
    zIndex: 2,
  },
  blobTop: {
    display: "none",
  },
  h1: {
    fontFamily: "var(--font-display)",
    fontWeight: 800,
    fontSize: 48,
    lineHeight: 1.15,
    color: "#E85D3D",
    letterSpacing: "-0.5px",
    margin: "12px 0 10px",
    transform: "none",
    fontStyle: "normal",
    textAlign: "center",
  },
  h2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 34,
    color: "#3D2B1F",
    margin: "6px 0 18px",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: 1.2,
  },
  pMuted: {
    color: "#7A5C46",
    fontSize: 16,
    lineHeight: 1.5,
    margin: "0 0 24px",
    fontStyle: "normal",
  },
  pTiny: { color: "#A9876F", fontSize: 13, marginTop: 18, fontStyle: "normal" },
  btnPrimaryHero: {
    background: "#FF7A3D",
    color: "#FFFFFF",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 18,
    padding: "16px 40px",
    borderRadius: 20,
    border: "2px solid #3D2B1F",
    boxShadow: "4px 4px 0px #3D2B1F",
    display: "inline-block",
  },
  btnPrimaryEqual: {
    background: "#FF7A3D",
    color: "#FFFFFF",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 18,
    border: "2px solid #3D2B1F",
    boxShadow: "3px 3px 0px #3D2B1F",
  },
  btnSecondaryEqual: {
    background: "#FFEDE0",
    color: "#E85D3D",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 16,
    borderRadius: 18,
    border: "2px solid #3D2B1F",
    boxShadow: "3px 3px 0px #FFC29B",
  },
  btnGhostEqual: {
    background: "#FFF3E9",
    color: "#7A5C46",
    fontWeight: 700,
    fontSize: 15,
    borderRadius: 18,
    border: "2px solid #3D2B1F",
    boxShadow: "2.5px 2.5px 0px #FFDBC0",
  },
  btnGhostAdmin: {
    background: "transparent",
    color: "#A9876F",
    fontWeight: 700,
    fontSize: 13.5,
    padding: "8px 14px",
    borderRadius: 12,
    marginTop: 10,
  },
  btnGhostSmall: {
    background: "transparent",
    color: "#A9876F",
    fontWeight: 700,
    fontSize: 14,
    padding: "6px 12px",
  },
  formGroup: {
    marginBottom: 16,
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: 700,
    color: "#7A5C46",
    fontSize: 14,
    marginBottom: 6,
    fontStyle: "normal",
  },
  input: {
    width: "100%",
    padding: "14px 18px",
    borderRadius: 16,
    border: "2px solid #3D2B1F",
    boxShadow: "2.5px 2.5px 0px #FFDBC0",
    fontSize: 16,
    background: "#FFFBF7",
    color: "#3D2B1F",
    fontStyle: "normal",
  },
  progressTrack: {
    height: 10,
    background: "#FFEDE0",
    borderRadius: 999,
    border: "1.5px solid #3D2B1F",
    overflow: "hidden",
    marginBottom: 8,
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #FF9E6D 0%, #FF7A3D 100%)",
    borderRadius: 999,
    transition: "width 0.3s ease",
  },
  progressHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  progressLabel: {
    fontSize: 13,
    color: "#A9876F",
    fontWeight: 700,
  },
  progressPctText: {
    fontSize: 13,
    color: "#E85D3D",
    fontWeight: 700,
  },
  questionFrame: {
    minHeight: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 0",
  },
  question: {
    fontFamily: "var(--font-display)",
    fontSize: 28,
    color: "#3D2B1F",
    lineHeight: 1.4,
    margin: 0,
    textAlign: "center",
    fontStyle: "normal",
  },
  likertBtn: {
    height: 84,
    background: "#FFF8F3",
    border: "2px solid #3D2B1F",
    boxShadow: "3px 3px 0px #FFDBC0",
    borderRadius: 18,
    padding: "8px 4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    transition: "all 0.15s ease",
  },
  likertBtnActive: { 
    background: "#FF7A3D", 
    borderColor: "#3D2B1F",
    boxShadow: "4px 4px 0px #3D2B1F",
    transform: "scale(1.02)",
  },
  likertNum: {
    fontFamily: "var(--font-body)",
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1,
  },
  likertLabel: {
    fontSize: 12,
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1.1,
  },
  badge: {
    display: "inline-block",
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 18,
    padding: "10px 26px",
    borderRadius: 999,
    border: "2px solid #3D2B1F",
    boxShadow: "3px 3px 0px #3D2B1F",
    margin: "6px 0 10px",
  },
  tipBox: {
    background: "#FFF3E9",
    borderRadius: 20,
    border: "2px solid #3D2B1F",
    boxShadow: "3.5px 3.5px 0px #FFDBC0",
    padding: "18px 20px",
    color: "#7A5C46",
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 600,
    margin: "16px 0",
    textAlign: "left",
  },
  tipTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    color: "#3D2B1F",
    marginBottom: 6,
    fontSize: 17,
  },
  dimListSymmetric: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "14px 0",
  },
  dimMeterCard: {
    background: "#FFF8F3",
    border: "2px solid #3D2B1F",
    boxShadow: "2.5px 2.5px 0px #FFDBC0",
    borderRadius: 14,
    padding: "12px 16px",
    textAlign: "left",
  },
  dimMeterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 14,
    color: "#3D2B1F",
    marginBottom: 6,
  },
  dimMeterVal: {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    color: "#E85D3D",
    fontSize: 15,
  },
  dimMeterTrack: {
    height: 8,
    background: "#FFEDE0",
    border: "1px solid #3D2B1F",
    borderRadius: 999,
    overflow: "hidden",
  },
  dimMeterFill: {
    height: "100%",
    borderRadius: 999,
    transition: "width 0.4s ease",
  },
  catGridSymmetric: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 12,
    margin: "18px 0",
  },
  catCard: {
    background: "#FFF8F3",
    borderRadius: 16,
    padding: "14px 10px",
    textAlign: "center",
    border: "2px solid #3D2B1F",
    boxShadow: "3px 3px 0px #FFDBC0",
  },
  catCardLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#7A5C46",
  },
  catCardValue: {
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 24,
    color: "#3D2B1F",
    marginTop: 4,
  },
  barRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  barLabel: {
    fontSize: 13.5,
    fontWeight: 700,
    color: "#7A5C46",
    width: 140,
    flexShrink: 0,
    textAlign: "left",
  },
  barTrack: {
    flex: 1,
    height: 12,
    background: "#FFEDE0",
    border: "1px solid #3D2B1F",
    borderRadius: 999,
    overflow: "hidden",
  },
  barFill: { height: "100%", background: "#FF7A3D", borderRadius: 999 },
  barVal: {
    fontSize: 13.5,
    fontWeight: 700,
    color: "#E85D3D",
    width: 32,
    textAlign: "right",
  },
  brandHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 6,
  },
  brandMark: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brandText: { textAlign: "left" },
  brandName: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 22,
    color: "#E85D3D",
    letterSpacing: 0.5,
    lineHeight: 1.1,
  },
  brandTagline: { fontSize: 11.5, color: "#A9876F", fontWeight: 600 },
  brandFooter: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: 700,
    marginTop: 22,
    textAlign: "center",
  },
  footerDot: { margin: "0 4px" },
  stepDots: { display: "flex", gap: 5, marginLeft: 8 },
  stepDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#FFE1CC",
  },
  stepDotActive: { background: "#FF7A3D" },
  stepDotDone: { background: "#FFC29B" },
};

