import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, black, blackTxt, blue, w1, white} from '../../../config/colors';
import icon, {cross, minus, plus} from '../../../config/IconAssets';
import {_fonts, _ms, _s, _vs} from '../../utils/Responsive';
import SearchButton from '../../SearchButton';
import {formatDate} from '../../../config/CurrentDate';

const OneWay = ({
  navigation,
  dest,
  isClass,
  isTravel,
  handleTravellers,
  handleClassType,
  oneWayHandler,
  setOneWayHandler,
}) => {
  // console.log(dest, '----------');

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [passengerClass, setPassengerClass] = useState('Economy');

  const handleReverseLocations = () => {
    // this is for later.....
    // const [origin, setOrigin] = useState('origin');
    // const [destination, setDestination] = useState('destination');
    // const temp = origin;
    // setOrigin(destination);
    // setDestination(temp);

    setOneWayHandler(prevState => ({
      ...prevState,
      origin: prevState.destination,
      destination: prevState.origin,
    }));
  };

  return (
    <>
      <View style={styles.main}>
        {/* top selection row,  */}
        <View style={styles.topWrap}>
          <View style={styles.left}>
            <Text style={styles.fromTxt}>From</Text>

            <TouchableOpacity
              onPress={() => {
                setOneWayHandler({...oneWayHandler, showSearchCon: true});
              }}
              style={styles.enterLocBtn}>
              <Text style={styles.enterLocTxt}>
                {oneWayHandler?.origin?.length > 0
                  ? oneWayHandler?.origin
                  : 'Enter Location'}
              </Text>
            </TouchableOpacity>
            <Text style={styles.fromTxt}>Origin</Text>
          </View>

          <TouchableOpacity
            onPress={handleReverseLocations}
            style={styles.reverseBtn}>
            <Image style={styles.reverseIcon} source={icon.exchange} />
          </TouchableOpacity>

          <View style={styles.right}>
            <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
              Destination
            </Text>

            <TouchableOpacity
              onPress={() => {
                setOneWayHandler({...oneWayHandler, showSearchCon: true});
              }}
              style={styles.enterLocBtn}>
              <Text style={[styles.enterLocTxt, {textAlign: 'right'}]}>
                {oneWayHandler?.destination?.length > 0
                  ? oneWayHandler?.destination
                  : 'Enter Location'}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.fromTxt, {textAlign: 'right'}]}>
              Destination
            </Text>
          </View>
        </View>

        <View style={styles.horizontalLine} />

        {/* middle selection row */}
        <View
          style={{
            paddingTop: 5,
            alignItems: 'flex-start',
          }}>
          <Text style={styles.fromTxt}>Depart</Text>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('traveldate');
              setOneWayHandler({...oneWayHandler, showCalenderCon: true});
            }}
            style={styles.enterLocBtn}>
            <Text style={styles.enterLocTxt}>
              {oneWayHandler?.date?.length > 0
                ? `${formatDate(oneWayHandler.date)}`
                : 'Select Date'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.fromTxt}>Day</Text>
        </View>

        <View style={styles.horizontalLine} />

        {/* bottom selection row */}

        <View style={[styles.travellersAndClassCon]}>
          <View style={styles.travellersCon}>
            <Text style={styles.fromTxt}>Travellers</Text>

            <TouchableOpacity
              onPress={() => {
                handleTravellers();
              }}
              style={[styles.travellersBtn]}>
              <Text
                style={[
                  styles.enterLocTxt,
                  {},
                  // {fontSize: children > 0 && infants > 0 ? _ms(14) : _ms(16)},
                ]}>
                {`${adults} Adult`}
                {children > 0 ? ` ${children} Children` : null}
                {infants > 0 ? ` ${infants} Infant` : null}
              </Text>
            </TouchableOpacity>
          </View>

          {/* travellers sellection ---------------------------------------------------------- */}

          {isTravel && (
            <View style={styles.travlOptnsWrap}>
              <TouchableOpacity
                onPress={() => {
                  handleTravellers();
                }}
                style={styles.closeButton}>
                <Image source={cross} style={styles.closeIcon} />
              </TouchableOpacity>

              <View style={styles.travelContWrap}>
                <View style={{backgroundColor: 'transparent'}}>
                  <Text style={styles.travelHdTxt}>Adults</Text>
                  <Text style={styles.travelSubHdTxt}>Aged 12+ years</Text>
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={() => {
                      if (adults <= 1) {
                        setAdults(1);
                      } else {
                        setAdults(adults - 1);
                      }
                    }}
                    style={styles.minusButton}>
                    <Image source={minus} style={styles.minusIconStyle} />
                  </TouchableOpacity>

                  <Text numberOfLines={1} style={styles.btnTxt}>
                    {adults}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setAdults(adults + 1);
                    }}
                    style={styles.minusButton}>
                    <Image source={plus} style={styles.minusIconStyle} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.travelContWrap}>
                <View>
                  <Text style={styles.travelHdTxt}>Children</Text>
                  <Text style={styles.travelSubHdTxt}>Aged 2-12 years</Text>
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={() => {
                      if (children <= 0) {
                        setChildren(0);
                      } else {
                        setChildren(children - 1);
                      }
                    }}
                    style={styles.minusButton}>
                    <Image source={minus} style={styles.minusIconStyle} />
                  </TouchableOpacity>

                  <Text numberOfLines={1} style={styles.btnTxt}>
                    {children}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setChildren(children + 1);
                    }}
                    style={styles.minusButton}>
                    <Image source={plus} style={styles.minusIconStyle} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.travelContWrap}>
                <View>
                  <Text style={styles.travelHdTxt}>Infants</Text>
                  <Text style={styles.travelSubHdTxt}>Bellow 2 years</Text>
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity
                    onPress={() => {
                      if (infants <= 0) {
                        setInfants(0);
                      } else {
                        setInfants(infants - 1);
                      }
                    }}
                    style={styles.minusButton}>
                    <Image source={minus} style={styles.minusIconStyle} />
                  </TouchableOpacity>

                  <Text numberOfLines={1} style={styles.btnTxt}>
                    {infants}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setInfants(infants + 1);
                    }}
                    style={styles.minusButton}>
                    <Image source={plus} style={styles.minusIconStyle} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          <View style={styles.classCon}>
            <View style={styles.classChildCon}>
              <Text style={styles.fromTxt}>{'Class'}</Text>
              <Image style={styles.imgCls} source={icon.rightArrow} />
            </View>

            <TouchableOpacity
              onPress={() => {
                handleClassType();
                // setIsClass(!isClass);
                // setIsTravel(false);
              }}
              style={[styles.travellersBtn]}>
              <Text style={[styles.enterLocTxt]}>{passengerClass}</Text>
            </TouchableOpacity>
          </View>

          {/* class sellection ---------------------------------------------------------- */}

          {dest === 'opt2'
            ? isClass && (
                <View style={styles.classOptnsWrap}>
                  <TouchableOpacity
                    style={styles.classOptnTxtWrapActive}
                    onPress={handleClassType}>
                    <Text style={styles.classOptnTxtActive}>1 Room</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.classOptnTxtWrap}
                    onPress={handleClassType}>
                    <Text style={styles.classOptnTxt}>2 Room</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.classOptnTxtWrap}
                    onPress={handleClassType}>
                    <Text style={styles.classOptnTxt}>3 Room</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.classOptnTxtWrap}
                    onPress={handleClassType}>
                    <Text style={styles.classOptnTxt}>4 Room</Text>
                  </TouchableOpacity>
                </View>
              )
            : isClass && (
                <View style={styles.classOptnsWrap}>
                  {[
                    'Economy',
                    'Premium Economy',
                    'Business',
                    'First Class',
                  ].map(item => {
                    return (
                      <TouchableOpacity
                        key={item}
                        style={
                          passengerClass == item
                            ? styles.classOptnTxtWrapActive
                            : styles.classOptnTxtWrap
                        }
                        onPress={() => {
                          handleClassType();
                          setPassengerClass(item);
                        }}>
                        <Text
                          style={
                            passengerClass == item
                              ? styles.classOptnTxtActive
                              : styles.classOptnTxt
                          }>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
        </View>
      </View>
    </>
  );
};

export default OneWay;

const styles = StyleSheet.create({
  main: {
    backgroundColor: white,
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    paddingTop: _vs(20),
    paddingHorizontal: _ms(10),
    zIndex: 99,
  },

  topWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'aliceblue',
  },

  fromTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  left: {
    // borderWidth: 1
    // backgroundColor: 'pink',
    flex: 1, // ----
  },

  enterLocBtn: {
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    // paddingHorizontal: _s(2),
  },

  enterLocTxt: {
    color: '#232020',
    fontSize: _ms(16),
    fontFamily: _fonts.nunitoSansSemiBold,
  },

  reverseBtn: {
    width: _s(26),
    height: _s(26),
    backgroundColor: w1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: _s(4),
  },

  reverseIcon: {
    width: _s(12),
    height: _s(12),
    tintColor: blue,
    resizeMode: 'contain',
  },

  right: {
    flex: 1,
    // backgroundColor: 'yellow',
  },

  horizontalLine: {
    backgroundColor: b3,
    height: 1,
    marginTop: 5,
  },

  travellersAndClassCon: {
    flexDirection: 'row',
    paddingTop: 5,
    justifyContent: 'space-between',
    gap: 5,
    zIndex: 100,

    // backgroundColor: 'lightblue',
  },

  travellersCon: {
    maxWidth: '50%',
    alignItems: 'flex-start',

    // backgroundColor: 'pink',
  },

  travellersBtn: {
    // backgroundColor: 'red',
    paddingVertical: _vs(5),
    paddingHorizontal: _s(2),
    borderRadius: 5,
    flexDirection: 'row',
  },

  classCon: {
    maxWidth: '50%',
    alignItems: 'flex-end',

    // backgroundColor: 'lime',
  },

  classChildCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: _s(4),
  },

  imgCls: {
    width: _s(9),
    height: _s(9),
    resizeMode: 'contain',
    transform: [{rotate: '90deg'}],
    tintColor: b3,
  },

  // ----------------------

  travlOptnsWrap: {
    backgroundColor: white,
    position: 'absolute',
    zIndex: 99,
    top: _vs(10),
    left: _s(70),
    borderRadius: 2,
    padding: _s(5),
    paddingVertical: _vs(15),

    elevation: 20,
    shadowColor: black,
    gap: _vs(5),
  },

  travelContWrap: {
    // backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: _vs(10),
  },

  travelHdTxt: {
    color: b1,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(11),
  },

  travelSubHdTxt: {
    color: b3,
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(9),
  },

  btn: {
    flexDirection: 'row',
    // alignItems: 'center',
    borderColor: blue,
    borderWidth: 0.7,
    borderRadius: 4,
    // backgroundColor: 'green',
    gap: 5,
  },

  minusButton: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: _s(9),
    paddingHorizontal: _s(15),
  },

  minusIconStyle: {
    width: _s(8),
    height: _s(8),
    resizeMode: 'contain',
    tintColor: blue,
  },

  btnTxt: {
    color: blue,
    fontFamily: _fonts.nunitoSansBold,
    fontSize: _ms(12),
    textAlignVertical: 'center',
    // backgroundColor: 'red',
    maxWidth: 50,
  },

  // ----------------------------

  classOptnsWrap: {
    backgroundColor: white,
    position: 'absolute',
    zIndex: 99,
    top: 5,
    right: _s(60),
    elevation: 20,
    shadowColor: black,
  },

  classOptnTxt: {
    fontFamily: _fonts.nunitoSansRegular,
    color: b1,
    fontSize: _ms(12),
  },

  classOptnTxtActive: {
    // fontFamily: _fonts.nunitoSansSemiBold,
    fontFamily: _fonts.nunitoSansRegular,
    color: white,
    fontSize: _ms(12),
  },

  classOptnTxtWrap: {
    paddingVertical: _vs(8),
    paddingHorizontal: _s(15), // -------------------- class com pe kam kar raha hun....
    backgroundColor: white,
  },

  classOptnTxtWrapActive: {
    paddingVertical: _vs(8),
    paddingHorizontal: _s(15),
    backgroundColor: blue,
  },

  //  ----

  closeButton: {
    width: _s(35),
    height: _s(35),
    borderRadius: _s(30),
    backgroundColor: white,
    elevation: 1,
    shadowColor: black,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: -20,
    right: -22,
    borderWidth: 0.6,
    borderColor: blue,
  },

  closeIcon: {
    width: _s(15),
    height: _s(15),
    resizeMode: 'contain',
    tintColor: blue,
  },
});
