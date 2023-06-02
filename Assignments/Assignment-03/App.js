import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Create a Top Tab Bar navigator
const TopTab = createMaterialTopTabNavigator();
// Create a Stack navigator
const Stack = createStackNavigator();
// Create a drawer navigator
const Drawer = createDrawerNavigator();

function SigninScreen({ navigation }) {
  return (
    <View style={[styles.container, { overflow: "hidden" }]}>
      <Text style={styles.mainHeading}>SignIn</Text>
      <TextInput
        style={styles.inputFields}
        placeholder="Enter Your UserName"
      ></TextInput>
      <TextInput
        style={styles.inputFields}
        placeholder="Enter Your Password"
      ></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.signinbtn}>SignIn</Text>
      </TouchableOpacity>

      <Text style={styles.backDesign}></Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <Drawer.Navigator initialRouteName="DrawerHome">
      <Drawer.Screen
        name="DrawerHome"
        component={DrawerHomeScreen}
        options={{
          title: "All in One",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#a89bce" },
        }}
      />
      <Drawer.Screen
        name="Facebook"
        component={FacebookScreen}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#3b5998" },
        }}
      />
      <Drawer.Screen
        name="Whatsapp"
        component={WhatsappScreen}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#075e54" },
        }}
      />
      <Drawer.Screen
        name="Twitter"
        component={TwitterScreen}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#00acee" },
        }}
      />
    </Drawer.Navigator>
  );
}

function DrawerHomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { overflow: "hidden" }]}>
      <Text style={styles.homeText}>Connecting Your Cats, Dogs</Text>
      <Text style={styles.homeText}>and Online Friends</Text>
      <Text style={styles.homeText}>All in One App!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Text
          style={{
            backgroundColor: "#a89bce",
            padding: "8px",
            width: "100px",
            textAlign: "center",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
      <Text style={styles.backDesign}></Text>
    </View>
  );
}

/* FACEBOOK */
function FacebookScreen() {
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: { color: "#fff" },
        tabBarStyle: { backgroundColor: "rgba(59,89,152,0.5)" },
      }}
    >
      <TopTab.Screen name="Home" component={FacebookHome}></TopTab.Screen>
      <TopTab.Screen name="Friends" component={FacebookFriends}></TopTab.Screen>
      <TopTab.Screen name="Profile" component={FacebookProfile}></TopTab.Screen>
    </TopTab.Navigator>
  );
}

