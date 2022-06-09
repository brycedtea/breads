const React = require('react')
const Default = require('./layouts/Default')

function Show404 ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
            <h3>404</h3>
            <li><a href="/breads">Go home</a></li>
        </Default>

      )
  }
  

module.exports = Show404