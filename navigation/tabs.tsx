import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddProductBtn from "components/ui/AddProductBtn";
import AddProduct from "screens/addProduct";
import Cart from "screens/cart";
import Home from "screens/home";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{

                headerShown: false,
                tabBarActiveTintColor: "#121212", // Color for active tab icon/label
                tabBarInactiveTintColor: '#B4B4B4', // Color for inactive tab icon/label
                tabBarLabelStyle: {
                    fontSize: 16,
                },
                tabBarStyle: {
                    backgroundColor: "transparent",
                    borderColor: "transparent"
                }
            }}>

            <Tab.Screen name="Swiplet" component={Home}
                options={{
                    tabBarIcon: ({color,size}) =>
                        <MaterialCommunityIcons name="cards"
                            size={size}
                            color={color}
                        />
                }} />

            <Tab.Screen name="AddProduct" component={AddProduct} options={
                ({ navigation }) => ({
                    tabBarLabel: "",
                    tabBarIcon: (props) => (
                        <AddProductBtn onPress={() => navigation.navigate("AddProduct")}
                            {...props} />
                    ),
                })
            } />

            <Tab.Screen name="Cart"
                component={Cart} 
                options={{
                    tabBarLabel:"Cart",
                    tabBarIcon: ({color,size}) => {
                        return <MaterialCommunityIcons name={"cart"} size={size} color={color} />;
                    }
                }}
                />

        </Tab.Navigator>
    );
}

export default TabNavigation;