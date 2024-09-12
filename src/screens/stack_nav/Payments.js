import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomBottomSheet from '../../utility/CustomBtmSheet';
import {b1, b3, violet, white} from '../../config/colors';
import {genCurrentDate} from '../../config/CurrentDate';
import {_fonts, _ms, _mvs} from '../../components/utils/Responsive';
import icon from '../../config/IconAssets';

const Payments = ({navigation}) => {
  const tsRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenClose = () => {
    if (isVisible) {
      tsRef.current.close();
      setIsVisible(false);
    } else {
      tsRef.current.open();
      setIsVisible(true);
    }
  };

  const paymentDetails = (
    <View>
      <View style={secondStyle.parent}>
        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>
            Convenience Fee
          </Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$50</Text>
        </View>

        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>Fare</Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$430</Text>
        </View>

        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>Charity</Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$15</Text>
        </View>

        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>Seat</Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$100</Text>
        </View>

        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>Meal</Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$180</Text>
        </View>

        <View style={secondStyle.childOne}>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>Baggage</Text>
          <Text style={[styles.ns600, {fontSize: _ms(14)}]}>$120</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.hr, {flex: 1, marginTop: 0}]} />
        <View style={secondStyle.childTwo}>
          <Text style={[styles.ns600, {fontSize: _ms(9), color: b3}]}>
            ONE WAY TRIP
          </Text>
        </View>
        <View style={[styles.hr, {flex: 1, marginTop: 0}]} />
      </View>

      <View style={secondStyle.childThree}>
        <Image
          style={{width: _ms(35), height: _ms(35), marginRight: 10}}
          source={require('../../assets/icons/indigo.png')}
        />

        <View style={{alignItems: 'flex-start'}}>
          <View style={styles.right}>
            <Text style={styles.navHeadTxt}>Dhaka</Text>
            <Image
              style={styles.rightImg}
              source={require('../../assets/icons/next.png')}
            />
            <Text style={styles.navHeadTxt}>Dubai</Text>
          </View>
          <Text style={styles.navSubHeadTxt}>
            {genCurrentDate()} | 2:15 PM - 10:30 PM
          </Text>
        </View>
      </View>

      <View style={[styles.hr, {marginTop: _mvs(20)}]} />

      <View style={{marginLeft: _ms(20), marginVertical: _mvs(10)}}>
        <Text style={[styles.ns600, {fontSize: _ms(12)}]}>Kevin Vo (F)</Text>

        <Text style={[styles.ns600, {fontSize: _ms(12)}]}>
          kevinvo@gmail.com | +91-9876543210
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <View style={styles.Wrap}>
        {/* nav */}
        <TouchableOpacity
          style={styles.nav}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/icons/next.png')}
          />
          <Text style={[styles.lbB1, {fontSize: _ms(18), marginLeft: _ms(15)}]}>
            Payment
          </Text>
        </TouchableOpacity>

        {/* payment details */}
        <View style={styles.wrapperOne}>
          <View>
            <Text style={[styles.ns700]}>Due Now $ 835</Text>
            <Text style={[styles.ns600, {color: b3, fontSize: _ms(12)}]}>
              Convenience fee added
            </Text>
          </View>

          <TouchableOpacity style={styles.btnOne} onPress={handleOpenClose}>
            <Image
              style={[
                styles.btnIcon,
                {
                  transform: [
                    isVisible ? {rotate: '-90deg'} : {rotate: '90deg'},
                  ],
                },
              ]}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.hr} />

        {/* payment options */}
        <View style={styles.wrapperTwo}>
          <View
            style={[
              styles.commonBtnStyle,
              {
                paddingVertical: _mvs(12),
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              },
            ]}>
            <Text style={[styles.ns700, {}]}>ALL PAYMENT OPTION</Text>
          </View>

          <TouchableOpacity style={styles.commonBtnStyle}>
            <View style={styles.leftCon}>
              <Image
                style={{width: _ms(25), height: _ms(35)}}
                source={icon.upi}
                resizeMode="stretch"
              />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>All UPI Options</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  Pay Directly From Your Bank Account
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>

          {/* Mobile Wallets */}

          <TouchableOpacity style={styles.commonBtnStyle}>
            <View style={styles.leftCon}>
              <Image style={styles.commonIconStyle} source={icon.creditCard} />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>Mobile Wallets</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  AmazonPay, Mobikwik, Payzapp
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>

          {/* Book Now Pay Later */}

          <TouchableOpacity style={styles.commonBtnStyle}>
            <View style={styles.leftCon}>
              <Image
                style={{
                  width: _ms(25),
                  height: _ms(25),
                  resizeMode: 'contain',
                }}
                source={require('../../assets/icons/snpl.png')}
              />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>Book Now Pay Later</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC and more
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>

          {/* Net Banking */}

          <TouchableOpacity style={styles.commonBtnStyle}>
            <View style={styles.leftCon}>
              <Image
                style={styles.commonIconStyle}
                source={require('../../assets/icons/bank.png')}
              />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>Net Banking</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  All Major Banks Available
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>

          {/* mobile wallet */}

          <TouchableOpacity
            style={styles.commonBtnStyle}
            onPress={() => navigation.navigate('success')}>
            <View style={styles.leftCon}>
              <Image
                style={styles.commonIconStyle}
                source={require('../../assets/icons/wallet.png')}
              />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>Mobile Wallets</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  AmazonPay, Mobikwik, Payzapp
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>

          {/* EMI */}

          <TouchableOpacity
            style={[
              styles.commonBtnStyle,
              {borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
            ]}>
            <View style={styles.leftCon}>
              <Image
                style={styles.commonIconStyle}
                source={require('../../assets/icons/discount.png')}
              />

              <View style={{flex: 1}}>
                <Text style={[styles.ns700, {}]}>EMI</Text>

                <Text style={[styles.ns400, {color: b3}]}>
                  Credit/Debit Card EMI available
                </Text>
              </View>
            </View>

            <Image
              style={styles.arrowicon}
              source={require('../../assets/icons/right-arrow.png')}
            />
          </TouchableOpacity>
        </View>

        <CustomBottomSheet
          ref={tsRef}
          component={paymentDetails}
          containerStyle={{height: 290}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },

  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: _mvs(10),
    paddingLeft: _ms(12),
    // backgroundColor: 'red',
  },

  Wrap: {
    flex: 1,
    marginTop: _mvs(40),
  },

  lbB1: {
    fontFamily: _fonts.londonBetween,
    color: b1,
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(12),
  },

  ns400: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(12),
  },

  hr: {
    // borderWidth: 0.7,
    // borderColor: '#DEDEDE',
    marginTop: _mvs(10),
    height: 1,
    backgroundColor: '#ccc',
  },

  navHeadTxt: {
    color: b1,
    fontSize: _ms(16),
    fontFamily: _fonts.londonBetween,
  },

  navSubHeadTxt: {
    color: b3,
    fontSize: _ms(13),
    fontFamily: _fonts.londonBetween,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  rightImg: {
    width: _ms(15),
    height: _ms(15),
    marginHorizontal: 10,
    transform: [{rotate: '180deg'}],
  },

  //  --

  backIcon: {
    width: _ms(21),
    height: _ms(21),
    tintColor: b1,
  },

  wrapperOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: _mvs(10),
    marginHorizontal: _ms(15),
  },

  btnOne: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: violet,
    borderRadius: 100,
    // padding: 6,
    width: _ms(30),
    height: _ms(30),
  },

  btnIcon: {
    width: _ms(14),
    height: _ms(14),
    tintColor: white,
    marginTop: _mvs(2.5),
  },

  wrapperTwo: {
    rowGap: 1,
    marginTop: _mvs(10),
    // marginHorizontal: _ms(8),
    // borderWidth: 1,
    // borderColor: '#D2D6DD',
  },

  commonBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: _ms(10),
    paddingVertical: _mvs(10),

    marginHorizontal: _ms(10),
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 2,
    gap: _ms(10),
  },

  leftCon: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'mistyrose',
    gap: _ms(15),
  },

  commonIconStyle: {
    width: _ms(25),
    height: _ms(25),
    tintColor: violet,
  },

  arrowicon: {
    width: _ms(13),
    height: _ms(13),
    tintColor: '#777777',
    resizeMode: 'contain',
  },
});

const secondStyle = StyleSheet.create({
  parent: {
    rowGap: _mvs(3),
    marginTop: _mvs(10),
    marginHorizontal: _ms(15),
    // backgroundColor: 'lightblue',
    // marginRight: _ms(25),
  },

  childOne: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  childTwo: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D8D8D8',
    paddingHorizontal: _ms(20),
    paddingVertical: _ms(2),
  },

  childThree: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: _ms(20),
    marginTop: _mvs(10),
  },
});
