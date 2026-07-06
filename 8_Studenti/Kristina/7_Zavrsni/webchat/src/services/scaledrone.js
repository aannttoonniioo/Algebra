const CHANNEL_ID = "czifmcWD1qno6tLu";
const APP_OPEN_EVENT = "open";
const DATA_RECIVED_EVENT = "data";
const ROOM_NAME = "observable-room";
export default function scaledrone({ member, onInit, onMessageRecived }) {
  let drone = null;
  drone = new window.Scaledrone(CHANNEL_ID, { data: member });

  drone.on(APP_OPEN_EVENT, (error) => {
    if (!error) {
      onInit(drone.clientId);
    }
  });

  const room = drone.subscribe(ROOM_NAME);
  room.on(DATA_RECIVED_EVENT, (message) => {
    onMessageRecived(message);
  });

  return {
    sendMessage: (text) => {
      drone.publish({
        room: ROOM_NAME,
        message: { text, member, id: drone.clientId },
      });
    },
  };
}
