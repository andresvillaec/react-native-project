import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

export class DeckItem extends Component {
  render() {
    // console.log(this.props)
    const {route} = this.props
    const {params} = route
    const {title} = params

    return (
      <View>
        <Text> {title} </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps)(DeckItem)
