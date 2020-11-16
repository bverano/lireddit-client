import { ChakraProvider } from "@chakra-ui/core";
import { Provider, createClient } from "urql";

const client = createClient({
  url: "http://localhost:8080/graphql",
  fetchOptions: { credentials: "include" },
});

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
