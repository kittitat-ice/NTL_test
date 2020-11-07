import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {increment, decrement} from '../redux/actions';
import {connect} from 'react-redux';

const Home = (props) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f55',
            paddingHorizontal: 10,
            borderRadius: 5,
            width: 30,
          }}
          onPress={() => {
            props.decrement();
          }}>
          <Text style={{fontSize: 16, color: '#fff'}}>-</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 20}}>{props.count}</Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#5a5',
            paddingHorizontal: 10,
            borderRadius: 5,
            width: 30,
          }}
          onPress={() => {
            props.increment();
          }}>
          <Text style={{fontSize: 16, color: '#fff'}}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#37f',
          paddingHorizontal: 15,
          paddingVertical: 3,
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={() => props.navigation.navigate('SetCount')}>
        <Text style={{fontSize: 20, color: '#fff'}}>Go To SetCount</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  count: state.main.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
