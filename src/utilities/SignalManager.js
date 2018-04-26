class SignalManager {
  static signalHandlers = {};
  static listenForSignal = function (event="default", eventHandler=(data)=>(data)) {
    let handler = SignalManager.signalHandlers[event];
    if(!handler) { SignalManager.signalHandlers[event] = []; }
    SignalManager.signalHandlers[event].push(eventHandler);
  };
  static emitSignal = function (event, data={}) {
    let handler = SignalManager.signalHandlers[event];
    if(!handler && handler.length === 0) { return; }
    for(let i = 0; i < handler.length; i++) {
      SignalManager.signalHandlers[event][i](data);
    }
  };
}

export default SignalManager;