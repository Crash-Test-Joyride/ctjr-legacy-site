import pkg from 'canvas';
import metadata from '../../json/metadata.json';

import ThreeD from '../../images/backgrounds_fs/3D.png'
import ThreeDBlank from '../../images/backgrounds_fs/3D_Blank.png'
import ThreeDMummy from '../../images/backgrounds_fs/3D_Mummy.png'
import Andy from '../../images/backgrounds_fs/Andy.png'
import Anemone from '../../images/backgrounds_fs/Anemone.png'
import Azaleas from '../../images/backgrounds_fs/Azaleas.png'
import Blank from '../../images/backgrounds_fs/Blank.png'
import BlueWaverider from '../../images/backgrounds_fs/Blue_Waverider.png'
import Blue from '../../images/backgrounds_fs/Blue.png'
import Bramante from '../../images/backgrounds_fs/Bramante.png'
import CheckeredWaverider from '../../images/backgrounds_fs/Checkered_Waverider.png'
import Frida from '../../images/backgrounds_fs/Frida.png'
import Gingerider from '../../images/backgrounds_fs/Gingerider.png'
import GreenWaverider from '../../images/backgrounds_fs/Green_Waverider.png'
import GuavaWaverider from '../../images/backgrounds_fs/Guava_Waverider.png'
import Happy from '../../images/backgrounds_fs/Happy.png'
import HenriII from '../../images/backgrounds_fs/HenriII.png'
import Henri from '../../images/backgrounds_fs/Henri.png'
import Hypnotize from '../../images/backgrounds_fs/Hypnotize.png';
import Inverted from '../../images/backgrounds_fs/Inverted.png'
import Jasmine from '../../images/backgrounds_fs/Jasmine.png'
import LouisMono from '../../images/backgrounds_fs/Louis_Mono.png'
import LouisPoly from '../../images/backgrounds_fs/Louis_Poly.png'
import Louis from '../../images/backgrounds_fs/Louis.png'
import MandarinWaverider from '../../images/backgrounds_fs/Mandarin_Waverider.png'
import Manekirider from '../../images/backgrounds_fs/Manekirider.png';
import PolyTrails from '../../images/backgrounds_fs/Poly_Trails.png'
import Punkrider from '../../images/backgrounds_fs/Punkrider.png'
import RedWaverider from '../../images/backgrounds_fs/Red_Waverider.png';
import ScottII from '../../images/backgrounds_fs/ScottII.png'
import ScottIII from '../../images/backgrounds_fs/ScottIII.png'
import ScottIV from '../../images/backgrounds_fs/ScottIV.png'
import ScottV from '../../images/backgrounds_fs/ScottV.png'
import Scott from '../../images/backgrounds_fs/Scott.png'
import SecretSkittles from '../../images/backgrounds_fs/Secret_Skittles.png'
import Sedona from '../../images/backgrounds_fs/Sedona.png';
import Skittles from '../../images/backgrounds_fs/Skittles.png'
import Soulrider from '../../images/backgrounds_fs/Soulrider.png'
import Spiritrider from '../../images/backgrounds_fs/Spiritrider.png'
import TheKing from '../../images/backgrounds_fs/The_King.png'
import TheMonument from '../../images/backgrounds_fs/The_Monument.png'
import Thrillrider from '../../images/backgrounds_fs/Thrillrider.png';
import Virgil from '../../images/backgrounds_fs/Virgil.png'
import Wavey from '../../images/backgrounds_fs/Wavey.png'
import Whistler from '../../images/backgrounds_fs/Whistler.png'
import Zorg from '../../images/backgrounds_fs/Zorg.png'
import Logo from '../../images/lounge/lounge_logo.png';
import CTJR from '../../images/backgrounds_fs/CTJR.png';
import CTJR2 from '../../images/backgrounds_fs/CTJR2.png';

const positions = [
    [-450, 450, 1.1],
    [-80, 420, 1.1],
    [-390, 100, 0.95],
    [-50, 130, 0.95],
    [260, 480, 1.1],
    [-320, -200, 0.8],
    [-60, -170, 0.8],
    [290, 100, 0.95],
    [600, 430, 1.1],
    [200, -184, 0.8],
    [610, 120, 0.95],
    [930, 360, 1.1],
    [450, -200, 0.8],
    [960, 100, 0.95],
    [740, -220, 0.8],
    [1280, 430, 1.1],
    [1290, 150, 0.95],
    [1640, 410, 1.1],
    [1030, -162, 0.8],
    [1310, -210, 0.8],
    [1600, 100, 0.95],
    [1580, -190, 0.8],
    [2000, 400, 1.1],
    [1910, 90, 0.95],
    [1850, -216, 0.8],
    [2300, 440, 1.1],
    [2200, 90, 0.95],
    [2140, -230, 0.8],
    [2400, -200, 0.8],
    [2440, 120, 0.95]
]

