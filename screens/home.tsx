import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Box from 'components/Box'
import Container from 'components/Container'
import { Span } from 'components/Typographie'
import Avatars from 'components/ui/Avatars'
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks'
import { useEffect } from 'react'
import { userAsync } from 'store/reducers/userSlices/userSlice'
const Home = () => {
  const {firstName} = useAppSelector((state)=>state.user)
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(userAsync())
  },[dispatch])
  return (
    <Container className='flex-1 bg-white'>
      <Box>
        <Box.Header className='flex-row items-center justify-between '>
          <Box.Body className='flex-row items-center gap-2'>
            <Avatars size={45} />
            <Span className='text-xl'>{firstName}</Span>
          </Box.Body>
        <Box.Body className='flex-row items-center gap-10'>
          <MaterialCommunityIcons name="message-reply-text-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </Box.Body>
        </Box.Header>
      </Box>
    </Container>
  )
}

export default Home