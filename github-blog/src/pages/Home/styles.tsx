import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const ProfileContainer = styled.div`
  position: absolute;
  top: -07rem;

  width: 54rem;
  height: 13.25rem;
  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 8px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  min-width: 12rem;
  height: 100%;

  border-radius: 0.5rem;
  object-fit: cover;
`

export const InformationContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;

  position: relative;
`

export const HeaderInformationContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NameContainer = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const GitLinkContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  &:hover {
    border-bottom: 1px solid #3294f8;
  }
`

export const GitLink = styled.a`
  font-size: 12px;
  color: #3294f8;
  cursor: pointer;

  &:hover {
    color: #3294f8;
  }
`
export const MainInformationContainer = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};

  margin-top: 2rem;

  height: 6rem;
  max-height: 6rem;
  overflow-y: auto;
`

export const IconsContainer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  gap: 1.5rem;
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme['base-subtitle']};
`

export const PublicationsContainer = styled.div`
  margin-top: 14rem;
  width: 58rem;
`

export const PublicationsSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
  }
`

export const HeaderPublicationsSearchContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  display: flex;
  justify-content: space-between;
`

export const AmountPublicationsContainer = styled.div`
  color: ${(props) => props.theme['base-span']};

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const InputSearchPublications = styled.input`
  margin-top: 0.75rem;
  width: calc(100% - 2rem);
  height: calc(3.125rem - 0.75rem - 0.75rem);

  padding: 0.75rem 1rem;

  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-label']};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const ListPublicationsContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
