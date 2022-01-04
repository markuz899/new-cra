import React, { memo } from 'react';
import Layout from '../../containers/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { themeActions } from 'styles/theme/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import DebugRedux from '../../redux/debug';

function HomePage({ debug, setDebug }) {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  useInjectReducer({ key: 'debug', reducer: DebugRedux.reducer });
  useInjectSaga({ key: 'debug', saga: DebugRedux.saga });

  const handleThemeChange = event => {
    let value = theme;
    if (theme === 'light') {
      value = 'dark';
    } else {
      value = 'light';
    }
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  const toggleState = () => {
    setDebug(!debug.debugger);
  };

  return (
    <Layout title="Home">
      <span>HomePage container</span>
      <button onClick={handleThemeChange}>{theme}</button>
      <button onClick={toggleState}>
        {debug?.debugger ? 'TRUE' : 'FALSE'}
      </button>
      <Link to="/root">Root</Link>
      <p>{process.env.NODE_ENV}</p>
    </Layout>
  );
}

const mapStateToProps = ({ debug }) => ({ debug });
const mapDispatchToProps = dispatch => ({
  setDebug: payload => dispatch(DebugRedux.actions.debug(payload)),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
