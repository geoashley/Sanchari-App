import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TripItem from '../components/TripItem';
import PropTypes from 'prop-types';

const createList = (sections) => {
  let list = []

  for (var value of sections) {
    for(var trip of value.trips){
      list.push(<TripItem
        key={trip.id}
        id={trip.id}
        title={trip.name}
        author={trip.author}
        thumbnail={trip.thumbnail}
      />);
    
    }
  }
  return list;
}
const mockDataTrips = [
  {title: 'upcoming',
  trips: [
    {
      id: '1',
      name: 'Mountain Trip',
      author: 'Author-1',
      thumbnail: 'https://images.unsplash.com/photo-1535486509975-18366f9825df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ea59f63a657824d02872bb907fe85e76&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      name: 'Title-2',
      author: 'Author-2',
      thumbnail: 'https://images.unsplash.com/photo-1535540707939-6b4813adb681?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce3177d04728f7d1811e342b47d1e391&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'Title-3',
      author: 'Author-3',
      thumbnail: 'https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebe64b284c0ccffbac6a0d7ce2c8d15a&auto=format&fit=crop&w=500&q=60',
    }],
  },
  {title: 'past',
  trips: [
    {
      id: '4',
      name: 'Title-4',
      author: 'Author-4',
      thumbnail: 'https://images.unsplash.com/photo-1535531298052-7457bcdae809?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f15acb2aedb30131bb287589399185a2&auto=format&fit=crop&w=500&q=60.',
    },
    {
      id: '5',
      name: 'Title-5',
      author: 'Author-5',
      thumbnail: 'https://images.unsplash.com/photo-1535546204504-586398ee6677?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7320b162b147a94d4c41377d9035e665&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      name: 'Title-6',
      author: 'Author-6',
      thumbnail: 'https://images.unsplash.com/photo-1535565454739-863432ea3c0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7edfb9bc7d214dbf2c920723cb0ffce2&auto=format&fit=crop&w=500&q=60',
    }
  ]
}
];
export default class Trips extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    if(props.data){
      this.state = { data: props.data };

    }else{
      this.state = { data: mockDataTrips};

    }
  }
  render() {
    return (
    <ScrollView>
      <SafeAreaView >
        {createList(this.state.data)}
     </SafeAreaView>
    </ScrollView>

    );
  }
}

Trips.propTypes = {
  data: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 32,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});