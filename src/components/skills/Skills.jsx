import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { BsCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { BsCircleHalf } from 'react-icons/bs';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: 'ease-in-sine',
      delay: 100,
     });
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <section data-aos="zoom-out" id="Skills">
<h2>Professional Skillset</h2>
<p>&nbsp;</p>
    <Container maxWidth="xl">

    <Box sx={{ width: '100%', margin: '0 auto'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>React.js</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleHalf style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Node.js</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleHalf style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Next.js</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleHalf style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>

    <Divider />
    <Box sx={{ width: '100%', margin: '0 auto'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Vanilla JS</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>CSS3</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>HTML5</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>


     

    <Box wrap="nowrap" sx={{ width: '100%', margin: '0 auto'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>API</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4} >
          <Item>
            <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Typescript</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Git</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
   


    <Box sx={{ width: '100%', margin: '0 auto'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Material UI</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Tailwind</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Bootstrap</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>
   



    <Box sx={{ width: '100%', margin: '0 auto'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>PHP</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>Laravel</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <p style={{ display: 'flex', justifyContent : 'space-between' }}> <span>SASS</span>
              <span><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircleFill style={{ fontSize: '20px', color: 'black' }}/><BsCircle style={{ fontSize: '20px', color: 'black', }}/>
              </span>
            </p>
          </Item>
        </Grid>
      </Grid>
    </Box>




    </Container>
      
    </section>
  )
}

export default Skills