import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import commonStyles from '../../../assets/css/CommonFonts';
import { b2, b3, white } from '../../../config/colors';
import icon from '../../../config/IconAssets';

const MtHotels = ({ navigation, route }) => {
  const { srcName } = route?.params;

  return (
    <View style={styles.container}>
      {/* heading */}
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={[commonStyles.lbB1, { fontSize: 16, color: b3 }]}>
          {srcName}
        </Text>
      </View>

      {/* subheading */}
      <View style={{ alignItems: 'center', marginTop: 5 }}>
        <Text style={[commonStyles.lbB1, { fontSize: 14, color: b3 }]}>
          Hotels
        </Text>
      </View>

      {/* body */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ rowGap: 10, paddingVertical: 10 }}>
            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* ================================================================== */}

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.ticket}>
              {/* top section */}
              <View style={{ alignItems: "center", marginBottom: 6, rowGap: 3 }}>
                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Stay : 3 Nights
                </Text>

                {srcName === "Cancelled Bookings" && <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 15, height: 15, tintColor: "#C6482C", marginRight: 6 }}
                    source={icon.cross}
                  />
                  <Text style={[commonStyles.ns600, { fontSize: 12, color: "#C6482C" }]}>
                    CANCELLED BOOKING
                  </Text>
                </View>}

                <Text style={[commonStyles.ns400, { fontSize: 12, color: b3 }]}>
                  Booking ID - GOFLDSTILRJY3G7E3910
                </Text>
              </View>

              {/* destination section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 8 }}>
                <View style={{}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={{ width: 20, height: 20, marginRight: 10 }}
                      source={icon.htlicon}
                    />
                    <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Holiday Inn : City Centre</Text>
                  </View>

                  <Text style={[commonStyles.ns400, { color: b3, marginLeft: 30 }]}>
                    Kevin
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 20, height: 20, marginRight: 10, tintColor: b3 }}
                    source={icon.resort}
                  />
                  <Text style={[commonStyles.ns400, { fontSize: 12 }]}>Calgary, Alberta</Text>
                </View>
              </View>

              <View style={styles.dotLine} />

              {/* hinge section */}
              <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginTop: -13 }}>
                <View style={styles.halfCircle} />
                <View style={[styles.halfCircle, { transform: [{ rotate: "180deg" }] }]} />
              </View>

              {/* bottom section */}
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 25 }}>
                <View>
                  <Text style={[commonStyles.ns600, { fontSize: 14 }]}>
                    1 King Room
                  </Text>

                  <Text style={[commonStyles.ns400, { color: b3, fontSize: 12, marginTop: 3 }]}>
                    CHECK - IN
                  </Text>

                  <Text style={[commonStyles.ns400, { fontSize: 12, marginTop: 5 }]}>
                    Thu, 21 Sep 11:45
                  </Text>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.manage}
                  // onPress={() => navigation.navigate("payments")}
                  >
                    <Text style={[commonStyles.lbB1, { fontSize: 14, color: white }]}>
                      {srcName === "Cancelled Bookings" ? "View" : "Manage"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
};

export default MtHotels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  body: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20
  },
  ticket: {
    backgroundColor: white,
    elevation: 3,
    paddingVertical: 16,
    borderRadius: 10,
  },
  halfCircle: {
    backgroundColor: "#F4F4F4",
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 20,
    height: 30,
  },
  dotLine: {
    borderWidth: 1,
    borderColor: b3,
    borderStyle: "dashed",
    marginTop: 15,
  },
  manage: {
    borderRadius: 4,
    backgroundColor: b2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
});