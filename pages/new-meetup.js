// our-domain.com/new-meetup
import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}

export default NewMeetUpPage;