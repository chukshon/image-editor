import styled from 'styled-components'

interface InactiveProps {
  activeStatus?: boolean
  active?: boolean
}

export const ButtonStyled = styled.button<InactiveProps>`
  background-color: ${(props) =>
    !props.active ? 'transparent' : 'var(--blue-4)'};
  width: 100%;
  padding: 10px;
  border-radius: var(--radius-5);
  border: 1px solid var(--grey-1);
  border: ${(props) => (!props.active ? '' : 'none')};
  color: ${(props) => (!props.active ? 'var(--grey-1)' : 'var(--white)')};
  position: relative;
  opacity: ${(props) => (!props.activeStatus ? '1' : '1')};
  pointer-events: ${(props) => (!props.activeStatus ? 'none' : '')};
  font-size: 0.9rem;
  &:hover {
    background-color: ${(props) =>
      !props.active ? 'var(--grey-4)' : 'var(--blue-1)'};
  }
`
