import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCommunication} from '../../state/actions/communication.actions'
import Map from '../../components/Map'

class Home extends Component {
  componentDidMount() {
    this.props.getCommunication();
  }

  render() {
    const {data, isLoading, isEmpty} = this.props

    return (
      <div>
        {!isLoading && !isEmpty ? (
          <Map
            objects={data.objects}
            loadingElement={<div style={{height: `90vh`}} />}
            containerElement={<div style={{height: `90vh`, width: `100%`}} />}
            mapElement={<div style={{height: `90vh`, width: `100%`}} />}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    )
  }
}

function mapStateToProps({objects}) {
  return {
    data: objects.objects.data,
    isLoading: objects.objects.isLoading,
    isEmpty: objects.objects.isEmpty
  }
}

Home.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  getCommunication: PropTypes.func
}

export default connect(
  mapStateToProps,
  {getCommunication}
)(Home)
