import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113075Navigator from '../features/BlankScreen113075/navigator';
import BlankScreen013074Navigator from '../features/BlankScreen013074/navigator';
import BlankScreen113072Navigator from '../features/BlankScreen113072/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113075: { screen: BlankScreen113075Navigator },
BlankScreen013074: { screen: BlankScreen013074Navigator },
BlankScreen113072: { screen: BlankScreen113072Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
