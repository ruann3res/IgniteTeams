import { GroupCard } from '@components/GroupCard'
import { Header, Highlight } from '@components/index'
import { Container } from './styles'

export function Groups() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Grupos"
        subtitle="Aqui você pode ver os grupos que você participa"
      />
      <GroupCard title="Ruan" />
    </Container>
  )
}
