import {Component} from 'react'
import {
  AppContainer,
  FormContainer,
  Heading,
  InputContainer,
  InputLabel,
  Input,
  Select,
  Option,
  Button,
  MemeDisplayContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    url: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    urlForMeme: '',
    topTextForMeme: '',
    bottomTextForMeme: '',
    fontSizeForMeme: '',
  }

  onChangeImageUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitForm = event => {
    const {url, topText, bottomText, fontSize} = this.state
    event.preventDefault()
    this.setState({
      urlForMeme: url,
      topTextForMeme: topText,
      bottomTextForMeme: bottomText,
      fontSizeForMeme: fontSize,
    })
  }

  render() {
    const {
      fontSize,
      topText,
      url,
      bottomText,
      urlForMeme,
      topTextForMeme,
      bottomTextForMeme,
      fontSizeForMeme,
    } = this.state
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>
          <InputContainer>
            <InputLabel htmlFor="image-url">Image URL</InputLabel>
            <Input
              type="text"
              id="image-url"
              placeholder="Enter the Image Url"
              className="input"
              value={url}
              onChange={this.onChangeImageUrl}
            />
          </InputContainer>
          <InputContainer className="input-container">
            <InputLabel htmlFor="top-text">Top Text</InputLabel>
            <Input
              type="text"
              id="top-text"
              placeholder="Enter the Top Text"
              className="input"
              value={topText}
              onChange={this.onChangeTopText}
            />
          </InputContainer>
          <InputContainer className="input-container">
            <InputLabel htmlFor="bottom-text">Bottom Text</InputLabel>
            <Input
              type="text"
              id="bottom-text"
              placeholder="Enter the Bottom Text"
              className="input"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
          </InputContainer>
          <InputContainer className="input-container">
            <InputLabel htmlFor="font-size">Font Size</InputLabel>
            <Select
              id="font-size"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <Option
                  key={eachOption.optionId}
                  value={eachOption.displayText}
                >
                  {eachOption.displayText}
                </Option>
              ))}
            </Select>
          </InputContainer>
          <Button type="submit">Generate</Button>
        </FormContainer>
        <MemeDisplayContainer data-testid="meme" backgroundImage={urlForMeme}>
          <TextContent activeFontSizeId={fontSizeForMeme}>
            {topTextForMeme}
          </TextContent>
          <TextContent activeFontSizeId={fontSizeForMeme}>
            {bottomTextForMeme}
          </TextContent>
        </MemeDisplayContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