/* FACEBOOK Tab Screens*/
function FacebookHome() {
  return (
    <ScrollView style={{ margin: "20px" }}>
      <Image
        style={{ width: 40, height: 40 }}
        source={require("./assets/images/fbProfile.png")}
      ></Image>
      <TextInput
        style={styles.whatOnMind}
        placeholderTextColor="grey"
        placeholder="What's on your mind?"
      ></TextInput>
      <Image
        style={{ width: 40, height: 40, position: "absolute", right: "10px" }}
        source={require("./assets/images/image.png")}
      ></Image>
      <Text style={styles.hr}></Text>

      <View style={{ marginTop: "15px" }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "70px" }}>Healer</Text>
        <Text style={{ position: "absolute", left: "70px", top: "20px" }}>
          1 sec ago
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "32px",
            top: "-12px",
            fontSize: "30px",
          }}
        >
          ...
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            fontSize: "20px",
          }}
        >
          X
        </Text>
        <Text style={{ marginTop: "10px" }}>#LumberOneMeme </Text>
        <Image
          style={{ width: "100%", height: "500px", marginTop: "10px" }}
          source={require("./assets/images/post4.jpg")}
        ></Image>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "#a89bce",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Comment
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: "15px" }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "70px" }}>Rocky</Text>
        <Text style={{ position: "absolute", left: "70px", top: "20px" }}>
          5 sec ago
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "32px",
            top: "-12px",
            fontSize: "30px",
          }}
        >
          ...
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            fontSize: "20px",
          }}
        >
          X
        </Text>
        <Text style={{ marginTop: "10px" }}>#MotivationalQuote</Text>
        <Image
          style={{ width: "100%", height: "370px", marginTop: "10px" }}
          source={require("./assets/images/post.jpg")}
        ></Image>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "#a89bce",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Comment
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: "15px" }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "70px" }}>Aladdin</Text>
        <Text style={{ position: "absolute", left: "70px", top: "20px" }}>
          1 min ago
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "32px",
            top: "-12px",
            fontSize: "30px",
          }}
        >
          ...
        </Text>
        <Text
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            fontSize: "20px",
          }}
        >
          X
        </Text>
        <Text style={{ marginTop: "10px" }}>#MotivationalQuote </Text>
        <Image
          style={{ width: "100%", height: "370px", marginTop: "10px" }}
          source={require("./assets/images/post2.jpg")}
        ></Image>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderWidth: 1,
            backgroundColor: "#a89bce",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Comment
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "150px",
              textAlign: "center",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function FacebookFriends() {
  return (
    <ScrollView style={{ margin: "20px" }}>
      <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
        Friends Requests <Text style={{ color: "red" }}>26</Text>
      </Text>
      <Text
        style={{
          position: "absolute",
          right: "10px",
          color: "blue",
          fontSize: "15px",
        }}
      >
        see all
      </Text>
      <View style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "80px", height: "80px" }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "90px",
            top: "2px",
            fontSize: "18px",
          }}
        >
          Usama Mansoor
        </Text>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "90px",
            top: "30px",
          }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "107px",
            top: "30px",
          }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "140px", top: "30px" }}>
          100 mutual friends
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            left: "100px",
            top: "60px",
            marginTop: "2px",
          }}
        >
          <Text
            style={{
              width: "80px",
              backgroundColor: "#a89bce",
              padding: "5px",
              textAlign: "center",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Confirm
          </Text>
          <Text
            style={{
              width: "80px",
              backgroundColor: "lightgrey",
              padding: "5px",
              marginLeft: "10px",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>
      {/* 2nd Request */}
      <View style={{ marginTop: "25px" }}>
        <Image
          style={{ width: "80px", height: "80px" }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "90px",
            top: "2px",
            fontSize: "18px",
          }}
        >
          Ali Minhas
        </Text>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "90px",
            top: "30px",
          }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "107px",
            top: "30px",
          }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "140px", top: "30px" }}>
          70 mutual friends
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            left: "100px",
            top: "60px",
            marginTop: "2px",
          }}
        >
          <Text
            style={{
              width: "80px",
              backgroundColor: "#a89bce",
              padding: "5px",
              textAlign: "center",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Confirm
          </Text>
          <Text
            style={{
              width: "80px",
              backgroundColor: "lightgrey",
              padding: "5px",
              marginLeft: "10px",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
      </View>

      {/* 3rd Request */}
      <View style={{ marginTop: "25px" }}>
        <Image
          style={{ width: "80px", height: "80px" }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "90px",
            top: "2px",
            fontSize: "18px",
          }}
        >
          Aamir Habib
        </Text>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "90px",
            top: "30px",
          }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Image
          style={{
            width: "25px",
            height: "25px",
            position: "absolute",
            left: "107px",
            top: "30px",
          }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Text style={{ position: "absolute", left: "140px", top: "30px" }}>
          70 mutual friends
        </Text>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            position: "absolute",
            left: "100px",
            top: "60px",
            marginTop: "2px",
          }}
        >
          <Text
            style={{
              width: "80px",
              backgroundColor: "#a89bce",
              padding: "5px",
              textAlign: "center",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            Confirm
          </Text>
          <Text
            style={{
              width: "80px",
              backgroundColor: "lightgrey",
              padding: "5px",
              marginLeft: "10px",
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            Delete
          </Text>
        </TouchableOpacity>
        {/* 4th Request */}
        <View style={{ marginTop: "25px" }}>
          <Image
            style={{ width: "80px", height: "80px" }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Text
            style={{
              position: "absolute",
              left: "90px",
              top: "2px",
              fontSize: "18px",
            }}
          >
            Alyaan Amir
          </Text>
          <Image
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              left: "90px",
              top: "30px",
            }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Image
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              left: "107px",
              top: "30px",
            }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Text style={{ position: "absolute", left: "140px", top: "30px" }}>
            70 mutual friends
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              position: "absolute",
              left: "100px",
              top: "60px",
              marginTop: "2px",
            }}
          >
            <Text
              style={{
                width: "80px",
                backgroundColor: "#a89bce",
                padding: "5px",
                textAlign: "center",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Confirm
            </Text>
            <Text
              style={{
                width: "80px",
                backgroundColor: "lightgrey",
                padding: "5px",
                marginLeft: "10px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
        {/* 5th Request */}
        <View style={{ marginTop: "25px" }}>
          <Image
            style={{ width: "80px", height: "80px" }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Text
            style={{
              position: "absolute",
              left: "90px",
              top: "2px",
              fontSize: "18px",
            }}
          >
            Ali Khattak
          </Text>
          <Image
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              left: "90px",
              top: "30px",
            }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Image
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              left: "107px",
              top: "30px",
            }}
            source={require("./assets/images/user2.png")}
          ></Image>
          <Text style={{ position: "absolute", left: "140px", top: "30px" }}>
            70 mutual friends
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: "row",
              position: "absolute",
              left: "100px",
              top: "60px",
              marginTop: "2px",
            }}
          >
            <Text
              style={{
                width: "80px",
                backgroundColor: "#a89bce",
                padding: "5px",
                textAlign: "center",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Confirm
            </Text>
            <Text
              style={{
                width: "80px",
                backgroundColor: "lightgrey",
                padding: "5px",
                marginLeft: "10px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function FacebookProfile() {
  return (
    <ScrollView>
      <Image
        style={{ width: "100%", height: "200px" }}
        source={require("./assets/images/background.jpg")}
      ></Image>
      <Image
        style={{
          width: "170px",
          height: "170px",
          position: "absolute",
          top: "80px",
          left: "20px",
        }}
        source={require("./assets/images/fbProfile.png")}
      ></Image>
      <Text
        style={{
          position: "absolute",
          top: "260px",
          left: "30px",
          fontSize: "23px",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        Mr Healer
      </Text>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: "290px",
          left: "30px",
          flex: 1,
          flexDirection: "row",
          marginTop: "10px",
        }}
      >
        <Text
          style={{
            width: "110px",
            backgroundColor: "#a89bce",
            color: "#fff",
            textAlign: "center",
            padding: "5px",
          }}
        >
          + Add Profile
        </Text>
        <Text
          style={{
            width: "110px",
            backgroundColor: "lightgrey",
            marginLeft: "15px",
            textAlign: "center",
            padding: "5px",
          }}
        >
          Edit Profile
        </Text>
        <Text
          style={{
            width: "50px",
            backgroundColor: "lightgrey",
            marginLeft: "15px",
            textAlign: "center",
            padding: "5px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          ...
        </Text>
      </TouchableOpacity>
      <Text style={[styles.hr, { top: "335px", position: "absolute" }]}></Text>
      {/* Profile Picture Update */}
      <Image
        style={{
          width: "60px",
          height: "60px",
          position: "absolute",
          top: "370px",
          left: "20px",
        }}
        source={require("./assets/images/fbProfile.png")}
      ></Image>
      <Text
        style={{
          position: "absolute",
          top: "370px",
          left: "90px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Mr Healer
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "372px",
          left: "180px",
          fontSize: "15px",
        }}
      >
        updated his picture
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "396px",
          left: "90px",
          fontSize: "12px",
          color: "grey",
        }}
      >
        Feb 4, 2022
      </Text>
      <Text
        style={{
          position: "absolute",
          top: "440px",
          left: "20px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Don't Forget to Smile
      </Text>
      <Image
        style={{
          width: "100%",
          height: "300px",
          position: "absolute",
          top: "466px",
          left: "1px",
        }}
        source={require("./assets/images/fbProfile.png")}
      ></Image>
    </ScrollView>
  );
}

/* WHATSAPP  Main Screen*/
function WhatsappScreen() {
  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: { color: "#fff" },
        tabBarStyle: { backgroundColor: "rgba(7,94,84,0.5)" },
      }}
    >
      <TopTab.Screen name="Chats" component={ChatScreen}></TopTab.Screen>
      <TopTab.Screen name="Status" component={StatusScreen}></TopTab.Screen>
    </TopTab.Navigator>
  );
}

/* WHATSAPP Bottom tab Screens */
function ChatScreen() {
  return (
    <ScrollView style={{ marginTop: "10px", marginLeft: "10px" }}>
      {/* Chat 1 */}
      <TouchableOpacity>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/whatsappChat1.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Healer
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          9:00 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Ye barhya tha guru.
        </Text>
      </TouchableOpacity>

      {/* Chat 2 */}
      <TouchableOpacity style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/fbProfile.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Aladdin
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          8:00 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Sorry...I don't have
        </Text>
      </TouchableOpacity>

      {/* Chat 3 */}
      <TouchableOpacity style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/whatsappChat2.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Eman
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          7:00 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Can you do that for me??
        </Text>
      </TouchableOpacity>

      {/* Chat 4 */}
      <TouchableOpacity style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Rolex
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          6:59 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Okay I'll be there.
        </Text>
      </TouchableOpacity>

      {/* Chat 5 */}
      <TouchableOpacity style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Rocky
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          6:00 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Ja pooch k a.
        </Text>
      </TouchableOpacity>

      {/* Chat 6 */}
      <TouchableOpacity style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          DJ
        </Text>
        <Text style={{ position: "absolute", right: "10px", top: "6px" }}>
          5:30 PM
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Kam se kam 30 saal ka time to dena.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function StatusScreen() {
  return (
    <ScrollView style={{ margin: "10px" }}>
      <TouchableOpacity>
        <Image
          style={{ width: "55px", height: "55px", borderRadius: "100%" }}
          source={require("./assets/images/whatsappChat1.jpg")}
        ></Image>
        <Text
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "green",
            color: "#fff",
            textAlign: "center",
            borderRadius: "100%",
            fontWeight: "bold",
            position: "absolute",
            left: "35px",
            top: "35px",
          }}
        >
          +
        </Text>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "25px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Healer
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "38px" }}>
          Tap to add status update
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: "15px", marginTop: "14px", color: "#a89bce" }}>
        Recent updates
      </Text>
      {/* First Status */}
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "green",
          }}
          source={require("./assets/images/user.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Aladdin
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Today, 12:41 PM
        </Text>
      </TouchableOpacity>

      {/* Second Status */}
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "green",
          }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Rolex
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Today, 8:59 AM
        </Text>
      </TouchableOpacity>

      {/* Third Status */}
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "green",
          }}
          source={require("./assets/images/user3.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Rocky
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Today, 7:27 AM
        </Text>
      </TouchableOpacity>

      {/* Fourth Status */}
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "green",
          }}
          source={require("./assets/images/whatsappChat2.jpg")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Layla
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Today, 1:50 AM
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: "15px", marginTop: "14px", color: "#a89bce" }}>
        Viewed updates
      </Text>

      {/* Viewed Updates */}
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "grey",
          }}
          source={require("./assets/images/user2.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Minhas
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Today, 10:00 AM
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: "10px" }}>
        <Image
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "100%",
            borderWidth: 4,
            borderColor: "grey",
          }}
          source={require("./assets/images/fbProfile.png")}
        ></Image>
        <Text
          style={{
            position: "absolute",
            left: "70px",
            top: "6px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          Aamir
        </Text>
        <Text style={{ position: "absolute", left: "70px", top: "33px" }}>
          Yesterday, 11:13 PM
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* Twitter Main Screen */
function TwitterScreen() {
  return (
    <TopTab.Navigator
      initialRouteName="TwitterHome"
      screenOptions={{
        tabBarLabelStyle: { color: "#fff" },
        tabBarStyle: { backgroundColor: "rgba(0,172,238,0.5)" },
      }}
    >
      <TopTab.Screen
        name="TwitterHome"
        component={TwitterHomeScreen}
        options={{ title: "Home" }}
      ></TopTab.Screen>
      <TopTab.Screen
        name="TwitterSearch"
        component={TwitterSearchScreen}
        options={{ title: "Search" }}
      ></TopTab.Screen>
    </TopTab.Navigator>
  );
}

function TwitterHomeScreen() {
  return (
    <ScrollView style={{ margin: "10px" }}>
      <TouchableOpacity style={{ margin: "10px" }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("./assets/images/fbProfile.png")}
        ></Image>
      </TouchableOpacity>
      <Text style={{ position: "absolute", left: "55px", top: "9px" }}>
        AndrewTate
      </Text>
      <Text
        style={{
          position: "absolute",
          left: "135px",
          top: "12px",
          fontSize: "12px",
        }}
      >
        @tate . 1d
      </Text>
      <Text
        style={{
          position: "absolute",
          left: "55px",
          top: "28px",
          fontSize: "22px",
          fontWeight: "bold",
          fontFamily: "Cormorant",
        }}
      >
        What color is your Bugatti
      </Text>
      <TouchableOpacity>
        <Image
          style={{ width: "100%", height: "300px", marginLeft: "50px" }}
          source={require("./assets/images/bugatti.jpg")}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          borderWidth: 2,
          marginLeft: "50px",
          backgroundColor: "#a89bce",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            padding: "3px",
            borderWidth: 1,
            width: "140px",
            textAlign: "center",
          }}
        >
          Like
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            padding: "3px",
            borderWidth: 1,
            width: "140px",
            textAlign: "center",
          }}
        >
          Retweet
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#fff",
            padding: "3px",
            borderWidth: 1,
            width: "140px",
            textAlign: "center",
          }}
        >
          Share
        </Text>
      </TouchableOpacity>

      {/* 2nd Tweet */}
      <View>
        <TouchableOpacity style={{ margin: "20px" }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: "100%" }}
            source={require("./assets/images/whatsappChat1.jpg")}
          ></Image>
        </TouchableOpacity>
        <Text style={{ position: "absolute", left: "65px", top: "11px" }}>
          RajuBhai
        </Text>
        <Text
          style={{
            position: "absolute",
            left: "135px",
            top: "12px",
            fontSize: "12px",
          }}
        >
          @raju . 2d
        </Text>
        <Text
          style={{
            position: "absolute",
            left: "65px",
            top: "32px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          25 din mein paisa double
        </Text>
        <TouchableOpacity>
          <Image
            style={{ width: "100%", height: "300px", marginLeft: "50px" }}
            source={require("./assets/images/raju.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderWidth: 2,
            marginLeft: "50px",
            backgroundColor: "#a89bce",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Retweet
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>

      {/* 3rd Tweet */}
      <View>
        <TouchableOpacity style={{ margin: "20px" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: "100%" }}
            source={require("./assets/images/user3.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={{ position: "absolute", left: "75px", top: "19px" }}>
          Motivation
        </Text>
        <Text
          style={{
            position: "absolute",
            left: "145px",
            top: "19px",
            fontSize: "12px",
          }}
        >
          @millionare . 2d
        </Text>
        <Text
          style={{
            position: "absolute",
            left: "75px",
            top: "44px",
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Cormorant",
          }}
        >
          #MotivationalQuote
        </Text>
        <TouchableOpacity>
          <Image
            style={{ width: "100%", height: "300px", marginLeft: "50px" }}
            source={require("./assets/images/post2.jpg")}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderWidth: 2,
            marginLeft: "50px",
            backgroundColor: "#a89bce",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Like
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Retweet
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              padding: "3px",
              borderWidth: 1,
              width: "140px",
              textAlign: "center",
            }}
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

/* Twitter Search Screen (Stack) */
function TwitterSearchScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchInitial"
        component={SearchInitialScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="SearchAfter"
        component={SearchAfterScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

/* Twitter Screen */
function SearchInitialScreen({ navigation }) {
  return (
    <ScrollView style={{ marginTop: "10px", marginLeft: "10px" }}>
      <Image
        style={{ width: "45px", height: "45px", borderRadius: "100%" }}
        source={require("./assets/images/whatsappChat1.jpg")}
      ></Image>
      <TextInput
        style={styles.whatOnMind}
        placeholderTextColor="grey"
        placeholder="Search Twitter"
      ></TextInput>
      <TouchableOpacity
        style={{ position: "absolute", right: "52px", top: "5px" }}
        onPress={() => navigation.navigate("SearchAfter")}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/images/search.png")}
        ></Image>
      </TouchableOpacity>
      <Text style={[styles.hr, { backgroundColor: "#00acee" }]}></Text>
      <Text style={{ fontSize: "22px", marginTop: "17px" }}>
        Trends For You
      </Text>
      <View style={{ marginTop: "15px" }}>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          Trending in Pakistan
        </Text>
        <Text style={{ fontSize: "19px", marginTop: "9px" }}>
          #ArmyZindabad
        </Text>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          50.5k Tweets
        </Text>
      </View>
      {/* 2 */}
      <View style={{ marginTop: "15px" }}>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          Entertainment Trending
        </Text>
        <Text style={{ fontSize: "19px", marginTop: "9px" }}>#SpiderMan</Text>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          30k Tweets
        </Text>
      </View>
      {/* 3 */}
      <View style={{ marginTop: "15px" }}>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          Trending in Pakistan
        </Text>
        <Text style={{ fontSize: "19px", marginTop: "9px" }}>
          #PakistanIsBest
        </Text>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          26.1k Tweets
        </Text>
      </View>
      {/* 4 */}
      <View style={{ marginTop: "15px" }}>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          News Trending
        </Text>
        <Text style={{ fontSize: "19px", marginTop: "9px" }}>
          BREAKING NEWS
        </Text>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          200k Tweets
        </Text>
      </View>
      {/* 5 */}
      <View style={{ marginTop: "15px" }}>
        <Text style={{ fontSize: "12px", color: "grey", marginTop: "9px" }}>
          Trending in Pakistan
        </Text>
        <Text style={{ fontSize: "19px", marginTop: "9px" }}>Attock</Text>
        <Text
          style={{
            fontSize: "12px",
            color: "grey",
            marginTop: "9px",
            marginBottom: "20px",
          }}
        >
          20k Tweets
        </Text>
      </View>
    </ScrollView>
  );
}

function SearchAfterScreen({ navigation }) {
  return (
    <ScrollView style={{ marginTop: "15px" }}>
      <TouchableOpacity onPress={() => navigation.navigate("SearchInitial")}>
        <Text
          style={{
            marginLeft: "10px",
            padding: "7px",
            backgroundColor: "#00acee",
            width: "70px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Go Back
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: "15px" }}>
        <Image
          style={{ width: "100%", height: "300px", margin: "10px" }}
          source={require("./assets/images/twitterPost.jpg")}
        ></Image>
        <Image
          style={{ width: "100%", height: "300px", margin: "10px" }}
          source={require("./assets/images/twitterPost2.jpg")}
        ></Image>
        <Image
          style={{ width: "100%", height: "300px", margin: "10px" }}
          source={require("./assets/images/twitterPost3.jpg")}
        ></Image>
        <Image
          style={{ width: "100%", height: "300px", margin: "10px" }}
          source={require("./assets/images/twitterPost4.png")}
        ></Image>
      </View>
    </ScrollView>
  );
}

// App component (MAIN)
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signin"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#a89bce",
            textAlign: "center",
            flex: 1,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Cormorant",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ title: "SignIn" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

/* Styling */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  mainHeading: {
    fontSize: "70px",
    margin: "20px",
    fontWeight: "bold",
    fontFamily: "Cormorant",
  },

  inputFields: {
    margin: "20px",
    width: "70%",
    textAlign: "center",
    borderWidth: 2,
    padding: "12px",
    borderRadius: "20px",
    fontSize: "18px",
  },

  signinbtn: {
    width: "170px",
    textAlign: "center",
    backgroundColor: "#a89bce",
    padding: "10px",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "22px",
    fontFamily: "Cormorant",
  },

  homeText: {
    fontSize: "30px",
    fontFamily: "Cormorant",
    margin: "17px",
    fontWeight: "bold",
    fontStyle: "italic",
  },

  whatOnMind: {
    position: "absolute",
    borderWidth: 1,
    left: "70px",
    top: "4px",
    padding: "6px",
    borderRadius: "20px",
    width: "320px",
  },

  hr: {
    width: "100%",
    backgroundColor: "#a89bce",
    height: "5px",
    marginTop: "9px",
  },

  backDesign: {
    width: "800px",
    height: "300px",
    backgroundColor: "#a89bce",
    position: "absolute",
    zIndex: -1,
    transform: [{ rotate: "17deg" }, { translateX: -30 }, { translateY: -40 }],
    marginBottom: "100px",
    borderRadius: "20px",
    opacity: 0.6,
  },
});
