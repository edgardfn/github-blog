import {
  AmountPublicationsContainer,
  GitLink,
  GitLinkContainer,
  HeaderInformationContainer,
  HeaderPublicationsSearchContainer,
  HomeContainer,
  IconContent,
  IconsContainer,
  InformationContainer,
  InputSearchPublications,
  ListPublicationsContainer,
  MainInformationContainer,
  NameContainer,
  ProfileContainer,
  ProfileImage,
  PublicationsContainer,
  PublicationsSearchContainer,
} from './styles'
import linkIcon from '../../assets/link-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PublicationCard } from '../../components/PublicationCard'
import { useCallback, useEffect, useState } from 'react'
import { apiGitHub } from '../../lib/axios'
import { useForm } from 'react-hook-form'

interface UserDataType {
  login: string | null
  avatar_url: string | null
  name: string | null
  html_url: string | null
  bio: string | null
  company: string | null
  followers: number | null
}

export interface publicationTextType {
  publicationText: string | ''
}

export interface issues {
  title: string
  body: string
  created_at: string
  id: number
}

export function Home() {
  // const [publicationSearchText, setPublicationSearchText] =
  //   useState<publicationTextType>({ publicationText: '' })
  const [userData, setUserData] = useState<UserDataType>({
    avatar_url: null,
    bio: null,
    company: null,
    followers: null,
    html_url: null,
    login: null,
    name: null,
  })
  const [repoIssues, setRepoIssues] = useState<issues[]>([])

  const { register, handleSubmit } = useForm<publicationTextType>()

  useEffect(() => {
    fetchUserData()
    fetchRepoIssuesData()
  }, [])

  // useEffect(() => {
  //   if (publicationSearchText.publicationText !== '') {
  //     fetchSearchIssues(publicationSearchText.publicationText)
  //   }
  // }, [publicationSearchText])

  const onSubmit = (data: publicationTextType) =>
    fetchRepoIssuesData(data.publicationText)

  const fetchUserData = useCallback(async () => {
    const response = await apiGitHub.get('/users/rocketseat-education')

    setUserData({
      avatar_url: response.data.avatar_url,
      bio: response.data.bio,
      company: response.data.company,
      followers: response.data.followers,
      html_url: response.data.html_url,
      login: response.data.login,
      name: response.data.name,
    })
  }, [])

  const fetchRepoIssuesData = useCallback(async (searchText = '') => {
    const response = await apiGitHub.get(
      `/search/issues?q=${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )
    // const response = await apiGitHub.get(
    //   '/repos/rocketseat-education/reactjs-github-blog-challenge/issues',
    // )

    setRepoIssues(response.data.items)
  }, [])

  // const fetchSearchIssues = useCallback(async (searchText: string) => {
  //   console.log('searchText ===', searchText)
  //   const response = await apiGitHub.get(
  //     `/search/issues?q=${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
  //   )
  //   console.log('response ====', response)
  //   setRepoIssues(response.data.items)
  // }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileImage
          src={
            userData.avatar_url
              ? userData.avatar_url
              : 'https://icon-library.com/images/default-user-icon/default-user-icon-14.jpg'
          }
          alt="photo-profile"
        ></ProfileImage>
        <InformationContainer>
          <HeaderInformationContainer>
            <NameContainer>
              {userData.name ? userData.name : '------'}
            </NameContainer>
            <GitLink
              href={userData.html_url ? userData.html_url : '#'}
              target="_blank"
            >
              <GitLinkContainer>
                GITHUB
                <img src={linkIcon} alt="link-icon" />
              </GitLinkContainer>
            </GitLink>
          </HeaderInformationContainer>
          <MainInformationContainer>
            {userData.bio ? userData.bio : '-------'}
          </MainInformationContainer>
          <IconsContainer>
            <IconContent>
              <FontAwesomeIcon
                icon={faGithub}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              {userData.login ? userData.login : '------'}
            </IconContent>
            <IconContent>
              <FontAwesomeIcon
                icon={faBuilding}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              {userData.company ? userData.company : '------'}
            </IconContent>
            <IconContent>
              <FontAwesomeIcon
                icon={faUserGroup}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              {userData.followers ? userData.followers : '0'} seguidores
            </IconContent>
          </IconsContainer>
        </InformationContainer>
      </ProfileContainer>
      <PublicationsContainer>
        <PublicationsSearchContainer>
          <HeaderPublicationsSearchContainer>
            Publicações
            <AmountPublicationsContainer>
              {`${repoIssues.length} ${
                repoIssues.length === 1 ? 'publicação' : 'publicações'
              }`}
            </AmountPublicationsContainer>
          </HeaderPublicationsSearchContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputSearchPublications
              type="text"
              placeholder="Buscar conteúdo"
              {...register('publicationText')}
            ></InputSearchPublications>
          </form>
        </PublicationsSearchContainer>
        <ListPublicationsContainer>
          {repoIssues.map((issue) => {
            return (
              <PublicationCard
                key={issue.id}
                body={issue.body}
                created={issue.created_at}
                title={issue.title}
              />
            )
          })}
        </ListPublicationsContainer>
      </PublicationsContainer>
    </HomeContainer>
  )
}
