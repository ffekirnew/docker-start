import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';
import useShortenText from '../shared/hooks/useShortenText';

interface Props {
  text: string;
}
const ExpandableText = ({ text }: Props) => {
  const shortenedText = useShortenText(text, 300) + " ";
  const [ isTextExpanded, setTextExpanded ] = useState<boolean>(false);
  const toggleTextExpansion = () => setTextExpanded(!isTextExpanded);
  
  return (<>
    <Text textAlign={'justify'} fontSize={'lg'}>
      { isTextExpanded ? text : shortenedText }
      { isTextExpanded && <br /> }
      <Button fontWeight={'bold'} colorScheme='yellow' size={'xs'} onClick={toggleTextExpansion}>
        { isTextExpanded ? 'Show Less' : 'Show More' }
      </Button>
    </Text>
  </>);
}

export default ExpandableText;
