import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {Navigation} from './navigation';
import {BuyScreen} from '../screens/BuyScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {fontSize: 15},
        tabBarInactiveTintColor: '#EBA3B0',
        tabBarStyle: {backgroundColor: '#CB1427'},
        tabBarActiveBackgroundColor: '#8E0B1D',

        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Movies':
              iconName = 'home-outline';
              break;
            case 'Search':
              iconName = 'search-outline';
              break;
            case 'Buy':
              iconName = 'cart-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Movies" component={Navigation} />

      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Buy" component={BuyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
