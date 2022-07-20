import {
  createNavigationContainerRef,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const resetNavigation = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: name, params}],
      }),
    );
  }
};

export const openDrawer = () => {
  navigationRef.dispatch(DrawerActions.openDrawer());
};

export const closeDrawer = () => {
  navigationRef.dispatch(DrawerActions.closeDrawer());
};
