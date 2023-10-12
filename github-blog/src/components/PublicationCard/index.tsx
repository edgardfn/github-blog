import { formatDistanceToNow } from 'date-fns'
import {
  HeaderPublicationCard,
  PublicationCardContainer,
  TextPublication,
  TextTitlePublicationContainer,
  TimePublicationContainer,
} from './styles'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

interface PublicationCardProps {
  title: string
  body: string
  created: string
  number: number
}

export function PublicationCard({
  body,
  created,
  title,
  number,
}: PublicationCardProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(Date.parse(created), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PublicationCardContainer>
      <NavLink to={`/publication/${number}`}>
        <HeaderPublicationCard>
          <TextTitlePublicationContainer>{title}</TextTitlePublicationContainer>
          <TimePublicationContainer>
            <p>{publishedDateRelativeToNow}</p>
          </TimePublicationContainer>
        </HeaderPublicationCard>
        <TextPublication>{body}</TextPublication>
      </NavLink>
    </PublicationCardContainer>
  )
}
