import React from 'react';
import {useState} from 'react';

import {View} from 'react-native';

import IngredientsTab from './IngredientsTab';
import NutritionTab from './NutritionTab';
import TabLabel from './TabLabel';
import {bootstrap} from '../../../../components/styled';

enum Tab {
  Ingredients = 'Ingredients',
  Nutrition = 'Nutrition',
}

export default function TabContainer({}) {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Ingredients);

  const onTabPress = (tab: Tab): void => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };

  return (
    <View style={[bootstrap.my1]}>
      <View style={[bootstrap.flexRow]}>
        <TabLabel
          label={Tab.Ingredients}
          isActive={activeTab === Tab.Ingredients}
          onPress={() => onTabPress(Tab.Ingredients)}
        />
        <TabLabel
          label={Tab.Nutrition}
          isActive={activeTab === Tab.Nutrition}
          onPress={() => onTabPress(Tab.Nutrition)}
        />
      </View>
      {activeTab === Tab.Ingredients && <IngredientsTab />}
      {activeTab === Tab.Nutrition && <NutritionTab />}
    </View>
  );
}
