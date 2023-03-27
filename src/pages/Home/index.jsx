import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon= {FiSearch} />
{      <Content>
        <Section title="Minhas notas" >
          <Note data={{
          title: 'React',
           tags: [
            { id: '1', name: 'react' },
            { id: '2', name: 'node' }
            ]
            }}
            />
        </Section>
      </Content>}
      </Search>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}