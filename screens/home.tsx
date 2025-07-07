import Box from 'components/Box'
import Container from 'components/Container'
import { Span } from 'components/Typographie'
import Avatars from 'components/ui/Avatars'
const Home = () => {
  return (
    <Container className='flex-1'>
      <Box>
        <Box.Header className='flex-row items-center gap-2'>
          <Avatars/>
          <Span className='text-xl'>Mohammed Mahi</Span>
        </Box.Header>
      </Box>
    </Container>
  )
}

export default Home