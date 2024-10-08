import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {b1, b3, D9D9D9, white} from '../../../../config/colors';
import icon from '../../../../config/IconAssets';
import commonStyles from '../../../../assets/css/CommonFonts';
import {_ms, _mvs, size15} from '../../../utils/Responsive';

const Summary = ({}) => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.lato,
          commonStyles.textAlignCenter,
          commonStyles.font12,
          {color: b3, lineHeight: _mvs(20)},
        ]}>
        Arrival in Male by Vistara Flight UK-273 | Departing on 20 Dec, 11:55 AM
        | Arriving on 20 Dec, 03:30 PM | Includes Check In Baggage
      </Text>

      <Text style={[styles.lato, commonStyles.textAlignCenter]}>
        Maldives - 5 Nights Stay
      </Text>

      {/* journey details day wise */}
      <View>
        {/* day 1 */}
        <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
          {/* left */}
          <View style={styles.left}>
            <Text style={[commonStyles.ns600, commonStyles.font11]}>Day 1</Text>
            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Dec 21, Thu
            </Text>
          </View>

          {/* right */}
          <View style={styles.right}>
            <Text style={[commonStyles.ns400]}>Check in to</Text>

            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Meeru Island Resort & Spa - Holidays Selections, 4 Star
            </Text>

            <View style={[commonStyles.commWrapSeven, {gap: _ms(10)}]}>
              <Image style={[size15, styles.margin]} source={icon.dinner} />

              <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Speedboat from Velana International Airport to Meeru Island-
              Shared Transfers (4 Nights and above)
            </Text>
          </View>
        </View>

        <View style={[styles.horizontal]} />

        {/* day 2 */}
        <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
          {/* left */}
          <View style={styles.left}>
            <Text style={[commonStyles.ns600, commonStyles.font11]}>Day 2</Text>
            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Dec 22, Fri
            </Text>
          </View>

          {/* right */}
          <View style={styles.right}>
            <View style={[commonStyles.commWrapSeven, {gap: _ms(10)}]}>
              <Image style={[size15, styles.margin]} source={icon.dinner} />

              <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Complimentary Snorkelling Trip at Meeru Island Resort
            </Text>
          </View>
        </View>

        <View style={[styles.horizontal]} />

        {/* day 3 */}
        <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
          {/* left */}
          <View style={styles.left}>
            <Text style={[commonStyles.ns600, commonStyles.font11]}>Day 3</Text>
            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Dec 23, Sat
            </Text>
          </View>

          {/* right */}
          <View style={styles.right}>
            <View>
              <Text style={[commonStyles.ns400]}>Check out from</Text>

              <Text style={[commonStyles.ns400, commonStyles.font11]}>
                Meeru Island Resort & Spa - Holidays Selections, 4 Star
              </Text>
            </View>

            <View style={{}}>
              <Text style={[commonStyles.ns400]}>Check in to</Text>

              <Text style={[commonStyles.ns400, commonStyles.font11]}>
                Meeru Island Resort & Spa - Holidays Selections, 4 Star
              </Text>
            </View>

            <View style={[commonStyles.commWrapSeven, {gap: _ms(10)}]}>
              <Image style={[size15, styles.margin]} source={icon.dinner} />

              <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.horizontal]} />

        {/* day 4 */}
        <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
          {/* left */}
          <View style={styles.left}>
            <Text style={[commonStyles.ns600, commonStyles.font11]}>Day 4</Text>
            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Dec 24, Sun
            </Text>
          </View>

          {/* right */}
          <View style={styles.right}>
            <View style={[commonStyles.commWrapSeven, {gap: _ms(10)}]}>
              <Image style={[size15, styles.margin]} source={icon.dinner} />

              <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.horizontal]} />

        {/* day 5 */}
        <View style={[commonStyles.commWrapSeven, {gap: _ms(8)}]}>
          {/* left */}
          <View style={styles.left}>
            <Text style={[commonStyles.ns600, commonStyles.font11]}>Day 5</Text>
            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Dec 25, Mon
            </Text>
          </View>

          {/* right */}
          <View style={styles.right}>
            <Text style={[commonStyles.ns400]}>Check out From</Text>

            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Meeru Island Resort & Spa - Holidays Selections, 4 Star
            </Text>

            <View style={[commonStyles.commWrapSeven, {gap: _ms(10)}]}>
              <Image style={[size15, styles.margin]} source={icon.dinner} />

              <View style={[commonStyles.flexOne, {rowGap: _mvs(5)}]}>
                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Day Meals: Lunch & Dinner
                </Text>

                <Text style={[commonStyles.ns400, commonStyles.font11]}>
                  Included at Meeru Island Resort & Spa - Holidays Selections ,
                  Maldives
                </Text>
              </View>
            </View>

            <Text style={[commonStyles.ns400, commonStyles.font11]}>
              Speedboat from Velana International Airport to Meeru Island-
              Shared Transfers (4 Nights and above)
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={[
          styles.lato,
          commonStyles.font12,
          {color: b3, textAlign: 'justify', lineHeight: _mvs(16)},
        ]}>
        Departure from Male by Vistara Flight UK-274 | Departing on 24 Dec,
        04:30 PM | Arriving on 24 Dec, 09:05 PM | Includes Check In Baggage
      </Text>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    borderRadius: 2,
    marginHorizontal: _ms(6),
    paddingVertical: _mvs(20),
    paddingHorizontal: _ms(8),
    marginBottom: _mvs(12),
    elevation: 1,
    gap: _mvs(20),
  },

  lato: {
    fontFamily: 'Lato-Regular',
    fontSize: _ms(14),
    color: b1,
  },

  left: {
    // width: _ms(85),
    flex: 1,
    rowGap: _mvs(5),
    // backgroundColor: 'aliceblue',
  },

  right: {
    flex: 3,
    rowGap: _mvs(8),
    // backgroundColor: '#f2f2f2',
  },

  margin: {marginTop: _mvs(3)},

  horizontal: {
    backgroundColor: D9D9D9,
    height: 1.5,
    marginTop: _mvs(18),
    marginBottom: _mvs(18),
  },
});
