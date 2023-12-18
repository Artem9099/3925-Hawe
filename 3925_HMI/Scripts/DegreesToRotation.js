// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

//(function (TcHmi) {
//
//    var DegreesToRotation = function (Degrees) {
//        return [{
//              "transformType": "Rotate",
//              "angle": Degrees,
//              "angleUnit": "deg"
//        }]
//    };
//    
//    TcHmi.Functions.registerFunction('DegreesToRotation', DegreesToRotation);
//})(TcHmi);

// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

  var DegreesToRotation = function DegreesToRotation(Object, Centric, X, Y, Z, Angle, Incremental) {

    var t;
    var currentAngle;

    if (Incremental) {
      currentAngle = Object.angle;
    }
    else {
      currentAngle = 0;
    }

    if (!Centric) {
      t = [{
        "transformType": "Origin",
        "x": X,
        "xUnit": "px",
        "y": Y,
        "yUnit": "px",
        "z": Z,
        "zUnit": "px",
      }, {
        "transformType": "Rotate",
        "angle": Angle,
        "angleUnit": "deg"
      }
      ];
    }
    else {
      t = [{
        "transformType": "Rotate",
        "angle": Angle,
        "angleUnit": "deg",

        //vector:
        //
        //    { x: X, y: Y, z: Z }

      }];
    }

    Object.setTransform(t);

    /*
    var t = [{
        "transformType": "Rotate",
        "angle": Angle,
        "angleUnit": "deg",

        vector:

            { x: X, y: Y, z: Z }

    }];

    Object.setTransform(t);
    */
  };

  TcHmi.Functions.registerFunction('DegreesToRotation', DegreesToRotation);
})(TcHmi);