import React from 'react'
import styled, { css } from 'styled-components'
import { space, lineHeight, color } from 'styled-system'
import { colors } from '@components/styled/theme'

const Panel = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  ${space};
  ${color};
  z-index: 5;
`

const Card = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${space};
  ${color};

  ${({ variant }) =>
    variant === 'welcome' &&
    css`
      background: ${colors.blue};
      color: white;
      p {
        color: white !important;

        a {
          &:link,
          &:visited,
          &:active {
            color: white !important;
            &::before {
              background-color: white !important;
            }
          }
        }
      }
    `};
`

const Section = styled.div`
  ${lineHeight};
  ${space};
  position: relative;

  ${({ center }) =>
    center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    `};
`
const Content = styled.div`
  flex-grow: 1;
  flex-shrink: 0;

  ${space};
  ${color};

  p {
    text-align: center;
    line-height: 1.85;
    font-size: 16px;
    color: ${colors.grey[4]};
    a {
      &:link,
      &:visited,
      &:active {
        color: ${colors.grey[4]};
        position: relative;
        display: inline-block;
        &::before {
          opacity: 0.35;
          position: absolute;
          height: 1px;
          border-radius: 2px;
          top: calc(100% - 5px);
          left: -2px;
          width: calc(100% + 4px);
          content: '';
          background: ${colors.blue};
        }
      }
    }
  }

  form {
    padding-bottom: 20px;
    label {
      color: ${colors.grey[3]};
      font-weight: bold;
    }
    input {
      display: block;
      width: 100%;
      padding: 20px;
      border: 1px solid ${colors.grey[1]};
      margin-bottom: 20px;
      outline: none;
      border-bottom-width: 2px;
      border-bottom-color: ${colors.grey[1]};
      &:focus {
        border-bottom-color: ${colors.blue};
      }
    }
    button {
      text-align: center;
      width: 100%;
    }
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  ${space};
`
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const IconWrapper = styled.div

const Title = styled.div`
  ${space};
  ${lineHeight};
`

const Progress = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
  top: 0;
  right: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: transparent;
  opacity: 0.35;
  border-radius: 100%;
  margin: 4px;
  border: 1px solid ${colors.grey[3]};
  ${({ active }) =>
    active &&
    css`
      background: ${colors.blue};
      opacity: 1;
      border-color: ${colors.blue};
    `};
  ${({ complete }) =>
    complete &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-color: ${colors.blue};
      color: ${colors.blue};
      background: transparent;
      opacity: 1;
      &::before {
        position: absolute;
        transform: translateY(-2px);
        content: '•';
      }
    `};
`

const InputOverlay = styled.div`
  text-align: right;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`

const ErrorMessage = styled.div`
  background: ${colors.grey[1]};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  border-radius: 8px;
  margin-bottom: 20px;

  p {
    text-align: left;
    margin: 0;
    padding: 0;
    line-height: 1.25;
  }
`

const Icon = styled.div`
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 10px;
  flex-shrink: 0;
  svg {
    display: block;
    * {
      fill: salmon;
    }
  }
`

Panel.Card = Card
Panel.Card.Title = Title
Panel.Card.IconWrapper = Title
Panel.Card.Header = Header
Panel.Card.Content = Content
Panel.Card.InputOverlay = InputOverlay
Panel.Card.Section = Section
Panel.Card.ErrorMessage = ErrorMessage
Panel.Card.ErrorMessage.Icon = Icon
Panel.Progress = Progress
Panel.Progress.Dot = Dot

export default Panel
