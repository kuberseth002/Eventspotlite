import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import { events } from './data/eventsdata';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default App;
