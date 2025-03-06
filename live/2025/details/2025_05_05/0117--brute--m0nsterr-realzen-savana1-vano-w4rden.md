### Roster Details<br />
Team Name: BRUTE<br />
Roster: m0nsterr, realzen, sAvana1, vANO, w4rden<br />
Global Rank: [117](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [82]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  658.9<br />
<br />
Final Rank Value (658.9) = Starting Rank Value (667.5) + Head To Head Adjustments (-8.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.5
- 400 + ( ( 0.123 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 667.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      721 | 2025-01-06 | EYEBALLERS         | L   | 0.404      | -            | -                | -                | -         |    -4.65 | m0nsterr, realzen, sAvana1, vANO, w4rden |
|            6 |      729 | 2025-01-04 | Heimo Esports      | W   | 0.390      | 0.417        | 0.006 (0.001)    | 0.063 (0.010)    | 0 (0.000) |     6.58 | m0nsterr, M1key, realzen, vANO, w4rden   |
|            5 |      738 | 2024-12-29 | Dark Cloud Esports | L   | 0.349      | -            | -                | -                | -         |    -4.80 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            4 |      745 | 2024-12-28 | Rhyno Esports      | L   | 0.343      | -            | -                | -                | -         |    -4.76 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            3 |     1264 | 2024-11-24 | Team Sampi         | L   | 0.116      | -            | -                | -                | -         |    -1.80 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            2 |     1283 | 2024-11-23 | Dynamo Eclot       | L   | 0.111      | -            | -                | -                | -         |    -0.78 | m0nsterr, realzen, SiKO, vANO, w4rden    |
|            1 |     1315 | 2024-11-22 | SINNERS Academy    | W   | 0.103      | 0.143        | 0.001 (0.000)    | 0.012 (0.000)    | 1 (0.103) |     1.60 | m0nsterr, realzen, SiKO, vANO, w4rden    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($240.08)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.117 | $2,055.40      | $240.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
