
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Verify from './components/Verify'
import Login from './components/Login'
import MyMainPage from './components/Main'

import CampusScreen from './components/CampusHome'
import Map from './components/Maps';

import FoodHomeScreen from './components/Foods/HomeScreen';
import MealSwipe from './components/Foods/MealSwipe'
import DonateMealScreen from './components/Foods/DonateMeal';
import RegisterMealScreen from './components/Foods/RegisterMeal';


const AppStack = createStackNavigator(
  { 
    Home: { screen: MyMainPage, navigationOptions: { header: null } },
    CampusHome: CampusScreen, 
    MapPage: Map, 
    FoodHome: FoodHomeScreen,
    Meal: MealSwipe,
    Donate: DonateMealScreen,
    Register: RegisterMealScreen 
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#434343',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    }
  }
);

const MainNavigator = createSwitchNavigator(
  {
    AuthLoading: Loading,
    SignIn: Login,
    VerifyScreen: Verify,
    SignUp: SignUp,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const App = createAppContainer(MainNavigator);

export default App;






