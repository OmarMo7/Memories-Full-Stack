import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import madara from './images/madara.jpg'
import Posts from './components/Posts/Posts'
import useStyles from './styles'
import { getPosts } from './actions/posts'
const App = () => {

  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" className={classes.heading} align="center">Memories</Typography>
        <img className={classes.images} src={madara} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App