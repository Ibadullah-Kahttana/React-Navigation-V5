//==================  STACK Navigator code ============================================

<Stack.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: '#009387'},
    headerTintColor: '#fff',
    headerTitleStyke: {
      fontWeight: 'bold',
    },
  }}>
  {/* On single screen container if you want to Apply style , we use options={{ Styles in here}} in navigation */}

  <Stack.Screen
    name="RootScreen"
    component={RootScreen}
    options={{title: 'Root Screen'}}
  />
  <Stack.Screen
    name="Task1"
    component={Task1UI}
    options={{title: 'Task 1 Screen'}}
  />
  <Stack.Screen
    name="HomeScreen"
    component={HomeScreen}
    options={{title: 'T2 Home Screen'}}
  />
  <Stack.Screen
    name="ListScreen"
    component={ListScreen}
    options={{title: 'T2 List Screen'}}
  />

  <Stack.Screen
    name="ProfileScreen"
    component={ProfileScreen}
    options={{title: 'T2 Profile Screen'}}
  />
</Stack.Navigator>;
