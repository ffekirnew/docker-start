import { Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (<>
    <NavBar />
    <Heading paddingX={5}>Oops...</Heading>
    <Text paddingX={5}>{ isRouteErrorResponse(error) ? "404. We couldn't find that page for you." : "Unexpected Error Occured." }</Text>
  </>);

}

export default ErrorPage
