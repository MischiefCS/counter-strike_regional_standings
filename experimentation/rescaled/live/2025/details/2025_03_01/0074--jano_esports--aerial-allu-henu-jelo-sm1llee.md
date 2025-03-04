### Roster Details<br />
Team Name: JANO Esports<br />
Roster: Aerial, allu, HENU, jelo, Sm1llee<br />
Global Rank: [74](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [53]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  877.5<br />
<br />
Final Rank Value (877.5) = Starting Rank Value (853.3) + Head To Head Adjustments (24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.376[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.305[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 853.3
- 400 + ( ( 0.238 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 853.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      112 | 2025-02-22 | ENCE Academy      | W   | 1.000      | 0.344        | 0.009 (0.003)    | 0.230 (0.079)    | 1 (1.000) |    11.04 | Aerial, allu, HENU, jelo, Sm1llee |
|            9 |      132 | 2025-02-21 | Heimo Esports     | W   | 1.000      | 0.344        | 0.004 (0.001)    | 0.111 (0.038)    | 1 (1.000) |     7.61 | Aerial, allu, HENU, jelo, Sm1llee |
|            8 |     1849 | 2024-10-20 | ENCE Academy      | W   | 0.318      | 0.326        | 0.009 (0.001)    | 0.230 (0.024)    | 1 (0.318) |     3.90 | Aerial, allu, HENU, juho, xseveN  |
|            7 |     1890 | 2024-10-18 | B8                | L   | 0.305      | -            | -                | -                | -         |    -1.87 | Aerial, allu, HENU, juho, xseveN  |
|            6 |     1935 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.293      | 1.000        | 0.022 (0.007)    | 0.124 (0.036)    | 1 (0.293) |     4.77 | Aerial, allu, HENU, juho, xseveN  |
|            5 |     1944 | 2024-10-16 | The MongolZ       | L   | 0.291      | -            | -                | -                | -         |    -0.03 | Aerial, allu, HENU, juho, xseveN  |
|            4 |     3052 | 2024-09-08 | Chimera Esports   | L   | 0.038      | -            | -                | -                | -         |    -0.60 | Aerial, allu, HENU, juho, xseveN  |
|            3 |     3103 | 2024-09-06 | Revenant Esports  | L   | 0.026      | -            | -                | -                | -         |    -0.72 | Aerial, allu, HENU, juho, xseveN  |
|            2 |     3188 | 2024-09-04 | Rhyno Esports     | W   | 0.010      | 0.520        | 0.002 (0.000)    | 0.046 (0.000)    | 0 (0.000) |     0.09 | Aerial, allu, HENU, juho, xseveN  |
|            1 |     3224 | 2024-09-03 | GUN5 Esports      | L   | 0.004      | -            | -                | -                | -         |    -0.04 | Aerial, allu, HENU, juho, xseveN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,364.02)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      1.000 | $3,139.38      | $3,139.38       |
| 2024-10-20 |      0.319 | $10,000.00     | $3,188.19       |
| 2024-10-20 |      0.318 | $3,262.27      | $1,036.45       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
