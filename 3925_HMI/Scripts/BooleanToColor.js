// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var BooleanToColor = function BooleanToColor(Input) {
        if (TCHMI_ENABLE_DESIGNER_MODE_MASTER == true) {
            return "Visible";
        }
        if (Input == true) {
          return "\"color\": \"rgba(0, 253, 40, 1)\"";
        }
        else {
          return "\"color\": \"rgba(253, 0, 0, 1)\"";
        }
    };
    
    TcHmi.Functions.registerFunction('BooleanToCplor', BooleanToColor);
})(TcHmi);
