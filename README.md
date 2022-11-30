Steps taken:
```
npx react-native init babylonwin3 --template react-native@^0.69
cd babylonwin3
npx react-native-windows-init --overwrite
npx react-native run-windows
yarn add @babylonjs/core @babylonjs/react-native @babylonjs/react-native-windows-0-65 react-native-permissions
<retarget solution to match windows SDK versions>
<edit node_modules\react-native-windows\Microsoft.ReactNative\Utils\Helpers.h -> remove "typename" on line 21 (already fixed in react-native-windows, but not released)>
<turn off webdebugging in App.cpp>
npx react-native run-windows --logging [--release]
```
