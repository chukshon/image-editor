import styled from 'styled-components'

interface InactiveProps {
  activeStatus: boolean
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  height: max-content;
  @media (min-width: 766px) {
    height: 100vh;
  }
`

export const ContainerStyled = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: var(--radius-10);
  padding: 20px 20px;
  @media (min-width: 875px) {
    max-width: 860px;
  }
`

export const HeadingStyled = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`
export const EditingPanel = styled.div<InactiveProps>`
  opacity: ${(props) => (props.activeStatus ? '0.5' : '1')};
  pointer-events: none;
  @media (min-width: 766px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 25px;
    justify-content: space-between;
  }
`

export const ImageEditor = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  img {
    max-width: 500px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 766px) {
    width: 60%;
  }
`

export const FilterPanel = styled.div`
  padding: 15px;
  border: 1px solid var(--grey-2);
  margin-top: 20px;
  border-radius: var(--radius-5);
  @media (min-width: 766px) {
    width: 40%;
  }
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
  background-color: var(--blue-1);
  width: 100%;
  padding: 10px;
  border-radius: var(--radius-5);
  color: var(--white);
  text-align: center;
`
