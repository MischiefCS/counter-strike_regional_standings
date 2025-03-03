### Roster Details<br />
Team Name: FCottoNd<br />
Roster: juho, spargo, Twixie, xseveN, yaNgile<br />
Global Rank: [331](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [185]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  431.3<br />
<br />
Final Rank Value (431.3) = Starting Rank Value (404.6) + Head To Head Adjustments (26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 404.6
- 400 + ( ( 0.002 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 404.6


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
|            9 |      284 | 2025-02-16 | Smuuttikusilkki | L   | 1.000      | -            | -                | -                | -         |   -16.22 | juho, spargo, Twixie, xseveN, yaNgile |
|            8 |      425 | 2025-02-13 | HAVU            | L   | 1.000      | -            | -                | -                | -         |    -5.81 | juho, spargo, Twixie, xseveN, yaNgile |
|            7 |      548 | 2025-02-09 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |    -4.44 | juho, spargo, Twixie, xseveN, yaNgile |
|            6 |      862 | 2025-02-03 | Ex-UHKA eSports | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.315 (0.045)    | 0 (0.000) |    19.34 | juho, spargo, Twixie, xseveN, yaNgile |
|            5 |      928 | 2025-01-30 | SAUCEMEN        | W   | 0.999      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    13.90 | juho, spargo, Twixie, xseveN, yaNgile |
|            4 |      958 | 2025-01-26 | Heimo Esports   | L   | 0.971      | -            | -                | -                | -         |    -5.48 | juho, spargo, Twixie, xseveN, yaNgile |
|            3 |      975 | 2025-01-23 | JANO Esports    | L   | 0.953      | -            | -                | -                | -         |    -2.61 | juho, spargo, Twixie, xseveN, yaNgile |
|            2 |      989 | 2025-01-18 | Smuuttikusilkki | W   | 0.920      | 0.143        | 0.000 (0.000)    | 0.265 (0.035)    | 0 (0.000) |    14.24 | Jerppa, juho, spargo, Twixie, yaNgile |
|            1 |      991 | 2025-01-18 | SIUUUUUU        | W   | 0.919      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    13.78 | Jerppa, juho, spargo, Twixie, yaNgile |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
