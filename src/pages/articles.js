import React, { Component } from 'react';
import { Alert, BackHandler, ListView, Platform, StyleSheet, Text, View } from 'react-native';

// Components
import NavBar from '@app/components/navbar';
import ArticleList from '@app/components/article/article-list';

// Utils
import HandleBackBtnPress from '@app/utils/handle-back-btn-press';

// Styles
import { AppColors, AppSizes } from '@app/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.background,
    paddingTop: AppSizes.navbarHeight + AppSizes.statusBarHeight,
    marginBottom: Platform.OS == 'ios' ? AppSizes.navbarHeight : 0
  }
});

class Articles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', HandleBackBtnPress.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', HandleBackBtnPress.bind(this));
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar leftOn={true}
                title={this.props.title}
                onLeftPress={ () => {
                  Platform.OS === 'android' && this.props.openMenu();
                }}/>
          <ArticleList navigator={this.props.navigator} />
      </View>
    )
  }
}

export default Articles;
