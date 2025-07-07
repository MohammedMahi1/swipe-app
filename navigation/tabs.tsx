import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "screens/addProduct";
import Home from "screens/home";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddProduct" component={AddProduct} />
    </Tab.Navigator>
  );
}

export default TabNavigation;