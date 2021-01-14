import styled, { css } from 'styled-components'

type liProps = {
  complete: boolean
}

export const Wrapper = styled.li<liProps>`
  ${({ complete }) =>
    complete === true &&
    css`
      text-decoration: line-through;
    `}
`
