import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { theme } from "../infrastructure/theme";

const SafeArea = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  flex: 1;
  ${StatusBar.currentHeight && `margin-top ${StatusBar.currentHeight}px`}
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  padding: ${(props) => props.theme.space[3]}
  flex: 1;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
