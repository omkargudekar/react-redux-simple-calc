import React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../store/Actions'
const Calculator = props => {
    return (
        <div style={{marging:'auto'}}>
            <div>
                <h3>React-Redux Calculator Demo</h3>
            </div>
            <div style={{ marging: 'auto', width: '200px', padding: '4px', display: 'inline-block', backgroundColor: '#E5ECE5', border: '1px solid', }}>
                <div >
                    <div style={{ backgroundColor: '#35FF33',border:'1px solid',textAlign:'right',paddingRight:'10px' }}>
                        {props.currentResult}
                    </div>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><button onClick={() => { props.incrAction()}}>INC ++</button></td>
                                <td><button onClick={() => { props.decrAction()}}>DEC --</button></td>
                                <td><button onClick={() => { props.addAction()}}>ADD 10</button></td>
                                <td><button onClick={() => { props.decrAction()}}>SUB 10</button></td>

                            </tr>
                            <tr >
                                <td colSpan="4" style={{ width: '100%' }}><button onClick={() => { }}>Save Result</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div>Results:</div>
                    <div>
                        <ul>
                            {
                                props.storedResults.map((el) =>{
                                    <li style={{ textAlign: 'left' }}>
                                        {el.value} 
                                        <button onClick={() => { props.deleteAction(el.id)}} style={{ backgroundColor: '#FF5733' }}>X</button>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

const mapStateToProps = state=>{
    return {
        currentResult: state.currentResultReducerSlice.currentResult,
        storedResults: state.StoredResultReducerSlice.storedResults
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        incrAction: () => { return dispatch({ type:Actions.INCR_ACTION})},
        decrAction: () => { return dispatch({ type: Actions.DECR_ACTION}) },
        addAction: () => { return dispatch({ type: Actions.ADD_ACTION, value: 10 }) },
        subtractAction: () => { return dispatch({ type: Actions.SUB_ACTION, value: 10 }) },
        saveAction: () => { return dispatch({ type: Actions.SAVE_ACTION, value: 0 }) },
        deleteAction: (id) => { return dispatch({ type: Actions.DELETE_ACTION, value: id }) },

    }
}



export default connect(mapStateToProps, mapActionsToProps)(Calculator);