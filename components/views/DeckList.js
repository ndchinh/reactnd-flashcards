import React, { Component } from 'react'
import { connect } from 'react-redux'
import CalendarStrip from 'react-native-calendar-strip'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, List, ListItem, Card, CardItem, Left, Body, Right, H1, H2, H3, Button, Icon } from 'native-base'
import { tealA700, teal900, teal800, background, primary, secondary } from '../../utils/colors'
import TopBar from '../shared/TopBar'
import DeckItem from '../shared/DeckItem'
import FooterNavigation from '../shared/Navigation'

class DeckList extends Component {
  render() {
    const { decks, cards } = this.props

    return (
      <Container style={{backgroundColor: 'white'}}>
        <TopBar headerTitle={"Decks"} headerColor={tealA700}/>
        <Content>
          <CalendarStrip showMonth={false}/>
          <List
            dataArray={decks}
            renderRow={(deck) =>
              <DeckItem deck={deck} />
            }
          >
          </List>
        </Content>
        {/* <FooterNavigation /> */}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  card: {

  }
})

function mapStateToProps(state) {
  return { decks: state.decks }
}

export default connect(mapStateToProps)(DeckList)