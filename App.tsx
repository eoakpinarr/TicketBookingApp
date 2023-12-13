import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from './src/components/AppHeader'
import CastCard from './src/components/CastCard'

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <CastCard />
    </View>
  )
}

export default App