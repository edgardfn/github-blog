import styled from 'styled-components'

export const LayoutContainer = styled.div`
  /* padding: 0 10rem; */
  width: 100vw;
  /* height: 100vh; */

  background: ${(props) => props.theme['base-background']};

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;

  /* padding-bottom: 5rem; */

  /* max-width: 90rem; */
`
