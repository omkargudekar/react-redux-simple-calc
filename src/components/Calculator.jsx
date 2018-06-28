import React from 'react';
import {connect} from 'react-redux'
import * as Actions from '../store/Actions/'
console.log(Actions)

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
                                <td><button onClick={() => { props.subtractAction()}}>SUB 10</button></td>

                            </tr>
                            <tr >
                                <td colSpan="4" style={{ width: '100%' }}><button onClick={() => { 
                                    props.saveAction({
                                        id:new Date().toString(),
                                        result: props.currentResult
                                    });
                                }}>Save Result</button></td>
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
                                    return (<li style={{ textAlign: 'left' }} key={el.id}>
                                        {el.result} 
                                        <button onClick={() => { props.deleteAction(el.id)}} style={{ backgroundColor: '#FF5733' }}>X</button>
                                    </li>)
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
        incrAction: () => { dispatch(Actions.incrAction()) },
        decrAction: () => { dispatch(Actions.decrAction()) },
        addAction: () => { dispatch(Actions.addAction())},
        subtractAction: () => { dispatch(Actions.subtractAction()) },
        saveAction: (currentResult) => { dispatch(Actions.saveAction(currentResult))},
        deleteAction: (id) => { dispatch(Actions.deleteAction(id)) },

    }
}



export default connect(mapStateToProps, mapActionsToProps)(Calculator);