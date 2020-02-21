import Item from '../components/Item'
import { startTimer, resetTimer, removeItem } from '../redux/actions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        STORE: state.reducerTimer
    }
}

const mapDispatchToProps = (dispatch, key) => {
    return {
        reset: () => { dispatch(resetTimer()) },
        start: () => { dispatch(startTimer()) },
        remove: () => { dispatch(removeItem(key.ID)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)