import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging10039Navigator from '../features/Messaging10039/navigator';
import EmailAuth10038Navigator from '../features/EmailAuth10038/navigator';
import CalendarView10037Navigator from '../features/CalendarView10037/navigator';
import CalendarView410036Navigator from '../features/CalendarView410036/navigator';
import BlankScreen510035Navigator from '../features/BlankScreen510035/navigator';
import BlankScreen110020Navigator from '../features/BlankScreen110020/navigator';
import BlankScreen210019Navigator from '../features/BlankScreen210019/navigator';
import BlankScreen210016Navigator from '../features/BlankScreen210016/navigator';
import CopyOfBlankScreen010015Navigator from '../features/CopyOfBlankScreen010015/navigator';
import BlankScreen010014Navigator from '../features/BlankScreen010014/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging10039: { screen: Messaging10039Navigator },
EmailAuth10038: { screen: EmailAuth10038Navigator },
CalendarView10037: { screen: CalendarView10037Navigator },
CalendarView410036: { screen: CalendarView410036Navigator },
BlankScreen510035: { screen: BlankScreen510035Navigator },
BlankScreen110020: { screen: BlankScreen110020Navigator },
BlankScreen210019: { screen: BlankScreen210019Navigator },
BlankScreen210016: { screen: BlankScreen210016Navigator },
CopyOfBlankScreen010015: { screen: CopyOfBlankScreen010015Navigator },
BlankScreen010014: { screen: BlankScreen010014Navigator },

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
