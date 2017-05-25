/**
 * React Native Tutorial
 * https://github.com/facebook/react-native
 * @flow
 */
/*
=============
GLOBAL
=============
*/
'use strict';
var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');
/*
=============
COMPONENTS
=============
*/
class HelloWorld extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World</ReactNative.Text>;
  }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

/*
=============
APP REGISTRY
=============
*/
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });

/*
=============
STYLESHEET
=============
*/
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});
