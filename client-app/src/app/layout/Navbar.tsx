import { observer } from 'mobx-react-lite';
import React from 'react';
import { Menu, Container,Image, Button } from 'semantic-ui-react';
import { useStore } from '../../stores/store';

export default observer( function NavBar() {
    const { activityStore } = useStore();

    return (
        <Menu inverted fixed="top">  
            <Container>
                <Menu.Item header>
                        <Image src="" style={{marginRight: '10px'}} /> Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button onClick={()=>activityStore.openForm()} positive content="Create Activities"></Button>
                </Menu.Item>
            </Container>
    </Menu>
)
})