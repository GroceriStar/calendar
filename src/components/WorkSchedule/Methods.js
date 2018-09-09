import React from 'react';
import _ from 'underscore';
import { Modals } from '../Modals/ModalWork';
import { ListGroupItem } from 'reactstrap';
import { defaultBlockHeight, fillerBlockHeight } from '../../data/style_vars';


function getOffset(obj) {
        let timeDiff;
        let timeArray;
        let startLocation;
        let inter = obj.reduce((offsetArray, item, index ) => {
                        timeArray = item.time.split('-', 2).map(index => index.split(':', 2));
                        timeDiff = (timeArray[1][0]*60 - timeArray[0][0]*60) + (timeArray[1][1] - timeArray[0][1]);
                        timeDiff *= (100/60);

                          switch (item.tag) {
                            case "breakfast":
                              startLocation = 0;
                              break;
                            case "lunch":
                              startLocation = 350;
                              break;
                            case "dinner":
                                startLocation = 600;
                              break;
                            default:
                            startLocation = (timeArray[0][0]*100) + (timeArray[0][1]*(100/60)) - 700;
                            break;
                          }

                        offsetArray[index] = {};
                        offsetArray[index].tag = item.tag;
                        offsetArray[index].start = startLocation;
                        offsetArray[index].height = timeDiff;
                        offsetArray[index].text = item.text;
                        offsetArray[index].time = item.time;
                        return offsetArray
                    }, []).sort((a, b) => a.start - b.start);
            return inter;
    }

function rendererFunc(daySchedule, mode) {
        let buffer = getOffset(daySchedule);
        console.log(buffer);
        let blockHeight;
        let i = 0;
        let j = 0;

        let topToBottom = _.range(0, 800, 25).reduce((accumulator, item) => {
            accumulator.push(item);
            // console.log("Item");
            // console.log(item);
            // console.log("Buff start");
            // console.log(buffer[j]);
            if (item > buffer[j].start &&
                item < (buffer[j].start + buffer[j].height)) {
                accumulator.pop();
            }
            if(item > (buffer[j].start + buffer[j].height - 25) &&
               j < buffer.length -1) {j++}
            return accumulator;
        }, []);

        j = 0;
        return (topToBottom.map((item, index) => {
            if(item === buffer[i].start) {
                if (i < buffer.length - 1) {
                    i+=1;
                }
                if (j < buffer.length) {
                    j+=1;
                }
                return (
                  <Modals mode={mode} data={buffer[j-1]} key={item} />
                );
            }

            if((i > 0) &&
               (item === (buffer[j-1].start + buffer[j-1].height)) &&
               (item%50 !== 0)) {
                return (
                        <ListGroupItem style={fillerBlockHeight} key={item}></ListGroupItem>
               );
            }

            if(item%50 === 0) {
                if(topToBottom[index+1] === buffer[i].start) {
                    blockHeight = fillerBlockHeight;
                }
                else {
                    blockHeight = defaultBlockHeight;
                }
                return (
                        <ListGroupItem style={blockHeight} key={item}></ListGroupItem>
                );
            }
            return null;
        })
        );
    }

export { rendererFunc }
