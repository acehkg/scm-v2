import styled from 'styled-components';
import { motion } from 'framer-motion';
import { stagger, fadeInUp, slideRightFadeIn } from '../animations/Animations';

const Wrapper = styled(motion.div)`
  color: var(--red-color);
`;
const Name = styled(motion.h3)`
  font-size: 1.25rem;
`;

const Phone = styled(motion.p)``;

const Email = styled(motion.p)``;

const ContactItem = ({ person }) => {
  return (
    <Wrapper variants={fadeInUp}>
      <Name>{person.name}</Name>
      <Phone>{person.phone}</Phone>
      <Email>{person.email}</Email>
    </Wrapper>
  );
};

export default ContactItem;
