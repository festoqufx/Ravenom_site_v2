import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
     });
  }, []);
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_k2qawqh',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section data-aos="flip-down" id="contact">
      <h2 style={{textAlign: "center"}}>Contact Me</h2>
      <h5>Let's start something great together</h5>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
     
     
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <Card sx={{ maxWidth: 100 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://ferdinandestoque.com/img/contact.jpg"
              title="contact"
            />
          </Card>
          <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem wrap="nowrap">
        <ListItemAvatar>
          <Avatar>
            <LocationOnIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cavite Philippines" secondary="Address" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="+639958143127" secondary="Cellphone Number" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ferdinand.estoque@yahoo.com" secondary="Email address" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WhatsAppIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ferdinand.estoque" secondary="Skype" />
      </ListItem>
    </List>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
