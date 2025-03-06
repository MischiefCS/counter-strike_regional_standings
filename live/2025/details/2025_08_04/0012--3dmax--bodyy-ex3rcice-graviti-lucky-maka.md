### Roster Details<br />
Team Name: 3DMAX<br />
Roster: bodyy, Ex3rcice, Graviti, Lucky, Maka<br />
Global Rank: [12](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [9]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1325.4<br />
<br />
Final Rank Value (1325.4) = Starting Rank Value (1324.6) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.703[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.410[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1324.6
- 400 + ( ( 0.353 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1324.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      175 | 2025-02-18 | SAW                        | L   | 0.083      | -            | -                | -                | -         |    -0.30 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            6 |      198 | 2025-02-17 | Eternal Fire               | L   | 0.077      | -            | -                | -                | -         |    -0.32 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            5 |      216 | 2025-02-16 | MIBR                       | W   | 0.069      | 1.000        | 0.227 (0.016)    | 0.161 (0.011)    | 1 (0.069) |     0.47 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            4 |      252 | 2025-02-15 | MOUZ                       | L   | 0.062      | -            | -                | -                | -         |    -0.04 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            3 |      281 | 2025-02-14 | Virtus.pro                 | W   | 0.056      | 1.000        | 0.478 (0.027)    | 0.200 (0.011)    | 1 (0.056) |     0.98 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            2 |      361 | 2025-02-10 | HEROIC                     | W   | 0.032      | 0.143        | 0.000 (0.000)    | 0.327 (0.001)    | 0 (0.000) |     0.01 | bodyy, Ex3rcice, Graviti, Lucky, Maka |
|            1 |      368 | 2025-02-10 | NEVERMORE (Ukrainian team) | W   | 0.030      | 0.143        | 0.000 (0.000)    | 0.057 (0.000)    | 0 (0.000) |     0.01 | bodyy, Ex3rcice, Graviti, Lucky, Maka |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,696.47)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.38) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $31,250.00     | $3,696.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
