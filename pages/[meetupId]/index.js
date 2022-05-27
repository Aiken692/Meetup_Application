import { MongoClient, ObjectId } from "mongodb";
import React from "react";
import Head from 'next/head'
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
    <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          contant={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://Aiken692:Seeta.c0m1@cluster0.i0ndz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({ 
      params: { meetupId: meetup._id.toString() },
    })),    
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Aiken692:Seeta.c0m1@cluster0.i0ndz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const seletedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: seletedMeetup._id.toString(),
        title: seletedMeetup.title,
        address: seletedMeetup.address,
        image: seletedMeetup.image,
        description: seletedMeetup.description
      },
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
