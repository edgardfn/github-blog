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

export function Home() {
  return (
    <HomeContainer>
      <ProfileContainer>
        <ProfileImage
          src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80"
          alt="photo-profile"
        ></ProfileImage>
        <InformationContainer>
          <HeaderInformationContainer>
            <NameContainer>Cameron Williamson</NameContainer>
            <GitLink href="https://github.com/edgardfn" target="_blank">
              <GitLinkContainer>
                GITHUB
                <img src={linkIcon} alt="link-icon" />
              </GitLinkContainer>
            </GitLink>
          </HeaderInformationContainer>
          <MainInformationContainer>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass. Tristique volutpat pulvinar vel massa,
            pellentesque egestas.
          </MainInformationContainer>
          <IconsContainer>
            <IconContent>
              <FontAwesomeIcon
                icon={faGithub}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              cameronwll
            </IconContent>
            <IconContent>
              <FontAwesomeIcon
                icon={faBuilding}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              Rocketseat
            </IconContent>
            <IconContent>
              <FontAwesomeIcon
                icon={faUserGroup}
                color="#3A536B"
                style={{ fontSize: '1.125rem' }}
              />
              32 seguidores
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
