import { Button, Header, Highlight, Input } from '@components/index'
import { Container, Content, Icon } from './styles'
export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar Turma" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
