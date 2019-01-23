import React from 'react';

import './index.css';


class ListViewWidget extends React.Component {
  constructor(props) {
    super(props);
    let { items = [] } = props;
    this.state = {
      items: items,
      currentPage: 1,
      pageSize: 5
    };
  }
  getCurrentIndex(observableIndex = 0) {
    let startIndex = (this.state.currentPage - 1) * this.state.pageSize;
    return startIndex + observableIndex;
  }
  getObservableList() {
    let startIndex = this.getCurrentIndex();
    let endIndex = startIndex + this.state.pageSize;
    return this.state.items.slice(startIndex, endIndex);
  }
  render() {
    let { title, listItemWidget = React.Component } = this.props;
    return (
      <div className="listViewWidget">
        <div className="header">{title}</div>
        {
          this.getObservableList().map((item, index) => {
            return (
              React.createElement(
                listItemWidget,
                { item: item, key: "li-" + index.toString(), index: this.getCurrentIndex(index) },
                null
              )
            );
          })
        }
        <div className="footer">
          <a href="#blank" onClick={() => this.setState({ currentPage: 1 })}>|&lt;&lt;</a>
          <a href="#blank">&lt;&lt;</a>
          <a href="#blank">&gt;&gt;</a>
          <a href="#blank" onClick={() => this.setState({ currentPage: Math.ceil(this.state.items.length / this.state.pageSize) })}>
            &gt;&gt;|
          </a>
        </div>
      </div>
    );
  }
}

export default ListViewWidget;