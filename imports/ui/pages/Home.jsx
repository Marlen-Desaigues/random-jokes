import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button    from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container>
            <Button variant="primary" as={Link} to="/signin" block>
                J'ai déjà un compte
            </Button>
            <Button variant="primary" as={Link} to="/signup" block>
                Je n'ai pas encore de compte
            </Button>
        </Container>
    );
};

export default Home;