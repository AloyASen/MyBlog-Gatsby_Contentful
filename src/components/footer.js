import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Invite <a href="www.linkedin.com/in/aloyadityasen">me to Coffee</a> and{' '}
      <a href="https://github.com/contentful/starter-gatsby-blog">Lets' Meetup</a>
    </div>
  </Container>
)

export default Footer
