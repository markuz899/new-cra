import React, { useState } from 'react';
import Layout from '../../containers/Layout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { themeActions } from 'styles/theme/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';

export function HomePage() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const handleThemeChange = event => {
    const value = 'light';
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };
  return (
    <Layout title="Home">
      <span>HomePage container</span>
      <button onClick={handleThemeChange}>{theme}</button>
      <Link to="/root">Root</Link>
    </Layout>
  );
}
