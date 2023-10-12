import { useParams } from 'react-router-dom'
import { PublicationDetailsContainer } from './styles'

export function PublicationDetails() {
  const { publicationId } = useParams()
  return (
    <PublicationDetailsContainer>
      Detalhes da publicação
      {publicationId}
    </PublicationDetailsContainer>
  )
}
