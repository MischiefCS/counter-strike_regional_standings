### Roster Details<br />
Team Name: Impulse GW<br />
Roster: h0t, M1KA, Mané, PUIG, Sprayy<br />
Global Rank: [246](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_28.md)<br />
Regional Rank: [166]( ../../standings_europe_2025_02_28.md)<br />
<br />
Final Rank Value:  751.9<br />
<br />
Final Rank Value (751.9) = Starting Rank Value (770.6) + Head To Head Adjustments (-18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.6
- 400 + ( ( 0.186 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 770.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1162 | 2024-12-28 | CHAOX ESPORTS           | W   | 0.786      | 1.000        | 0.003 (0.002)    | 0.000 (0.000)    | 1 (0.786) |     5.84 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           18 |     1313 | 2024-12-21 | The Agency Clan         | L   | 0.739      | -            | -                | -                | -         |    -6.61 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           17 |     2161 | 2024-12-02 | ZOTIX                   | L   | 0.613      | -            | -                | -                | -         |   -12.60 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           16 |     2423 | 2024-11-28 | Ex-ESC Gaming           | L   | 0.587      | -            | -                | -                | -         |   -10.90 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           15 |     2751 | 2024-11-22 | KUUSAMO.gg              | W   | 0.547      | 1.000        | 0.000 (0.000)    | 0.177 (0.097)    | 0 (0.000) |     3.80 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           14 |     2757 | 2024-11-22 | PCIFIC Espor            | W   | 0.546      | 1.000        | 0.005 (0.003)    | 0.275 (0.150)    | 0 (0.000) |    10.03 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           13 |     3824 | 2024-11-03 | The Agency Clan         | L   | 0.419      | -            | -                | -                | -         |    -3.91 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           12 |     3857 | 2024-11-03 | Rhyno Youngsters        | W   | 0.417      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.417) |     1.50 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           11 |     4139 | 2024-10-29 | GOOFYBOYZ               | L   | 0.386      | -            | -                | -                | -         |    -5.39 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           10 |     4187 | 2024-10-28 | The Agency Clan         | L   | 0.380      | -            | -                | -                | -         |    -3.72 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            9 |     4470 | 2024-10-22 | RogerBall               | W   | 0.340      | 1.000        | 0.000 (0.000)    | 0.033 (0.011)    | 0 (0.000) |     2.10 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            8 |     4484 | 2024-10-22 | GOOFYBOYZ               | W   | 0.339      | 1.000        | 0.003 (0.001)    | 0.198 (0.067)    | 0 (0.000) |     5.90 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            7 |     4622 | 2024-10-19 | SSKT                    | W   | 0.319      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.15 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            6 |     5004 | 2024-10-12 | Rhyno Youngsters        | L   | 0.271      | -            | -                | -                | -         |    -3.79 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            5 |     5033 | 2024-10-11 | 100K                    | W   | 0.266      | 1.000        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.95 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            4 |     5864 | 2024-09-28 | Rhyno Esports           | L   | 0.177      | -            | -                | -                | -         |    -1.48 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            3 |     5918 | 2024-09-27 | Turritos                | W   | 0.172      | 1.000        | 0.000 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     0.62 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            2 |     7136 | 2024-09-08 | SQUAD (Portuguese team) | L   | 0.046      | -            | -                | -                | -         |    -1.18 | h0t, M1KA, PUIG, SeabraEZ, Sprayy |
|            1 |     7212 | 2024-09-07 | EXSAD Gaming            | L   | 0.039      | -            | -                | -                | -         |    -1.01 | h0t, M1KA, PUIG, SeabraEZ, Sprayy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,178.91)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.786 | $2,607.14      | $2,048.48       |
| 2024-12-22 |      0.747 | $52.15         | $38.95          |
| 2024-11-03 |      0.420 | $217.62        | $91.48          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
