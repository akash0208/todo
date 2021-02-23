

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView>

        <View style={{ width: '100%', height: 120, borderWidth: 1 }}>
          <View style={{ flex: 3, backgroundColor: 'red' }}>
            <View style={{ width: 80, height: 80, borderRadius: 200, backgroundColor: 'green', position: 'absolute' }}>

            </View>
          </View>
          <View style={{ flex: 2, backgroundColor: 'blue' }}></View>
        </View>

      </SafeAreaView>
    </>
  );
};

export default App;
