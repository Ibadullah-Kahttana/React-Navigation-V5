import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <View style={styles.RootView}>
      {/**-------------- HEADER SECTION -------------------------------------------- */}

      <View style={styles.HeaderSection}>
        <View style={styles.HeaderSectionText}>
          <Text style={styles.HeaderSectionTextFont}> Hey,</Text>
          <Text style={styles.HeaderSectionTextFont}> Bidan Nitingale</Text>
        </View>
        <View style={styles.HeaderSectionicon}>
          <Image
            source={require('../assets/bell1.png')}
            style={{
              width: (windowWidth / 100) * 12,
              height: (windowHeight / 100) * 3.2,
              //backgroundColor: 'black',
            }}
            resizeMode={'contain'}
          />
        </View>
      </View>

      {/**-------------- Content SECTION -------------------------------------------- */}
      <View style={styles.MainContentSection}>
        <ScrollView>
          <View style={styles.MainContentSectionTimeSet}>
            <Image
              source={require('../assets/calendar.png')}
              style={{
                width: (windowWidth / 100) * 11,
                height: (windowHeight / 100) * 3,
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: 'black',
                marginLeft: 5,
              }}
              resizeMode={'contain'}
            />
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontWeight: '400',
                color: '#0E6655',
              }}>
              {''}Kunjungan selajuntyna,
              <Text style={{fontWeight: 'bold'}}> Ibn Florence</Text> Pada{' '}
              <Text style={{fontWeight: 'bold'}}>10.00</Text>
              {'    '}
            </Text>
          </View>
          <Text style={styles.SectionHeadingText}>Rekap Laporan </Text>

          <View elevation={8} style={styles.MidSectionBoxes}>
            <View style={styles.MidSectionInnerBoxe1}>
              <Text style={styles.MidSectionBlueFonts}>2</Text>
            </View>
            <View style={styles.MidSectionInnerBoxe2}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  color: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Kunjungan selajuntyna, 36 Ibn Florence</Text>
              </Text>
            </View>
          </View>

          <View elevation={8} style={styles.MidSectionBoxes}>
            <View style={styles.MidSectionInnerBoxe1}>
              <Text style={styles.MidSectionBlueFonts}>24</Text>
            </View>
            <View style={styles.MidSectionInnerBoxe2}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  color: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Total Kunjungan bulan ini</Text>
              </Text>
            </View>
          </View>

          <View elevation={8} style={styles.MidSectionBoxes}>
            <View style={styles.MidSectionInnerBoxe1}>
              <Text style={styles.MidSectionBlueFonts}>14</Text>
            </View>
            <View style={styles.MidSectionInnerBoxe2}>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  color: 'black',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Jadwal imunisasi anak bulan ini</Text>
              </Text>
            </View>
          </View>

          <Text style={styles.SectionHeadingText}>Kunjungan Pasien </Text>
          <View style={styles.MainContentAdSection}>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  //backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Jadwal Hari Ini{' '}
              </Text>
              <Image
                source={require('../assets/boycalender.png')}
                style={{
                  width: (windowWidth / 100) * 22,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'black',
                  //marginLeft: 1,
                }}
                resizeMode={'contain'}
              />
            </View>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  // backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 25,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Tambah kunjungan{' '}
              </Text>
              <Image
                source={require('../assets/womendoor.png')}
                style={{
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: 'black',
                  //marginLeft: 1,
                }}
                resizeMode={'contain'}
              />
            </View>
          </View>

          <Text style={styles.SectionHeadingText}>Sosilisasi Kesehatan </Text>
          <View style={styles.MainContentAdSection}>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  //backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Tulia{' '}
              </Text>
              <Image
                source={require('../assets/womenbook.png')}
                style={{
                  width: (windowWidth / 100) * 22,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'black',
                  //marginLeft: 1,
                }}
                resizeMode={'contain'}
              />
            </View>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  // backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Lawak{' '}
              </Text>
              <Image
                source={require('../assets/loveimg.png')}
                style={{
                  width: (windowWidth / 100) * 23,
                  height: (windowHeight / 100) * 9,
                  //alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: 'black',
                }}
                resizeMode={'contain'}
              />
            </View>
          </View>

          <Text style={styles.SectionHeadingText}>Kunjungan Pasien </Text>
          <View style={styles.MainContentAdSection}>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  //backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Jadwal Hari Ini{' '}
              </Text>
              <Image
                source={require('../assets/boycalender.png')}
                style={{
                  width: (windowWidth / 100) * 22,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'black',
                  //marginLeft: 1,
                }}
                resizeMode={'contain'}
              />
            </View>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  // backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 25,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Tambah kunjungan{' '}
              </Text>
              <Image
                source={require('../assets/womendoor.png')}
                style={{
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: 'black',
                }}
                resizeMode={'contain'}
              />
            </View>
          </View>

          <Text style={styles.SectionHeadingText}>Kunjungan Pasien </Text>
          <View style={styles.MainContentAdSection}>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  //backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Jadwal Hari Ini{' '}
              </Text>
              <Image
                source={require('../assets/boycalender.png')}
                style={{
                  width: (windowWidth / 100) * 22,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'black',
                  //marginLeft: 1,
                }}
                resizeMode={'contain'}
              />
            </View>
            <View elevation={8} style={styles.AdSections}>
              <Text
                style={{
                  // backgroundColor: 'yellow',
                  width: (windowWidth / 100) * 25,
                  height: (windowHeight / 100) * 13,
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  fontFamily: 'Roboto-Regular',
                  fontWeight: 'bold',
                  padding: 10,
                  paddingTop: 45,
                }}>
                {''}
                Tambah kunjungan{' '}
              </Text>
              <Image
                source={require('../assets/womendoor.png')}
                style={{
                  width: (windowWidth / 100) * 20,
                  height: (windowHeight / 100) * 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: 'black',
                }}
                resizeMode={'contain'}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/** ---------------- BOTTOM SECTION ---------------------------------------------- */}
      {/** ---------------- BOTTOM SECTION ---------------------------------------------- */}

      {/* <View style={styles.BottomSection}>
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
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#138D75',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
            }}>
            Home
          </Text>
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
          <Text style={styles.BottomSectionicontext}>Details</Text>
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
    backgroundColor: '#138D75',
    flexDirection: 'column',
    marginBottom: (windowHeight / 100) * 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  RootViewgradient: {
    flex: 1,
  },

  //===============     HEADER section   =================================================
  HeaderSection: {
    //flex: 1,
    height: (windowHeight / 100) * 15,
    width: (windowWidth / 100) * 100,
    flexDirection: 'row',
    //backgroundColor: 'red',
  },

  HeaderSectionText: {
    //backgroundColor: 'red',
    height: (windowHeight / 100) * 15,
    width: (windowWidth / 100) * 70,
    //fontFamily: 'OleoScriptSwashCaps-Bold',
    paddingTop: 10,
  },
  HeaderSectionicon: {
    //backgroundColor: 'yellow',
    height: (windowHeight / 100) * 15,
    width: (windowWidth / 100) * 30,
    paddingTop: 60,
    paddingLeft: 40,
  },

  HeaderSectionTextFont: {
    fontSize: 21,
    fontWeight: '300',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingTop: 13,
    marginHorizontal: 5,
    //fontFamily: 'OleoScriptSwashCaps-Regular',
    //fontFamily: 'NotoSans-SemiBold',
    fontFamily: 'Roboto-Regular',
    //backgroundColor: 'black',
  },

  //===============     MainContentSection section   =================================================
  MainContentSection: {
    backgroundColor: '#FDFEFE',
    height: (windowHeight / 100) * 82,
    width: (windowWidth / 100) * 100,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingBottom: 55,
    paddingTop: 3,
  },

  MainContentSectionTimeSet: {
    backgroundColor: '#ABEBC6',
    height: (windowHeight / 100) * 7,
    width: (windowWidth / 100) * 93,
    margin: 10,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'row',
  },

  SectionHeadingText: {
    // backgroundColor: 'yellow',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 93,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginLeft: 14,
    fontSize: 21,
    fontFamily: 'NotoSans-Bold',
    color: 'black',
    marginBottom: 5,
  },

  //===============     MidSectionBoxes section   =================================================

  MidSectionBoxes: {
    backgroundColor: 'white',
    height: (windowHeight / 100) * 9,
    width: (windowWidth / 100) * 93,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginLeft: 14,
    flexDirection: 'row',
    borderColor: 'white',
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },

    // backgroundColor: 'white',
    // height: (windowHeight / 100) * 15,
    // width: (windowWidth / 100) * 43.5,
    // borderRadius: 20,
    // borderColor: 'white',
    // borderWidth: 1,
    // shadowColor: '#808B96',
    // shadowOpacity: 0.8,
    // shadowRadius: 8,
    // shadowOffset: {
    //   height: 1,
    //   width: 1,
    // },
  },

  MidSectionBlueFonts: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#138D75',
  },

  MidSectionInnerBoxe1: {
    //backgroundColor: 'red',
    height: (windowHeight / 100) * 8,
    width: (windowWidth / 100) * 20,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  MidSectionInnerBoxe2: {
    //backgroundColor: 'green',
    height: (windowHeight / 100) * 8,
    width: (windowWidth / 100) * 72,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  //===============     ADs section   =================================================

  MainContentAdSection: {
    height: (windowHeight / 100) * 17,
    width: (windowWidth / 100) * 93,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginLeft: 14,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },

  AdSections: {
    backgroundColor: 'white',
    height: (windowHeight / 100) * 15,
    width: (windowWidth / 100) * 43.5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  //===============     BOTTOM section   =================================================

  BottomSection: {
    backgroundColor: '#FDFEFE',
    // backgroundColor: 'black',
    height: (windowHeight / 100) * 8,
    width: (windowWidth / 100) * 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    //margin: 15,
    marginTop: 40,
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
export default HomeScreen;
