### Roster Details<br />
Team Name: The QUBE Esports<br />
Roster: Paranormal, rate, soloooS, sonq, Tugu<br />
Global Rank: [489](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_28.md)<br />
Regional Rank: [77]( ../../standings_asia_2025_02_28.md)<br />
<br />
Final Rank Value:  543.8<br />
<br />
Final Rank Value (543.8) = Starting Rank Value (540.6) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 540.6
- 400 + ( ( 0.070 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 540.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5478 | 2024-10-03 | Clutch Gaming     | L   | 0.216      | -            | -                | -                | -         |    -3.01 | Paranormal, rate, soloooS, sonq, Tugu |
|            4 |     5525 | 2024-10-02 | The Huns Esports  | W   | 0.210      | 1.000        | 0.029 (0.006)    | 0.854 (0.179)    | 1 (0.210) |     6.50 | Paranormal, rate, soloooS, sonq, Tugu |
|            3 |     5526 | 2024-10-02 | Chinggis Warriors | L   | 0.209      | -            | -                | -                | -         |    -0.19 | Paranormal, rate, soloooS, sonq, Tugu |
|            2 |     6025 | 2024-09-25 | ATOX Esports      | L   | 0.163      | -            | -                | -                | -         |    -0.03 | Paranormal, rate, soloooS, sonq, Tugu |
|            1 |     6026 | 2024-09-25 | The Huns Esports  | L   | 0.162      | -            | -                | -                | -         |    -0.07 | Paranormal, rate, soloooS, sonq, Tugu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
