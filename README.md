### Recipe & meal planning app implemented with React Native
Backend can be found [here](https://github.com/edwilson543/reciply-backend)

<div style="display: flex;">
    <img src="./examples/login-example.png" height="497" width="237">
    <img src="./examples/recipe-example.png" height="497" width="237">
    <img src="./examples/menu-example.png" height="497" width="237">
</div>


### Setup

[React Native setup docs](https://reactnative.dev/docs/environment-setup)

#### System requirements
- node 18.16
- ruby >= 2.6.10
- cocoapods >= 1.12
- watchman


#### Installation
```bash
cd reciplyMobile
npm install
```

iOS:
```bash
cd reciplyMobile/ios
pod install
```

#### Run on iOS simulator
First, run the backend then:
```bash
npx react-native run-ios --simulator="iPhoneSE"
```
