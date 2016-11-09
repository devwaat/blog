import React from 'react'

class NavBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
        <ul className={this.props.className} role='navigation'>
          {this.props.items.map((item, i) => {
            return <li role='presentation' key={i} className={item.className} onClick={item.handleClick}>{item.display}</li>
          })
          }
        </ul>
    )
  }

}

NavBar.propTypes = {
  className: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    className: React.PropTypes.string,
    display: React.PropTypes.string,
    handleClick: React.PropTypes.func
  })).isRequired
}

NavBar.defaultProps = {}

export default NavBar
