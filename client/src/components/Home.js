import React, { useEffect, useState } from 'react';
import PostUI from "./PostUI";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

const Home = () => {
  const [state, setstate] = useState([]);
    const [msg, setMsg] = useState('');
    useEffect(() => {
        axios.get('http://localhost:4000/api/posts')
            .then((res) => {
                console.log(res.data.data);
                setstate(res.data.data);
            })
            .catch((e) => console.log(e));
        setMsg('');
    }, []);
  return (
    <>
    <div className="bg-image">
      <h3 className="title-text pl-5">
         MERN Blog App 
      </h3>
    </div>
    <br />
    <br />
    <div className='cardpost'>
    <Grid container spacing={3}>
    {state.map((item, index)=>(
      <Grid item xs={12} md={4}>
      <PostUI item={item} index={index}/>
    </Grid> 
    ))}
    </Grid>
    </div>
    </>
  );
};

export default Home;
