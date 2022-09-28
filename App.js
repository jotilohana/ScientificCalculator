import React from 'react';
import { View } from 'react-native';
import Calculator from 'react-native-scientific-calculator';

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Calculator
                showLiveResult={true} 
                scientific={true}
                haptics={false}
                theme="dark"
                customize={{
                  borderRadius: 5,
                  spacing: 6,
                }}
                />
        </View>
    )
}

export default App;