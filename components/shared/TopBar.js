import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar } from 'react-native'
import { Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, TabHeading } from 'native-base'
import { teal500 } from '../../utils/colors'
import UserNav from './UserNav'
import { TabbedNav } from './Navigation'
import DeckList from '../views/DeckList'
import CardList from '../views/CardList'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

class TopBar extends Component {
  render() {
    const { headerTitle, headerColor } = this.props
    let hColor = headerColor === null ? 'teal500' : headerColor

    return (
      <View>
        <AppStatusBar backgroundColor={hColor} barStyle='light-content' /> 
        <Header hasTabs style={{backgroundColor: hColor}}>
          <Left>
            <Button transparent>
              { Platform === 'ios'
                ? <Icon name='ios-menu' />
                : <Icon name='menu' />
              }
            </Button>
          </Left>
          <Body>
            <Title>{headerTitle}</Title>
          </Body>
          <Right>
            <UserNav />
          </Right>
        </Header>
        {/* <TabbedNav /> */}
        {/* <Tabs>
          <Tab heading={
            <TabHeading><Text>Decks</Text></TabHeading>
          }>
            <DeckList />
          </Tab>
          <Tab heading={
            <TabHeading><Text>Cards</Text></TabHeading>
          }>
            <CardList />
          </Tab>
        </Tabs> */}
      </View>
    )
  }
}

export default connect()(TopBar)