import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <>
      <MeetupDetail 
        image= 'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
        id= 'm1'
        title= 'First Meetup'
        address= 'Some Street 5, Some City'
        description= 'This is a first meetup'/>
    </>
  );
};

export async function getStaticPaths(){
  return{
    fallback: false,
    path:[
      {
        params:{
          meetupId: 'm1',
        },
      },
      {
        params:{
          meetupId: 'm2',
        }
      },
    ]
  }
}

export async function getStaticProps(context){
  // fetch data from an API

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup'
      }
    },
    revalidate: 1
  }
}

export default MeetupDetails;
