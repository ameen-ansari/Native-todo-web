import { StyleSheet } from "react-native";

// Navbar Style
const navbarStyle = StyleSheet.create({
    navbar: {
        marginTop: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navs: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 19,
    },
    menu: {
        width: 40,
        height: 40,
    },
    date: {
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 15,
        marginLeft: 20,
    },
    profile: {
        width: 48,
        height: 48,
        marginRight: 20,
    },
    cardsParent: {
        marginLeft: 20,
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

// MasonaryLst Style
const masonaryLstStyle = StyleSheet.create({
    LG: {
        width: '100%',
        borderRadius: 20,
        marginLeft: '5%',
        marginVertical: 10,
        flexDirection: 'row',
        position: 'relative',
    },
    subParent1: {
        justifyContent: 'flex-end',
        flex: 4,
        alignItems: 'flex-start',
    },
    text1: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 17,
        color: '#FFFFFF',
        marginLeft: 20,
        marginBottom: 11,
    },
    text2: {
        fontSize: 9,
        fontWeight: 400,
        lineHeight: 11,
        color: '#FFFFFF',
        marginLeft: 20,
        marginBottom: 20,
    },
    imgSizeManager: {
        width: 21.9,
        height: 21.3,
    },
});

// On Going Section Style
const GoingSecStyle = StyleSheet.create({
    onGoingText: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 29.4,
        color: '#6C6868',
        paddingBottom: 5,
    },
    startUp: {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 17.07,
        color: '#000000',
    },
    time: {
        fontSize: 9,
        fontWeight: 400,
        lineHeight: 10.97,
        color: 'rgba(93, 96, 101, 0.5)',
        marginLeft: 5,
    },
    statusInPer: {
        width: 98,
        height: 22,
        backgroundColor: 'rgba(246, 163, 243, 0.28)',
        borderRadius: 5,
        color: '#F05CEA',
        fontSize: 12,
        fontWeight: 700,
        textAlign: 'center',
        marginTop: 27,
    },
    seeAllBtn: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 14.63,
        color: 'rgba(255, 12, 100, 1)',
        textAlign: 'right',
        marginRight: 19,
    },
    clipboardImg: { alignSelf: 'center', marginTop: 25 },
    clockImg: { width: 18, height: 18 },
    timeParent: { flexDirection: 'row', marginTop: 9, alignItems: 'center' },
    seeAllSideParent: { flex: 1, marginTop: 5 }
});

const style = StyleSheet.create({
    parent: {
      backgroundColor: '#FDFDFD',
    },
    myTasksText: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 22,
      marginTop: 25,
      marginLeft: 20,
      color: '#000000',
    },
  });

export {
    navbarStyle,
    masonaryLstStyle,
    GoingSecStyle,
    style
}
