"use client"
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
  User,
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
// import './style.css';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1phbV9XZXNlbGwiLCJ1c2VyX2lkIjoiWmFtX1dlc2VsbCIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzM4MjIyMjY0LCJleHAiOjE3Mzg4MjcwNjR9.2YpAy5lTF6GkklSKMWTS3D23XSpr5a9bpd4_8d45UmU';
const userId = 'Zam_Wesell';
const callId = 'J5GEHcZDpbSS';

const user: User = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call('default', callId);
call.join({ create: true });

export default function App() {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}

export const MyUILayout = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition='bottom' />
      <CallControls />
    </StreamTheme>
  );
};