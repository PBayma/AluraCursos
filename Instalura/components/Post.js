import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView,
    FlatList,
} from 'react-native';


const width = Dimensions.get('screen').width;

class Post extends Component {
    render() {
        return (
            <View key={this.props.foto.id}>
                <View style={styles.profileBox}>
                    <Image source={require('../assets/img/pic.png')} style={ styles.profileImg } />
                    <Text style={{ marginLeft: 5 }}>{this.props.foto.usuario}</Text>
                </View>
                <Image source={require('../assets/img/pic.png')} style={{ width: width, height: width }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    profileImg: {
        width: 30,
        height: 30,
        borderRadius: 20,
    },

    profileBox: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        alignItems: "center"

    },
}
)

export default Post;