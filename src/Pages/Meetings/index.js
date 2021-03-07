import React from 'react';
import MeetingsList from '../../Components/Meetings';
import MeetingsFilter from '../../Components/Meetings/MeetingsFilter';

const Meetings = () => (
  <section className="meetings">
    <MeetingsFilter />
    <MeetingsList />
  </section>
);
export default Meetings;
