import { useState } from "react";
import Clock from "./components/Clock";
import { Button, StyleSheet, View, StatusBar } from 'react-native';

const App = () => {
    const [on, setOn] = useState(false);

    const toggleClock = () => {
        setOn(!on);
    };

    return (
        <View style={styles.container}>
            {on && <Clock />}
            <Button
                title={`Turn clock ${on ? 'off' : 'on'}`}
                onPress={toggleClock}
            />
            <StatusBar style="dark" />
        </View>
    );
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;