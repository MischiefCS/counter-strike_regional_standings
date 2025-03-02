### Roster Details<br />
Team Name: FCottoNd<br />
Roster: juho, spargo, Twixie, xseveN, yaNgile<br />
Global Rank: [545](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [339]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  419.3<br />
<br />
Final Rank Value (419.3) = Starting Rank Value (401.4) + Head To Head Adjustments (17.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 401.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      276 | 2025-02-13 | HAVU            | L   | 1.000      | -            | -                | -                | -         |    -5.19 | juho, spargo, Twixie, xseveN, yaNgile |
|            5 |      386 | 2025-02-09 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |    -3.48 | juho, spargo, Twixie, xseveN, yaNgile |
|            4 |      634 | 2025-02-03 | Ex-UHKA eSports | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.203 (0.029)    | 0 (0.000) |    20.00 | juho, spargo, Twixie, xseveN, yaNgile |
|            3 |      690 | 2025-01-30 | SAUCEMEN        | W   | 0.999      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.07 | juho, spargo, Twixie, xseveN, yaNgile |
|            2 |      727 | 2025-01-26 | Heimo Esports   | L   | 0.971      | -            | -                | -                | -         |    -4.54 | juho, spargo, Twixie, xseveN, yaNgile |
|            1 |      756 | 2025-01-23 | JANO Esports    | L   | 0.953      | -            | -                | -                | -         |    -2.96 | juho, spargo, Twixie, xseveN, yaNgile |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
