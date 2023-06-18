import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Invite <a href="https://www.linkedin.com/in/aloyadityasen">me to Coffee</a> {' '}
      <a href="https://www.facebook.com/aloy.sen.18/">Lets' Refresh</a>
    </div>
  </Container>
)

export default Footer
