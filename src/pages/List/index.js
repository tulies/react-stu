import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getListData } from '../../reducers/list.reducer';

class List extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   // console.log(212121);
  //   // props.getListData();
  // }

  componentDidMount() {
    this.props.getListData();
  }

  render() {
    return (
      <div>
        <h1>列表页面-使用redux加载</h1>
        <ul>
          {
          this.props.listData.map((v) => (
            <li key={v.title}>
              {v.title}
            </li>
          ))
        }
        </ul>
      </div>
    );
  }
}

List.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
  getListData: PropTypes.func.isRequired,
};
export default connect(
  (state) => ({
    listData: state.List.listData,
  }),
  { getListData },
)(List);
