import React from 'react'

class MenuBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={this.props.className}>
        {this.props.items.map((item, i) => {
          return <div key={i} className={item.className} onClick={item.handleClick}>{item.display}</div>
        })
        }
      </div>
    )
  }

}

MenuBar.propTypes = {
  className: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.shape({
    className: React.PropTypes.string,
    display: React.PropTypes.string,
    handleClick: React.PropTypes.func
  })).isRequired
}

MenuBar.defaultProps = {}

export default MenuBar
