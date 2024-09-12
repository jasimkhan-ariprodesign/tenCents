import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, b3, blue, red, white} from '../../../config/colors';
import {_fonts, _ms, _mvs} from '../../utils/Responsive';
import icon from '../../../config/IconAssets';

const Extras = ({width}) => {
  const [selectedFlight, setSelectedFlight] = useState('1');
  const initialBaggageData = [
    {
      id: 1,
      weight: '5 KG',
      description: 'Extra baggage 5 KG',
      price: 120,
      quantity: 0,
    },
    {
      id: 2,
      weight: '10 KG',
      description: 'Extra baggage 10 KG',
      price: 120,
      quantity: 0,
    },
    {
      id: 3,
      weight: '15 KG',
      description: 'Extra baggage 15 KG',
      price: 120,
      quantity: 0,
    },
    {
      id: 4,
      weight: '20 KG',
      description: 'Extra baggage 20 KG',
      price: 120,
      quantity: 0,
    },
    {
      id: 5,
      weight: '30 KG',
      description: 'Extra baggage 30 KG',
      price: 120,
      quantity: 0,
    },
  ];

  const [baggageOptions, setBaggageOptions] = useState(initialBaggageData);
  const selectedBaggageCount = baggageOptions.filter(
    meal => meal.quantity > 0,
  ).length;

  const handleAdd = id => {
    setBaggageOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? {...option, quantity: option.quantity + 1} : option,
      ),
    );
  };

  const handleIncrease = id => {
    setBaggageOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id ? {...option, quantity: option.quantity + 1} : option,
      ),
    );
  };

  const handleDecrease = id => {
    setBaggageOptions(prevOptions =>
      prevOptions.map(option =>
        option.id === id && option.quantity > 0
          ? {...option, quantity: option.quantity - 1}
          : option,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.buttonCon}>
          <TouchableOpacity
            onPress={() => {
              setSelectedFlight('1');
            }}
            style={[
              styles.button,
              {borderColor: selectedFlight === '1' ? blue : 'transparent'},
            ]}>
            <View style={[styles.centerAndRowWrapper, {paddingLeft: _ms(10)}]}>
              <Image source={icon.indigo} style={styles.flightIcon} />
              <Text style={styles.airpotName}>DAC - BOM</Text>
            </View>
            <Text
              style={[
                styles.airpotName,
                {color: b1, fontSize: _ms(11), marginLeft: _ms(34)},
              ]}>
              <Text style={{color: red}}>{selectedBaggageCount}</Text> of 1
              baggage selected
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedFlight('2');
            }}
            style={[
              styles.button,
              {borderColor: selectedFlight === '2' ? blue : 'transparent'},
            ]}>
            <View style={[styles.centerAndRowWrapper, {paddingLeft: _ms(10)}]}>
              <Image source={icon.indigo} style={styles.flightIcon} />
              <Text style={styles.airpotName}>DAC - BOM</Text>
            </View>
            <Text
              style={[
                styles.airpotName,
                {color: b1, fontSize: _ms(11), marginLeft: _ms(34)},
              ]}>
              <Text style={{color: red}}>{selectedBaggageCount}</Text> of 1
              baggage selected
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.commonWrap,
            {marginVertical: _mvs(10), rowGap: _mvs(18)},
          ]}>
          {baggageOptions.map(item => (
            <View key={item.id} style={styles.mealRow}>
              <View style={{flex: 1}}>
                <Text style={styles.ns600}>{item?.weight}</Text>
                <Text style={[styles.ns600, {color: b3, fontSize: _ms(12)}]}>
                  {item?.description}
                </Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.ns700} numberOfLines={2}>
                  $ {item?.price}
                </Text>
              </View>

              {item?.quantity > 0 ? (
                <View style={styles.incDecBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDecrease(item?.id);
                    }}
                    style={styles.removeItembtn}>
                    <Text
                      style={[styles.ns600, {color: blue, fontSize: _ms(16)}]}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <View style={[styles.removeItembtn]}>
                    <Text
                      style={[
                        styles.ns600,
                        {
                          color: blue,
                        },
                      ]}>
                      {item?.quantity}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handleIncrease(item?.id);
                    }}
                    style={styles.removeItembtn}>
                    <Text style={[styles.ns600, {color: blue}]}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    handleAdd(item?.id);
                  }}
                  style={styles.add}>
                  <Text style={[styles.ns600, {color: blue}]}>Add</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Extras;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: white},

  buttonCon: {
    flexDirection: 'row',
    backgroundColor: '#DEDEDE',
    paddingTop: 1,
    gap: 1.5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },

  button: {
    backgroundColor: white,
    paddingVertical: _ms(6),
    justifyContent: 'center',
    flex: 1,
    gap: _ms(4),
    borderBottomWidth: 2,
    borderColor: blue,
  },

  centerAndRowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(5),
  },

  flightIcon: {
    width: _ms(18),
    height: _ms(18),
    resizeMode: 'contain',
  },

  airpotName: {
    color: blue,
    fontFamily: _fonts.nunitoSansSemiBold,
    fontSize: _ms(13),
  },

  ns600: {
    fontFamily: _fonts.nunitoSansSemiBold,
    color: b1,
    fontSize: _ms(14),
  },

  ns700: {
    fontFamily: _fonts.nunitoSansBold,
    color: b1,
    fontSize: _ms(14),
  },

  commonWrap: {
    marginHorizontal: _ms(5),
    marginTop: _mvs(5),
    backgroundColor: '#FDFDFD',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    elevation: 3,
    paddingHorizontal: _ms(8),
    paddingVertical: _mvs(15),
  },

  add: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: blue,
    width: _ms(70),
    height: _ms(26),
  },

  incDecBtn: {
    flexDirection: 'row',
    borderRadius: 2,
    borderWidth: 0.7,
    borderColor: blue,
    width: _ms(70),
    height: _ms(26),
  },

  removeItembtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
  },

  mealRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: _ms(12),
    // backgroundColor: '#f1f1f1',
  },

  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: _ms(80),
    // backgroundColor: 'tan',
  },
});
