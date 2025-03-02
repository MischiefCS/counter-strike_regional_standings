### Roster Details<br />
Team Name: FCottoNd<br />
Roster: juho, spargo, Twixie, xseveN, yaNgile<br />
Global Rank: [563](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [350]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  422.7<br />
<br />
Final Rank Value (422.7) = Starting Rank Value (409.9) + Head To Head Adjustments (12.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.005<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 409.9
- 400 + ( ( 0.005 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 409.9


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
|            7 |      334 | 2025-02-16 | Smuuttikusilkki | L   | 1.000      | -            | -                | -                | -         |   -13.70 | juho, spargo, Twixie, xseveN, yaNgile |
|            6 |      410 | 2025-02-13 | HAVU            | L   | 1.000      | -            | -                | -                | -         |    -3.44 | juho, spargo, Twixie, xseveN, yaNgile |
|            5 |      529 | 2025-02-09 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |    -1.44 | juho, spargo, Twixie, xseveN, yaNgile |
|            4 |      788 | 2025-02-03 | Ex-UHKA eSports | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.199 (0.199)    | 0 (0.000) |    20.85 | juho, spargo, Twixie, xseveN, yaNgile |
|            3 |      844 | 2025-01-30 | SAUCEMEN        | W   | 1.000      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.68 | juho, spargo, Twixie, xseveN, yaNgile |
|            2 |      916 | 2025-01-26 | Heimo Esports   | L   | 0.977      | -            | -                | -                | -         |    -2.16 | juho, spargo, Twixie, xseveN, yaNgile |
|            1 |      972 | 2025-01-23 | JANO Esports    | L   | 0.959      | -            | -                | -                | -         |    -1.06 | juho, spargo, Twixie, xseveN, yaNgile |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
