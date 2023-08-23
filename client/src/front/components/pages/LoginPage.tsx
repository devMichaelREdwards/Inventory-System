import { useState } from 'react';
import {
    Container,
    Header,
    Content,
    FlexboxGrid,
    Panel,
    ButtonToolbar,
    Button,
    Footer,
    Form
} from 'rsuite';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login-page'>
            <Container>
                <Header></Header>
                <Content>
                    <FlexboxGrid align='middle' justify='center'>
                        <FlexboxGrid.Item colspan={12}>
                            <Panel
                                className='login-panel'
                                header={<h3>Inventory Manager</h3>}
                                bordered>
                                <Form fluid>
                                    <Form.Group>
                                        <Form.Control
                                            placeholder='Username'
                                            name='username'
                                            onChange={(e: string) => {
                                                setUsername(e);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            placeholder='Password'
                                            name='password'
                                            type='password'
                                            onChange={(e: string) => {
                                                setPassword(e);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <ButtonToolbar>
                                            <Button
                                                appearance='primary'
                                                onClick={() => {}}>
                                                Sign in
                                            </Button>
                                        </ButtonToolbar>
                                    </Form.Group>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default LoginPage;
