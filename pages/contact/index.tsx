import ContentTitle from 'atoms/ContentTitle'
import styled, { css } from 'styled-components'
import { ContactUsIcon } from 'atoms/icons'
import Background from 'atoms/Background'
import BoxEmail from 'atoms/BoxEmail'
import { minWidth } from 'helpers/responsive'
import official from 'helpers/official'
import { poolConfig } from 'config'

import type { NextPage } from 'next';

const ContainerStyled = styled.div`
  margin: 10px 15px 26px;
  width: auto;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 50px 73px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin: 36px 100px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
  z-index: 1;
`
const BoxContentStyled = styled.div`
  margin-top: 41px;
`

const ContactsPage: NextPage = () => (
  <>
    <Background />
    <ContainerStyled>
      <ContentTitle Image={<ContactUsIcon />}>Contact</ContentTitle>
      <BoxContentStyled>
        {Object.keys(poolConfig.POOL_OPTIONS.maintainers).map((key, id) => {
          if((poolConfig.POOL_OPTIONS.maintainers[key].email.slice(-19)==="catchthatrabbit.com" && official()) || (poolConfig.POOL_OPTIONS.maintainers[key].email.slice(-19)!=="catchthatrabbit.com" && !official())) {
            return (
              <BoxEmail title={key} email={poolConfig.POOL_OPTIONS.maintainers[key].email} key={id}>
                { poolConfig.POOL_OPTIONS.maintainers[key].description }
              </BoxEmail>
            )
          }
        })}
      </BoxContentStyled>
    </ContainerStyled>
  </>
)

export default ContactsPage
