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

interface UserDataType {
  login: string | null
  avatar_url: string | null
  name: string | null
  html_url: string | null
  bio: string | null
  company: string | null
  followers: number | null
}

export function Home() {
  const [userData, setUserData] = useState<UserDataType>({
    avatar_url: null,
    bio: null,
    company: null,
    followers: null,
    html_url: null,
    login: null,
    name: null,
  })

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = useCallback(async () => {
    const response = await apiGitHub.get('/users/rocketseat-education')
    console.log('response ====', response)
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
              6 publicações
            </AmountPublicationsContainer>
          </HeaderPublicationsSearchContainer>
          <InputSearchPublications placeholder="Buscar conteúdo"></InputSearchPublications>
        </PublicationsSearchContainer>
        <ListPublicationsContainer>
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
          <PublicationCard />
        </ListPublicationsContainer>
      </PublicationsContainer>
    </HomeContainer>
  )
}