const backgroundMap = {
    "3D": ThreeD,
    "3D Blank": ThreeDBlank,
    "3D Mummy": ThreeDMummy,
    "Andy": Andy,
    "Anemone": Anemone,
    "Azaleas": Azaleas,
    "Blank": Blank,
    "Blue Waverider": BlueWaverider,
    "Blue": Blue,
    "Bramante": Bramante,
    "Checkered Waverider": CheckeredWaverider,
    "CTJR": CTJR,
    "CTJR2": CTJR2,
    "Frida": Frida,
    "Gingerider": Gingerider,
    "Green Waverider": GreenWaverider,
    "Guava Waverider": GuavaWaverider,
    "Happy": Happy,
    "Henri": Henri,
    "Henri II": HenriII,
    "Hypnotize": Hypnotize,
    "Inverted": Inverted,
    "Jasmine": Jasmine,
    "Louis Mono": LouisMono,
    "Louis Poly": LouisPoly,
    "Louis": Louis,
    "Mandarin Waverider": MandarinWaverider,
    "Manekirider": Manekirider,
    "Poly Trails": PolyTrails,
    "Punkrider": Punkrider,
    "Red Waverider": RedWaverider,
    "Scott": Scott,
    "Scott II": ScottII,
    "Scott III": ScottIII,
    "Scott IV": ScottIV,
    "Scott V": ScottV,
    "Secret Skittles": SecretSkittles,
    "Sedona": Sedona,
    "Skittles": Skittles,
    "Soulrider": Soulrider,
    "Spiritrider": Spiritrider,
    "The King": TheKing,
    "The Monument": TheMonument,
    "Thrillrider": Thrillrider,
    "Virgil": Virgil,
    "Wavey": Wavey,
    "Whistler": Whistler,
    "Zorg": Zorg
}

const { createCanvas, loadImage } = pkg;
const CHARACTER_BASE_URL =  process.env.REACT_APP_CHARACTER_BASE_URL;
const PHONE_RESOLUTIONS = {
    "galaxy_s10e": [1080, 2280],
    "galaxy_s10": [1440, 3040],
    "galaxy_s20": [1440, 3200],
    "galaxy_s21": [1440, 3200],
    "galaxy_s21_5g": [1080, 2400],
    "galaxy_s8": [1440, 2960],
    "galaxy_note_10": [800, 1280],
    "galaxy_note_10_plus": [1440, 3040],
    "iphone_12_pro_max": [1284, 2778],
    "iphone_12_pro": [1170, 2532],
    "iphone_7": [750, 1134],
    "iphone_7_plus": [1080, 1920],
    "galaxy_note_9": [1440, 2960],
    "iphone_xr": [828, 1792],
    "iphone_8": [750, 1334],
    "iphone_8_plus": [1080, 1920],
    "pixel_5": [1080, 2340],
    "pixel_4": [1080, 2280],
    "pixel_2": [1080, 1920],
    "pixel_5_xl": [1440, 2960],
    "pixel_4_xl": [1440, 3040],
    "pixel_2_xl": [1440, 2880]  
}
const BACKGROUND_DIR = `../../images/backgrounds_fs`;

export async function createMobileBanner(id, phone, background) {
    const dimensions = PHONE_RESOLUTIONS[phone];
    return await drawMobileImage(dimensions[0], dimensions[1], id, background);
}

export async function createTwitterBanner(ids, background, includeNumbers) {
    const dimensions = [3000, 1000];
    return await drawTwitterImage(dimensions[0], dimensions[1], ids, background, includeNumbers);

}

async function drawMobileImage(width, height, id, background) {
    try {
        console.log(`${BACKGROUND_DIR}/${background}.png`);

        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext("2d");
        ctx.patternQuality = 'best';
        ctx.quality = 'best';

        await drawMobileBackground(id, ctx, background, width, height)

        const charImg = new Image();
        charImg.setAttribute('crossOrigin', '');
        charImg.src = `${CHARACTER_BASE_URL}${id}.png`;
        await decodeWithRetry(charImg);
        await ctx.drawImage(charImg, 0, height - width, width, width);

        return canvas.toDataURL();
    } catch(e) {
        console.log(e)
    }
}

async function drawTwitterImage(width, height, ids, background, includeNumbers) {
    try {
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext("2d");
        ctx.patternQuality = 'best';
        ctx.quality = 'best';

        await drawTwitterBackground(width, height, ctx, background, ids.length);
        if (includeNumbers)
            await drawFont(ids, ctx, width, height, background);
        await drawCharacters(width, height, ctx, ids, background === "3D");


        return canvas.toDataURL();
    } catch(e) {
        console.log(e)
    }
}

async function drawCharacters(width, height, ctx, ids, has3D) {
    if (ids.length <= 6) {
        await drawCharactersBasic(width, height, ctx, ids, has3D);
    } else {
        await drawCharactersMany(width, height, ctx, ids, has3D);
    }
}

