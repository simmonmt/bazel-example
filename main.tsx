import {EchoRequest} from './echo_pb';
import {EchoServiceClient} from './echo_grpc_web_pb';

const echoService = new EchoServiceClient('http://nash.simmonmt.org:8080', null, null);

console.log("hello world");
console.log(new EchoRequest());
console.log(echoService);
