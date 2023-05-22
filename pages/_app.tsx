
import {FC} from 'react';
import { Provider } from "react-redux";
import { wrapper } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';


const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;