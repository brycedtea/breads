const React = require('react')
const Default = require('./layouts/Default')

function Show404 ({bread}) {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
            <h3>OH SNAP! It's a 404 page :[</h3>
            <li><a href="/breads">Go home</a></li>
        </Default>

      )
  }
  

module.exports = Show404