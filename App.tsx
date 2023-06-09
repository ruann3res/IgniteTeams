import { Loading } from '@components/index'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { NewGroup } from '@screens/index'
import theme from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  )
}
