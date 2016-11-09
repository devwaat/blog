/* eslint no-unneeded-ternary:0 */

//  import '../stylesheets/read.scss'
import React from 'react'
import { Meteor } from 'meteor/meteor'
import TextBox from '../components/TextBox.jsx'
import Button from '../components/Button.jsx'
import NavBar from '../components/NavBar.jsx'
import InputText from '../components/InputText.jsx'
import { Session } from 'meteor/session'
import { browserHistory } from 'react-router'
import { Roles } from 'meteor/alanning:roles'

class BlogRead extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleHome = this.handleHome.bind(this)
    this.handleShare = this.handleShare.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.nrCols = 4
  }

  handleHome () {
    browserHistory.push('/')
  }

  handleShare () {
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      browserHistory.push('/blog_write')
    } else {
      browserHistory.push('blog_login')
    }
  }

  handleNext () {
    var curr = Session.get('blogEntriesSkip')
    curr = curr + this.nrCols
    Session.set('blogEntriesSkip', curr)
  }

  handlePrevious () {
    var curr = Session.get('blogEntriesSkip')
    curr = curr - this.nrCols
    Session.set('blogEntriesSkip', curr)
  }

  handleSearch (event) {
    Session.set('blogSearch', event.target.value)
  }

  resizeTitle (title) {
    var titleMaxLength = 50
    return title.length > titleMaxLength ? title.substr(0, title.substr(0, titleMaxLength).lastIndexOf(' ')) + '...' : title
  }

  resizeEntry (entry) {
    var entryMaxLength = 400
    var segInit = 0
    var pos

    if (entry.indexOf('\n') > entryMaxLength) {
      return entry.substr(0, entry.substr(0, entryMaxLength).lastIndexOf(' ')) + ' ...'
    }

    if (entry.indexOf('\n') === -1) {
      if (entry.length > entryMaxLength) {
        return entry.substr(0, entry.substr(0, entryMaxLength).lastIndexOf(' ')) + ' ...'
      }
    }

    for (var i = 0; i < 5; i++) {
      pos = entry.indexOf('\n', segInit)
      if (pos === -1) {
        pos = entry.length
      }
      if (pos > entryMaxLength) {
        return entry.substr(0, entry.substr(0, entryMaxLength).lastIndexOf(' ')) + ' ...'
      } else {
        segInit = pos + 1
      }
    }
    return (pos === entry.length ? entry.substr(0, pos) : entry.substr(0, pos) + ' ...')
  }

  formatDate (inputDate) {
    return inputDate.getDate() + '/' + inputDate.getMonth() + '/' + inputDate.getFullYear()
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
            <div className='text-left'>
              <InputText className='stories-search' placeholder='Search' onChange={this.handleSearch}/>
            </div>
          </div>
          <div className='col-md-10'>
            <div className='text-right'>
              <NavBar className='nav nav-pills pull-right' items={[
                {display: 'Home', handleClick: this.handleHome},
                {display: 'Share', handleClick: this.handleShare}
              ]}/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-center'>
              <h2>Blog posts</h2>
            </div>
          </div>
        </div>
        <div className='row'>
        {this.props.blogEntries.map((entry, i) => {
          if (i < this.nrCols) {
            return (
            <div key={i} className='col-md-3'>
              <TextBox key={i} className='container' title={entry.title} resizedTitle={this.resizeTitle(entry.title)} resizedText={this.resizeEntry(entry.text)} text={entry.text} date={this.formatDate(entry.updateDate)} author={entry.author}/>
            </div>
            )
          }
        })
          }
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='text-right'>
                <Button className='btn btn-primary' value='Prev' onClick={this.handlePrevious} disabled={Session.get('blogEntriesSkip') === 0 ? true : false }/>
              </div>
          </div>
          <div className='col-md-6'>
            <div className='text-left'>
              <Button className='btn btn-primary' value='Next' onClick={this.handleNext} disabled={this.props.blogEntries.length === Session.get('blogEntriesLimit') ? false : true}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BlogRead.propTypes = {
  blogEntries: React.PropTypes.array
}

BlogRead.defaultProps = {}

export default BlogRead
