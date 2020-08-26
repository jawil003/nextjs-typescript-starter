import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import withRouter, {
  WithRouterProps,
} from "next/dist/client/with-router";
class MyApp extends App<WithRouterProps> {
  componentDidCatch(error: any, errorInfo: any) {
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>
            {process.env.NEXT_PUBLIC_BASE_TITLE}
          </title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(MyApp);
