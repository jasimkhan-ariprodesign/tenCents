import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Alert,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b2, b3, black, blue, gs3, w1, white} from '../../../config/colors';
import image from '../../../config/ImageAssets';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _mvs} from '../../utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import {seatData} from '../../utils/data/FlightSeatData';

const {width} = Dimensions.get('window');

const DirectTab = () => {
  // console.log([...Array(5)]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showSideView, setShowSideView] = useState(false);

  const handlePress = item => {
    // Alert.alert(item.seatNumber);
    setSelectedItems(prevItems => {
      if (prevItems.includes(item)) {
        // Item is already selected, so remove it
        return prevItems.filter(selectedItem => selectedItem !== item);
      } else {
        // Item is not selected, so add it
        return [...prevItems, item];
      }
    });
  };

  // console.log('-------->', selectedItems);

  return (
    <View style={styles.container}>
      <View style={styles.buttonCon}>
        <TouchableOpacity style={styles.button}>
          <Image source={icon.indigo} style={styles.flightIcon} />
          <Text style={styles.airpotName}>DAC - BOM</Text>
          <Text style={[styles.airpotName, {color: b1, marginLeft: _ms(5)}]}>
            21A
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Image source={icon.indigo} style={styles.flightIcon} />
          <Text style={styles.airpotName}>BOM - DXC</Text>
          <Text style={[styles.airpotName, {color: b1, marginLeft: _ms(5)}]}>
            27A
          </Text>
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={[
          // 'rgb(196, 225, 241)',
          'rgba(196, 225, 241, 0.6)',
          'rgba(132, 196, 236, 0.8)',
        ]}
        style={[styles.container]}>
        <View style={[styles.flatListCon]}>
          <FlatList
            // data={[...Array(112).keys()]}
            data={seatData}
            renderItem={({item, index}) => {
              const columnIndex = index % 6;
              const isThirdColumn = columnIndex === 2;

              const isSelected = selectedItems.includes(item);

              // console.log(index, '-----', columnIndex);
              // if (index < 5) {
              //   console.log('----------------------');
              //   console.log(item);
              // }
              return (
                <>
                  <TouchableOpacity
                    style={[
                      styles.selectSeatBtn,
                      {
                        borderColor: isSelected ? blue : item?.color,
                        borderRadius: 100 == item.id ? _ms(100) : _ms(10),
                        backgroundColor: isSelected ? blue : white,
                      },
                    ]}
                    onPress={() => {
                      handlePress(item);
                    }}>
                    <Text
                      style={[
                        styles.itemTxt,
                        {color: isSelected ? white : b1},
                      ]}>
                      {item.seatNumber}
                    </Text>

                    {/* Non-Reclining */}
                    <>
                      {item && item?.seatType == 'Non-Reclining' ? (
                        <View
                          style={[
                            styles.fixedHorizontalLine,
                            {backgroundColor: item?.color},
                          ]}
                        />
                      ) : null}
                    </>

                    {/* Extra Leg-Room */}

                    <>
                      {item && item?.seatType == 'Extra Leg-Room' ? (
                        <>
                          <View
                            style={[
                              styles.topCurvedFixedView,
                              {backgroundColor: item?.color},
                            ]}
                          />
                          <View
                            style={[
                              styles.topCurvedFixedView2,
                              {backgroundColor: item?.color},
                            ]}
                          />
                        </>
                      ) : null}
                    </>
                  </TouchableOpacity>
                  {isThirdColumn && (
                    <View style={{width: _ms(10), backgroundColor: 'white'}} />
                  )}
                </>
              );
            }}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              paddingVertical: _mvs(5),
            }}
            showsVerticalScrollIndicator={false}
            numColumns={6}
          />
        </View>

        <>
          {/* side button and component */}
          <TouchableOpacity
            onPress={() => {
              // Alert.alert('show');
              setShowSideView(!showSideView);
            }}
            style={styles.showButton}
            activeOpacity={0.8}>
            <Image
              source={icon.rightArrow}
              style={[
                styles.rightArrowIcon,
                {
                  transform: showSideView
                    ? [{rotate: '180deg'}]
                    : [{rotate: '0deg'}],
                },
              ]}
            />
          </TouchableOpacity>

          <View
            style={[
              styles.sideComCon,
              {left: showSideView ? 0 : -width / 1.5},
            ]}>
            <View style={styles.commonWrapper}>
              <View style={styles.crossCon}>
                <Image source={icon.cross} style={styles.crossIcon} />
              </View>
              <Text style={styles.occupied}>Occupied</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderRadius: _ms(10)}]} />
              <Text style={styles.occupied}>Free</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: '#F1DD65'}]} />
              <Text style={styles.occupied}>$25</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: '#EBB52C'}]} />
              <Text style={styles.occupied}>$50</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: '#C7680E'}]} />
              <Text style={styles.occupied}>$100</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: '#ADD1FA'}]} />
              <Text style={styles.occupied}>$150</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: '#1C62DC'}]} />
              <Text style={styles.occupied}>$200</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: b1}]}>
                <View
                  style={[
                    styles.fixedHorizontalLine,
                    {bottom: 1, width: '95%', height: 1},
                  ]}
                />
              </View>
              <Text style={styles.occupied}>Non - Reclining</Text>
            </View>

            <View style={styles.commonWrapper}>
              <View style={[styles.freeIndicator, {borderColor: b1}]}>
                <View style={[styles.topCurvedFixedView]} />
                <View style={[styles.topCurvedFixedView2]} />
              </View>
              <Text style={styles.occupied}>Extra Leg-Room</Text>
            </View>
          </View>
        </>
      </LinearGradient>
    </View>
  );
};

