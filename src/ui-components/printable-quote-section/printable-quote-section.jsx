import React from 'react';
// import ReactDOM from 'react-dom';

export default class PrintableQuoteSection extends React.Component {
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
  getColumnHeaderList() {
    let headerList = [];
    for(let column in this.props.stateProp.columns) {
      let index = this.props.stateProp.columns[column].id - 1;
      headerList[index] = column;
    }
    return headerList;
  }
  renderHeaderRow() {
    let headerList = this.getColumnHeaderList();
    let thList = headerList.map((title)=>
      <th key={this.props.stateProp.columns[title].id} className="position-relative">
        {this.englishify(title)}
      </th>);
    return(<tr>{thList}</tr>);
  }
  renderRow(index) {
    let headerList = this.getColumnHeaderList();
    let tdList = headerList.map((title)=>
      <td key={title.toString()}
        ref={this.props.id+title+index}>
        {this.props.stateProp.columns[title].content[index]}
      </td>);
    return(<tr key={index.toString()}>{tdList}</tr>);
  }
  renderLastRow() {
    let numberOfColumns = this.getColumnHeaderList().length;
    return(
      <tr className="bg-secondary">
        <td colSpan={numberOfColumns - 1}>TOTAL</td>
        <td ref={"sectionTotal" + this.props.id}>{this.props.stateProp.sectionTotal}</td>
      </tr>
    );
  }
  renderAllRows() {
    let numberOfRows = this.props.stateProp.columns.event.content.length;
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
        <h4 style={{"fontWeight": 1200}} className="text-center"><b>{this.props.stateProp.title}</b></h4>
        <span>{this.props.stateProp.description}</span>
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