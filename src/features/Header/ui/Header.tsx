import React, {ReactElement, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ImageStyle,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import {BasicStyle, IUser, RootState} from './../../../types';
import {useAppDispatch} from './../../../hooks';
import {fetchUser} from '../state/user.thunk';
import {connect} from 'react-redux';

interface IHeaderProps {
  user: IUser;
}

function HeaderComponent({user}: IHeaderProps): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser('jsmith'));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={{
          uri: user['profile-image'],
        }}>
        <View style={styles.userWrapper}>
          <Text style={styles.text}>{user.nick}</Text>
          <Image
            style={styles.image}
            source={{
              width: 64,
              height: 64,
              uri: user.avatar,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const mapStateToProps = (state: RootState) =>
  ({
    user: state.user.data,
  } as IHeaderProps);

export const Header = connect(mapStateToProps)(HeaderComponent);

interface AdditionalStyles {
  backgroundImage: ImageStyle;
  userWrapper: ViewStyle;
}

const styles: Partial<BasicStyle> & AdditionalStyles = StyleSheet.create<
  Partial<BasicStyle> & AdditionalStyles
>({
  container: {
    height: 230,
    backgroundColor: 'white',
  },
  image: {
    marginBottom: -24,
    marginRight: 24,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 20,
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  userWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
