/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Task1UI = () => {
  return (
    <>
      <ScrollView style={styles.RootView}>
        {/**======================================================= */}

        <View style={styles.view1}>
          <View style={styles.view11}>
            <View style={styles.view111}>
              <Image
                source={require('../assets/panda.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.view112}>
              <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
                Panda
              </Text>
              <Text style={{fontSize: 10, paddingLeft: 10, color: '#57547F'}}>
                {' '}
                I am in town
              </Text>
            </View>
          </View>
          <View style={styles.view12}>
            <Image
              source={require('../assets/bell2.png')}
              style={{width: 35, height: 36}}
              resizeMode={'contain'}
            />
          </View>
        </View>

        {/**======================================================= */}

        <View style={styles.view2}>
          <View style={styles.view21}>
            <View style={styles.view211}>
              <Image
                source={require('../assets/searchgrey.png')}
                style={{width: 25, height: 20}}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.view212}>
              <TextInput
                style={styles.input}
                placeholder="search here"
                keyboardType="default"
                //  value={text}
              />
            </View>
          </View>

          <View style={styles.view22}>
            <TouchableOpacity>
              <Image
                source={require('../assets/searchwhite.png')}
                style={{width: 20, height: 20}}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/**============================================================================= */}

        <Text style={styles.view2text}>In Progress</Text>
        {/**============================================================================= */}
        <View style={styles.view3}>
          <View style={styles.view31}>
            <View style={styles.view311}>
              <View style={styles.view3111}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '500',
                    paddingTop: 5,
                    paddingLeft: 7,
                  }}>
                  Travelling App
                </Text>
              </View>

              <View style={styles.view3112}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      //paddingTop: 5,
                      fontSize: 15,
                      paddingLeft: 5,
                      paddingTop: 4,
                    }}>
                    :
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.view312}>
              <Text style={styles.view312t}>
                This is pandas traveling app , you can access you
              </Text>
            </View>

            <View style={styles.view313}>
              <Image
                source={require('../assets/panda2.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
              <Image
                source={require('../assets/panda2.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.view314}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      color: '#CCD1D1',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      paddingBottom: 3,
                      marginLeft: 5,
                    }}>
                    Progress
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      paddingBottom: 3,
                      marginLeft: 5,
                    }}>
                    50 %
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.view32}>
            <View style={styles.view311}>
              <View style={styles.view3111}>
                <Text
                  style={{
                    color: '#1A0E50',
                    fontSize: 13,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '500',
                    paddingTop: 5,
                    paddingLeft: 7,
                  }}>
                  Developer Use
                </Text>
              </View>

              <View style={styles.view3112}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#1A0E50',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      //paddingTop: 5,
                      fontSize: 15,
                      paddingLeft: 5,
                      paddingTop: 4,
                    }}>
                    :
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.view312}>
              <Text style={styles.view312tt}>
                Develoepr use is for those who are registered as dev.
              </Text>
            </View>

            <View style={styles.view313}>
              <Image
                source={require('../assets/panda2.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
              <Image
                source={require('../assets/panda2.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
              <Image
                source={require('../assets/panda2.png')}
                style={{width: 30, height: 30}}
                resizeMode={'contain'}
              />
            </View>
            <View style={styles.view314}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text
                    style={{
                      color: '#1A0E50',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      paddingBottom: 3,
                      marginLeft: 5,
                    }}>
                    Progress
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#1A0E50',
                      fontSize: 13,
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '500',
                      paddingBottom: 3,
                      marginLeft: 5,
                    }}>
                    70 %
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/**============================================================================== */}

        <Text style={styles.view3text}>All Task</Text>

        {/**============================================================================== */}

        <View style={styles.view4}>
          <View style={styles.view41}>
            <Text style={styles.view4t1}> Work</Text>
          </View>
          <View style={styles.view42}>
            <Text style={styles.view4t2}>Personal</Text>
          </View>
        </View>

        {/**============================================================================== */}

        <View style={styles.view5}>
          <View style={styles.view51}>
            <View style={styles.view511}>
              <Text
                style={{
                  color: '#1A0E50',
                  fontSize: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '500',
                  paddingTop: 3,
                  paddingLeft: 10,
                }}>
                Design meeting
              </Text>
            </View>
            <View style={styles.view512}>
              <Text style={styles.view512tt}>- Developer use is for those</Text>
              <Text style={styles.view512tt}>- Developer use is for those</Text>
              <Text style={styles.view512tt}>- Developer use is for those</Text>
            </View>
          </View>
          <View style={styles.view52}>
            <Text style={styles.view5t2}>10:00 AM</Text>
            <Image
              source={require('../assets/meetingicon.png')}
              style={{width: '100%', height: 40}}
              resizeMode={'contain'}
              //resizeMode={'stretch'}
            />
          </View>
        </View>

        {/**============================================================================== */}
        <View style={styles.view6}>
          <View style={styles.view62}>
            <Text
              style={{
                color: '#1A0E50',
                fontSize: 14,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '500',
                paddingTop: 3,
                height: '20%',
                //backgroundColor: 'yellow',
                width: '100%',
                paddingLeft: 5,
              }}>
              Call with a customer
            </Text>
            <Text style={styles.view622tt}>
              {''}A customer will call today we haev to deal with it.{''}
            </Text>

            <View
              style={{
                // backgroundColor: 'black',
                width: '100%',
                height: '53%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  //backgroundColor: 'yellow',
                  width: '60%',
                  height: '100%',
                }}>
                <Image
                  source={require('../assets/customer.png')}
                  style={{width: '90%', height: 80, paddingLeft: 10}}
                  resizeMode={'contain'}
                  //resizeMode={'stretch'}
                />
              </View>
              <View
                style={{
                  //backgroundColor: 'red',
                  width: '40%',
                  height: '100%',
                }}>
                <Text style={styles.view66t2}>12:00 AM</Text>
              </View>
            </View>
          </View>

          {/**====================================5===================================== */}

          <View style={styles.view62}>
            <Text
              style={{
                color: '#1A0E50',
                fontSize: 14,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '500',
                paddingTop: 3,
                height: '20%',
                //backgroundColor: 'yellow',
                width: '100%',
                paddingLeft: 5,
              }}>
              Lunch with Devteam
            </Text>
            <Text style={styles.view622tt}>
              {''}
              We will be having a meal with Developer this afternoon!{' '}
            </Text>

            <View
              style={{
                //backgroundColor: 'black',
                width: '100%',
                height: '53%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  //backgroundColor: 'yellow',
                  width: '60%',
                  height: '100%',
                }}>
                <Image
                  source={require('../assets/eaticon.png')}
                  style={{width: '100%', height: 80}}
                  resizeMode={'contain'}
                  //resizeMode={'stretch'}
                />
              </View>
              <View
                style={{
                  //backgroundColor: 'red',
                  width: '40%',
                  height: '100%',
                }}>
                <Text style={styles.view66t2}>02:00 PM</Text>
              </View>
            </View>
          </View>
          {/**=========================================================================== */}
        </View>

        {/**============================================================================== */}
      </ScrollView>
      {/* 
      <View style={styles.view7}>
        <Image
          source={require('../assets/Home.png')}
          style={{width: '20%', height: 30}}
          resizeMode={'contain'}
          //resizeMode={'stretch'}
        />
        <Image
          source={require('../assets/box.png')}
          style={{width: '20%', height: 35}}
          resizeMode={'contain'}
          //resizeMode={'stretch'}
        />
        <View style={styles.view71}>
          <TouchableOpacity>
            <Image
              source={require('../assets/plus.png')}
              style={{width: 25, height: 30}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../assets/Image.png')}
          style={{width: '20%', height: 25}}
          resizeMode={'contain'}
          //resizeMode={'stretch'}
        />
        <Image
          source={require('../assets/setting.png')}
          style={{width: '20%', height: 20}}
          resizeMode={'contain'}
          //resizeMode={'stretch'}
        />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  RootView: {
    flex: 1,
    backgroundColor: '#FDFEFE',
    flexDirection: 'column',
    marginHorizontal: 5,
    marginTop: 6,
  },
  text: {
    color: 'black',
    fontSize: 25,
  },

  view1: {
    // backgroundColor: 'red',
    // height: 40,
    height: Dimensions.get('screen').height / 13,
    //width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    //position: 'absolute',
  },
  view11: {
    // backgroundColor: '#566573',
    width: 100,
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
  },

  view111: {
    backgroundColor: '#F9E79F',
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 35,
  },
  view112: {
    // backgroundColor: '#ABEBC6',
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view12: {
    // backgroundColor: '#808B96',
    width: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },

  //======================================================================

  view2: {
    //backgroundColor: 'black',

    height: Dimensions.get('screen').height / 15,
    marginTop: 7,
    // height: 36,
    //  width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
  },

  view21: {
    backgroundColor: '#F2F4F4',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 19,
  },

  view211: {
    //backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },

  view212: {
    backgroundColor: 'white',
    width: '80%',
    marginRight: 10,
    borderRadius: 15,
  },

  view22: {
    backgroundColor: '#EE0855',
    height: 35,
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  input: {
    height: 35,
    borderRadius: 10,
    backgroundColor: '#F2F4F4',
  },

  //===========================================================================

  view2text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: '#200769',
    paddingTop: 10,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  //===========================================================================
  view3: {
    //backgroundColor: 'red',
    marginTop: 7,
    marginLeft: 8,
    marginRight: 8,
    //height: 120,
    height: Dimensions.get('screen').height / 4.45,
    //width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  view31: {
    backgroundColor: '#1A0E50',
    height: '100%',
    width: '47%',
    margin: 4,
    borderRadius: 10,
  },

  view311: {
    //backgroundColor: 'black',
    width: '95%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // margin: 2,
    marginLeft: 3,
  },

  view312: {
    height: '25%',
    width: '95%',
  },

  view313: {
    height: '23%',
    width: '95%',
    paddingLeft: 3,
    //justifyContent: 'center',
    marginLeft: 3,
    flexDirection: 'row',
    // backgroundColor: 'black',
  },

  view314: {
    height: '24%',
    width: '95%',
    //justifyContent: 'center',
    marginLeft: 3,
    flexDirection: 'column',
    //backgroundColor: 'black',
  },

  view312t: {
    color: '#D6DBDF',
    fontSize: 10,
    justifyContent: 'center',
    marginLeft: 10,
    //paddingBottom: 10,
    // backgroundColor: 'black',
  },

  view312tt: {
    color: '#57547F',
    fontSize: 10,
    justifyContent: 'center',
    marginLeft: 10,
    //paddingBottom: 10,
    // backgroundColor: 'black',
  },

  view3111: {
    //backgroundColor: 'red',
    width: '80%',
    height: '95%',
  },

  view3112: {
    // backgroundColor: 'yellow',
    width: '20%',
    height: '95%',
  },

  pgbar: {
    height: '20%',
    width: '90%',
    marginLeft: 5,
    color: 'white',
  },
  view32: {
    backgroundColor: '#F8F9F9',
    height: '100%',
    width: '47%',
    margin: 4,
    borderRadius: 10,
  },

  //===========================================================================

  view3text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: '#200769',
    paddingTop: 10,
    marginLeft: 5,
    fontWeight: 'bold',
  },

  //===========================================================================
  view4: {
    //backgroundColor: 'green',
    marginTop: 7,
    marginLeft: 10,
    marginRight: 8,
    //height: 35,
    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  view41: {
    backgroundColor: '#EE0855',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view42: {
    backgroundColor: '#F8F9F9',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4t1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    //textAlign: 'center',
    //alignItems: 'center',
    //marginTop: 3,
  },

  view4t2: {
    color: '#200769',
    fontWeight: 'bold',
    fontSize: 15,
    //textAlign: 'center',
    //alignItems: 'center',
    //marginTop: 3,
  },
  //===========================================================================

  view5: {
    backgroundColor: '#FDEDEC',
    marginTop: 7,
    marginLeft: 10,
    marginRight: 8,
    //height: 80,
    height: Dimensions.get('screen').height / 6,
    borderColor: '#CB4335',
    borderWidth: 1,
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
  },

  // view4: {
  //   //backgroundColor: 'green',
  //   marginTop: 7,
  //   marginLeft: 10,
  //   marginRight: 8,
  //   height: 35,
  //   flexDirection: 'row',
  //   padding: 2,
  //   justifyContent: 'space-between',
  // },

  view51: {
    //backgroundColor: 'black',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view52: {
    //backgroundColor: 'green',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
  },
  view5t1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    //alignItems: 'center',
    marginTop: 3,
  },

  view5t2: {
    color: '#200769',
    // fontWeight: 'bold',
    fontSize: 12,
    //textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    paddingLeft: 80,
    paddingBottom: 20,
    //backgroundColor: 'yellow',
  },

  view511: {
    // backgroundColor: 'orange',
    width: '100%',
    height: '35%',
    // borderRadius: 12,
  },

  view512: {
    // backgroundColor: 'red',
    width: '100%',
    height: '65%',
    // borderRadius: 12,
    paddingTop: 2,
  },

  view512tt: {
    color: '#57547F',
    fontSize: 10,
    justifyContent: 'center',
    marginLeft: 10,
    //paddingBottom: 10,
    // backgroundColor: 'black',
  },
  //=================================================================================

  view6: {
    marginTop: 7,
    marginLeft: 10,
    marginRight: 8,
    //height: 130,
    height: Dimensions.get('screen').height / 4,
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
  },

  view61: {
    backgroundColor: '#E8F8F5',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    borderColor: '#76D7C4',
    borderWidth: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },

  view62: {
    backgroundColor: '#E8F8F5',
    width: '49%',
    height: '100%',
    borderRadius: 12,
    borderColor: '#76D7C4',
    borderWidth: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  view6t1: {
    color: '#200769',
    // fontWeight: 'bold',
    fontSize: 13,
    //textAlign: 'right',
    //alignItems: 'center',
    marginTop: 3,
    paddingLeft: 70,
    paddingBottom: 7,
  },

  view6t2: {
    color: '#200769',
    // fontWeight: 'bold',
    fontSize: 13,
    //textAlign: 'right',
    //alignItems: 'center',
    marginTop: 3,
    paddingLeft: 70,
    paddingBottom: 7,
  },

  view611: {
    //backgroundColor: 'red',
    width: '100%',
    height: '50%',
    // borderRadius: 12,
    paddingTop: 2,
  },

  view612: {
    //backgroundColor: 'red',
    width: '100%',
    height: '50%',
    // borderRadius: 12,
    paddingTop: 2,
  },

  view612tt: {
    color: '#57547F',
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 5,
    height: '20%',
    width: '100%',
    paddingLeft: 3,
    //paddingBottom: 10,
    backgroundColor: 'black',
  },

  view622tt: {
    color: '#57547F',
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 5,
    height: '20%',
    width: '100%',
    paddingLeft: 3,
    //paddingBottom: 10,
    // backgroundColor: 'black',
  },

  view66t2: {
    color: '#57547F',
    // fontWeight: 'bold',
    fontSize: 12,
    //textAlign: 'right',
    //alignItems: 'center',
    marginTop: 45,
    //paddingLeft: 2,
    paddingBottom: 7,
    //backgroundColor: 'yellow',
  },

  view62t2: {
    color: '#57547F',
    // fontWeight: 'bold',
    fontSize: 12,
    //textAlignVertical: 'bottom',
    //alignItems: 'center',
    marginTop: 45,
    //paddingLeft: 2,
    //paddingTop: 10,
    paddingBottom: 7,
    //backgroundColor: 'yellow',
  },

  //==================================================================================

  view7: {
    //backgroundColor: 'black',
    margin: 7,
    //height: 35,

    height: Dimensions.get('screen').height / 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    //marginLeft: 12,
    //backgroundColor: 'red',
    borderRadius: 20,
    //borderColor: 'red',
    //borderWidth: 1,
  },

  view71: {
    backgroundColor: '#EE0855',
    height: 35,
    width: '12%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Task1UI;
