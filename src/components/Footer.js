import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  border-top: 2px solid ${props => props.theme.colors.secondary};
  padding: 4em 0 2em;
  margin: 0 14em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
     <Item>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://www.contentful.com/assets/images/graphics/open_graph.png"
            style={{ width: '100px' }}
            alt="Powered by Contentful"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.netlify.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://www.netlify.com/img/global/meta-image.jpg"
            style={{ width: '100px' }}
            alt="Powered by Netlify"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.gatsbyjs.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="http://www.hixle.co/wp-content/uploads/Gatsby-JS-min.jpg"
            style={{ width: '70px' }}
            alt="Powered by Gatsby"
          />
        </a>
      </Item>
      
    </List>
  </Wrapper>
)

export default Footer


/*
<Item>
        <a
          href="https://github.com/ryanwiemer/gatsby-starter-gcn"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-starter-gcn
        </a>{' '}
        by{' '}
        <a
          href="https://github.com/ryanwiemer"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ryanwiemer 
        </a>
      </Item>
      */