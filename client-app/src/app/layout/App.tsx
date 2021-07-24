import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agents';
import LoadingComponent from './loadingComponents';
import { useStore } from '../../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  
  const { activityStore } = useStore();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);
  

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>
  return (
    <>
      <NavBar  />
      <Container style={{marginTop:'7em'}}>
        <ActivityDashboard/>
        </Container>
    </>
  );
}

export default observer(App);
