import React from 'react'

const TopNav = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar">one  </span>
            <span className="icon-bar">two</span>
            <span className="icon-bar">three </span>
          </button>
          <a className="navbar-brand">Reddit Clone</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        </div>
      </div>
    </nav>
  )
}

export default TopNav
