import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {black202020, blueShade2, bs1, white} from '../config/colors';
import {_fonts, _ms, _mvs, _s, _vs} from '../components/utils/Responsive';

const {width, height} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
  const [curInd, setcurInd] = useState(0);
  // console.log('current index ==> ', curInd);

  const data = [1, 2, 3];
  const ref = useRef(null);

  const handleNext = () => {
    if (curInd < 3) {
      setcurInd(curInd + 1);
      ref.current?.scrollTo({animated: true, x: width * (Number(curInd) + 1)});
    } else {
      navigation.replace('tab');
    }
  };

  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.body}>
        <ImageBackground
          source={
            curInd < 1
              ? require('../assets/image/welcomeBackground.png')
              : require('../assets/image/welcomeBackground2.png')
          }
          resizeMode="cover"
          style={styles.imgBkgrnd}>
          <TouchableOpacity
            style={styles.skipWrap}
            onPress={() => navigation.replace('tab')}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <View style={{flex: 1}}>
            <ScrollView
              ref={ref}
              horizontal={true}
              pagingEnabled={true}
              scrollEventThrottle={1}
              snapToStart={true}
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setcurInd((x / width).toFixed(0));
              }}
              style={{flex: 1}}>
              {/* first slide */}
              <View style={styles.logoName}>
                <Text numberOfLines={2} style={styles.logoText}>
                  10
                </Text>

                <Text numberOfLines={2} style={styles.logoText}>
                  CENTS AIR
                </Text>

                <TouchableOpacity
                  style={styles.btnWrap}
                  onPress={() => handleNext()}>
                  <Text style={styles.btnText}>GET STARTED</Text>
                </TouchableOpacity>
              </View>

              {/* second slide */}

              <View style={[styles.slideWrap]}>
                <Text style={[styles.s2HeadingText, {textAlign: 'center'}]}>
                  Book with Confidence!
                </Text>

                <View
                  style={{
                    marginTop: _vs(60),
                    alignItems: 'center',
                    // backgroundColor: 'green'
                  }}>
                  <View style={styles.s3ContWrap}>
                    <Image
                      style={styles.s3Img}
                      source={require('../assets/icons/plane.png')}
                    />

                    <View style={{flex: 1}}>
                      <Text style={styles.s3ContHText}>Flights</Text>
                      <Text style={styles.s3ContSubHText}>
                        You now have access to amazing deals and cheap flights!
                      </Text>
                    </View>
                  </View>

                  <View style={styles.s3ContWrap}>
                    <Image
                      style={styles.s3Img}
                      source={require('../assets/icons/hotel-sign.png')}
                    />
                    <View style={{flex: 1}}>
                      <Text style={styles.s3ContHText}>Hotels</Text>
                      <Text style={styles.s3ContSubHText}>
                        Find hotel deals along with hundred of reviews.
                      </Text>
                    </View>
                  </View>

                  <View style={styles.s3ContWrap}>
                    <Image
                      style={styles.s3Img}
                      source={require('../assets/icons/car.png')}
                    />
                    <View style={{flex: 1}}>
                      <Text style={styles.s3ContHText}>Cars</Text>
                      <Text style={styles.s3ContSubHText}>
                        Rent cars of your choice anywhere in the world for less.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* third slide */}

              <View style={styles.slideWrap}>
                <View style={styles.s4Wrap}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={[styles.s2HeadingText, {marginTop: 0}]}>
                      Enable Location
                    </Text>
                    <Text style={[styles.s2SubHeadingText]}>
                      You can turn on location to improve
                    </Text>
                    <Text style={[styles.s2SubHeadingText]}>
                      your search experience.
                    </Text>
                  </View>

                  <View>
                    <Image
                      source={require('../assets/image/welcomeScreenLocationIcon.png')}
                      style={styles.locationIconStyle}
                    />
                  </View>

                  <TouchableOpacity style={styles.turnOnLocationBtn}>
                    <Text style={styles.btnText}>Turn On Location</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* fourth slide */}

              <View style={styles.slideWrap}>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.s2HeadingText, {marginTop: 0}]}>
                    Register
                  </Text>

                  <Text style={[styles.s2SubHeadingText, {marginTop: _ms(15)}]}>
                    Earn <Text style={{fontWeight: 800}}>2x points </Text>
                    when you're
                  </Text>

                  <Text style={styles.s2SubHeadingText}>signed in.</Text>
                </View>

                <View
                  style={{
                    flex: 0.75,
                    justifyContent: 'center',
                    gap: _ms(18),
                  }}>
                  <TouchableOpacity>
                    <View style={styles.s2btnContWrap}>
                      <View
                        style={{
                          flex: 0.35,
                          alignItems: 'flex-end',
                        }}>
                        <Image
                          style={styles.s2Img}
                          source={require('../assets/icons/google.png')}
                        />
                      </View>

                      <View style={{flex: 1}}>
                        <Text style={styles.s2btnText}>
                          Continue with Google
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.s2btnContWrap}>
                      <View
                        style={{
                          flex: 0.35,
                          alignItems: 'flex-end',
                        }}>
                        <Image
                          style={styles.s2Img}
                          source={require('../assets/icons/facebook.png')}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.s2btnText}>
                          Continue with Facebook
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('SignupScreen');
                    }}>
                    <View style={styles.s2btnContWrap}>
                      <View
                        style={{
                          flex: 0.35,
                          alignItems: 'flex-end',
                        }}>
                        <Image
                          style={styles.s2Img}
                          source={require('../assets/icons/gmail.png')}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.s2btnText}>
                          Continue with E-mail
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.s2SigninText}>
                      Already have an account?
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('LoginScreen');
                      }}>
                      <Text style={[styles.s2SigninText, {color: black202020}]}>
                        {' '}
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          {curInd < 3 && (
            <View style={styles.bottomWrap}>
              <View style={styles.dotWrap}>
                {data.map((_, i) => (
                  <View
                    key={i}
                    style={curInd == i ? styles.dotActive : styles.dot}
                  />
                ))}
              </View>

              <View style={styles.nextWrap}>
                <TouchableOpacity
                  style={styles.nextBtn}
                  onPress={() => handleNext()}>
                  <Text style={styles.next}>Next </Text>
                  <Image
                    style={{
                      tintColor: white,
                      width: _ms(13),
                      height: _ms(13),
                      borderWidth: 1,
                    }}
                    source={require('../assets/icons/right-arrow.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    flex: 1,
    // backgroundColor: 'blue',
  },

  imgBkgrnd: {
    flex: 1,
    backgroundColor: '#6E73D3',
  },
  skip: {
    fontFamily: _fonts.rubikRegular,
    fontSize: _ms(14),
    color: white,
  },
  skipWrap: {
    marginTop: _vs(40),
    marginLeft: 10,
    width: _ms(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: width,
  },
  logoText: {
    fontSize: _ms(44),
    fontFamily: _fonts.londonBetween,
    textAlign: 'center',
    color: white,
  },

  btnWrap: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: _s(70),
    paddingVertical: _s(13),
    borderRadius: 7,
    position: 'absolute',
    bottom: 30,
  },
  btnText: {
    color: blueShade2,
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(16),
  },
  bottomWrap: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    position: 'relative',
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  dot: {
    backgroundColor: white,
    opacity: 0.4,
    width: 8,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: white,
    width: 8,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  dotWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  next: {
    color: white,
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(18),
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextWrap: {
    position: 'absolute',
    right: 35,
  },

  slideWrap: {
    flex: 1,
    width: width,
    // backgroundColor: 'green'
  },
  s2HeadingText: {
    fontFamily: _fonts.londonBetween,
    fontSize: _ms(22),
    color: white,
    marginTop: _vs(40),
  },
  s2SubHeadingText: {
    fontFamily: _fonts.poppinsRegular,
    fontSize: _ms(13),
    color: white,
  },
  // s2BtnWrap: {
  //   backgroundColor: white,
  //   marginHorizontal: 30,
  //   borderRadius: 30,
  //   borderWidth: 1,
  //   borderColor: bs1,
  //   paddingVertical: 13,
  //   marginVertical: 10,
  // },
  s2btnText: {
    color: bs1,
    fontSize: _ms(16),
    fontFamily: _fonts.assistantSemiBold,
  },
  s2Img: {
    width: _ms(25),
    height: _ms(25),
    resizeMode: 'contain',
  },
  s2btnContWrap: {
    flexDirection: 'row',
    marginHorizontal: _ms(25),
    paddingVertical: _ms(12),
    borderRadius: _ms(30),
    backgroundColor: white,
    borderWidth: 1,
    borderColor: bs1,
    gap: _ms(20),
    alignItems: 'center',
  },
  s2SigninText: {
    fontSize: _ms(14),
    fontFamily: _fonts.poppinsRegular,
    color: white,
  },

  s3ContWrap: {
    flexDirection: 'row',
    marginBottom: _vs(30),
    width: width / 1.5,
    gap: _s(35),

    // borderWidth: 1,
    // borderColor: 'gold',
    // backgroundColor: '#ff0000',
  },
  s3Img: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
  s3ContHText: {
    color: white,
    fontFamily: _fonts.londonBetween,
    fontSize: 19,
  },
  s3ContSubHText: {
    color: white,
    fontFamily: _fonts.assistantSemiBold,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'left',
  },

  s4Wrap: {
    flex: 1,
    marginHorizontal: _s(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingBottom: _vs(40),
    paddingTop: _vs(30),
  },

  locationIconStyle: {
    width: _s(202),
    height: _s(202),
  },

  turnOnLocationBtn: {
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: _s(70),
    paddingVertical: _s(13),
    borderRadius: 7,
  },

  contWrap: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 50,
  },

  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
  },
});
