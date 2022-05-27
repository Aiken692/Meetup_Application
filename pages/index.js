import React from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  //   useEffect(() => {
  //     // send http request and fetch data

  //     setLoadedMeetups(Dummy_Meetups);
  //   }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description'
        contant='Browse a huge list of highly active React meetups!'/>
      </Head>
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

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://Aiken692:Seeta.c0m1@cluster0.i0ndz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
