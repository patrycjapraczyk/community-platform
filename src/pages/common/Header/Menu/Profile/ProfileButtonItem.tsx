import * as React from 'react';
import styled from 'styled-components'
import { Link } from 'src/components/Links'
import { Button } from 'src/components/Button'
import { display, DisplayProps } from 'styled-system'
import { observer, inject } from 'mobx-react'
import { MobileMenuStore } from 'src/stores/MobileMenu/mobilemenu.store'

const ButtonSign = styled(Button as any)<DisplayProps>`
  ${display};
  cursor: pointer;
`
interface IProps {
  link: string
  text: string
  variant: string
  style?: React.CSSProperties
  isMobile?: boolean
}

interface IProps {}

interface IInjectedProps extends IProps {
  mobileMenuStore: MobileMenuStore
}

@inject('mobileMenuStore')
@observer
export class ProfileButtonItem extends React.Component<IProps> {
  // eslint-disable-next-line
  constructor(props: any) {
    super(props)
  }

  get injected() {
    return this.props as IInjectedProps
  }
  render() {
    const menu = this.injected.mobileMenuStore
    return (
      <>
        <Link to={this.props.link}>
          <ButtonSign
            onClick={() => this.props.isMobile && menu.toggleMobilePanel()}
            variant={this.props.variant}
            display={
              this.props.isMobile
                ? ['flex', 'flex', 'none']
                : ['none', 'none', 'flex']
            }
            {...(this.props.isMobile ? { large: true } : { medium: true })}
            data-cy={this.props.text.toLowerCase()}
            style={this.props.style}
          >
            {this.props.text}
          </ButtonSign>
        </Link>
      </>
    )
  }
}

export default ProfileButtonItem
