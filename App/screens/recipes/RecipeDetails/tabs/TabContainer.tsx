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

type TabContainerProps = {
  ingredients: Array<string>;
};

export default function TabContainer({ingredients}: TabContainerProps) {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Ingredients);

  const onTabPress = (tab: Tab): void => {
    if (tab === activeTab) {
      return;
    }
    setActiveTab(tab);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case Tab.Ingredients: {
        return <IngredientsTab ingredients={ingredients} />;
      }
      case Tab.Nutrition: {
        return <NutritionTab />;
      }
    }
    return <></>;
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
      {renderActiveTab()}
    </View>
  );
}
