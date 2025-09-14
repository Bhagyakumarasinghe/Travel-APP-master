

import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const staysImg = require("../../../assets/images/model1.jpg");
const foodImg = require("../../../assets/images/food.jpg");
const craftsImg = require("../../../assets/images/crafts.jpg");
const transportImg = require("../../../assets/images/transport.jpg");
const hiddenImg = require("../../../assets/images/waterfall.jpg");

export default function Dashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <Text style={styles.appName}>TravelMate</Text>
        <Text style={styles.welcome}>Welcome, [User Name]</Text>
        <Text style={styles.subtitle}>Personalized Geroring</Text>
      </View>

      {}
      <ScrollView contentContainerStyle={styles.scroll}>
        {}
        <View style={[styles.row, { marginTop: 20 }]}>
          <Card image={staysImg} title="Stays" subtitle="Local guest house, Homestays" />
          <Card image={foodImg} title="Food & Cooking" subtitle="Family Kitchens, Street food tours" />
        </View>

        {}
        <View style={[styles.row, { marginTop: 30 }]}>
          <Card
            image={craftsImg}
            title="Culture & Crafts"
            subtitle="Handcrafts, Art, Dance Lessons"
            wide
            large
          />
        </View>

        {}
        <View style={[styles.row, { marginTop: 30 }]}>
          <Card image={transportImg} title="Transport" subtitle="Local tuk-tuks" />
          <Card image={hiddenImg} title="Hidden Spots" subtitle="Secret waterfalls, temples" />
        </View>
      </ScrollView>

      {}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


function Card({ image, title, subtitle, wide, large }: any) {
  return (
    <TouchableOpacity style={[styles.card, wide && styles.cardWide]}>
      <Image
        source={image}
        style={[
          styles.cardImage,
          wide && styles.cardImageWide,
          large && styles.cardImageLarge, 
        ]}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9faff",
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  welcome: {
    fontSize: 14,
    marginTop: 5,
  },
  subtitle: {
    fontSize: 13,
    marginTop: 5,
    fontStyle: "italic",
  },
  scroll: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    paddingTop: 0, 
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    width: "48%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardWide: {
    width: "100%",
    flexDirection: "row",
  },
  cardImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardImageLarge: {
    height: 75, 
  },
  cardImageWide: {
    width: 120,
    height: "100%",
    borderRadius: 12,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "gray",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#BBDEFB",
  },
});
