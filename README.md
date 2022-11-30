npx react-native init babylonwin3 --template react-native@^0.69
cd babylonwin3
npx react-native-windows-init --overwrite
npx react-native run-windows
yarn
<edit node_modules\react-native-windows\Microsoft.ReactNative\Utils\Helpers.h -> remove "typename" on line 21 (already fixed in react-native-windows, but not released)>
<turn off webdebugging in App.cpp>
npx react-native run-windows --logging [--release]