# useTimer

A simple timer hook for react.

## Settings

| key      | type   | description                                              |
| -------- | ------ | -------------------------------------------------------- |
| tickRate | number | indicates the aproximate rate of updates in milliseconds |

## Values

| key              | type     | description                                                                                                     |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| milliseconds     | number   | milliseconds value                                                                                              |
| seconds          | number   | seconds value                                                                                                   |
| minutes          | number   | minutes value                                                                                                   |
| hours            | number   | hours value                                                                                                     |
| isRunning        | boolean  | flag to indicate if the timer is running                                                                        |
| getTimeFormatted | function | function to get the time in a formatted string. Recives a number indicating the precision of milliseconds (1-3) |
| resume           | function | function to resume timer                                                                                        |
| stop             | function | function to stop timer                                                                                          |
| restart          | function | function to restart timer                                                                                       |
