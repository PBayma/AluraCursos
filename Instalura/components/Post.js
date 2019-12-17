import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


const width = Dimensions.get('screen').width;

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../assets/img/s2-check.png') :
            require('../assets/img/s2.png')
    }

    like() {

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }

        this.setState({foto: fotoAtualizada})
    }

    render() {

        const { foto } = this.state;

        return (
            <View key={foto.id}>

                <View style={styles.profileBox}>
                    <Image source={{ uri: foto.urlPerfil }} style={styles.profileImg} />
                    <Text style={{ marginLeft: 5 }}>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={{ width: width, height: width }} />

                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image source = {this.carregaIcone(foto.likeada)} style = {styles.botaoCurtir} />
                    </TouchableOpacity>
                </View>
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

    botaoCurtir: {
        height: 40,
        width: 40,
    },

    rodape: {
        margin: 10,
    },
}
)

export default Post;