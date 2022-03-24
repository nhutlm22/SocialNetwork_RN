import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  Switch,
  Pressable,
  Animated,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {theme} from '../../../theme';
import CardFeed from '../../../components/Card/CardFeed';
import CardContent from '../../../components/Card/CardContent';
import Drawer from '../../../components/Card/DrawerBottom';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 2,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 3,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 4,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 5,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 6,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 7,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
  {
    id: 8,
    title: 'Header',
    time: '22m ago',
    content:
      'Hell want to use your yacht, and I dont want this thing smelling like fish',
  },
];

const ModalPopup = ({visible, children}) => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setTimeout(() => {
        setShowModal(true);
      }, 200);
      // Animated.timing(scaleValue, {
      //   toValue: 1,
      //   duration: 300,
      //   useNativeDriver: true,
      // }).start();
    } else {
      setTimeout(() => {
        setShowModal(false);
      }, 200);
      // Animated.timing(scaleValue, {
      //   toValue: 0,
      //   duration: 300,
      //   useNativeDriver: true,
      // }).start();
    }
  };
  return (
    <Modal  transparent visible={showModal} animationType='slide'>
      <View style={styles.modalBG}>
        <Animated.View 
          style={[styles.viewBody,]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const ProfilePost = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const [isEnabled, setIsEnabled] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [isShow, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  //  const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);
  const toggleSwitch = () => {
    if (!isEnabled) {
      setIsEnabled(true);
      Animated.timing(scaleValue, {
        toValue: width / 1.6,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      setIsEnabled(false);
      Animated.timing(scaleValue, {
        toValue: width - 100,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <View style={styles.viewHeader}>
          <Header
            titleLeft={'Settings'}
            title={'Profile'}
            titleRight={'Logout'}
            bgPrimary
            titleColorWhite
            titleMainWhite
            pressLeft={() => {
              setVisible(true);
            }}
          />

          <View style={styles.viewAvatar} />
        </View>
        <View style={{marginTop: 75, marginBottom: 16, alignItems: 'center'}}>
          <Text style={styles.textTitle}>Victoria Robertson</Text>
          <Text style={styles.textContent}>A mantra goes here</Text>
        </View>

        <Animated.View>
          <Pressable onPress={toggleSwitch} style={styles.viewSwitch}>
            {!isEnabled ? (
              <Animated.View style={[styles.viewContentSwitch]}>
                <Text style={styles.textSwitch}>
                  {isEnabled ? 'Posts' : 'Photos'}
                </Text>
              </Animated.View>
            ) : (
              <View style={styles.viewContentSwitched}>
                <Text style={styles.textSwitch}>
                  {isEnabled ? 'Posts' : 'Photos'}
                </Text>
              </View>
            )}
          </Pressable>
        </Animated.View>
        <View
          style={{backgroundColor: theme.colors.white, paddingHorizontal: 16}}>
          {!isEnabled ? (
            <FlatList
              data={data}
              renderItem={({item}) => <CardFeed item={item} />}
              keyExtractor={item => item.id.toString()}
            />
          ) : (
            <FlatList
              data={data}
              renderItem={({item}) => <CardContent item={item} />}
              keyExtractor={item => item.id.toString()}
            />
          )}
        </View>
      </ScrollView>
      <ModalPopup visible={visible}>
        <View style={styles.viewContent}>
          <View
            style={{
              height: 4,
              width: 32,
              backgroundColor: '#E8E8E8',
              borderRadius: 8,
            }}
          />
          <Text style={styles.textTitle}>Congratulations!</Text>
          <Text style={styles.textContent}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum
            tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate
            duis sit esse aliqua esse ex dolore esse. Consequat velit qui
            adipisicing sunt.
          </Text>
        </View>
        <View style={styles.viewFooter}>
          <Button
            onPress={() => {
              setVisible(false);
            }}
            title={'Click Me'}
          />
          <Text
            onPress={() => {
              navigation.navigate(routes.SIGNINSCREENS);
            }}
            style={styles.textSC}>
            Forgot Password?
          </Text>
        </View>
      </ModalPopup>
    </View>
  );
};

export default ProfilePost;