export default DirectTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonCon: {
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    paddingTop: 1,
    gap: 1.5,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },

  button: {
    backgroundColor: white,
    paddingVertical: _ms(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: _ms(5),
  },

  flightIcon: {
    width: _ms(20),
    height: _ms(20),
    resizeMode: 'contain',
  },

  airpotName: {
    color: blue,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(14),
  },

  flatListCon: {
    flex: 1,
    marginHorizontal: _ms(14),
    alignItems: 'center',
    backgroundColor: white,
  },

  selectSeatBtn: {
    width: _ms(35),
    height: _ms(35),
    // maxWidth: _ms(45),
    // maxHeight: _ms(45),
    borderRadius: _ms(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    // backgroundColor: '#e6e6e6',
    borderWidth: 1.5,
    // borderColor: 'transparent',
    borderColor: '#e6e6e6',
    elevation: 2,
    shadowColor: '#000',
    marginVertical: _ms(3),
    marginHorizontal: _ms(3),
    paddingVertical: 2,
  },

  itemTxt: {
    color: b1,
    fontSize: _ms(12),
    fontFamily: _fonts.assistantSemiBold,
  },

  fixedHorizontalLine: {
    height: _ms(1.5),
    backgroundColor: b1,
    width: '88%',
    position: 'absolute',
    bottom: 2,
    borderRadius: 10,
  },

  topCurvedFixedView: {
    height: _ms(2.5),
    width: '25%',
    top: 0,
    position: 'absolute',
    left: '18%',
    borderRadius: 100,
    backgroundColor: b1,
  },

  topCurvedFixedView2: {
    height: _ms(2.5),
    width: '25%',
    top: 0,
    position: 'absolute',
    right: '18%',
    borderRadius: 100,
    backgroundColor: b1,
  },

  showButton: {
    backgroundColor: black,
    position: 'absolute',
    zIndex: 1,
    top: _mvs(40),
    left: 0,
    padding: _ms(4),
    paddingVertical: _ms(14),
    borderTopRightRadius: _ms(6),
    borderBottomRightRadius: _ms(6),
  },

  rightArrowIcon: {
    width: _ms(13),
    height: _ms(13),
    resizeMode: 'contain',
    tintColor: white,
  },

  sideComCon: {
    backgroundColor: white,
    position: 'absolute',
    zIndex: 1,
    top: _mvs(110),
    left: 0,
    padding: _ms(20),
    elevation: 10,
    gap: _ms(10),
  },

  commonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(10),
  },

  crossCon: {
    backgroundColor: b3,
    // padding: _ms(3),
    width: _ms(18),
    height: _ms(18),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  crossIcon: {
    width: _ms(12),
    height: _ms(12),
    resizeMode: 'contain',
    tintColor: white,
  },

  occupied: {
    color: b1,
    fontFamily: _fonts.nunitoSansRegular,
    fontSize: _ms(12),
  },

  freeIndicator: {
    width: _ms(18),
    height: _ms(18),
    borderRadius: _ms(5),
    borderWidth: 1.5,
    borderColor: '#31BD2F',
  },
});
