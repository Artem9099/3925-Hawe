// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../3673_PLC/Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var _3673_HMI;
        (function (_3673_HMI) {
          function AnimationLin(par1) {
              var animation = new TcHmi.Animation('TcHmiLine', '')
              animation.addKeyframe('transform', 'translate(0px, 0px)', 0)
                  .addKeyframe('transform', 'translate(400px, 0px)', 1)
                  .duration(5000);
              animation.registerEventHandler('animationend', function (event) {
                console.log('Animation ended: ' + event.animationName);
                var someControl = TcHmi.Controls.get('TcHmiLine');
                var t = [{
                  "transformType": "Translate",
                  "x": 400,
                  "xUnit": "px",
                  "y": 0,
                  "yUnit": "px",
                  "z": 0,
                  "zUnit": "px",
                }
                ];
                someControl.setTransform(t);
                var formattedSymbol = '%s%PLC1.MAIN.yardGate.YardDoorOpenCommand%/s%';
                TcHmi.Symbol.writeEx(formattedSymbol, false, function (data) {
                  if (data.error === TcHmi.Errors.NONE) {
                    console.log("Writting YardDoorOpenCommand OK");
                  } else {
                    console.log("Writting YardDoorOpenCommand NOT OK");
                  }
                });
              });
              animation.run();
            }
            _3673_HMI.AnimationLin = AnimationLin;
        })(_3673_HMI = Functions._3673_HMI || (Functions._3673_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('AnimationLin', 'TcHmi.Functions._3673_HMI', TcHmi.Functions._3673_HMI.AnimationLin);
