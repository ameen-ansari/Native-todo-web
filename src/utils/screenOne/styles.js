import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const style = StyleSheet.create({
    parent: {
        position: 'relative',
    },
    skipBtn: {
        width: 80,
        height: 28,
        backgroundColor: '#8205FF',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skipBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    gradientBorder: {
        width: 100,
        height: 100,
    },
    skipBtnTO: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 35,
        marginRight: 20,
    },
    centerImage: {
        width: 355,
        height: 406,
        marginTop: 23,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    manageTasksText: {
        fontWeight: 700,
        fontSize: 22,
        lineHeight: 26,
        textAlign: 'center',
        marginTop: 22,
        color: '#000000',
    },
    underManageTasksText: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        marginTop: 16,
        color: '#5D6065',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: width * 0.7,
    },
    next: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 67,
        width: 67,
        position: 'relative',
        top: 20,
    },
    back: {
        position: 'relative',
        zIndex: 0,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17,
        color: '#FFFFFF',
        marginTop: 17,
        marginLeft: 20,
    },
    circlesParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 1,
        gap: 5,
        marginTop: 67,
        marginBottom: 30,
    },
    circles: {
        width: 12,
        height: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
    },
    CenterCircles: {
        width: 12,
        height: 12,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 50,
    },
});

export { style }