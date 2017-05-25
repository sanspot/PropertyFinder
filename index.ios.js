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

/*
=============
APP
=============
*/
class PropertyFinderApp extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hello World (Again)</ReactNative.Text>;
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
  }
});
