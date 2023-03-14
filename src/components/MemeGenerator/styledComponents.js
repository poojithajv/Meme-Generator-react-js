// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InputLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 16px;
`

export const Input = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  outline: none;
`

export const Select = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const Option = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  min-width: 25px;
  max-width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  cursor: pointer;
  outline: none;
`
export const MemeDisplayContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
    margin-top: 150px;
    margin-left: 100px;
    margin-bottom: 20px;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`
