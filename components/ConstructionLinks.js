import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContactLink = styled.a`
  text-decoration: underline;
  color: var(--blue-color);
  font-size: 1.5rem;
`;

const ConstructionLinks = () => {
  return (
    <Wrapper>
      <ContactLink href='mailto:info@simcoecountymalt.com'>
        GET IN TOUCH
      </ContactLink>
    </Wrapper>
  );
};

export default ConstructionLinks;
