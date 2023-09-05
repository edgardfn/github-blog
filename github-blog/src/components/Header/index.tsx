import { HeaderContainer } from './styles'
import banner from '../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={banner} alt="banner-header" />
    </HeaderContainer>
  )
}
