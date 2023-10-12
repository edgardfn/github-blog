import styled from 'styled-components'

export const PublicationDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  position: relative;
`

export const PublicationContainer = styled.div`
  position: absolute;
  top: -07rem;

  width: 54rem;
  height: max-content;
  padding: 2rem;

  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PublicationContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerReturn = styled.div`
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme.blue};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2rem;
    text-transform: uppercase;
  }
`

export const LinkGitHub = styled.a`
  color: ${(props) => props.theme.blue};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2rem;
  text-transform: uppercase;

  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const ContainerTitlePublication = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.95rem;
`

export const ContainerFooterPublication = styled.div`
  display: flex;
  gap: 2rem;
`

export const ContainerUserFooterPublication = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-span']};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

export const ContainerDaysFooterPublication = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-span']};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`

export const ContainerCommentsFooterPublication = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['base-span']};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.6rem;
`
export const ContainerTextPublication = styled.div`
  padding: 2.5rem 2rem;
  width: 54rem;
  margin-top: 6rem;
  background-color: transparent;
  height: max-content;

  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.6rem;

  text-align: justify;
`
