import React, { useState } from 'react'
import './App.css'
import { Wrapper, ContainerStyled } from './style'

function App() {
  const [value, setValue] = useState('')
  const handleSlideRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Wrapper>
      <ContainerStyled>
        <h1>Easy Image Editor</h1>
        <div className='editing_panel'>
          <div className='filters'>
            <div className='filter_btns'>
              <h3>Filters</h3>
              <button>Brightness</button>
              <button>Saturation</button>
              <button>Inversion</button>
              <button>GreyScale</button>
            </div>

            <div className='slide_range'>
              <div className='top_heading'>
                <span>Brighness</span>
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
            </div>
          </div>
          <div className='image_preview'></div>
        </div>
        <div className='action_btns'></div>
      </ContainerStyled>
    </Wrapper>
  )
}

export default App