async function drawCharactersBasic(width, height, ctx, ids, has3D) {
    const marginRight = (6 - ids.length) * 150;
    for (let i = 0; i < ids.length; i++) {
        if (has3D) {
            const backImg = new Image();
            backImg.src = isMummy(ids[i]) ? backgroundMap["3D Mummy"] : backgroundMap["3D"];
            await decodeWithRetry(backImg);
            await ctx.drawImage(backImg, width-(0.9 * height * (1 + i*0.45))-marginRight, 0.1 * height, 0.9 * height, 0.9 * height);
        }
        const charImg = new Image();
        charImg.setAttribute('crossOrigin', '');
        charImg.src = `${CHARACTER_BASE_URL}${ids[i]}.png`;
        await decodeWithRetry(charImg)
        await ctx.drawImage(charImg, width-(0.9 * height * (1 + i*0.45))-marginRight, 0.1 * height, 0.9 * height, 0.9 * height);
    }
}

async function drawCharactersMany(width, height, ctx, ids, has3D) {
    const len =  Math.min(positions.length, ids.length);
    for (let i = len-1; i >= 0; i--) {
        const charImg = new Image();
        charImg.setAttribute('crossOrigin', '');
        charImg.src = `${CHARACTER_BASE_URL}${ids[i]}.png`;
        await decodeWithRetry(charImg);
        await ctx.drawImage(charImg, positions[i][0], positions[i][1], height*positions[i][2], height*positions[i][2]);
    }
}

async function drawTwitterBackground(width, height, ctx, background, numIds) {
    const backImg = new Image();
    if (background === "3D")
        backImg.src = backgroundMap["3D Blank"];
    else if (background === "CTJR" && numIds < 7)
        backImg.src = backgroundMap["CTJR2"]
    else
        backImg.src = backgroundMap[background];
    await decodeWithRetry(backImg);
    if (["Sedona", "Blue", "Happy", "Henri II", "Hypnotize", "Scott II", "Soulrider", "The Monument", "Thrillrider", "Whistler"].includes(background)) {
        await ctx.drawImage(backImg, 0, -((width - height) / 2), width, width); // middle
    } else if (["Henri", "Jasmine", "Wavey"].includes(background)) {
        await ctx.drawImage(backImg, 0, -(width - height), width, width); // bottom
    } else if (background === "CTJR") {
        await ctx.drawImage(backImg, 0, 0, width, height);
    } else {
        await ctx.drawImage(backImg, 0, 0, width, width); // top
    }
    if (background.includes("Skittles")) {
        ctx.fillStyle = '#FFF4';
        await ctx.fillRect(0, 0, width, width);
    }
}

async function drawFont(ids, ctx, width, height, background) {
    let size = 40;
    ctx.font = `${size}px Graphik-Black`;
    ctx.textAlign = "end";
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';

    for (let i = 0; i < ids.length; i++) {
        let xPos = width - (10 + 80 * Math.floor(i / 19));
        await ctx.strokeText(`#${ids[i]}`, xPos, height - ((size+5) * ((i%19)+1)));
        await ctx.fillText(`#${ids[i]}`, xPos, height - ((size+5) * ((i%19)+1)));
    }
}

function isMummy(id) {
    const attributes =  metadata[Number(id)].attributes;
    for (const attribute of attributes) {
        if (attribute.trait_type === "Model" && attribute.value === "Mummy") return true;
    }
    return false;
}

async function drawMobileBackground(id, ctx, name, width, height) {
    const backImg = new Image();
    backImg.src = name === "CTJR" ? backgroundMap["Blank"] : backgroundMap[name];
    await backImg.decode();
    if (name === "3D") {
        if (isMummy(id)) backImg.src = backgroundMap['3D Mummy']
        const backImgB = new Image();
        backImgB.src = backgroundMap['3D Blank'];
        await backImgB.decode();
        await ctx.drawImage(backImgB, 0, 0, height, height);
        await ctx.drawImage(backImg, 0, height - width, width, width);
    } else if (["Poly Trails", "Bramante", "Blue", "Happy", "Hypnotize", "Scott II", "Scott V", "Wavey"].includes(name)) {
        await ctx.drawImage(backImg, -((height - width) / 2), 0, height, height); // middle
    } else if (["Frida", "Sedona", "Whistler"].includes(name)) {
        await ctx.drawImage(backImg, -((height - width)), 0, height, height); // right
    } else {
        await ctx.drawImage(backImg, 0, 0, height, height); // left
    }
    if (name === "CTJR") {
        const backImgB = new Image();
        backImgB.src = Logo;
        await backImgB.decode();
        const yPos = height <= 1300 ? height / 8 : height / 4.5
        await ctx.drawImage(backImgB, 0, yPos, width, width / 2);
    }
}

async function decodeWithRetry(img) {
    let retry = true;
    while (retry) {
        try {
            await img.decode();
            retry = false;
        } catch (e) {
            if (!e.message.includes("source image cannot be decoded")) {
                retry = false;
            }
        }
    }
}