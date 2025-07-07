import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProductBtn from "components/ui/AddProductBtn";
import AddProduct from "screens/addProduct";
import Cart from "screens/cart";
import Home from "screens/home";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#121212", tabBarStyle: { backgroundColor: "transparent", borderColor: "transparent" } }}>
            <Tab.Screen name="Swiplet" component={Home} options={{ tabBarIcon: (focused) => <MaterialCommunityIcons name="cards" size={24} color={focused ? "#121212" : "#ccc"} /> }} />
            <Tab.Screen name="AddProduct" component={AddProduct} options={
                ({ navigation }) => ({
                    tabBarLabel:"",
                    tabBarIcon: (props) => (
                        <AddProductBtn onPress={() => navigation.navigate("AddProduct")}
                            {...props} />
                    ),
                })
            } />
            <Tab.Screen name="Cart" component={Cart} options={{ tabBarIcon: (focused) => <MaterialCommunityIcons name="cart" size={24} color={focused ? "#121212" : "#ccc"} /> }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;