import React from 'react';
import ReactDOM from 'react-dom';
// import QuoteSectionState from '../../entities/quote-section-state';

export default class QuoteSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.stateProp;
    this.updateState = this.updateState.bind(this);
  }
  englishify(camelCaseText) {
    let returnValue = camelCaseText[0].toUpperCase();
    for(let i = 1; i < camelCaseText.length; i++) {
      if(camelCaseText[i] === camelCaseText[i].toUpperCase()) {
        returnValue += " ";
      }
      returnValue += camelCaseText[i];
    }
    return returnValue;
  }
  populateCells() {
    let len = this.state.columns.total.content.length;
    for(let row = 0; row < len; row++) {
      for(let columnName in this.state.columns) {
        ReactDOM.findDOMNode(this.refs[this.props.id+columnName+row])
          .textContent = this.state.columns[columnName].content[row];
      }
    }
  }
  componentDidMount() {
    this.populateCells();
  }
  componentDidUpdate() {console.log(this.state)
    this.populateCells();
  }
  updateState(row, column) {
    let tempColumns = this.state.columns;
    let ref = this.props.id + column + row;
      
    // Set numeric value columns to Number type.
    if(column === "time" || column === "personnel" || column === "unitPrice" || column === "total") {
      tempColumns[column].content[row]
        = Number(ReactDOM.findDOMNode(this.refs[ref]).textContent);
      // Calculate row total.
      tempColumns.total.content[row] = tempColumns.time.content[row]
        * tempColumns.personnel.content[row]
        * tempColumns.unitPrice.content[row];
      // Calculate section total.
      let sectionTotal = 0;
      for(let i = 0; i < this.state.columns.total.content.length; i++) {
        sectionTotal += this.state.columns.total.content[i];
      }
      this.setState({columns: tempColumns, sectionTotal: sectionTotal});
      // Inform parent page of the change.
      this.props.getSectionTotalProp(this.state.id, sectionTotal);
    }
    else {
      tempColumns[column].content[row]
        = ReactDOM.findDOMNode(this.refs[ref]).textContent;
      this.setState({columns: tempColumns});
    }
  }
  getColumnHeaderList() {
    let headerList = [];
    for(let column in this.state.columns) {
      let index = this.state.columns[column].id - 1;
      headerList[index] = column;
    }
    return headerList;
  }
  renderHeaderRow() {
    let headerList = this.getColumnHeaderList();
    let thList = headerList.map((title)=>
      <th key={this.state.columns[title].id} className="position-relative">
        {this.englishify(title)}
        <button 
          className="btn bg-white btn-sm add small">
          +
        </button>
      </th>);
    return(<tr>{thList}</tr>);
  }
  renderRow(index) {
    let headerList = this.getColumnHeaderList();
    let tdList = headerList.map((title)=>
      <td key={title.toString()}
        contentEditable={true}
        ref={this.props.id+title+index}
        onBlur={()=>this.updateState(index, title)}>
      </td>);
    return(<tr key={index.toString()}>{tdList}</tr>);
  }
  renderLastRow() {
    let numberOfColumns = this.getColumnHeaderList().length;
    return(
      <tr className="bg-secondary">
        <td colSpan={numberOfColumns - 1}>TOTAL</td>
        <td ref={"sectionTotal" + this.props.id}>{this.state.sectionTotal}</td>
      </tr>
    );
  }
  renderAllRows() {
    let numberOfRows = this.state.columns.event.content.length;
    let rowList = [];
    for(let i = 0; i < numberOfRows; i++) {
      let row = this.renderRow(i);
      rowList.push(row);
    }
    return rowList;
  }
  render() {
    return(
      <div className="quote-section mt-5">
        <h4 style={{"fontWeight": 1200}} className="text-center"><b>{this.state.title}</b></h4>
        <span>{this.state.description}</span>
        <table className="table table-bordered mt-3">
          <thead className="thead-inverse bg-secondary">
            {this.renderHeaderRow()}
          </thead>
          <tbody>
            {this.renderAllRows()}
            {this.renderLastRow()}
          </tbody>
        </table>
      </div>
    );
  }
}