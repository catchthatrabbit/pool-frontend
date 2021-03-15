import styled from 'styled-components'
import { colorVariables } from 'styles/variables'
import applyTransparence from 'helpers/transparentize'

const PaginationContainer = styled.div`
  ul.pagination {
    display: flex;
    align-items: center;
    height: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 0.35rem;
    color: ${colorVariables.kimberly};
    li {
      &.active {
        a {
          color: ${colorVariables.white}; 
          background-color: ${applyTransparence(
            0.25,
            colorVariables.gunPowder,
          )} 
          border: 1px solid ${colorVariables.gunPowder};
          border-radius: 10px;
        }
      }
      &.break-me {
        pointer-events: none;
        a {
          padding: 0;
        }
      }
      &.next {
        margin-left: 0.2rem;
        padding: 0.75rem 0;
        border-left: 1px solid ${colorVariables.gunPowder};
      }
      &.previous.disabled, &.next.disabled {
        display: none;
      }
      a {
        padding: 0.3rem;
        cursor: pointer;
        user-select: none;
        &:hover {
          color: ${colorVariables.white};
          transition: color 0.3s;
        }
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileS} {
      font-size: 0.5rem;
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
      font-size: 0.583rem;
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.tablet} {
      li {
        a {
          padding: 0.5rem;
        }
        &.break-me {
          a {
            padding: 0.5rem;
          }
        }
        &.previous {
          margin-right: 1.5rem;
        }
        &.next {
          margin-left: 0.75rem;
          padding: 0.75rem;
        }
      }
    }
  }
`

export default PaginationContainer
