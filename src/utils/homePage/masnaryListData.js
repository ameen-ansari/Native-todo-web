import { card1 , card2 , card3 , card4 } from "../../../assets/images/homePage/images";

const data = [
    {
        id: 1,
        height: 206,
        angle: 10.5,
        colorsOfLG: ['#FF005C', '#FF699F'],
        locationssOfLG: [0.25, 0.75],
        text1: 'Mobile App Design',
        text2: '10 Tasks',
        image: card1,
        imgStyle: {
            width: 163,
            height: 177,
            position: 'absolute',
            top: -16,
            left: -19,
        },
        arrowRef: {
            flex: 1,
            justifyContent: 'flex-start',
            marginTop: 23,
        },
    },
    {
        id: 2,
        height: 145,
        angle: 28.14,
        colorsOfLG: ['rgba(243, 104, 3, 0.99)', '#FFCA0F'],
        locationssOfLG: [0.1742, 1.27],
        text1: 'Pending',
        text2: '16 Tasks',
        image: card2,
        imgStyle: {
            width: 116,
            height: 118,
            position: 'absolute',
            top: -12,
            left: -11,
        },
        arrowRef: {
            flex: 1,
            justifyContent: 'flex-start',
            marginTop: 23,
        },
    },
    {
        id: 3,
        height: 135,
        angle: 23.37,
        colorsOfLG: ['#8205FF', '#CFA1FE'],
        locationssOfLG: [0.262, 1.075],
        text1: 'Logo',
        text2: '2 Tasks',
        image: card3,
        imgStyle: {
            width: 127,
            height: 146,
            position: 'absolute',
            top: -29,
            left: -20,
        },
        arrowRef: {
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 11,
        },
    },
    {
        id: 4,
        height: 206,
        angle: 18.51,
        colorsOfLG: ['#00F0FF', 'rgba(0, 240, 255, 0.5)'],
        locationssOfLG: [0.5452, 1],
        text1: 'Website Design',
        text2: '2 Tasks',
        image: card4,
        imgStyle: {
            width: 91,
            height: 106,
            position: 'absolute',
            top: 22,
            left: 4,
        },
        arrowRef: {
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 11,
        },
    },
];

export { data }