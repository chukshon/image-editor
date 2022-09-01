import React, { useEffect, useState } from 'react'
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
  ResetButton,
  FilterInput,
  SaveButton,
} from './style'
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi'
import { BiVerticalCenter, BiHorizontalCenter } from 'react-icons/bi'
import imagePlaceholder from './assets/image-placeholder.svg'
import Button from './components/button/Button'

function App() {
  const [filterValues, setFilterValues] = useState({
    brightness: '100',
    saturation: '100',
    inversion: '0',
    grayscale: '0',
    rotate: 0,
    flipHorizontal: 1,
    flipVertical: 1,
  })
  let [value, setValue] = useState('100')
  let [name, setName] = useState('brightness')
  const [image, setImage] = useState<any>(null)
  const [imageFile, setImageFile] = useState<any>(null)
  const [filterName, setFilterName] = useState('Brightness')

  const handleSelectFilterValue = (name: string) => {
    if (name === 'brightness') {
      setFilterName('Brightness')
      setName('brightness')
      setValue(filterValues.brightness)
    }
    if (name === 'saturation') {
      setValue(filterValues.saturation)
      setFilterName('Saturation')
      setName('saturation')
    }
    if (name === 'inversion') {
      setValue(filterValues.inversion)
      setFilterName('Inversion')
      setName('inversion')
    }
    if (name === 'grayscale') {
      setValue(filterValues.grayscale)
      setFilterName('Grayscale')
      setName('grayscale')
    }
    // setActiveBtn(false)
  }

  const handleSlideRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value })
  }

  const handleRotatation = (value: string) => {
    if (value === 'left') {
      setFilterValues({
        ...filterValues,
        ['rotate']: (filterValues.rotate -= 90),
      })
    }
    if (value === 'horizontal') {
      setFilterValues({
        ...filterValues,
        ['flipHorizontal']: (filterValues.flipHorizontal =
          filterValues.flipHorizontal === 1 ? -1 : 1),
      })
    }
    if (value === 'right') {
      setFilterValues({
        ...filterValues,
        ['rotate']: (filterValues.rotate += 90),
      })
    }
    if (value === 'vertical') {
      setFilterValues({
        ...filterValues,
        ['flipVertical']: (filterValues.flipVertical =
          filterValues.flipVertical === 1 ? -1 : 1),
      })
    }
  }

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0]
    setImageFile(file)
    setImage(URL.createObjectURL(file))
  }
  const resetFilters = () => {
    setName('brightness')
    setFilterName('Brightness')
    setFilterValues({
      brightness: '100',
      saturation: '100',
      inversion: '0',
      grayscale: '0',
      rotate: 0,
      flipHorizontal: 1,
      flipVertical: 1,
    })
    setValue('100')
  }

  const saveImage = () => {
    const canvas = document.createElement('canvas')
    let ctx: any = canvas.getContext('2d')
    let newImage = new Image()
    newImage.src = image
    canvas.width = newImage.naturalWidth
    canvas.height = newImage.naturalHeight
    ctx.filter = `brightness(${filterValues.brightness}%) saturate(${filterValues.saturation}%) invert(${filterValues.inversion}%) grayscale(${filterValues.grayscale}%)`
    ctx.translate(canvas.width / 2, canvas.height / 2)
    if (filterValues.rotate !== 0) {
      ctx.rotate((filterValues.rotate * Math.PI) / 180)
    }
    ctx.scale(filterValues.flipHorizontal, filterValues.flipVertical)
    ctx.drawImage(
      newImage,
      -canvas.width / 2,
      -canvas.height / 2,
      canvas.width,
      canvas.height
    )
    const link = document.createElement('a')
    link.download = 'image.jpg'
    link.href = canvas.toDataURL()
    link.click()
  }

  console.log(imageFile)

  return (
    <Wrapper>
      <ContainerStyled>
        <HeadingStyled>Easy Image Editor</HeadingStyled>
        <EditingPanel>
          <ImageEditor
            brightness={filterValues.brightness}
            saturation={filterValues.saturation}
            grayscale={filterValues.grayscale}
            inversion={filterValues.inversion}
            rotate={filterValues.rotate}
            flipHorizontal={filterValues.flipHorizontal}
            flipVertical={filterValues.flipVertical}
          >
            <img src={image ? image : imagePlaceholder} alt='' />
          </ImageEditor>
          <FilterPanel activeStatus={image}>
            <FilterBtns>
              <label>Filters</label>
              <div className='button_group'>
                <Button
                  onClick={() => handleSelectFilterValue('brightness')}
                  activeStatus={image}
                  isActive={name === 'brightness'}
                >
                  Brightness
                </Button>
                <Button
                  onClick={() => handleSelectFilterValue('saturation')}
                  activeStatus={image}
                  isActive={name === 'saturation'}
                >
                  Saturation
                </Button>
                <Button
                  activeStatus={image}
                  isActive={name === 'inversion'}
                  onClick={() => handleSelectFilterValue('inversion')}
                >
                  Inversion
                </Button>
                <Button
                  activeStatus={image}
                  isActive={name === 'grayscale'}
                  onClick={() => handleSelectFilterValue('grayscale')}
                >
                  GreyScale
                </Button>
              </div>
            </FilterBtns>
            <SlideRange>
              <div className='top_heading'>
                <label>{filterName}</label>
                <span>{value}%</span>
              </div>
              <FilterInput
                name={name}
                type='range'
                min='0'
                max='200'
                value={value}
                className='slider'
                id='myRange'
                onChange={handleSlideRange}
              ></FilterInput>
            </SlideRange>
            <RotateBtns>
              <label>Rotate & Flip</label>
              <div className='rotate_btns_group'>
                <RotateBtnStyled onClick={() => handleRotatation('left')}>
                  <FiRotateCcw />
                </RotateBtnStyled>
                <RotateBtnStyled onClick={() => handleRotatation('right')}>
                  <FiRotateCw />
                </RotateBtnStyled>
                <RotateBtnStyled onClick={() => handleRotatation('horizontal')}>
                  <BiHorizontalCenter />
                </RotateBtnStyled>
                <RotateBtnStyled onClick={() => handleRotatation('vertical')}>
                  <BiVerticalCenter />
                </RotateBtnStyled>
              </div>
            </RotateBtns>
          </FilterPanel>
        </EditingPanel>
        <ActionBtns>
          <div className='group_one'>
            <ResetButton activeStatus={image} onClick={resetFilters}>
              RESET FILTERS
            </ResetButton>
          </div>
          <div className='group_two'>
            <UploadInputStyled htmlFor='image'>
              CHOOSE IMAGE
              <input
                id='image'
                name='image Upload'
                type='file'
                accept='image/jpeg, image/png'
                hidden
                onChange={handleImageUpload}
              />
            </UploadInputStyled>
            <SaveButton onClick={saveImage} activeStatus={image}>
              SAVE IMAGE
            </SaveButton>
          </div>
        </ActionBtns>
      </ContainerStyled>
      <p style={{ marginTop: '20px' }}>
        Developed by&nbsp;
        <span>
          <a
            href='https://chukhondev.netlify.app'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'red' }}
          >
            ChuksHon
          </a>
        </span>
        &nbsp;with love.<span className='beat'>❤️</span>
      </p>
    </Wrapper>
  )
}

export default App
