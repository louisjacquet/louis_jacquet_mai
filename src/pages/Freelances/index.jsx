import Card from '../../Components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import React from 'react'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const freelanceProfiles = [
  {
    name: ' Mr XXXXXXXXXXX',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Mr XXXXXXXXXXX',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Miss XXXXXXXXXXX',
    jobTitle: 'Développeuse frontend',
  },
  {
    name: 'Miss XXXXXXXXXXX',
    jobTitle: 'Développeuse frontend',
  },
  {
    name: ' Mr XXXXXXXXXXX',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Mr XXXXXXXXXXX',
    jobTitle: 'Developpeur frontend',
  },
]

function Freelances() {
  return (
    <div>
      <PageTitle>La Team Frontend de la maison</PageTitle>
      <PageSubtitle>
        Venez voir ici les développeurs qui s'occupent de la partie front-end de vos applications!
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelances