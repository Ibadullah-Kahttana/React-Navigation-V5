import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ListScreen = () => {
  const data = [
    {
      id: 1,
      name: 'ibad ullah',
      age: '23',
      address: 'Barakahu',
      contact: '0324',
    },
    {
      id: 2,
      name: 'zeeshan',
      age: '26',
      address: 'Banni',
      contact: '0333',
    },
    {
      id: 3,
      name: 'saran',
      age: '24',
      address: 'G-9/1',
      contact: '0345',
    },
    {
      id: 4,
      name: 'ibad ullah',
      age: '23',
      address: 'Barakahu',
      contact: '0324',
    },
    {
      id: 5,
      name: 'zeeshan',
      age: '26',
      address: 'Banni',
      contact: '0333',
    },
    {
      id: 6,
      name: 'saran',
      age: '24',
      address: 'G-9/1',
      contact: '0345',
    },
    {
      id: 7,
      name: 'ibad ullah',
      age: '23',
      address: 'Barakahu',
      contact: '0324',
    },
    {
      id: 8,
      name: 'zeeshan',
      age: '26',
      address: 'Banni',
      contact: '0333',
    },
    {
      id: 9,
      name: 'saran',
      age: '24',
      address: 'G-9/1',
      contact: '0345',
    },
  ];

  return (
    <View style={styles.RootView}>
      {/**-------------- HEADER SECTION -------------------------------------------- */}

      <View style={styles.HeaderSection}>
        <View elevation={8} style={styles.HeaderSearchBox}>
          <Image
            source={require('../assets/search.png')}
            style={{
              width: (windowWidth / 100) * 13,
              height: (windowHeight / 100) * 4,
              alignItems: 'center',
              justifyContent: 'center',
              //backgroundColor: 'black',
              margin: 5,
            }}
            resizeMode={'contain'}
          />

          <TextInput
            style={styles.HeaderInput}
            placeholder="Search data"
            keyboardType="default"
          />
        </View>
      </View>

      {/**-------------- Content SECTION ---------------------------------------------- */}

      <View style={styles.MainContentSection}>
        <ScrollView>
          <View style={styles.MainContentHeadings}>
            <Text style={styles.MainContentHeadingRightText}>Data Paisen</Text>
            <Text style={styles.MainContentHeadingLeftText}>Lehat Semua</Text>
          </View>

          {/**------------------------------------------------------------------------------------------ */}
          {data.map((item, index) => (
            <View elevation={8} style={styles.MidSectionListBoxe}>
              <View style={styles.MidSectionInnerUpperBoxe}>
                <View>
                  <Image
                    source={require('../assets/G1B.jpg')}
                    style={{
                      width: (windowWidth / 100) * 16,
                      height: (windowHeight / 100) * 8,
                      // backgroundColor: 'black',
                      margin: 5,
                      borderRadius: 50,
                    }}
                    resizeMode={'contain'}
                  />
                </View>

                <View style={styles.MidSectionInnerUpperBoxeHeadingText}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'black',
                      paddingBottom: 7,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                    }}>
                    {item.contact}
                  </Text>
                </View>

                <View style={styles.MidSectionInnerUpperBoxeList}>
                  <Text
                    style={{
                      fontSize: 13,
                    }}>
                    {item.address}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#EBEDEF',
                  width: (windowWidth / 100) * 92,
                }}></View>

              <View style={styles.MidSectionInnerLowerBoxe}>
                <View style={styles.MidSectionInnerLowerBoxeLeft}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'black',
                      paddingRight: 40,
                    }}>
                    {item.age}
                  </Text>
                </View>
                <View style={styles.MidSectionInnerLowerBoxeRight}>
                  <Text style={styles.MidSectionInnerLowerBoxeRightText}>
                    Detail
                  </Text>
                  <TouchableOpacity
                    style={styles.MidSectionInnerLowerBoxeRightButton}>
                    <Text
                      style={styles.MidSectionInnerLowerBoxeRightButtonText}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          {/**------------------------------------------------------------------------------------------ */}

          {/**------------------------------------------------------------------------------------------ */}

          <View style={styles.MainContentHeadings}>
            <Text style={styles.MainContentHeadingRightText}>
              Data Kunjungan
            </Text>
            <Text style={styles.MainContentHeadingLeftText}>Lehat Semua</Text>
          </View>

          {/**------------------------------------------------------------------------------------------ */}

          <View elevation={8} style={styles.MidSectionDescriptiveListBoxe}>
            <View style={styles.MidSectionDescriptiveUpperBoxe}>
              <View style={styles.MidSectionDescriptiveUpperBoxeLeft}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#C0392B',

                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Berisiko
                </Text>
              </View>

              <View style={styles.MidSectionDescriptiveUpperBoxeRight}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'NotoSans-Bold',
                    color: '#1f65ff',
                  }}>
                  Detail
                </Text>
              </View>
            </View>

            <View style={styles.MidSectionDescriptiveLowerBoxe}>
              <Text
                style={{
                  //  backgroundColor: 'yellow',
                  borderRadius: 15,
                  fontSize: 19,
                  fontWeight: '500',
                  color: 'black',
                  paddingLeft: 10,
                  paddingBottom: 10,
                }}>
                Kunjungan Ibu Florencia
              </Text>

              <Text
                style={{
                  //   /backgroundColor: 'red',
                  paddingLeft: 13,
                  paddingRight: 2,
                }}>
                Pada 12 Augusta ibn florenicai mengulkahn rasa a a asakhta is
                the a the lady liveing in ameria she has thrree sons and 2 girls
                Pada 12 Augusta ibn florenicai mengulkahn rasa asakhta is the
                lady liveing in ameria she has thrree sons and 2 girls{' '}
              </Text>

              <TouchableOpacity
                style={{
                  // backgroundColor: '#138D75',
                  height: (windowHeight / 100) * 4,
                  width: (windowWidth / 100) * 17,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 9,
                  marginLeft: 140,
                  borderRadius: 8,
                  fontSize: 13,
                  fontFamily: 'NotoSans-Bold',
                  color: 'white',
                }}>
                <Text style={styles.MidSectionInnerLowerBoxeRightButtonText}>
                  Visit
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/**------------------------------------------------------------------------------------ */}
          <View elevation={8} style={styles.MidSectionDescriptiveListBoxe}>
            <View style={styles.MidSectionDescriptiveUpperBoxe}>
              <View style={styles.MidSectionDescriptiveUpperBoxeLeft}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#C0392B',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  Deta
                </Text>
              </View>

              <View style={styles.MidSectionDescriptiveUpperBoxeRight}>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'NotoSans-Bold',
                    color: '#1f65ff',
                  }}>
                  Detail
                </Text>
              </View>
            </View>

            <View style={styles.MidSectionDescriptiveLowerBoxe}>
              <Text
                style={{
                  //backgroundColor: 'yellow',
                  borderRadius: 15,
                  fontSize: 19,
                  fontWeight: '500',
                  color: 'black',
                  paddingLeft: 10,
                  paddingBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Teressa Bisuaka
              </Text>

              <Text
                style={{
                  //   /backgroundColor: 'red',
                  paddingLeft: 13,
                  paddingRight: 2,
                }}>
                Pada 12 Augusta ibn florenicai mengulkahn rasa a a asakhta is
                lady liveing in ameria she has thrree sons and 2 girls the a the
                lady liveing in ameria she has thrree sons and 2 girls Pada 12
                Augusta ibn florenicai mengulkahn rasa asakhta{' '}
              </Text>

              <TouchableOpacity
                style={{
                  //backgroundColor: '#138D75',
                  height: (windowHeight / 100) * 4,
                  width: (windowWidth / 100) * 17,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 9,
                  marginLeft: 140,
                  borderRadius: 8,
                  fontSize: 13,
                  fontFamily: 'NotoSans-Bold',
                  color: 'white',
                }}>
                <Text style={styles.MidSectionInnerLowerBoxeRightButtonText}>
                  Visit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {/** ---------------- BOTTOM SECTION ---------------------------------------------- */}
      {/* 
      <View style={styles.BottomSection}>
        <View style={styles.BottomSectionicon}>
          <Image
            source={require('../assets/Home.png')}
            style={{
              width: (windowWidth / 100) * 12,
              height: (windowHeight / 100) * 3.5,
              // backgroundColor: 'black',
            }}
            resizeMode={'contain'}
          />
          <Text style={styles.BottomSectionicontext}>Home</Text>
        </View>

        <View style={styles.BottomSectionicon}>
          <Image
            source={require('../assets/document.png')}
            style={{
              width: (windowWidth / 100) * 12,
              height: (windowHeight / 100) * 3.5,
              // backgroundColor: 'black',
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#138D75',
              alignItems: 'center',
              justifyContent: 'center',
              //padding: 5,
            }}>
            Details
          </Text>
        </View>

        <View style={styles.BottomSectionicon}>
          <Image
            source={require('../assets/user.png')}
            style={{
              width: (windowWidth / 100) * 12,
              height: (windowHeight / 100) * 3.5,
              //backgroundColor: 'black',
            }}
            resizeMode={'contain'}
          />
          <Text style={styles.BottomSectionicontext}> Profile </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  RootView: {
    flex: 1,
    //backgroundColor: '#138D75',

    height: (windowHeight / 100) * 100,
    width: (windowWidth / 100) * 100,
    backgroundColor: '#FDFEFE',
    flexDirection: 'column',
    marginBottom: (windowHeight / 100) * 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RootViewgradient: {flex: 1},

  //===============     HEADER section   =================================================

  HeaderSection: {
    //flex: 1,
    height: (windowHeight / 100) * 10,
    width: (windowWidth / 100) * 100,
    flexDirection: 'row',
    //backgroundColor: 'red',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  HeaderSearchBox: {
    //backgroundColor: '#ABEBC6',
    backgroundColor: '#F8F9F9',
    height: (windowHeight / 100) * 7,
    width: (windowWidth / 100) * 93,
    margin: 10,
    marginTop: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'row',
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  HeaderInput: {
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 75,
    borderRadius: 10,
    //backgroundColor: 'red',
  },

  //===============     MainContentSection section   =================================================

  MainContentSection: {
    flex: 1,
    backgroundColor: '#FDFEFE',
    //backgroundColor: 'black',
    height: (windowHeight / 100) * 10,
    width: (windowWidth / 100) * 100,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,

    paddingTop: 5,
  },

  MainContentHeadings: {
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 93,
    //backgroundColor: 'black',
    flexDirection: 'row',
  },

  MainContentHeadingRightText: {
    // backgroundColor: 'yellow',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 15,
    fontSize: 19,
    fontFamily: 'NotoSans-Bold',
    color: 'black',
    marginBottom: 5,
  },

  MainContentHeadingLeftText: {
    //backgroundColor: 'yellow',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 50,
    alignItems: 'center',
    marginLeft: 19,
    paddingLeft: 90,
    paddingTop: 5,
    fontSize: 13,
    fontFamily: 'NotoSans-Bold',
    color: '#1f65ff',
    marginBottom: 5,
  },

  //===============     MidSectionBoxes section   =================================================

  MidSectionListBoxe: {
    //backgroundColor: 'red',
    backgroundColor: 'white',
    height: (windowHeight / 100) * 20,
    width: (windowWidth / 100) * 93,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'column',
    borderColor: 'white',
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  //------------------------------- UPPER BOX -----------------------------

  MidSectionInnerUpperBoxe: {
    //backgroundColor: 'yellow',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 92,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
  },

  //   MidSectionInnerUpperBoxeImage: {
  //     backgroundColor: 'green',
  //     height: (windowHeight / 100) * 8,
  //     width: (windowWidth / 100) * 15,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 50,
  //   },

  MidSectionInnerUpperBoxeHeadingText: {
    // backgroundColor: 'pink',
    height: (windowHeight / 100) * 7,
    width: (windowWidth / 100) * 30,
    justifyContent: 'center',
    paddingLeft: 5,
    borderRadius: 20,
  },

  MidSectionInnerUpperBoxeList: {
    //backgroundColor: 'blue',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 45,
    justifyContent: 'center',
    paddingLeft: 23,
    borderRadius: 20,
  },

  //----------------------------- LOWER BOX ---------------------------

  MidSectionInnerLowerBoxe: {
    //backgroundColor: 'yellow',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 92,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  MidSectionInnerLowerBoxeLeft: {
    //backgroundColor: 'black',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 40,
    //justifyContent: 'space-around',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
  },

  //--------------------------- LOWER BOX RIGHT ----------------------------------

  MidSectionInnerLowerBoxeRight: {
    //backgroundColor: 'indigo',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
  },

  MidSectionInnerLowerBoxeRightText: {
    //backgroundColor: 'blue',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 8,
    //padding: 10,
    borderRadius: 20,
    fontSize: 13,
    fontFamily: 'NotoSans-Bold',
    color: '#1f65ff',
  },

  MidSectionInnerLowerBoxeRightButtonText: {
    backgroundColor: '#1f65ff',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 8,
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'NotoSans-Bold',
    color: 'white',
  },

  // MidSectionInnerLowerBoxeRightButton: {
  //   //backgroundColor: '#138D75',
  //   height: (windowHeight / 100) * 5,
  //   width: (windowWidth / 100) * 22,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   //paddingTop: 15,
  //   marginTop: 5,
  //   borderRadius: 8,
  //   fontSize: 13,
  //   fontFamily: 'NotoSans-Bold',
  //   color: 'white',
  // },

  //-------------------------------Descriptive UPPER BOX -----------------------------

  MidSectionDescriptiveListBoxe: {
    // backgroundColor: 'red',
    backgroundColor: 'white',
    height: (windowHeight / 100) * 34,
    width: (windowWidth / 100) * 93,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'column',
    borderColor: 'white',
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    marginBottom: 25,
  },

  MidSectionDescriptiveUpperBoxe: {
    // backgroundColor: 'yellow',
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 92,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    //paddingTop: 10,
  },

  MidSectionDescriptiveUpperBoxeLeft: {
    backgroundColor: '#F5B7B1',
    height: (windowHeight / 100) * 4,
    width: (windowWidth / 100) * 18,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },

  MidSectionDescriptiveUpperBoxeRight: {
    // backgroundColor: '#FADBD8',
    height: (windowHeight / 100) * 4,
    width: (windowWidth / 100) * 20,
    // padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  MidSectionDescriptiveLowerBoxe: {
    // backgroundColor: 'yellow',
    height: (windowHeight / 100) * 23,
    width: (windowWidth / 100) * 92,
    flexDirection: 'column',
    borderRadius: 20,
    //paddingTop: 20,
    padding: 5,
  },

  //===============     BOTTOM section   =================================================

  BottomSection: {
    backgroundColor: '#FDFEFE',
    // backgroundColor: 'black',
    height: (windowHeight / 100) * 8.5,
    width: (windowWidth / 100) * 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    marginTop: 20,
  },

  BottomSectionicon: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  BottomSectionicontext: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#212F3C',
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 5,
  },
});
export default ListScreen;
