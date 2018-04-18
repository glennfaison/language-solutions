import React from 'react';
import TableState from '../../entities/table-state';

export default class QuoteSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = new TableState();
    this.updateState = this.updateState.bind(this);
  }
  updateState(row, column) {
    let tempColumns = this.state.columns;
    tempColumns[column].content[row] = 
    document.getElementById(this.props.id+column+row).textContent;
    for(let i = 0; i < this.state.columns.total.content.length; i++) {
      tempColumns.total.content[i] = this.getRowTotal(i);
    }
    this.setState({columns: tempColumns, sectionTotal: this.getSectionTotal()});
  }
  getSectionTotal() {
    let sectionTotal = 0;
    for(let i = 0; i < this.state.columns.total.content.length; i++) {
      sectionTotal += this.state.columns.total.content[i];
    }
    this.props.getSectionTotalProp(this.props.id, sectionTotal);
    return sectionTotal;
  }
  getRowTotal(index) {
    let total = this.state.columns.time.content[index]
     * this.state.columns.personnel.content[index]
     * this.state.columns.unitPrice.content[index];
    return total;
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
        {title}
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
        id={this.props.id+title+index}
        contentEditable={true}
        onInput={()=>this.updateState(index, title)}>
        {this.state.columns[title].content[index]}
      </td>);
    return(<tr key={index.toString()}>{tdList}</tr>);
  }
  renderLastRow() {
    let numberOfColumns = this.getColumnHeaderList().length;
    return(
      <tr className="bg-secondary">
        <td colSpan={numberOfColumns - 1}>TOTAL</td>
        <td id={"sectionTotal" + this.props.id}>{this.state.sectionTotal}</td>
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