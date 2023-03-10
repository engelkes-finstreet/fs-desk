import {ErrorFallbackProps, ErrorComponent, ErrorBoundary, AppProps} from "@blitzjs/next"
import {AuthenticationError, AuthorizationError} from "blitz"
import React, { Suspense } from "react"
import {withBlitz} from "app/blitz-client"
import { ChakraProvider, theme } from "@chakra-ui/react"

function RootErrorFallback({error}: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return <div>Error: You are not authenticated</div>
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error.message || error.name}
      />
    )
  }
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <ChakraProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
      </ChakraProvider>
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)
