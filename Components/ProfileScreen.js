import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {TestScheduler} from 'jest';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProfileScreen = () => {
  const data = [
    {
      id: 1,
      img1: require('../assets/user.png'),
      name: 'Profile Bidan',
      img2: require('../assets/angle-right.png'),
    },
    {
      id: 2,
      img1: require('../assets/lock.png'),
      name: 'User Password',
      img2: require('../assets/angle-right.png'),
    },
    {
      id: 3,
      img1: require('../assets/info.png'),
      name: 'Sertifikasi Bidan',
      img2: require('../assets/angle-right.png'),
    },
    {
      id: 4,
      img1: require('../assets/interrogation.png'),
      name: 'FAQ',
      img2: require('../assets/angle-right.png'),
    },
    {
      id: 5,
      img1: require('../assets/document.png'),
      name: 'Terms & Conditions',
      img2: require('../assets/angle-right.png'),
    },
    {
      id: 6,
      img1: require('../assets/shield-exclamation.png'),
      name: 'Privacy Policy',
      img2: require('../assets/angle-right.png'),
    },
  ];

  return (
    <View style={styles.RootView}>
      {/**-------------- HEADER SECTION -------------------------------------------- */}

      <View style={styles.HeaderSection}>
        <Image
          source={require('../assets/ProfilePic.jpg')}
          style={{
            width: (windowWidth / 100) * 40,
            height: (windowHeight / 100) * 20,
            // backgroundColor: 'black',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode={'contain'}
        />

        <Text style={styles.ProfileNameText}>Florence Nitingale</Text>
        <Text style={styles.ProfileEmailText}>nitingaleasd@gmail.com</Text>
      </View>

      {/**-------------- Content SECTION ---------------------------------------------- */}

      <View elevation={8} style={styles.MainContentSection}>
        {data.map((item, index) => (
          <View>
            <View style={styles.ListBoxMain}>
              <Image
                source={item.img1}
                style={{
                  width: (windowWidth / 100) * 8,
                  height: (windowHeight / 100) * 3,
                  //   /backgroundColor: 'black',
                  margin: 5,
                  marginLeft: 10,
                }}
                resizeMode={'contain'}
              />

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  marginLeft: 10,
                }}>
                {item.name}
              </Text>

              <View
                style={{
                  flex: 1,
                  width: (windowWidth / 100) * 10,
                  height: (windowHeight / 100) * 3,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <Image
                  source={item.img2}
                  style={{
                    width: (windowWidth / 100) * 10,
                    height: (windowHeight / 100) * 3,
                    marginRight: 10,
                  }}
                  resizeMode={'contain'}
                />
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#EBEDEF',
                width: (windowWidth / 100) * 92,
              }}></View>
          </View>
        ))}

        {/** ---------------- Button SECTION ---------------------------------------------- */}
        <View style={styles.ButtonSection}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              //alignItems: 'center',
              //justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/sign-out.png')}
              style={{
                width: (windowWidth / 100) * 10,
                height: (windowHeight / 100) * 3,
                // borderRadius: 50,
                marginRight: 10,
              }}
              resizeMode={'contain'}
            />

            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#C9134F'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
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
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#138D75',
              alignItems: 'center',
              justifyContent: 'center',
              //padding: 5,
            }}>
            {''}
            Profile{''}
          </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  RootView: {
    flex: 1,
    // backgroundColor: '#138D75',
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
    height: (windowHeight / 100) * 35,
    width: (windowWidth / 100) * 80,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },

  ProfileNameText: {
    //backgroundColor: 'red',
    height: (windowHeight / 100) * 5,
    width: (windowWidth / 100) * 80,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    fontSize: 23,
    fontFamily: 'NotoSans-Bold',
    color: 'black',
    //marginBottom: 5,
    paddingTop: 5,
  },

  ProfileEmailText: {
    // backgroundColor: 'pink',
    height: (windowHeight / 100) * 4,
    width: (windowWidth / 100) * 80,
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 15,
    fontSize: 20,
  },

  //===============     MainContentSection section   =================================================

  MainContentSection: {
    flex: 1,
    backgroundColor: 'white',
    //backgroundColor: 'black',
    // height: (windowHeight / 100) * 50,
    width: (windowWidth / 100) * 93,
    borderRadius: 20,

    paddingTop: 10,

    marginBottom: 10,
    flexDirection: 'column',
    shadowColor: '#808B96',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    alignItems: 'center',
    justifyContent: 'center',
  },

  ListBoxMain: {
    // flex: 10,
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 90,
    // backgroundColor: 'yellow',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
    //justifyContent: 'space-around',
  },

  //===============     Button section   =================================================

  ButtonSection: {
    height: (windowHeight / 100) * 6,
    width: (windowWidth / 100) * 40,
    marginTop: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // /backgroundColor: 'yellow',
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
export default ProfileScreen;
