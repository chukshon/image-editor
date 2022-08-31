import React, { useState } from 'react'
import './App.css'
import {
  Wrapper,
  ContainerStyled,
  HeadingStyled,
  FilterPanel,
  ImageEditor,
  EditingPanel,
  ActionBtns,
  FilterBtns,
  SlideRange,
  RotateBtnStyled,
  RotateBtns,
  UploadInputStyled,
} from './style'
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'
import { BiVerticalCenter, BiHorizontalCenter } from 'react-icons/bi'
import imagePlaceholder from './assets/image-placeholder.svg'
import Button from './components/button/Button'

function App() {
  const [value, setValue] = useState('')
  const [image, setImage] = useState('')
  const [inActive, setInActive] = useState(false)

  const handleSlideRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
  }
  return (
    <Wrapper>
      <ContainerStyled>
        <HeadingStyled>Easy Image Editor</HeadingStyled>
        <EditingPanel activeStatus={inActive}>
          <ImageEditor>
            <img src={imagePlaceholder} alt='' />
          </ImageEditor>
          <FilterPanel>
            <FilterBtns>
              <label>Filters</label>
              <div className='button_group'>
                <Button>Brightness</Button>
                <Button>Saturation</Button>
                <Button>Inversion</Button>
                <Button>GreyScale</Button>
              </div>
            </FilterBtns>
            <SlideRange>
              <div className='top_heading'>
                <label>Brighness</label>
                <span>{value}%</span>
              </div>
              <input
                type='range'
                min='0'
                max='200'
                value={value}
                className='slider'
                id='myRange'
                onChange={handleSlideRange}
              ></input>
            </SlideRange>
            <RotateBtns>
              <label>Rotate & Flip</label>
              <div className='rotate_btns_group'>
                <RotateBtnStyled>
                  <FiRotateCcw />
                </RotateBtnStyled>
                <RotateBtnStyled>
                  <FiRotateCw />
                </RotateBtnStyled>
                <RotateBtnStyled>
                  <BiHorizontalCenter />
                </RotateBtnStyled>
                <RotateBtnStyled>
                  <BiVerticalCenter />
                </RotateBtnStyled>
              </div>
            </RotateBtns>
          </FilterPanel>
        </EditingPanel>
        <ActionBtns>
          <div className='group_one'>
            <Button>RESET FILTERS</Button>
          </div>
          <div className='group_two'>
            <UploadInputStyled htmlFor='image'>
              CHOOSE IMAGE
              <input
                id='image'
                name='image Upload'
                type='file'
                accept='image/jpeg, image/png'
                // style={{ position: 'absolute', top: '0', left: '0' }}
                hidden
                onChange={handleImageUpload}
              />
            </UploadInputStyled>
            <Button>SAVE IMAGE</Button>
          </div>
        </ActionBtns>
      </ContainerStyled>
    </Wrapper>
  )
}

export default App
