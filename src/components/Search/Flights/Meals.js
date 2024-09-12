import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {b1, blue, red, white} from '../../../config/colors';
import icon from '../../../config/IconAssets';
import {_fonts, _ms, _mvs, _s} from '../../utils/Responsive';

const Meals = ({width}) => {
  const [selectedFlight, setSelectedFlight] = useState('1');

  const initialMealData = [
    {id: 1, name: 'Low calorie veg meal + beverage', price: 180, quantity: 0},
    {id: 2, name: 'Diabetic veg meal + beverage', price: 180, quantity: 0},
    {id: 3, name: 'Vegan meal + beverage', price: 180, quantity: 0},
    {
      id: 4,
      name: '6E Eats choice of the day(veg) + beverage',
      price: 180,
      quantity: 0,
    },
    {
      id: 5,
      name: 'Regional favourite(veg) + beverage',
      price: 180,
      quantity: 0,
    },
    {id: 6, name: 'High calorie veg meal + beverage', price: 180, quantity: 0},
  ];

  const [meals, setMeals] = useState(initialMealData);
  // Calculate the number of selected meals
  const selectedMealsCount = meals.filter(meal => meal.quantity > 0).length;

  console.log(selectedMealsCount);

  // Function to handle adding an item to the cart

  const handleAdd = id => {
    setMeals(prevMeals =>
      prevMeals.map(meal =>
        meal.id === id ? {...meal, quantity: meal.quantity + 1} : meal,
      ),
    );
  };

  // Function to handle increasing the quantity of an item
  const handleIncrease = id => {
    setMeals(prevMeals =>
      prevMeals.map(meal =>
        meal.id === id ? {...meal, quantity: meal.quantity + 1} : meal,
      ),
    );
  };

  // Function to handle decreasing the quantity of an item

  const handleDecrease = id => {
    setMeals(prevMeals =>
      prevMeals.map(meal =>
        meal.id === id && meal.quantity > 0
          ? {...meal, quantity: meal.quantity - 1}
          : meal,
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
              <Text style={{color: red}}>{selectedMealsCount}</Text> of 1 meals
              selected
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
              <Text style={{color: red}}>{selectedMealsCount}</Text> of 1 meals
              selected
            </Text>
          </TouchableOpacity>
        </View>

        {/* recomended */}
        <View style={styles.commonWrap}>
          <Text style={[styles.ns600, {fontSize: _ms(16)}]}>Recommended</Text>
          <View style={styles.recommendedChildCon}>
            <View style={styles.leftCon}>
              <View>
                <Image style={styles.imageStyle} source={icon.food1} />

                <View style={styles.wrapperOne}>
                  <Image style={styles.greenIcon} source={icon.veg} />

                  <Text style={[styles.ns600, {fontSize: _ms(12), flex: 1}]}>
                    Cucumber Tomato Cheese and Lettuce Sandwich
                  </Text>
                </View>
              </View>

              <View style={styles.wrapperTwo}>
                <Text style={[styles.ns700]}>$ 120</Text>

                <TouchableOpacity style={styles.add}>
                  <Text style={[styles.ns600, {color: blue}]}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.leftCon}>
              <View>
                <Image style={styles.imageStyle} source={icon.food2} />

                <View style={styles.wrapperOne}>
                  <Image style={styles.greenIcon} source={icon.nonveg} />

                  <Text style={[styles.ns600, {fontSize: _ms(12), flex: 1}]}>
                    Chicken Junglee Sandwich + beverage
                  </Text>
                </View>
              </View>

              <View style={styles.wrapperTwo}>
                <Text style={[styles.ns700]}>$ 180</Text>

                <TouchableOpacity style={styles.add}>
                  <Text style={[styles.ns600, {color: blue}]}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* meal item */}

        <View
          style={[
            styles.commonWrap,
            {marginVertical: _mvs(10), rowGap: _mvs(18)},
          ]}>
          {meals.map(meal => (
            <View key={meal.id} style={styles.mealRow}>
              <View style={{flex: 1}}>
                <Text style={styles.ns600}>{meal?.name}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.ns700} numberOfLines={2}>
                  $ {meal?.price}
                </Text>
              </View>

              {meal?.quantity > 0 ? (
                <View style={styles.incDecBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      handleDecrease(meal?.id);
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
                      {meal?.quantity}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handleIncrease(meal?.id);
                    }}
                    style={styles.removeItembtn}>
                    <Text style={[styles.ns600, {color: blue}]}>+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    handleAdd(meal?.id);
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

export default Meals;

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

  recommendedChildCon: {
    flexDirection: 'row',
    marginTop: _mvs(10),
    justifyContent: 'space-between',
    gap: _ms(6),
  },

  leftCon: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: '#e6e6e6',
  },

  imageStyle: {
    width: '100%',
    height: _mvs(100),
    resizeMode: 'stretch',
  },

  wrapperOne: {
    flexDirection: 'row',
    marginTop: _mvs(5),
    gap: _ms(6),
  },

  greenIcon: {
    width: _ms(15),
    height: _ms(15),
    resizeMode: 'contain',
    marginTop: _ms(2),
  },

  wrapperTwo: {
    flexDirection: 'row',
    marginTop: _mvs(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: _ms(20),
    // backgroundColor: 'red',
  },

  //

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
