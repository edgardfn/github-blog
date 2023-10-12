import { NavLink, useParams } from 'react-router-dom'
import {
  ContainerCommentsFooterPublication,
  ContainerDaysFooterPublication,
  ContainerFooterPublication,
  ContainerReturn,
  ContainerTextPublication,
  ContainerTitlePublication,
  ContainerUserFooterPublication,
  LinkGitHub,
  PublicationContainer,
  PublicationContainerHeader,
  PublicationDetailsContainer,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { apiGitHub } from '../../lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { issues } from '../Home'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function PublicationDetails() {
  const { publicationId } = useParams()
  const [publicationData, setPublicationData] = useState<issues>({
    body: '----',
    comments: 0,
    user: { login: '----' },
    created_at: '----',
    number: 0,
    title: '----',
    html_url: '#',
  })

  useEffect(() => {
    fetchPublicationData()
  }, [publicationId])

  const fetchPublicationData = useCallback(async () => {
    const response = await apiGitHub.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${publicationId}`,
    )

    setPublicationData(response.data)
  }, [])

  const publishedDateRelativeToNow =
    publicationData.created_at !== '----'
      ? formatDistanceToNow(new Date(publicationData.created_at), {
          locale: ptBR,
          addSuffix: true,
        })
      : '----'

  return (
    <PublicationDetailsContainer>
      <PublicationContainer>
        <PublicationContainerHeader>
          <ContainerReturn>
            <NavLink to={`/`}>
              <FontAwesomeIcon icon={faChevronLeft} color="#3294F8" size="xs" />
              VOLTAR
            </NavLink>
          </ContainerReturn>

          <LinkGitHub
            href={publicationData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            VER NO GITHUB
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              color="#3294F8"
              size="xs"
            />
          </LinkGitHub>
        </PublicationContainerHeader>
        <ContainerTitlePublication>
          {publicationData.title}
        </ContainerTitlePublication>
        <ContainerFooterPublication>
          <ContainerUserFooterPublication>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" size="lg" />
            {publicationData.user.login}
          </ContainerUserFooterPublication>
          <ContainerDaysFooterPublication>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" size="lg" />
            {publishedDateRelativeToNow}
          </ContainerDaysFooterPublication>
          <ContainerCommentsFooterPublication>
            <FontAwesomeIcon icon={faComment} color="#3A536B" size="lg" />
            {publicationData.comments === 1
              ? `${publicationData.comments} comentário`
              : `${publicationData.comments} comentários`}
          </ContainerCommentsFooterPublication>
        </ContainerFooterPublication>
      </PublicationContainer>
      <ContainerTextPublication>
        {publicationData.body}
      </ContainerTextPublication>
    </PublicationDetailsContainer>
  )
}
