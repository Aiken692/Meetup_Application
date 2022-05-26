import React, {useEffect, useState} from "react";
import MeetupList from "../components/meetups/MeetupList";

const Dummy_Meetups = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://media.istockphoto.com/photos/organising-a-meetup-with-her-best-friend-picture-id1371481975?s=612x612",
    address: "Kla 23456",
    description: "First MeetUp",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media.istockphoto.com/photos/arranging-the-meetup-after-a-full-day-of-skiing-picture-id1356449319?s=612x612",
    address: "Kla 23456",
    description: "2nd MeetUp",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Kla 23456",
    description: "3rd MeetUp",
  },
];

const HomePage = (props) => {
// const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     // send http request and fetch data

//     setLoadedMeetups(Dummy_Meetups);
//   }, []);

  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: Dummy_Meetups
//     }
//   }
// }



export async function getStaticProps(){
  // fetch data from an API

  return {
    props: {
      meetups: Dummy_Meetups
    },
    revalidate: 1
  }
}

export default HomePage;
