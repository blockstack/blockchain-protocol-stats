'use strict'

import React         from 'react'
import DocumentTitle from 'react-document-title'
import Header        from '../components/Header'

const propTypes = {
  currentUser: React.PropTypes.object
}

class NotFoundPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Page Not Found">
        <div>
          <Header />

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 home-main">
                <h2>Page Not Found</h2>
              </div>
            </div>
          </div>

        </div>
      </DocumentTitle>
    )
  }

}

NotFoundPage.propTypes = propTypes

export default NotFoundPage