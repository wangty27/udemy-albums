import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerTextStyle, headerThumbnailStyle, thumbnailImageStyle, headerContentStyle, artworkImageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerThumbnailStyle}>
          <Image style={thumbnailImageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={artworkImageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerThumbnailStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailImageStyle: {
    height: 50,
    width: 50
  },
  headerTextStyle: {
    fontSize: 18
  },
  artworkImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
