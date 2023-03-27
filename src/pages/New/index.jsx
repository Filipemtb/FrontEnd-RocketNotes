import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './styles';

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">Voltar</a>
          </header>

        <Input placeholder="Título"/>
          <Textarea placeholder="Observações" />

          <Section title="links úteis">
            <NoteItem value="https://github.com/Filipemtb"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
            <NoteItem value="react"/>
            <NoteItem isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button title="Salvar" />
         </Form>     
      </main>
    </Container>
  );
}