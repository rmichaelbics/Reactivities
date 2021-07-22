import React from 'react';
import { Menu, Container,Image, Button } from 'semantic-ui-react';

interface Props{
    openForm: () => void;
}

export default function NavBar({ openForm }: Props){
    return (
        <Menu inverted fixed="top">  
            <Container>
                <Menu.Item header>
                        <Image src="" style={{marginRight: '10px'}} /> Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={openForm} positive content="Create Activities"></Button>
                </Menu.Item>
            </Container>
    </Menu>
)
}