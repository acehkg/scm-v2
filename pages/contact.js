import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations/Animations';
//import ContactItem from '../components/ContactItem';

const people = [
  {
    name: 'Andrew Embury',
    phone: '+852-5195-8370',
    email: 'andrew@simcoecountymalt.com',
  },
  {
    name: 'Dale Warkentin',
    phone: '+1-416-818-5753',
    email: 'dale@simcoecountymalt.com',
  },
  {
    name: 'Mark Brandstetter',
    phone: '+1-647-884-9497',
    email: 'mark@simcoecountymalt.com',
  },
];

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled(motion.h3)`
  text-align: center;
  color: var(--red-color);
  padding: 4rem 0;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Email = styled(motion.a)`
  width: 10rem;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid transparent;
  outline-color: var(--red-color);
  background-color: var(--blue-color);
  color: var(--white-color);

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    background-color: var(--blueLightened-color);
  }
`;
const Contact = () => {
  return (
    <Wrapper
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      variants={stagger}
    >
      <Text variants={fadeInUp}>GENERAL ENQUIRIES AND ORDERING INFO</Text>
      <Email variants={fadeInUp} href='mailto:info@simcoecountymalt.com'>
        SEND EMAIL
      </Email>
    </Wrapper>
  );
};

export default Contact;
