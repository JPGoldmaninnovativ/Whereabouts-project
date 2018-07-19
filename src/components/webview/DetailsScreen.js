
import React, { Component } from 'react';
import { Platform, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import InfoData from '../../../data/InfoData';

class DataListItem extends Component {
    render() {          
        return (        
            <View style={{
                flex: 1,
                flexDirection:'column',  
                windowSize:30                              
            }}>            
                <View style={{
                        flex: 2,
                        flexDirection:'row',
                        backgroundColor: this.props.index % 2 == 0 ? 'rgba(0,128,0, .2)' : 'rgb(192,192,192)',
                        // backgroundColor: 'rgba(176,224,230, 1)',
                        //size: 'relative',

                }}>            
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    >
                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.datAListItem}>{this.props.item.name}</Text>
                            <Text style={styles.dataListItem}>{this.props.item.Description}</Text>
                    </View>              
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    dataListItem: {
        color: 'rgba(0,0,0, 1)',
        padding: 5,
        fontSize: 14,  
    },
    datAListItem: {
        fontSize: 20,  

    },
   
});

export default class DetailsScreen extends Component {
    render() {
      return (
          
        <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
             <View style={{
                    backgroundColor: 'rgba(138,184,243, 1)',
                    elevation: 3,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 64,
                }}>
                </View>

            <FlatList 
                data={InfoData}
                renderItem={({item, index})=>{
                    console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <DataListItem item={item} index={index}>

                    </DataListItem>);
                }}
                >
            </FlatList>
        </View>
      );
    }
}

