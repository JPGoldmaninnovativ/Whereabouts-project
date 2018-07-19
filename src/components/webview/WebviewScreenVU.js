import React from 'react';
import { StyleSheet, Dimensions, View, WebView } from 'react-native';


const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    fullscreen: {
        width: ScreenWidth,
        height: ScreenHeight,
        backgroundColor: 'rgba(176,224,230, 1)',
    },
});

export default class WebviewScreenVU extends React.Component {
    static navigationsOptions = ({ navigationsOptions }) => {
        return {
            headerStyle: {
                backgroundColor: navigationsOptions.headerTintColor,
            },
            headerTintColor: navigationsOptions.headerStyle.backgroundColor,
        };
    };
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }
    // componentWillUnmount() {
    //     this.timer =  setTimeout(this.isLoading,1000)
    //     timer.clearTimeout(this);
    //   }

    isLoading() {
        console.log('Loading Webview')
    }

    render() {
        const DEFAULT_URL_VU = 'https://www.visitumea.se/';

        return (
            <View style={{ flex: 1 }}>
                <WebView
                    ref='myWebviewVU'
                    source={{ uri: DEFAULT_URL_VU }}
                    onLoad={this.loading}
                    onWebViewMessage={this.onWebViewMessage}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

