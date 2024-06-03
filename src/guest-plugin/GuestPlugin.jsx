import { Container } from '@openedx/paragon';
import './index.scss';

const GuestPlugin = () => (
  <Container>
    <h3>Guest Plugin</h3>
    <p>
      I am a guest of the guest. I am also getting react, react-dom, and paragon
      from the host application.  The Guest Page had its own module federation init which added my
      MFE in as a known remote.  This worked seamlessly because the init() function is reentrant
      and adds remotes in subsequent invocations to its list of remotes, rather than replacing them.
    </p>
  </Container>
);

export default GuestPlugin;
