import styled from 'styled-components'

interface InactiveProps {
  activeStatus: boolean
}

interface FilterProps {
  brightness: string
  inversion: string
  saturation: string
  grayscale: string
  rotate: number
  flipHorizontal: number
  flipVertical: number
}

interface RotateProps {
  rotateValue: string
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 10px;
  height: max-content;
  @media (min-width: 766px) {
    height: 100vh;
  }
`

export const ContainerStyled = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: var(--radius-10);
  padding: 20px 30px;
  @media (min-width: 875px) {
    max-width: 860px;
  }
`

export const HeadingStyled = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`
export const EditingPanel = styled.div`
  @media (min-width: 766px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 25px;
    justify-content: space-between;
  }
`

export const ImageEditor = styled.div<FilterProps>`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    max-width: 490px;
    max-height: 335px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotate(${(props) => props.rotate}deg)
      scaleX(${(props) => props.flipHorizontal})
      scaleY(${(props) => props.flipVertical});

    filter: brightness(${(props) => props.brightness}%)
      saturate(${(props) => props.saturation}%)
      invert(${(props) => props.inversion}%)
      grayscale(${(props) => props.grayscale}%);
  }
  @media (min-width: 766px) {
    width: 65%;
  }
`

export const FilterPanel = styled.div<InactiveProps>`
  opacity: ${(props) => (!props.activeStatus ? '0.3' : '1')};
  pointer-events: ${(props) => (!props.activeStatus ? 'none' : '')};
  padding: 15px;
  border: 1px solid var(--grey-2);
  margin-top: 20px;
  border-radius: var(--radius-5);
  height: 100%;
  @media (min-width: 766px) {
    width: 35%;
  }
`

export const FilterInput = styled.input`
  width: 100%;
  height: 40px;
  accent-color: #5372f0;
`

export const FilterBtns = styled.div`
  .button_group {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`

export const SlideRange = styled.div`
  margin: 20px 0px;
  .top_heading {
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const RotateBtns = styled.div`
  .rotate_btns_group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0px;
  }
`

export const RotateBtnStyled = styled.div`
  border: 1px solid var(--grey-2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: var(--grey-4);
  }

  &:active {
    background-color: var(--blue-1);
  }
`

export const ActionBtns = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  flex-direction: column;

  @media (min-width: 515px) {
    flex-direction: row;
  }
  .group_two {
    @media (min-width: 515px) {
      width: 300px;
      flex-direction: row;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`

export const UploadInputStyled = styled.label`
  background-color: var(--grey-3);
  width: 100%;
  padding: 10px;
  border-radius: var(--radius-5);
  color: var(--white);
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--grey-1);
  }
`
export const ResetButton = styled.button<InactiveProps>`
  opacity: ${(props) => (!props.activeStatus ? '0.5' : '1')};
  pointer-events: ${(props) => (!props.activeStatus ? 'none' : '')};
  background-color: none;
  border: 1px solid var(--grey-2);
  width: 100%;
  padding: 10px;
  border-radius: var(--radius-5);
  color: var(--grey-1);
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
    background-color: var(--grey-3);
    color: var(--white);
  }
`
export const SaveButton = styled.button<InactiveProps>`
  opacity: ${(props) => (!props.activeStatus ? '0.5' : '1')};
  pointer-events: ${(props) => (!props.activeStatus ? 'none' : '')};
  background-color: var(--blue-4);
  width: 100%;
  padding: 10px;
  border-radius: var(--radius-5);
  color: var(--white);
  text-align: center;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    background-color: var(--blue-1);
    color: var(--white);
  }
`
