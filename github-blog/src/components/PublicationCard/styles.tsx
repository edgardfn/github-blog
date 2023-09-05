import styled from 'styled-components'

export const PublicationCardContainer = styled.div`
  /* height: 16.25rem;
  max-height: 16.25rem; */
  padding: 2rem;
  /* width: calc(50% - 5rem);
  max-width: calc(50% - 2.5rem); */

  border-radius: 0.625rem;
  background: ${(props) => props.theme['base-post']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const HeaderPublicationCard = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
`
export const TextTitlePublicationContainer = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`

export const TimePublicationContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`

export const TextPublication = styled.div`
  height: 6.5rem;
  max-height: 6.5rem;

  color: ${(props) => props.theme['base-text']};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`
