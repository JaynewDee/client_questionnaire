import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({name = 'User'}) => {
  return (
    <div>Hello, {name}</div>
  )
}

Greeting.propTypes = {
   name: PropTypes.string,
}

export default Greeting