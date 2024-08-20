import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeScreens = () => {
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const toggleText = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  const [iconCount, setIconCount] = useState(66900); // Initialize with 66.9K

  const increaseCount = () => {
    setIconCount((prevCount) => prevCount + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="menu" size={30} color="#474747" />
          <Text style={styles.locationText}>VuDung, VietNam</Text>
          <Ionicons name="notifications" size={24} color="#da2419" />
        </View>
        <ScrollView>
          <View>
            <View style={styles.profileSection}>
              <View style={styles.profileInfo}>
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/icon/avatar.jpg")}
                    style={styles.avatar}
                  />
                  <View style={styles.dotColor}></View>
                </TouchableOpacity>
                <Text style={styles.profileName}>Vũ Dũng</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="black"
              />
            </View>
            <View>
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: 10,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/post/1.jpg")}
                    style={styles.postImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.actionIconsSection}>
                <View style={styles.actionIcons}>
                  <TouchableOpacity onPress={increaseCount}>
                    <AntDesign name="hearto" size={24} color="#5d5d5d" />
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "bold" }}>
                    {iconCount.toLocaleString()}
                  </Text>
                  <Image
                    source={require("../../assets/images/icon/2.png")}
                    style={styles.icon}
                  />
                  <Text style={{ fontWeight: "bold" }}>209</Text>
                  <Image
                    source={require("../../assets/images/icon/3.png")}
                    style={styles.icon}
                  />
                  <Text style={{ fontWeight: "bold" }}>3.015</Text>
                </View>
                <View style={styles.shareIcon}>
                  <Fontisto name="favorite" size={24} color="#da2419" />
                </View>
              </View>
            </View>
            <View style={styles.postDetails}>
              <Text style={styles.textTitle}>
                {isTextExpanded
                  ? "When you try a little too hard to pose for the camera..."
                  : "When you try a little too hard to pose..."}
                <Text style={styles.addPlus} onPress={toggleText}>
                  {isTextExpanded ? "Thu gọn" : " Xem thêm"}
                </Text>
              </Text>
              <Text style={styles.allCommentCss}>Xem tất cả bình luận</Text>
              <Text style={styles.allCommentCss}>23 tháng 5</Text>
            </View>
            <View>
              <Text style={styles.cssPath}></Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
  safeArea: {
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  locationText: {
    fontSize: 15,
    color: "#474747",
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 50,
  },
  dotColor: {
    backgroundColor: "#00E53D",
    borderRadius: 50,
    height: 10,
    width: 10,
    position: "absolute",
    bottom: 1,
    right: 1,
  },
  profileName: {
    fontSize: 15,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  actionIconsSection: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  actionIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  shareIcon: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  postDetails: {
    gap: 10,
    paddingVertical: 5,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  allCommentCss: { fontSize: 15, color: "#A1A1A1" },
  textTitle: { fontSize: 15, color: "#5E5E5E" },
  addPlus: { fontWeight: "bold" },
  cssPath: {
    backgroundColor: "#bdbdbd",
    height: 0.5,
    marginVertical: 10,
  },
});

export default HomeScreens;
