import styled from 'styled-components'
import {
  Flex as RebassFlex,
  FlexProps as RebassFlexProps,
} from 'rebass/styled-components'

export interface IFlexProps extends RebassFlexProps {
  border?: boolean
  littleRadius?: boolean
  mediumRadius?: boolean
  largeRadius?: boolean
  card?: boolean
  cardHeading?: boolean
  littleScale?: boolean
  mediumScale?: boolean
}

type FlexProps = IFlexProps & RebassFlexProps

export const card = (props: IFlexProps) =>
  props.card ? { border: '2px solid black' } : null

export const littleRadius = (props: IFlexProps) =>
  props.littleRadius ? { borderRadius: '5px' } : null

export const mediumRadius = (props: IFlexProps) =>
  props.mediumRadius ? { borderRadius: '10px' } : null

export const largeRadius = (props: IFlexProps) =>
  props.largeRadius ? { borderRadius: '15px' } : null

export const littleScale = (props: IFlexProps) =>
  props.littleScale
    ? {
        transition: '.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.01)',
        },
      }
    : null

export const mediumScale = (props: IFlexProps) =>
  props.mediumScale
    ? {
        transition: '.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }
    : null

export const BaseFlex = styled(RebassFlex as any)`
  ${littleRadius}
  ${mediumRadius}
  ${largeRadius}
  ${card}
  ${littleScale}
  ${mediumScale}
`

// TODO - incorporate custom css into rebass props to allow things like below to be passed
export const Flex = (props: FlexProps) => (
  <BaseFlex {...(props as any)}>{props.children}</BaseFlex>
)

export default Flex
