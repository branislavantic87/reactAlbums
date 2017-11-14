import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Dugme';

const Detalji = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    const {thumbnailStyle, headerContentStyle, thumbnailContainerStyle,
         headerTextStyle, containerImage} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                    style ={thumbnailStyle}
                    source = {{uri: thumbnail_image}}
                    />
                </View>
                <View style ={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style = {containerImage} source = {{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>

        </Card>
    )
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width:50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:10,
        marginRight: 10
    },
    containerImage: {
        height: 600,
        flex: 1,
        width: null
    }

};


export default Detalji;