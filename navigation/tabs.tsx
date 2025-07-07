import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProduct from "screens/addProduct";
import Cart from "screens/cart";
import Home from "screens/home";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#121212",tabBarStyle: { backgroundColor: "transparent",borderColor:"transparent"} }}>
            <Tab.Screen name="Swiplet" component={Home}  options={{ tabBarLabelPosition: 'below-icon',tabBarIcon:(focused)=> <MaterialCommunityIcons name="cards" size={24} color={focused ?"#121212" :"#dddddd"} />}} />
            <Tab.Screen name="AddProduct" component={AddProduct} options={{ tabBarLabelPosition: 'below-icon',tabBarIcon:(focused)=> <MaterialCommunityIcons name="plus" size={24} color={focused ?"#121212" :"#dddddd"} />}} />
            <Tab.Screen name="Cart" component={Cart} options={{tabBarLabelPosition: 'below-icon',tabBarIcon:(focused)=> <MaterialCommunityIcons name="cart" size={24} color={focused ?"#121212" :"#dddddd"} />}} />
        </Tab.Navigator>
    );
}

export default TabNavigation;