import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SearchButton from '../../SearchButton';
import { b1, b3, black, blue, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';
import HotelSearchOptn from './HotelSearchOptn';
import HotelPromoOffers from './HotelPromoOffers';
import commonStyles from '../../../assets/css/CommonFonts';

const Hotels = ({ navigation, data, width, height }) => {
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
            {/* trip option nav bar */}
            <View style={styles.mainMenuWrap}>
                {/* trip option content */}
                <View style={{ marginHorizontal: 10 }}>
                    <HotelSearchOptn navigation={navigation} />
                </View>
            </View>

            {/* search button */}
            <SearchButton navigation={navigation} screenName={"hotelsearches"} />

            {/* prifile option */}
            <View style={{ marginHorizontal: 15, marginTop: 18, zIndex: -1 }}>
                <View style={styles.pBarWrap}>
                    <View style={styles.proLogoWrap}>
                        <Image style={{ marginHorizontal: 10 }} source={icon.prologo} />
                        <Text style={styles.proLogoTxt}>Welcome Back, Kevin!</Text>
                    </View>

                    <Image style={styles.arwImg} source={icon.rightArrow} />
                </View>
            </View>

            {/* calling option */}
            <View style={{ marginHorizontal: 15, marginTop: 18, marginBottom: 10 }}>
                <View style={styles.addBarWrap}>
                    <Image style={{ marginLeft: 7 }} source={icon.proimg} />

                    <View>
                        <Text style={styles.addTxtB}>Looking for last-minute deals?</Text>
                        <Text style={styles.addTxt}>Speak to a travel expert and a get assistance 24/7</Text>
                    </View>

                    <TouchableOpacity style={styles.callImgWrap}>
                        <Image style={styles.callImg} source={icon.mobile} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* deals option */}
            <View style={styles.dealWrap}>
                <Text style={styles.dealHeadTxt}>Deals of the day</Text>

                <View style={styles.dealContWrap}>
                    {data.map((_, i) => (
                        <View key={i}>
                            <HotelPromoOffers />
                            {i == data.length - 1 ? <View style={{ marginBottom: 30 }} /> : null}
                        </View>
                    ))}
                </View>

                <View style={{ marginHorizontal: 10 }}>
                    <Text style={[commonStyles.ns400, { color: b3, lineHeight: 19 }]}>
                        *All fares above were last found on: <Text style={{ color: "#CB3926", fontFamily: "Arial" }}>Oct 02, 2023 at 12:10:59 AM</Text>.
                        These are based on average nightly rates and airfare includes all fuel surcharges,
                        taxes & fees and our service fees. Hotels, rental cars and activities may have
                        additional taxes and fees. Displayed rates are based on historical data,
                        are subject to change, and cannot be guaranteed at the time of booking.
                        See all booking <Text onPress={()=> Alert.alert("t&c")} style={{ color: blue, fontFamily: "Arial", textDecorationLine: "underline" }}>terms and conditions</Text>
                    </Text>

                    <View style={{ marginVertical: 20, marginHorizontal: 15 }}>
                        <TouchableOpacity
                            style={styles.viewall}
                        >
                            <Text style={[commonStyles.lbB1, { fontSize: 22, color: blue }]}>
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

export default Hotels;

const styles = StyleSheet.create({
    mainMenuWrap: {
        marginHorizontal: 7,
        backgroundColor: white,
        borderRadius: 4,
        elevation: 6,
        marginBottom: 20,
    },
    mmContWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 7,
        marginHorizontal: 5
    },
    mmBtn: {
        paddingVertical: 6,
        paddingHorizontal: 21,
    },
    mmBtnActive: {
        paddingVertical: 6,
        backgroundColor: "rgba(33, 180, 226, 0.1)",
        paddingHorizontal: 21,
        borderRadius: 4,
        borderColor: "rgba(33, 180, 226, 1)",
        borderWidth: 0.9
    },
    mmBtnTxtActive: {
        color: "rgba(33, 180, 226, 1)",
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    mmBtnTxt: {
        color: b3,
        fontFamily: 'NunitoSans_10pt-Bold',
        fontSize: 15,
    },
    pBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        borderRadius: 4,
        paddingVertical: 12,
        elevation: 4,
    },
    callImg: {
        width: 26,
        height: 26,
    },
    callImgWrap: {
        width: 45,
        height: 45,
        backgroundColor: blue,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginRight: 7,
    },
    arwImg: {
        width: 20,
        height: 20,
        tintColor: b3,
        marginRight: 10
    },
    proLogoWrap: {
        flexDirection: "row",
        alignItems: "center",
    },
    proLogoTxt: {
        color: black,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 15,
        marginLeft: 15,
    },
    addBarWrap: {
        backgroundColor: white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 12,
        elevation: 3,
    },
    addTxtB: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 13,
        marginBottom: 5
    },
    addTxt: {
        color: b1,
        fontFamily: "NunitoSans_10pt-Regular",
        fontSize: 11,
    },
    dealWrap: {
        backgroundColor: white,
        elevation: 3,
        flex: 1,
        borderRadius: 10,
        marginTop: 12,
    },
    dealHeadTxt: {
        fontFamily: "NunitoSans_10pt-Bold",
        fontSize: 17,
        color: b1,
        textAlign: "center",
        marginTop: 25,
    },
    dealContWrap: {
        marginTop: 20,
        marginHorizontal: 20,
        flex: 1,
        rowGap: 25,
    },
    viewall: {
        borderWidth: 2,
        borderColor: blue,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 10,
    },
});