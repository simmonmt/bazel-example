import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {EchoRequest} from './echo_pb';
import {EchoServiceClient} from './echo_grpc_web_pb';

const echoService = new EchoServiceClient('http://nash.simmonmt.org:8080', null, null);

console.log("hello world");
console.log(new EchoRequest());
console.log(echoService);

ReactDOM.render(
  <Button variant="contained" color="primary">Hello World</Button>,
  document.getElementById("root")
);
