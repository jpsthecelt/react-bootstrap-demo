// noinspection JSValidateTypes

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row} from 'react-bootstrap';

const DspSections = () => {
    {
        // const msgs = new Array("");

//const addMsgs = (props) => {
////   const text = [];
//  if (props.msgs.length <= 1)
//    props.msgs.push(<div style="dv:last-child">{sampleMsg}</div>);
//  else
//    props.msgs.push(<div style="dv:last-child">props.message</div>);
//  return props.msgs;
//}

        // addMsgs(msgs);
        // useEffect(() => {
        //   if (msgs) {
        //     msgs.current.addEventListener('DOMNodeInserted', event => {
        //       const { currentTarget: target } = event;
        //       target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        //     });
        //   }
        // }, [])

        // useEffect(() => {
        // const addMsgs = (msgs) => {
//       setInterval(() => {
//         setMsgs(msgs);
//       }, 2000);
        // }
        // addMsgs(msgs);
        // }, []);
    }
    return (
        <div>
        <Container class='container-fluid'>
            <Row className="show-grid">
                <div id="gsv" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset style={{font: 10}} disabled>
                            <label id="GSVhdr">Ch PRN Az El S/N</label>
                            <label>0<input id="GSV0" type="text"/></label>
                            <label>1<input id="GSV1" type="text"/></label>
                            <label>2<input id="GSV2" type="text"/></label>
                            <label>3<input id="GSV3" type="text"/></label>
                            <label>4<input id="GSV4" type="text"/></label>
                            <label>5<input id="GSV5" type="text"/></label>
                        </fieldset>
                    </form>                    
                </div>
                <div id="rmc" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset style={{font: 10}} disabled>
                            <label>Time: <input id="RMCtime" type="text"/></label>
                            <label>Lat: <input id="RMClat" type="text"/></label>
                            <label>Long: <input id="RMClon" type="text"/></label>
                            <label>Speed: <input id="RMCspeed" type="text"/></label>
                            <label>Course: <input id="RMCcourse" type="text"/></label>
                            <label>Status: <input id="RMCstatus" type="text"/></label>
                            <label>MagVar: <input id="RMCmagvar" type="text"/></label>
                        </fieldset>
                    </form>
                </div>
                <div id="gga" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset disabled>
                            <label>Time: <input id="GGAtime" type="text"/></label>
                            <label>Lat: <input id="GGAlat" type="text"/></label>
                            <label>Long: <input id="GGAlon" type="text"/></label>
                            <label>Altitude: <input id="GGAalt" type="text"/></label>
                            <label>Quality: <input id="GGAqual" type="text"/></label>
                            <label>HDOP: <input id="GGAhdop" type="text"/></label>
                            <label>GeoId: <input id="GGAgeoid" type="text"/></label>
                        </fieldset>
                    </form>
                </div>
                <div id="gsa-pps" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset disabled>                    
                            <label>Mode: <input id="GSAPPSmode" type="text"/></label>
                            <label>DOP: <input id="GSAPPSdop" type="text"/></label>
                            <label>TOFF: <input id="GSAPPStoff" type="text"/></label>
                            <label>PPS: <input id="GSAPPSpps" type="text"/></label>
                        </fieldset>
                    </form>                    
                </div>
                <div id="gst1" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset disabled >                    
                            <label>UTC: <input id="GST1utc" type="text"/></label>
                            <label>MAJ: <input id="GST1maj" type="text"/></label>
                            <label>ORI: <input id="GST1ori" type="text"/></label>
                            <label>LON: <input id="GST1lon" type="text"/></label>
                        </fieldset>
                    </form>                  
                </div>
                <div id="gst2" className="col-sm-4 bg-dark border text-white">
                    <form>
                        <fieldset disabled >                    
                            <label>RMS: <input id="GST2rms" type="text"/></label>
                            <label>MIN: <input id="GST2min" type="text"/></label>
                            <label>LAT: <input id="GST2lat" type="text"/></label>
                            <label>ALT: <input id="GST2alt" type="text"/></label>
                        </fieldset>
                    </form>                  
                </div>
            </Row>
        </Container>
    </div>
    )
}
export default DspSections;