import { useState } from 'react'

import { GroupCard, Header, Highlight, ListEmpty } from '@components/index'
import { FlatList } from 'react-native'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Grupos"
        subtitle="Aqui você pode ver os grupos que você participa"
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => {
              console.log(`Clicou em ${item}`)
            }}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  )
}
